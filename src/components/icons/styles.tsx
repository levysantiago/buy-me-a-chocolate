import styled from "styled-components";

export const ChocoLogo = styled.img.attrs({
  src: require("../../assets/logo.svg").default,
  attrs: "Token logo",
})(
  (props: { width?: string }) => `
  width: ${props.width ?? "20px;"}
`
);

export const BSCLogo = styled.img.attrs({
  src: require("../../assets/bsc-logo.svg").default,
  attrs: "BSC logo",
})`
  width: 20px;
`;

export const WalletIcon = styled.img.attrs({
  src: require("../../assets/wallet.svg").default,
  attrs: "Wallet icon",
})`
  width: 20px;
`;
