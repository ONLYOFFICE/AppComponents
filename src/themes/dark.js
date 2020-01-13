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
  bluePressed,
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
      base: globalColors.black,
      primary: globalColors.white,
      disabled: globalColors.greyMid,
    },
    backgroundColor: {
      base: globalColors.white,
      baseHover: globalColors.white,
      baseActive: globalColors.greyLightMid,
      baseDisabled: globalColors.grayLight,
      primary: globalColors.blueMain,
      primaryHover: globalColors.blueHover,
      primaryActive: globalColors.blueActive,
      primaryDisabled: globalColors.blueDisabled
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
    fillColor: black,
    borderColor: greyMid,

    disableFillColor: greyMid,
    disableBorderColor: greyLightMid,

    hoverBorderColor: grey
  }
};

export default Dark;
