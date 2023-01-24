import { ethers } from "ethers";
import erc20abi from "../../abis/ERC20-ABI.json";
import { IChocTokenRepository } from "./IChocTokenRepository";

class ChocTokenRepository implements IChocTokenRepository {
  private chocToken: any;

  constructor(provider?: ethers.providers.Web3Provider) {
    if (provider) this.init(provider);
  }

  public init(provider: ethers.providers.Web3Provider): void {
    this.chocToken = new ethers.Contract(
      process.env.REACT_APP_CHOC_TOKEN_ADDRESS || "",
      erc20abi,
      provider
    );
  }

  public balanceOf(address: string): Promise<ethers.BigNumber> {
    return this.chocToken.balanceOf(address);
  }
}

export default ChocTokenRepository;
