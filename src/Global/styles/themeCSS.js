import { createMuiTheme, hexToRgb } from "@material-ui/core/styles";

import {
  helveticaNeueSemibold,
  helveticaNeueBold,
  helveticaNeueMedium,
  helveticaNeueRegular
} from "./shared.css";

const BGRSFonts = {
  helveticaNeueSemibold,
  helveticaNeueBold,
  helveticaNeueMedium,
  helveticaNeueRegular
};

const BGRSFontSize = {
  iconCaption: "0.8em",
  heading: "1em",
  input: "1em",
  status: "0.9em",
  dates: "0.8em",
  bigHeader: "1.750em",
  subHeader: "1.250em",
  label: "0.65em",
  badge: "0.35em"
};

// This code has MUI hexToRgb dependency, delete MUI and we dead
// @hex string in #ffffff format
// @alpha number or string
// returns rgba(1, 1 ,1 ,.2) format if alpha is provided,
// returns rgb(1, 1 ,1) if no alpha is provided
export const hexToRgba = (hex, alpha) => {
  if (!hex) return "";

  let output;
  const pattern = /\(([^)]+)\)/; // getting value inside braces of rgb(255 ,255 ,255)
  let rgb = hexToRgb(hex);

  if (alpha) {
    rgb = rgb.match(pattern)[1];
    output = `rgba(${rgb}, ${alpha})`;
  } else {
    output = rgb;
  }

  return output;
};

const BGRSPrimary = {
  50: "#eff8f8",
  100: "#d9efef",
  200: "#9cdbd9",
  300: "#b2d1d8",
  400: "#8ab5bf",
  500: "#00677f",
  600: "#77adba",
  700: "#4895ae",
  900: "#003c53",
  contrastDefaultColor: "light"
};

const BGRSSecondary = {
  50: "#f2ebf0",
  100: "#f6f1f4",
  200: "#d4bccc",
  300: "#b890aa",
  400: "#a35084",
  500: "#722257",
  900: "#43002e",
  contrastDefaultColor: "light"
};

export const BGRSGray = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  contrastDefaultColor: "light"
};

const BGRSError = {
  50: "#f8e8eb",
  100: "#eab6c1",
  200: "#dd8697",
  300: "#cf556d",
  400: "#c4304e",
  500: "#ba0c2f",
  600: "#b30a2a",
  700: "#ab0823",
  800: "#a3061d",
  900: "#940312",
  A100: "#ffbfc3",
  A200: "#ff8c93",
  A400: "#ba0c2f",
  A700: "#ba0c2f",
  contrastDefaultColor: "light"
};

// @Warning:
// Modify this and give money, payable to Mat Li
export const BGRScolors = {
  defaultText: "#4B4F54",
  captionBackground: "#c9dbd9",
  tabBackground: "#DBF4F2",
  boxOutline: "#C1C6C8",

  secondardyText: "#333",
  buttonDisabled: "#999",
  lightGray: "#EEE",
  selectedState: "#f5f5f5", // whitesmoke
  darkGray: BGRSGray[600],

  // Primary
  secondaryActionHover: BGRSPrimary[900],
  businessContactsBackGround: "#004e61",
  titleHeaders: BGRSPrimary[500],
  highlight: BGRSPrimary[200],

  // Seconday
  mainAction: BGRSSecondary[500],
  mainActionHover: "#5E1C46",
  progressBarColor: "#CBA5BE",
  buttonHover: "#F1D1E7",

  error: BGRSError[500],

  tintYellow: "#FFFDE7",
  warning: "#ECD898",
  yellow: "#FBC02D",

  white: "#FFF",
  black: "#000000"
};

export const BGRSTints = {
  // Primary
  primaryTintOne: BGRSPrimary[50],
  primaryTintTwo: BGRSPrimary[100],
  primaryTintThree: BGRSPrimary[300],
  primaryTintFour: BGRSPrimary[400],
  primaryTintFive: BGRSPrimary[600],

  // Secondary
  secondaryTintOne: BGRSSecondary[100],
  secondaryTintTwo: BGRSSecondary[300],

  // Other
  yellowTint: "#fffde7",
  warningTint: "#fff1e3",
  purpleTint: "#c6bcd0"
};

