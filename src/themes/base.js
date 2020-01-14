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
  errorColor
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

  input: {
    color: "#333",
    disableColor: "#D0D5DA",

    backgroundColor: "#fff",
    disableBackgroundColor: "#F8F9F9",

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

    borderColor: "#D0D5DA",
    errorBorderColor: "#c30",
    warningBorderColor: "#f1ca92",
    disabledBorderColor: "#ECEEF1",

    hoverBorderColor: "#D0D5DA",
    hoverErrorBorderColor: "#c30",
    hoverWarningBorderColor: "#f1ca92",
    hoverDisabledBorderColor: "#A3A9AE",

    focusBorderColor: "#2DA7DB",
    focusErrorBorderColor: "#c30",
    focusWarningBorderColor: "#f1ca92",
    focusDisabledBorderColor: "#ECEEF1"
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
  }
};

export default Base;
