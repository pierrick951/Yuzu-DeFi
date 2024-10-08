import { ethers } from "hardhat";
// 0x0f4AC7ae9be2421F4AEF7Eb3dF7925aab39B563d

async function main() { 
     

    const tokenAddress = "0x1ea675656b01d4E0aD07AdA79BC18866E147808D"

    const  StackingFactory = await ethers.getContractFactory("Stacking")
    const stacking = await StackingFactory.deploy(tokenAddress, { gasLimit:  300000 });

    console.log('stacking deployed at address', await stacking.getAddress());

    return stacking;
};

main()
.then(()=> process.exit(0))
.catch((error) => {
    console.log(error);
    process.exitCode = 1;
})
    