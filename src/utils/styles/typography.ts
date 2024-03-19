const fontSizes = {
  small: 12,
  medium: 14,
  base: 16,
  large: 18,
  xl: 20,
  "2xl": 22,
};

const fonts = {
  regular: "Roboto-Regular", // Replace with your font family
  bold: "Roboto-Bold", // Replace with your bold font family
};

const typography = {
  title: {
    fontSize: fontSizes["2xl"],
  },
  titleBold: {
    fontSize: fontSizes["2xl"],
    fontWeight: "bold",
  },
  heading: {
    fontSize: fontSizes.large,
    // fontFamily: fonts.regular,
  },
  headingBold: {
    fontSize: fontSizes.large,
    // fontFamily: fonts.bold,
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: fontSizes.base,
    // fontFamily: fonts.regular,
  },
  paragraphBold: {
    fontSize: fontSizes.base,
    fontWeight: "bold",
  },
  description: {
    fontSize: fontSizes.medium,
  },
  small: {
    fontSize: fontSizes.small,
  },
};

export { fontSizes, fonts, typography };
