import { BigDecimal } from '@graphprotocol/graph-ts'

const ARBITRUM_ONE = "arbitrum-one"
const ARBITRUM_SEPOLIA = "arbitrum-sepolia"
const MOLTEN = "camelot-molten"
const PROOF_OF_PLAY = "camelot-proofofplay-apex"
const GRAVITY = "camelot-gravity"
const RARI = "camelot-rari"
const REYA = "camelot-reya"
const SANKO = "camelot-sanko"
const XAI = "xai"

class ChainInfo {
  configName: string;
  factory: string;
  nftPositionManager: string;
  wrappedNative: string;
  wrappedNativeUSDCPool: string;
  minimumMaticLocked: string;
  whitelistTokens: string[];
  stableCoins: string[];
  startBlock: number;
  apiVersion: string;

  constructor(
    configName: string,
    factory: string,
    nftPositionManager: string,
    wrappedNative: string,
    wrappedNativeUSDCPool: string,
    minimumMaticLocked: string,
    whitelistTokens: Array<string>,
    stableCoins: Array<string>,
    startBlock: number,
    apiVersion: string
  ) {
    this.configName = configName
    this.factory = factory.toLowerCase();
    this.nftPositionManager = nftPositionManager.toLowerCase();
    this.wrappedNative = wrappedNative.toLowerCase();
    this.wrappedNativeUSDCPool = wrappedNativeUSDCPool.toLowerCase();
    this.minimumMaticLocked = minimumMaticLocked;
    this.whitelistTokens = whitelistTokens;
    this.stableCoins = stableCoins;
    this.startBlock = startBlock;
    this.apiVersion = apiVersion;
  }
}

class SupportedChains {
  arbitrumOne: ChainInfo;
  arbitrumSepolia: ChainInfo;
  gravity: ChainInfo;
  molten: ChainInfo;
  proofOfPlay: ChainInfo;
  rari: ChainInfo;
  reya: ChainInfo;
  sanko: ChainInfo;
  xai: ChainInfo;

  constructor(arbitrumOne: ChainInfo, arbitrumSepolia: ChainInfo, gravity: ChainInfo, molten: ChainInfo, proofOfPlay: ChainInfo, rari: ChainInfo, reya: ChainInfo, sanko: ChainInfo, xai: ChainInfo) {
    this.arbitrumOne = arbitrumOne;
    this.arbitrumSepolia = arbitrumSepolia;
    this.gravity = gravity;
    this.molten = molten;
    this.proofOfPlay = proofOfPlay;
    this.rari = rari;
    this.reya = reya;
    this.sanko = sanko;
    this.xai = xai;
  }
}

const arbitrumOne = new ChainInfo(
  ARBITRUM_ONE,
  "0x1a3c9B1d2F0529D97f2afC5136Cc23e58f1FD35B",
  "0x00c7f3082833e796A5b3e4Bd59f6642FF44DCD15",
  '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
  '0x521aa84ab3fcc4c05cabac24dc3682339887b126',
  "0.1",
  [
    '0x82af49447d8a07e3bd95bd0d56f35241523fbab1', // WETH
    '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC
    '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
    '0x3d9907f9a368ad0a51be60f7da3b97cf940982d8', // GRAIL
    '0x912ce59144191c1204e64559fe8253a0e49e6548', // ARB
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
    '0xd74f5255d557944cf7dd0e45ff521520002d5748', // USDs
    '0x1622bf67e6e5747b81866fe0b85178a93c7f86e3', // UMAMI
    '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55', // DPX
    '0x5979d7b546e38e414f7e9822514be443a4800529', // wstETH
    '0x6cda1d3d092811b2d48f7476adb59a6239ca9b95', // stafi-rETH
    '0x0ae38f7e10a43b5b2fb064b42a2f4514cba909ef', // unsheth
    '0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8', // PENDLE
    '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a' // GMX
  ],
  [
    '0xaf88d065e77c8cc2239327c5edb3a432268e5831', // USDC
    '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
    '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', // DAI
    '0xd74f5255d557944cf7dd0e45ff521520002d5748' // USDs
  ],
  101163736,
  // for graph QL deployment
  "0.0.5"
)

const arbitrumSepolia = new ChainInfo(
  ARBITRUM_SEPOLIA,
  "0xaA37Bea711D585478E1c04b04707cCb0f10D762a",
  "0x79EA6cB3889fe1FC7490A1C69C7861761d882D4A",
  "0x980b62da83eff3d4576c647993b0c1d7faf17c73",
  "0x3965361ea4f9000ae3cf995f553115b2832d0e2d",
  "0.1",
  [
    '0x980b62da83eff3d4576c647993b0c1d7faf17c73', // WETH
    '0xb893e3334d4bd6c5ba8277fd559e99ed683a9fc7', // USDC
  ],
  [
    '0xb893e3334d4bd6c5ba8277fd559e99ed683a9fc7', // USDC
  ],
  2131772,
  "0.0.6"
)

const gravity = new ChainInfo(
  GRAVITY,
  "0x10aA510d94E094Bd643677bd2964c3EE085Daffc",
  "0x30A4bD5b1a9e9C0D80e9a45ef486bc1f1bc8e230",
  "0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD",
  "0xa3FfAc3EBFA18b5BC4f2Ae10086403E85FBF6b2B",
  "100",
  [
    "0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD", // WG
    "0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6", // USDC
    "0x816E810f9F787d669FB71932DeabF6c83781Cd48", // USDT
    "0xf6f832466Cd6C21967E0D954109403f36Bc8ceaA", // WETH
    "0x729ed87bbE7B7e4B7F09BCb9c668580818d98BB9", // WBTC
    "0xBFBBc4dA47508e85AC18DFC961fa182194E85f9a", // DAI
  ],
  [
    '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6', // USDC
  ],
  11988,
  "0.0.6"
)

