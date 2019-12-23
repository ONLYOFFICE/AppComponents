import baseColors from "../utils/baseColors";

const Base = {
  color: baseColors.black,
  backgroundColor: baseColors.backgroundColor,
  fontFamily: "Open Sans, sans-serif, Arial",

  text: {
    color: baseColors.black
  },

  button: {
    fontWeight: 600,
    borderColor: baseColors.greyMid,
    disableBorderColor: baseColors.lightGrey,
    focus: "none",

    color: {
      base: baseColors.black,
      disabled: baseColors.lightGrey,
      primary: baseColors.white
    },

    backgroundColor: {
      base: baseColors.white,
      primaryDisabled: baseColors.lightGrey,
      primary: baseColors.bluePressed,
      primaryHover: baseColors.blueHover
    },

    primaryColor: baseColors.white,

    background: baseColors.white,
    primaryBackground: baseColors.blueMain,
    disabledBackground: baseColors.blueDisabled,

    border: {
      base: "1px solid",
      primary: "none",
      primaryActive: `1px solid ${baseColors.blueMain}`
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
        primaryWithIconLabel: "3px 20px 5px 20px",
        primaryWithIcon: "3px 5px 5px 5px",

        primaryUnknownLabel: "3px 24px 5px 24px",
        primaryUnknown: "3px 5px 5px 5px",

        withIconLabel: "3px 20px 5px 20px",
        withIcon: "3px 5px 5px 5px",

        unknownLabel: "3px 24px 5px 24px",
        unknown: "3px 5px 5px 5px"
      },
      medium: {
        primaryWithIconLabel: "7px 24px 7px 24px",
        primaryWithIcon: "7px 10px 7px 10px",

        primaryUnknownLabel: "7px 24px 7px 24px",
        primaryUnknown: "7px 10px 7px 10px",

        withIconLabel: "7px 24px 7px 24px",
        withIcon: "7px 10px 7px 10px",

        unknownLabel: "7px 24px 7px 24px",
        unknown: "7px 10px 7px 10px"
      },
      big: {
        primaryWithIconLabel: "8px 24px 9px 24px",
        primaryWithIcon: "8px 10px 9px 10px",

        primaryUnknownLabel: "8px 28px 9px 28px",
        primaryUnknown: "8px 10px 9px 10px",

        withIconLabel: "8px 24px 9px 24px",
        withIcon: "8px 10px 9px 10px",

        unknownLabel: "8px 27px 9px 28px",
        unknown: "8px 10px 9px 10px"
      }
    }
  }
};

export default Base;
