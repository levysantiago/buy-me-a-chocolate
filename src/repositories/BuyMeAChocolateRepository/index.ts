import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { BuyMeAChocolateABI as IBuyMeAChocolateABI } from "../../smc-types";
import { BuyMeAChocolateABI__factory } from "../../smc-types/factories";

class BuyMeAChocolate {
  private provider: Web3Provider;
  private buyChocolateContract: IBuyMeAChocolateABI | undefined;

  constructor(provider: Web3Provider) {
    this.provider = provider;
  }

  private validate() {
    if (!this.buyChocolateContract) {
      throw new Error("Buy Chocolate Contract not defined");
    }
  }

  async init(provider: Web3Provider): Promise<void> {
    this.provider = provider;

    this.buyChocolateContract = BuyMeAChocolateABI__factory.connect(
      process.env.REACT_APP_BUYMEACHOCOLATE_ADDRESS || "",
      this.provider
    );
  }

  public async buyChocolate(
    cryptoAmount: string,
    to_address: string
  ): Promise<void> {
    this.validate();
    await this.buyChocolateContract!.buyToWithBNB(to_address, {
      value: ethers.utils.parseEther(cryptoAmount),
    });
  }

  public async getPrice(): Promise<string> {
    this.validate();
    const price = await this.buyChocolateContract!.getPrice();
    return ethers.utils.formatEther(price);
  }
}

export default BuyMeAChocolate;
