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

const Dark = {
  color: whiteSolitude,
  backgroundColor: blueCharcoal,
  fontFamily: "Open Sans, sans-serif, Arial",

  text: {
    color: white,
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
      base: `1px solid ${greyMid}`,
      baseHover: `1px solid ${blueMain}`,
      baseActive: `1px solid ${blueMain}`,
      baseDisabled: `1px solid ${greyLightMid}`,
      primary: `1px solid ${blueMain}`,
      primaryHover: `1px solid ${blueHover}`,
      primaryActive: `1px solid ${blueActive}`,
      primaryDisabled: `1px solid ${blueDisabled}`
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
    fillColor: black,
    borderColor: greyMid,

    disableFillColor: greyMid,
    disableBorderColor: greyLightMid,

    hoverBorderColor: grey
  }
};

export default Dark;
