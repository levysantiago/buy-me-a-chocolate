import { ethers } from "ethers";
import { IChocTokenRepository } from "./IChocTokenRepository";
import { ERC20ABI__factory } from "../../smc-types/factories";
import { ERC20ABI as IERC20ABI } from "../../smc-types";

class ChocTokenRepository implements IChocTokenRepository {
  private chocToken: IERC20ABI | undefined;

  constructor(provider?: ethers.providers.Web3Provider) {
    if (provider) this.init(provider);
  }

  public init(provider: ethers.providers.Web3Provider): void {
    this.chocToken = ERC20ABI__factory.connect(
      process.env.REACT_APP_CHOC_TOKEN_ADDRESS || "",
      provider
    );
  }

  public async balanceOf(address: string): Promise<string> {
    if (!this.chocToken) throw new Error("ChocToken not defined");
    const balance = await this.chocToken.balanceOf(address);
    return ethers.utils.formatEther(balance);
  }
}

export default ChocTokenRepository;
