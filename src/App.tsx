import { useEffect, useState } from 'react'
import { useLucid } from './context/LucidProvider'
import { TransferAda } from './components/TransferAda';
import { HelloWorldValidator } from './components/HelloWorldValidator';
import { Mint } from './components/Mint';

function App() {
  const { lucid, connectWallet , address , getUtxos } = useLucid();
  
  useEffect(() => {
    async function temp() {
      const utxos = await getUtxos();
      console.log(utxos);
    }
    temp();
  }, [address]);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-lg shadow">
        <button onClick={connectWallet} className="mb-4 px-8 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
          Connect Wallet
        </button>
        <h1 className="mb-2 text-2xl font-semibold text-gray-800">Hello World</h1>
        <p className="mb-4 text-gray-600">{address ? `Your address: ${address}` : 'No address connected'}</p>
        <TransferAda/>
        <HelloWorldValidator />
        <Mint />
      </div>
    </>
  )
}

export default App
