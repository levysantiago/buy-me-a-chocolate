/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BuyMeAChocolateABIInterface extends utils.Interface {
  functions: {
    "WBNB()": FunctionFragment;
    "buyToWithBNB(address)": FunctionFragment;
    "chocToken()": FunctionFragment;
    "getFeePercent()": FunctionFragment;
    "getInitialPrice()": FunctionFragment;
    "getLiquidity()": FunctionFragment;
    "getMinToBuy()": FunctionFragment;
    "getPrice()": FunctionFragment;
    "owner()": FunctionFragment;
    "quote(uint256,uint256,uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "safeWithdrawToken(address,address)": FunctionFragment;
    "setFeePercent(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WBNB"
      | "buyToWithBNB"
      | "chocToken"
      | "getFeePercent"
      | "getInitialPrice"
      | "getLiquidity"
      | "getMinToBuy"
      | "getPrice"
      | "owner"
      | "quote"
      | "renounceOwnership"
      | "safeWithdrawToken"
      | "setFeePercent"
      | "transferOwnership"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WBNB", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyToWithBNB",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "chocToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getFeePercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInitialPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinToBuy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "safeWithdrawToken",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeePercent",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "WBNB", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyToWithBNB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chocToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInitialPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinToBuy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeWithdrawToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeePercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenPriceSet(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenPriceSet"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TokenPriceSetEventObject {
  tokenForSale: string;
  pairToken: string;
  priceInPairToken: BigNumber;
}
export type TokenPriceSetEvent = TypedEvent<
  [string, string, BigNumber],
  TokenPriceSetEventObject
>;

export type TokenPriceSetEventFilter = TypedEventFilter<TokenPriceSetEvent>;

export interface BuyMeAChocolateABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BuyMeAChocolateABIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WBNB(overrides?: CallOverrides): Promise<[string]>;

    buyToWithBNB(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    chocToken(overrides?: CallOverrides): Promise<[string]>;

    getFeePercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    getInitialPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinToBuy(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    quote(
      amount0: PromiseOrValue<BigNumberish>,
      _reserve0: PromiseOrValue<BigNumberish>,
      _reserve1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { amount1: BigNumber }>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeWithdrawToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeePercent(
      _newFeePercent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _chocAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  WBNB(overrides?: CallOverrides): Promise<string>;

  buyToWithBNB(
    _to: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  chocToken(overrides?: CallOverrides): Promise<string>;

  getFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

  getInitialPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  getMinToBuy(overrides?: CallOverrides): Promise<BigNumber>;

  getPrice(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  quote(
    amount0: PromiseOrValue<BigNumberish>,
    _reserve0: PromiseOrValue<BigNumberish>,
    _reserve1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeWithdrawToken(
    _token: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeePercent(
    _newFeePercent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _chocAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    WBNB(overrides?: CallOverrides): Promise<string>;

    buyToWithBNB(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    chocToken(overrides?: CallOverrides): Promise<string>;

    getFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    getInitialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getMinToBuy(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    quote(
      amount0: PromiseOrValue<BigNumberish>,
      _reserve0: PromiseOrValue<BigNumberish>,
      _reserve1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    safeWithdrawToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeePercent(
      _newFeePercent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _chocAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "TokenPriceSet(address,address,uint256)"(
      tokenForSale?: null,
      pairToken?: PromiseOrValue<string> | null,
      priceInPairToken?: null
    ): TokenPriceSetEventFilter;
    TokenPriceSet(
      tokenForSale?: null,
      pairToken?: PromiseOrValue<string> | null,
      priceInPairToken?: null
    ): TokenPriceSetEventFilter;
  };

  estimateGas: {
    WBNB(overrides?: CallOverrides): Promise<BigNumber>;

    buyToWithBNB(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    chocToken(overrides?: CallOverrides): Promise<BigNumber>;

    getFeePercent(overrides?: CallOverrides): Promise<BigNumber>;

    getInitialPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    getMinToBuy(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    quote(
      amount0: PromiseOrValue<BigNumberish>,
      _reserve0: PromiseOrValue<BigNumberish>,
      _reserve1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeWithdrawToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeePercent(
      _newFeePercent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      _chocAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WBNB(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyToWithBNB(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    chocToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFeePercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInitialPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMinToBuy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quote(
      amount0: PromiseOrValue<BigNumberish>,
      _reserve0: PromiseOrValue<BigNumberish>,
      _reserve1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeWithdrawToken(
      _token: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeePercent(
      _newFeePercent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _chocAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}