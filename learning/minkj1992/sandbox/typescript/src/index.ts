// https://stackoverflow.com/questions/55055956/when-do-we-use-typescript-import-as
import * as crypto from 'crypto-js';

class Block {
  static genBlockHash = (
    idx: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => crypto.SHA256(idx + prevHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.idx === 'number' &&
    typeof aBlock.hash === 'string' &&
    typeof aBlock.prevHash === 'string' &&
    typeof aBlock.timestamp === 'number' &&
    typeof aBlock.data === 'string';

  idx: number;
  hash: string;
  prevHash: string;
  data: string;
  timestamp: number;

  constructor(
    idx: number,
    hash: string,
    prevHash: string,
    data: string,
    timestamp: number
  ) {
    this.idx = idx;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, 'initBlock', '', '', 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLatestBlock();
  const newIdx: number = prevBlock.idx + 1;
  const nxtTimestamp: number = getNewTimeStamp();
  const nxtHash: string = Block.genBlockHash(
    newIdx,
    prevBlock.hash,
    nxtTimestamp,
    data
  );

  return new Block(newIdx, nxtHash, prevBlock.hash, data, nxtTimestamp);
};
const getHashForBLock = (aBlock: Block): string =>
  Block.genBlockHash(
    aBlock.idx,
    aBlock.prevHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean =>
  Block.validateStructure(candidateBlock) &&
  prevBlock.idx + 1 === candidateBlock.idx &&
  prevBlock.hash === candidateBlock.prevHash &&
  getHashForBLock(candidateBlock) === candidateBlock.hash;

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
};

export {};
