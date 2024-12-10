import React, { useState } from 'react'
import { HelloWorldDatum } from '../Validator/datum';
import { Data } from 'lucid-cardano';
import { useLucid } from '../context/LucidProvider';
import { getValidator } from '../Validator';

export const HelloWorldValidator = () => {
  const [ada, setAda] = useState<number>(0);
  const [txhash, setTxHash] = useState<string>("");
  
  const { lucid , address } = useLucid();

  const lockAda = async() => {
    try {
    
        if (!lucid || !address) {
            throw new Error("Lucid or address not found");
            
        }

        const ownerPubkeyHash = await lucid?.utils.getAddressDetails(address).
        paymentCredential?.hash;

        if (!ownerPubkeyHash) {
            throw new Error("Owner public key hash not found");
            
        }

        const datum = Data.to({
            owner: ownerPubkeyHash
        }, HelloWorldDatum)

        const validator = getValidator();
        const contractAddress = await lucid.utils.validatorToAddress(validator);
        
        const tx = await lucid.newTx().payToContract(contractAddress, {
           inline: datum
        },  {
            lovelace: BigInt(ada * 10 ** 6)
    }).complete();
    
    const signedTx = await tx.sign().complete();

    const txHashResult = await signedTx.submit();

    setTxHash(txHashResult);

    } catch(error){
       console.error("Error in lockAda:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Hello World Validator</h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="ada-input" className="text-sm font-medium text-gray-700 mb-1">
              Amount of ADA
            </label>
            <input
              id="ada-input"
              type="number"
              value={ada}
              onChange={(e) => setAda(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter ADA amount"
            />
          </div>
          <button
            onClick={lockAda}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Lock Ada
          </button>
          {txhash && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Transaction Hash:</p>
              <p className="text-sm text-gray-600 break-all bg-gray-50 p-3 rounded-md">
                {txhash}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
