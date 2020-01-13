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
    borderColor: greyMid,
    disableBorderColor: greyLightMid,
    focus: "none",

    color: {
      base: black,
      disabled: greyLightMid,
      primary: white
    },

    backgroundColor: {
      base: white,
      primaryDisabled: greyLightMid,
      primary: bluePressed,
      primaryHover: blueHover
    },

    primaryColor: white,

    background: white,
    primaryBackground: blueMain,
    disabledBackground: blueDisabled,

    border: {
      base: "1px solid",
      primary: "none",
      primaryActive: `1px solid ${blueMain}`
    },

    primary: {
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
      whiteSpace: "nowrap"
    },

    height: {
      base: "24px",
      medium: "32px",
      big: "36px"
    },
    lineHeight: {
      base: "16px",
      medium: "18px",
      big: "19px"
    },
    fontSize: {
      base: "12px",
      medium: "13px",
      big: "14px"
    },
    padding: {
      base: {
        primaryWithLabel: "3px 20px 5px 20px",
        primaryWithoutLabel: "3px 5px 5px 5px",

        primaryWithoutIconLabel: "3px 24px 5px 24px",
        primaryWithoutIcon: "3px 5px 5px 5px",

        baseWithIconLabel: "3px 20px 5px 20px",
        baseWithIcon: "3px 5px 5px 5px",

        baseWithoutIconLabel: "3px 24px 5px 24px",
        baseWithoutIcon: "3px 5px 5px 5px"
      },
      medium: {
        primaryWithLabel: "7px 24px 7px 24px",
        primaryWithoutLabel: "7px 10px 7px 10px",

        primaryWithoutIconLabel: "7px 24px 7px 24px",
        primaryWithoutIcon: "7px 10px 7px 10px",

        baseWithIconLabel: "7px 24px 7px 24px",
        baseWithIcon: "7px 10px 7px 10px",

        baseWithoutIconLabel: "7px 24px 7px 24px",
        baseWithoutIcon: "7px 10px 7px 10px"
      },
      big: {
        primaryWithLabel: "8px 24px 9px 24px",
        primaryWithoutLabel: "8px 10px 9px 10px",

        primaryWithoutIconLabel: "8px 28px 9px 28px",
        primaryWithoutIcon: "8px 10px 9px 10px",

        baseWithIconLabel: "8px 24px 9px 24px",
        baseWithIcon: "8px 10px 9px 10px",

        baseWithoutIconLabel: "8px 28px 9px 28px",
        baseWithoutIcon: "8px 10px 9px 10px"
      }
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
