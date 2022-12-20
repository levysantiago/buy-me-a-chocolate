const abreviateWalletAddress = (walletAddress: string) => {
  const size = walletAddress.length;
  const abreviatedWalletAddress = `0x...${walletAddress.slice(size - 4, size)}`;
  return abreviatedWalletAddress;
};

export default abreviateWalletAddress;
