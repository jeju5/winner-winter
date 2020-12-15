// public is default
class Block {
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

const genesisBlock: Block = new Block(0, '19247eusadkf', '', '', 123456);

let blockchain: [Block] = [genesisBlock];

// blockchain.push(1234)

console.log(genesisBlock);

export {};
