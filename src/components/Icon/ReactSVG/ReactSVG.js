import { SVGInjector } from "@tanem/svg-injector";
import * as PropTypes from "prop-types";
import * as React from "react";
import ReactDOMServer from "react-dom/server";

const shallowDiffers = (a, b) => {
    for (const i in a) {
        if (!(i in b)) {
            return true;
        }
    }
    for (const i in b) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
};
export class ReactSVG extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      hasError: false,
      isLoading: true
    };

    this.state = this.initialState;
    this.refCallback = container => {
      this.container = container;
    };
  }

  isMounted = false;

  afterEach = (error, svg) => {
    if (error) {
      this.removeSVG();
    }
    // TODO: It'd be better to cleanly unsubscribe from SVGInjector
    // callbacks instead of tracking a property like this.
    if (!this.isMounted) return;

    this.setState(
      {
        hasError: !!error,
        isLoading: false
      },
      () => {
        this.props.afterInjection(error, svg);
      }
    );
  };

  renderSVG() {
    /* istanbul ignore else */
    if (!(this.container instanceof Node)) return;

    const {
      beforeInjection,
      evalScripts,
      renumerateIRIElements,
      src
    } = this.props;

    const Wrapper = this.props.wrapper;

    const wrapper = document.createElement(Wrapper);
    wrapper.innerHTML = ReactDOMServer.renderToStaticMarkup(
      <Wrapper>
        <Wrapper data-src={src} />
      </Wrapper>
    );

    this.svgWrapper = this.container.appendChild(wrapper.firstChild);

    SVGInjector(this.svgWrapper.firstChild, {
      afterEach: this.afterEach,
      beforeEach: beforeInjection,
      evalScripts,
      renumerateIRIElements
    });
  }

  removeSVG() {
    if (this.container instanceof Node && this.svgWrapper instanceof Node) {
      this.container.removeChild(this.svgWrapper);
      this.svgWrapper = null;
    }
  }

  componentDidMount() {
    this.isMounted = true;
    this.renderSVG();
  }

  componentDidUpdate(prevProps) {
    if (!shallowDiffers(prevProps, this.props)) 
        return;

    this.setState(
        () => this.initialState,
        () => {
            this.removeSVG();
            this.renderSVG();
        });
  }

  componentWillUnmount() {
    this.isMounted = false;
    this.removeSVG();
  }

  render() {
    const {
      afterInjection,
      beforeInjection,
      evalScripts,
      fallback: Fallback,
      loading: Loading,
      renumerateIRIElements,
      src,
      wrapper,
      ...rest
    } = this.props;

    const Wrapper = wrapper;
    return (
      <Wrapper {...rest} ref={this.refCallback}>
        {this.state.isLoading && Loading && <Loading />}
        {this.state.hasError && Fallback && <Fallback />}
      </Wrapper>
    );
  }
}

ReactSVG.defaultProps = {
  afterInjection: () => undefined,
  beforeInjection: () => undefined,
  evalScripts: "never",
  fallback: null,
  loading: null,
  renumerateIRIElements: true,
  wrapper: "div"
};

ReactSVG.propTypes = {
  afterInjection: PropTypes.func,
  beforeInjection: PropTypes.func,
  evalScripts: PropTypes.oneOf(["always", "once", "never"]),
  fallback: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ]),
  loading: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ]),
  renumerateIRIElements: PropTypes.bool,
  src: PropTypes.string,
  svg: PropTypes.string,
  wrapper: PropTypes.oneOf(["div", "span"])
};
