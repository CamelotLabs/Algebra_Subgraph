/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'
import { supportedChains, TARGET_CHAIN } from "../config/chains"

const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
const FACTORY_ADDRESS = supportedChains[TARGET_CHAIN].factory
const WRAPPED_NATIVE = supportedChains[TARGET_CHAIN].wrappedNative
const USDC_WMatic_03_POOL = supportedChains[TARGET_CHAIN].wrappedNativeUSDCPool
const WHITELIST_TOKENS: string[] = supportedChains[TARGET_CHAIN].whitelistTokens
const STABLE_COINS: string[] = supportedChains[TARGET_CHAIN].stableCoins

let ZERO_BI = BigInt.fromI32(0)
let ONE_BI = BigInt.fromI32(1)
let ZERO_BD = BigDecimal.fromString('0')
let ONE_BD = BigDecimal.fromString('1')
let BI_18 = BigInt.fromI32(18)

let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))

let pools_list = [""]

export {
  ADDRESS_ZERO,
  FACTORY_ADDRESS,
  WRAPPED_NATIVE,
  USDC_WMatic_03_POOL,
  WHITELIST_TOKENS,
  STABLE_COINS,
  ZERO_BI,
  ONE_BI,
  ZERO_BD,
  ONE_BD,
  BI_18,
  factoryContract,
  pools_list
}