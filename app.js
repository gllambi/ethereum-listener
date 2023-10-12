var ethers = require("ethers");

const provider = new ethers.providers.InfuraProvider(
    'sepolia',
    "ff8a87b11f884e0f94be625c3938aa9d"
  );

provider.on("block", async (blockNumber) => {
    console.log("new block number: " + blockNumber);
    const block = await provider.getBlock(blockNumber);
    console.log("Transactions of block " + block.transactions);
});
  
