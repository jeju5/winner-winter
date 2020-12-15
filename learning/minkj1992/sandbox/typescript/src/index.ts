// https://stackoverflow.com/questions/55055956/when-do-we-use-typescript-import-as
import * as crypto from 'crypto-js';

class Block {
  idx: number;
  hash: string;
  prevHash: string;
  data: string;
  timestamp: number;

  static genBlockHash = (
    idx: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => crypto.SHA256(idx + prevHash + timestamp + data).toString();

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

const genesisBlock: Block = new Block(0, 'Hash1234', '', '', 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(getBlockchain());
console.log(getLatestBlock());
console.log(getNewTimeStamp());
console.log(
  `This is new Hash ${Block.genBlockHash(
    1,
    'Hash1234',
    getNewTimeStamp(),
    'data'
  )}`
);
export {};
