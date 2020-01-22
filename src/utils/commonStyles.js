import { css } from "styled-components";

const ScrollStyles = {
  small: {
    thumbV: {
      width: "2px",
      marginLeft: "2px",
      borderRadius: "inherit"
    },
    thumbH: {
      height: "2px",
      marginTop: "2px",
      borderRadius: "inherit"
    }
  },

  medium: {
    thumbV: {
      width: "5px",
      borderRadius: "inherit",
      cursor: "default"
    },
    thumbH: {
      height: "5px",
      borderRadius: "inherit",
      cursor: "default"
    }
  },

  big: {
    thumbV: {
      width: "8px",
      borderRadius: "inherit"
    },
    thumbH: {
      height: "8px",
      borderRadius: "inherit"
    }
  }
};

const NoUserSelect = css`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export { ScrollStyles, NoUserSelect };
