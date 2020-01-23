import globalColors from "../utils/globalColors";

const {
  black,
  white,
  whiteSolitude,
  grayLight,
  grayLightMid,
  grayMid,
  gray,
  grayMain,

  blueMain,
  blueHover,
  blueActive,
  blueDisabled,
  blueCharcoal,

  orangeMain,
  orangeHover,
  orangePressed,
  orangeDisabled,

  link,
  errorColor,
  warningColor,
  red
} = globalColors;

const Dark = {
  color: whiteSolitude,
  backgroundColor: blueCharcoal,
  fontFamily: "Open Sans, sans-serif, Arial",

  text: {
    color: white,
    disableColor: grayLightMid,
    fontWeight: "normal",
    fontWeightBold: "bold"
  },

  heading: {
    fontSize: {
      xlarge: "27px",
      large: "23px",
      medium: "21px",
      small: "19px",
      xsmall: "15px"
    },
    fontWeight: 600
  },

  button: {
    fontWeight: 600,
    margin: 0,
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    borderRadius: "3px",
    stroke: "none",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    outline: "none",
    height: {
      base: "24px",
      medium: "32px",
      big: "36px"
    },
    lineHeight: {
      base: "normal",
      medium: "normal",
      big: "normal"
    },
    fontSize: {
      base: "12px",
      medium: "13px",
      big: "14px"
    },
    padding: {
      base: "0 14px",
      medium: "0 18px",
      big: "0 20px"
    },
    minWidth: {
      base: "65px",
      medium: "80px",
      big: "85px"
    },
    color: {
      base: black,
      primary: white,
      disabled: grayMid
    },
    backgroundColor: {
      base: white,
      baseHover: white,
      baseActive: grayLightMid,
      baseDisabled: grayLight,
      primary: blueMain,
      primaryHover: blueHover,
      primaryActive: blueActive,
      primaryDisabled: blueDisabled
    },
    border: {
      base: `1px solid ${grayMid}`,
      baseHover: `1px solid ${blueMain}`,
      baseActive: `1px solid ${blueMain}`,
      baseDisabled: `1px solid ${grayLightMid}`,
      primary: `1px solid ${blueMain}`,
      primaryHover: `1px solid ${blueHover}`,
      primaryActive: `1px solid ${blueActive}`,
      primaryDisabled: `1px solid ${blueDisabled}`
    }
  },

  checkbox: {
    fillColor: white,
    borderColor: grayMid,
    arrowColor: black,
    indeterminateColor: black,

    disableArrowColor: grayMid,
    disableBorderColor: grayLightMid,
    disableFillColor: grayLight,
    disableIndeterminateColor: gray,

    hoverBorderColor: gray,
    hoverIndeterminateColor: gray
  },

  toggleButton: {
    fillColor: blueMain,
    fillColorOff: gray,

    disableFillColor: grayLightMid,
    disableFillColorOff: grayLightMid
  },

  radioButton: {
    fillColor: black,
    borderColor: grayMid,

    disableFillColor: grayMid,
    disableBorderColor: grayLightMid,

    hoverBorderColor: gray
  },

  scrollbar: {
    backgroundColorVertical: "rgba(255, 255, 255, 0.5)",
    backgroundColorHorizontal: "rgba(255, 255, 255, 0.5)"
  },

  input: {
    color: black,
    disableColor: grayMid,

    backgroundColor: white,
    disableBackgroundColor: grayLight,

    width: {
      base: "173px",
      middle: "300px",
      big: "350px",
      huge: "500px"
    },

    borderRadius: "3px",
    boxShadow: "none",
    boxSizing: "border-box",
    border: "solid 1px",

    borderColor: grayMid,
    errorBorderColor: red,
    warningBorderColor: warningColor,
    disabledBorderColor: grayLightMid,

    hoverBorderColor: grayMid,
    hoverErrorBorderColor: red,
    hoverWarningBorderColor: warningColor,
    hoverDisabledBorderColor: gray,

    focusBorderColor: blueMain,
    focusErrorBorderColor: red,
    focusWarningBorderColor: warningColor,
    focusDisabledBorderColor: grayLightMid
  },

  textInput: {
    fontWeight: "normal",
    placeholderColor: grayMid,
    disablePlaceholderColor: grayMid,

    transition: "all 0.2s ease 0s",
    appearance: "none",
    display: "flex",
    flex: "1 1 0%",
    outline: "none",
    overflow: "hidden",

    lineHeight: {
      base: "20px",
      middle: "20px",
      big: "20px",
      huge: "21px"
    },

    fontSize: {
      base: "13px",
      middle: "14px",
      big: "16px",
      huge: "18px"
    },

    padding: {
      base: "5px 7px",
      middle: "8px 12px",
      big: "8px 16px",
      huge: "8px 20px"
    }
  },

  textArea: {
    width: "100%",
    height: "90%",
    border: "none",
    outline: "none",
    resize: "none",
    overflow: "hidden",
    padding: "5px 8px 2px 8px",
    fontSize: "13px",
    lineHeight: "1.5",

    disabledColor: grayLight,

    focusBorderColor: blueMain,
    focusOutline: "none",

    scrollWidth: "100% !important",
    scrollHeight: "91px !important"
  },

  link: {
    color: white,
    lineHeight: "calc(100% + 6px)",
    opacity: "0.5",
    textDecoration: "none",
    cursor: "pointer",

    hover: {
      textDecoration: "underline dashed",
      page: { textDecoration: "underline" }
    }
  },

  tooltip: {
    borderRadius: "6px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.13)",
    opacity: "1",
    padding: "16px",
    pointerEvents: "auto",
    maxWidth: "340px",
    backgroundColor: grayMid,
    before: {
      border: "none"
    },
    after: {
      border: "none"
    }
  },

  avatar: {
    initialsContainer: {
      color: white,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "600"
    },

    imageContainer: {
      backgroundImage: blueMain,
      background: grayLightMid,
      borderRadius: "50%",
      height: "100%",

      svg: {
        display: "block",
        width: "50%",
        height: "100%",
        margin: "auto"
      }
    },

    image: {
      width: "100%",
      height: "100%",
      borderRadius: "50%"
    },

    width: {
      small: "32px",
      medium: "48px",
      big: "82px",
      max: "160px"
    },
    height: {
      small: "32px",
      medium: "48px",
      big: "82px",
      max: "160px"
    },
    fontSize: {
      small: "12px",
      medium: "20px",
      big: "34px",
      max: "72px"
    }
  },

  backdrop: { backgroundColor: "rgba(255, 255, 255, 0.5)" },

  dropDownItem: {
    width: "100%",
    maxWidth: "240px",
    border: "none",
    cursor: "pointer",
    padding: "0px 16px",
    lineHeight: "32px",
    textAlign: "left",
    background: "none",
    textDecoration: "none",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "13px",

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",

    outline: "none",
    color: black,
    textTransform: "none",

    hoverBackgroundColor: grayLight,
    noHoverBackgroundColor: white,

    header: {
      color: gray,
      hoverCursor: "default",
      hoverBackgroundColor: "white",
      textTransform: "uppercase"
    },

    disabled: {
      color: gray,
      hoverCursor: "default",
      hoverBackgroundColor: "white"
    },

    separator: {
      padding: "0px 16px",
      border: `0.5px solid ${grayLightMid}`,
      cursor: "default",
      margin: "6px 16px 6px",
      lineHeight: "1px",
      height: "1px",
      width: "calc(100% - 32px)"
    },

    tablet: { lineHeight: "36px" }
  }
};

export default Dark;
