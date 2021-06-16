import {
  GuardianEgypSemibold,
  guardianTextSansMedium,
  guardianTextSansRegular
} from "./shared.css";

const styles = (theme) => ({
  headers: {
    ...guardianTextSansMedium,
    color: theme.IRefer.color.titleHeaders
  },
  bodies: {
    ...guardianTextSansRegular,
    color: theme.IRefer.color.defaultText
  },
  noWrap: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  bold: {
    ...theme.IRefer.fonts.guardianTextSansBold
  },
  header1: {
    ...GuardianEgypSemibold,
    fontSize: "1.5rem",
    color: theme.IRefer.color.titleHeaders
  },
  header2: {
    fontSize: "1.25rem"
  },
  header3: {
    fontSize: "1.125rem"
  },
  header4: {
    fontSize: "1rem"
  },
  body1: {
    fontSize: "1rem",
    lineHeight: "1.5"
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "1.4"
  },
  caption: {
    ...guardianTextSansRegular,
    fontSize: "0.75rem"
  },
  colorOverride: ({ color }) => {
    // Grab the mui acceptable colour and not hex;
    // e.g., primary, secondary, error, info, warning
    const isHex = color && color.charAt(0) === "#";
    if (!isHex) {
      // Support legacy <Normal color="inherit" />
      // getting font colour from parent wrapper
      if (color === "inherit") {
        return {
          color
        };
      }

      // look for MUI palette availability
      const palette = theme.palette[color]
        ? theme.palette[color].main
        : undefined; // prevent crash

      return {
        color: palette
      };
    }

    return undefined;
  },
  pagetitle: {
    margin: "20px 0"
  }
});

export default styles;
