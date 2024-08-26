import BlockEth from "../components/BlockEth";
import ChartEth from "../components/ChartEth";
import GasPrice from "../components/GasPrice";
import PriceEth from "../components/PriceEth";
import Supply from "../components/Supply";
import WalletUser from "../components/WalletUser";

type Props = {};
function Dash({}: Props) {


  return (
    <div className="w-full h-auto min-h-screen bg-gradient-to-tl from-zinc-950 to-zinc-800 flex flex-col p-5 gap-5">
      
          <div className="flex flex-col  justify-center lg:flex-row px-5 w-full gap-2 py-2 ">
            <Supply />
            <PriceEth />
            <BlockEth />
            <GasPrice />
          </div>
          <div className='flex flex-col xl:flex-row gap-5 px-4 justify-center items-center '>
            <ChartEth />
            <WalletUser/>
          </div>
       
    
    </div>
  );
}

export default Dash;