const focus = {
  outline: `3px solid ${BGRScolors.highlight}`,
  outlineOffset: "-4px"
};

const pseudo = {
  content: "''",
  position: "absolute"
};

const defaultArgs = {
  borderRadius: 8,
  spacing: [4, 7],
  borderColor: BGRScolors.defaultText.indexOf,
  strokeWidth: 2
};

// https://kovart.github.io/dashed-border-generator/
const dashedBorder = (args = {}) => {
  // I did this but eslint autofix: Object.assign({}, defaultArgs, args);
  const config = { ...defaultArgs, ...args };

  // this is so complex; don't worry about it.
  const firstDash = config.spacing[0];
  const offset = config.borderRadius + firstDash / 2;
  const spacingString = config.spacing.join(",");

  const spacing = encodeURIComponent(spacingString);
  const borderColor = encodeURIComponent(config.borderColor);

  // building svg
  const str = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${config.borderRadius}' ry='${config.borderRadius}' stroke='${borderColor}' stroke-width='${config.strokeWidth}' stroke-dasharray='${spacing}' stroke-dashoffset='${offset}' stroke-linecap='square'/%3e%3c/svg%3e")`;

  return {
    backgroundImage: str,
    borderRadius: config.borderRadius
  };
};

const trademark = {
  position: "relative",
  marginRight: ".4em",
  "&:after": {
    ...helveticaNeueMedium,
    content: "'TM'",
    position: "relative",
    verticalAlign: "super",
    fontSize: ".225em",
    fontWeight: "800",
    top: -7
  }
};

export const ThemeCSS = createMuiTheme({
  overrides: {
    MuiButtonBase: {
      root: {
        "&$focusVisible": focus
      }
    },
    MuiPickersModal: {
      dialogRoot: {
        "@media (max-height: 405px)": {
          minHeight: "100%"
        }
      }
    },
    MuiStepIcon: {
      root: {
        "&$active": {
          fill: BGRSPrimary[500],
          color: BGRSPrimary[500]
        }
      },
      text: {
        fill: "#D3D3D3"
      }
    },
    MuiButton: {
      label: { fontWeight: 400 }
    },
    MuiTableRow: {
      root: {
        "&:focus": focus
      }
    }
  },
  palette: {
    primary: {
      main: BGRSPrimary[500],
      dark: BGRSPrimary[900],
      light: BGRSPrimary[700]
    },
    secondary: {
      main: BGRSSecondary[500],
      dark: BGRSSecondary[900],
      light: BGRSSecondary[400]
    },
    error: {
      main: BGRScolors.error,
      dark: BGRSError[900],
      light: BGRSError[50]
    },
    warning: {
      main: BGRScolors.yellow,
      dark: BGRScolors.yellow,
      light: BGRScolors.tintYellow
    },
    success: {
      main: BGRScolors.titleHeaders,
      dark: BGRScolors.businessContactsBackGround,
      light: BGRScolors.tabBackground
    },
    info: {
      main: "#1565C0", // This is not irefer standard, I don't want everyone to use this from our shared theme
      dark: "#1565C0", // This is not irefer standard, I don't want everyone to use this from our shared theme
      light: "#E3F2FD" // This is not irefer standard, I don't want everyone to use this from our shared theme
    }
  },
  IRefer: {
    css: {
      pseudo,
      trademark,
      dashedBorder
    },
    color: BGRScolors,
    tints: BGRSTints,
    shades: BGRSGray,
    focus,
    fonts: BGRSFonts,
    fontSize: BGRSFontSize,
    menu: {
      size: "250px"
    },
    sectionBar: {
      height: "56px",
      background: BGRScolors.boxOutline
    },
    sectionBarBlue: {
      height: "56px",
      background: BGRScolors.highlight
    },
    border: {
      boxShadow: "inset 0 -1px 0 0 rgba(100,121,143,0.122)"
    }
  },
  typography: {
    useNextVariants: true
  }
});

// export { theme as ThemeCSS };