const molten = new ChainInfo(
  MOLTEN,
  "0x10aA510d94E094Bd643677bd2964c3EE085Daffc",
  "0xC216fCdEb961EEF95657Cb45dEe20e379C7624B8",
  "0xdBc38Db4F11b7D111477f17e757aa17dD3348a6d",
  "0xDC1eE81e57041Fe4613fbBD23572399C9297bb56",
  "100",
  [
    "0xdBc38Db4F11b7D111477f17e757aa17dD3348a6d", // WMOLTEN
    "0x135B641E61CFC9a068b82E02fF0f051f6e5D4721", // USDC
    "0x09Bf29B44130e88F113C1Fb0487BCB97b6920C31", // WETH
  ],
  [
    '0x135B641E61CFC9a068b82E02fF0f051f6e5D4721', // USDC
  ],
  3834337,
  "0.0.6"
)

const proofOfPlay = new ChainInfo(
  PROOF_OF_PLAY,
  "0x10aA510d94E094Bd643677bd2964c3EE085Daffc",
  "0x30A4bD5b1a9e9C0D80e9a45ef486bc1f1bc8e230",
  "0x77684A04145a5924eFCE0D92A7c4a2A2E8C359de",
  "0xCf53A2F62316e9dDA38e34BaB131087e2eF325aE",
  "0.1",
  [
    '0x77684A04145a5924eFCE0D92A7c4a2A2E8C359de', // WETH
    '0xd7f991cF407C877dc91b2C6aCade45643925cf7a', // USDC
  ],
  [
    '0xd7f991cF407C877dc91b2C6aCade45643925cf7a', // USDC
  ],
  26275615,
  "0.0.6"
)

const rari = new ChainInfo(
  RARI,
  "0xcF8d0723e69c6215523253a190eB9Bc3f68E0FFa",
  "0xc216fcdeb961eef95657cb45dee20e379c7624b8",
  "0xf037540e51d71b2d2b1120e8432ba49f29edfbd0", // WETH
  "0xa9cefdfec214309c7e291754c86de1fdaa443c2c", // WETH-USDC
  "0.1",
  [
    '0xf037540e51d71b2d2b1120e8432ba49f29edfbd0', // WETH
    '0xfbda5f676cb37624f28265a144a48b0d6e87d3b6', // USDC
    '0x362fae9a75b27bbc550aac28a7c1f96c8d483120', // USDT
  ],
  [
    '0xfbda5f676cb37624f28265a144a48b0d6e87d3b6', // USDC
    '0x362fae9a75b27bbc550aac28a7c1f96c8d483120', // USDT
  ],
  340548,
  "0.0.6"
)

const reya = new ChainInfo(
  REYA,
  "0x10aA510d94E094Bd643677bd2964c3EE085Daffc",
  "0x30A4bD5b1a9e9C0D80e9a45ef486bc1f1bc8e230",
  "0x6B48C2e6A32077ec17e8Ba0d98fFc676dfab1A30", // WETH
  "0x2f7a2808A14368db0c9e20A2f0d0e74D0f65C90B", // WETH-rUSD
  "0.1",
  [
    '0x6B48C2e6A32077ec17e8Ba0d98fFc676dfab1A30', // WETH
    '0xa9F32a851B1800742e47725DA54a09A7Ef2556A3', // rUSD
  ],
  [
    '0xa9F32a851B1800742e47725DA54a09A7Ef2556A3', // rUSD
  ],
  2932166,
  "0.0.6"
)

const sanko = new ChainInfo(
  SANKO,
  "0xcF8d0723e69c6215523253a190eB9Bc3f68E0FFa",
  "0x30A4bD5b1a9e9C0D80e9a45ef486bc1f1bc8e230",
  "0x754cdad6f5821077d6915004be2ce05f93d176f8", // WDMT
  "0xacb574808d0556147a27d07945dd9b12da4e7aaf", // WDMT-USDC
  "1",
  [
    '0x754cdad6f5821077d6915004be2ce05f93d176f8', // WDMT
    '0x13d675bc5e659b11cfa331594cf35a20815dcf02', // USDC
  ],
  [
    '0x13d675bc5e659b11cfa331594cf35a20815dcf02', // USDC
  ],
  51,
  "0.0.6"
)

const xai = new ChainInfo(
  XAI,
  "0xD8676fBdfa5b56BB2298D452c9768f51e80e34AE",
  "0xAcDcC3C6A2339D08E0AC9f694E4DE7c52F890Db3",
  "0x3fb787101dc6be47cfe18aeee15404dcc842e6af", // WXAI
  "0xe5a30cc140d2623090a62f64d73d971aac2e03ec", // WXAI-USDC
  "1",
  [
    '0x3fb787101dc6be47cfe18aeee15404dcc842e6af', // WXAI
    '0x1e3769bd5fb2e9e9e7d4ed8667c947661f9a82e3', // USDC
    '0xbee82cfdaff4a6aa4e4793cb81eb1c2e79ac463c', // WETH
  ],
  [
    '0x1e3769bd5fb2e9e9e7d4ed8667c947661f9a82e3', // USDC
  ],
  2398999,
  "0.0.6"
)

const supportedChains = new SupportedChains(
  arbitrumOne,
  arbitrumSepolia,
  gravity,
  molten,
  proofOfPlay,
  rari,
  reya,
  sanko,
  xai
)

// Edit this for the given deployment
const TARGET_CHAIN: ChainInfo = supportedChains.molten

export {
  TARGET_CHAIN
}