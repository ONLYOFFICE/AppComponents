import globalColors from "../utils/globalColors";

const Base = {
  color: globalColors.black,
  backgroundColor: globalColors.white,
  fontFamily: "Open Sans, sans-serif, Arial",

  text: {
    color: globalColors.black
  },

  button: {
    fontWeight: 600,
    borderColor: globalColors.greyMid,
    disableBorderColor: globalColors.greyLightMid,
    focus: "none",

    color: {
      base: globalColors.black,
      disabled: globalColors.greyLightMid,
      primary: globalColors.white
    },

    backgroundColor: {
      base: globalColors.white,
      primaryDisabled: globalColors.greyLightMid,
      primary: globalColors.bluePressed,
      primaryHover: globalColors.blueHover
    },

    primaryColor: globalColors.white,

    background: globalColors.white,
    primaryBackground: globalColors.blueMain,
    disabledBackground: globalColors.blueDisabled,

    border: {
      base: "1px solid",
      primary: "none",
      primaryActive: `1px solid ${globalColors.blueMain}`
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
        //primary with icon
        primaryWithLabel: "3px 20px 5px 20px",
        primaryWithoutLabel: "3px 5px 5px 5px",

        //primary without icon
        primaryWithoutIconLabel: "3px 24px 5px 24px",
        primaryWithoutIcon: "3px 5px 5px 5px",

        //base with icon
        baseWithIconLabel: "3px 20px 5px 20px",
        baseWithIcon: "3px 5px 5px 5px",

        //base without icon
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
  }
};

export default Base;
