// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "16px",
  buttonPrimaryColor: "#0F0F0F",
  buttonBorderRadius: "16px",
  baseColor: "#F5F5F5",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-color: ${kindeVariables.baseColor};
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-shared-color-text-label: ${kindeVariables.baseColor};

  }

  @font-face {
    font-family: Bricolage Grotesque;
    src: url(https://asset.kindedemo.com/moonschool/BricolageGrotesque-VariableFont_opsz%2Cwdth%2Cwght.ttf) format(truetype);
    font-weight: 400;
    font-style: normal;
  }

  [data-kinde-button-variant=primary] { 
    background: linear-gradient(153deg, #F0B376 23.13%, #F29665 69.42%, #DF4D51 177.44%);
  }



`;
