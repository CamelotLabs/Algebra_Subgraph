import fs from "fs"
import path from "path"
import yaml from "js-yaml"

import {
  TARGET_CHAIN
} from "./chains.ts"

const {
  configName,
  factory,
  nftPositionManager,
  startBlock,
  apiVersion
} = TARGET_CHAIN

const filePath = path.join(path.resolve(), 'subgraph.yaml')
let subgraphConfig = fs.readFileSync(filePath, 'utf8');
let subgraph = yaml.load(subgraphConfig) as any;

const subgraphFactory = subgraph.dataSources[0]
const subgraphNFTPositionManager = subgraph.dataSources[1]

subgraphFactory.network = configName
subgraphFactory.source.address = factory
subgraphFactory.source.startBlock = startBlock
subgraphFactory.mapping.apiVersion = apiVersion

subgraphNFTPositionManager.network = configName
subgraphNFTPositionManager.source.address = nftPositionManager
subgraphNFTPositionManager.source.startBlock = startBlock
subgraphNFTPositionManager.mapping.apiVersion = apiVersion

subgraph.templates[0].network = configName
subgraph.templates[0].mapping.apiVersion = apiVersion

const updatedSubgraph = yaml.dump(subgraph);

fs.writeFileSync(filePath, updatedSubgraph, 'utf8')