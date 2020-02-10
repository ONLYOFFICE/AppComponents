import React from "react";
import Heading from "../Heading";
import PropTypes from "prop-types";
import { StyledContainer } from "./StyledToggleContent";
import Box from "../Box";
import { IconArrow } from "./svg";

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
      <StyledContainer {...rest} open={open}>
        <span className="toggle-content_header" onClick={this.onToggleClick}>
          <IconArrow className="toggle-content_arrow" />
          <Heading className="toggle-content_text" level={2} size="small">
            {label}
          </Heading>
        </span>
        <Box className="toggle-content" open={open}>
          {children}
        </Box>
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
