import { ethers } from "ethers";

export interface IBuyMeAChoclateRepository {
  init(provider: ethers.providers.Web3Provider): void;
  buyToWithBNB: () => void;
}
