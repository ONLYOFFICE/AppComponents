import globalColors from "../utils/globalColors";

const {
  black,
  white,
  whiteSolitude,
  grayLight,
  greyLightMid,
  greyMid,
  grey,
  greyMain,

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

const Base = {
  color: black,
  backgroundColor: white,
  fontFamily: "Open Sans, sans-serif, Arial",

  text: {
    color: black,
    disableColor: greyLightMid,
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
    boxSizing: "border-box",
    margin: 0,
    display: "inline-block",
    textAlign: "center",
    textDecoration: "none",
    verticalAlign: "middle",
    borderRadius: "3px",
    touchCallout: "none",
    userSelect: "none",
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
      disabled: greyMid
    },
    backgroundColor: {
      base: white,
      baseHover: white,
      baseActive: greyLightMid,
      baseDisabled: grayLight,
      primary: blueMain,
      primaryHover: blueHover,
      primaryActive: blueActive,
      primaryDisabled: blueDisabled
    },
    border: {
      base: `1px solid ${globalColors.greyMid}`,
      baseHover: `1px solid ${globalColors.blueMain}`,
      baseActive: `1px solid ${globalColors.blueMain}`,
      baseDisabled: `1px solid ${globalColors.greyLightMid}`,
      primary: `1px solid ${globalColors.blueMain}`,
      primaryHover: `1px solid ${globalColors.blueHover}`,
      primaryActive: `1px solid ${globalColors.blueActive}`,
      primaryDisabled: `1px solid ${globalColors.blueDisabled}`
    }
  },

  checkbox: {
    fillColor: white,
    borderColor: greyMid,
    arrowColor: black,
    indeterminateColor: black,

    disableArrowColor: greyMid,
    disableBorderColor: greyLightMid,
    disableFillColor: grayLight,
    disableIndeterminateColor: grey,

    hoverBorderColor: grey,
    hoverIndeterminateColor: grey
  },

  toggleButton: {
    fillColor: blueMain,
    fillColorOff: grey,

    disableFillColor: greyLightMid,
    disableFillColorOff: greyLightMid
  },

  radioButton: {
    width: "16px",
    height: "16px",

    fillColor: black,
    borderColor: greyMid,

    disableFillColor: greyMid,
    disableBorderColor: greyLightMid,

    hoverBorderColor: grey
  },

  scrollbar: {
    backgroundColorVertical: "rgba(0, 0, 0, 0.1)",
    backgroundColorHorizontal: "rgba(0, 0, 0, 0.1)"
  },

  input: {
    color: black,
    disableColor: greyMid,

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

    borderColor: greyMid,
    errorBorderColor: red,
    warningBorderColor: warningColor,
    disabledBorderColor: greyLightMid,

    hoverBorderColor: greyMid,
    hoverErrorBorderColor: red,
    hoverWarningBorderColor: warningColor,
    hoverDisabledBorderColor: grey,

    focusBorderColor: blueMain,
    focusErrorBorderColor: red,
    focusWarningBorderColor: warningColor,
    focusDisabledBorderColor: greyLightMid
  },

  textInput: {
    fontWeight: "normal",
    placeholderColor: greyMid,
    disablePlaceholderColor: greyMid,

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

    scrollWidth: "100%",
    scrollHeight: "91px"
  },

  link: {
    color: black,
    lineHeight: "calc(100% + 6px)",
    opacity: "0.5",
    textDecoration: "none",
    userSelect: "none",
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
    backgroundColor: "#FFF",
    before: {
      border: "none"
    },
    after: {
      border: "none"
    }
  },

  avatar: {
    editLink: {
      editLinkColor: "#FFF",
      padding: "0 10px",

      hover: { borderBottom: "none" },
      span: {
        display: "inline-block",
        maxWidth: "100%",
        textDecoration: "underline dashed"
      }
    },
    namedAvatar: {
      color: "#FFF",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      fontWeight: "600"
    },

    editContainer: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: "75% 16px 5px",
      textAlign: "center",
      lineHeight: "19px",
      borderRadius: "50%",
      backgroundGradient:
        "linear-gradient(180deg, rgba(6, 22, 38, 0) 24.48%, rgba(6, 22, 38, 0.75) 100%)",
      backgroundTransparent: "transparent"
    },

    avatarContent: {
      backgroundColor: "#2DA7DB",
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
  }
};

export default Base;
