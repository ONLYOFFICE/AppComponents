import React from "react";
import Heading from "../Heading";
import PropTypes from "prop-types";
import { StyledContainer, StyledContent, StyledArrow } from "./StyledToggleContent";

class ToggleContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: props.open };
  }

  onToggleClick = () => this.setState({ open: !this.state.open });

  componentDidUpdate(prevProps) {
    const { open } = this.props;
    if (open !== prevProps.open) {
      this.setState({ open });
    }
  }

  render() {
    // console.log("ToggleContent render");

    const { children, label, ...rest } = this.props;
    const { open } = this.state;

    return (
      <StyledContainer {...rest}>
        <span className="span-toggle-content" onClick={this.onToggleClick}>
          <StyledArrow open={open} />
          <Heading className="heading-toggle-content" level={2} size="small">
            {label}
          </Heading>
        </span>
        <StyledContent open={open}>{children}</StyledContent>
      </StyledContainer>
    );
  }
}

ToggleContent.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

ToggleContent.defaultProps = {
  open: false,
  label: ""
};

export default ToggleContent;
