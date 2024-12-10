import React, { useState } from 'react'
import { fromText } from 'lucid-cardano';
import { useLucid } from '../context/LucidProvider';

export const Mint = () => {
    const {lucid} = useLucid(); 

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [txHash, setTxHash] = useState<string>("");

    const getMintingPolicy = async() => {
        if (!lucid) {
            throw new Error("Lucid or address not found");
            
        }

        const { paymentCredential } = lucid.utils.getAddressDetails(
            await lucid.wallet.address(),
          );
        
        if (!paymentCredential) {
            throw new Error("Payment credential not found");
        }

        const mintingPolicy = lucid.utils.nativeScriptFromJson(
            {
              type: "all",
              scripts: [
                { type: "sig", keyHash: paymentCredential.hash },
                {
                  type: "before",
                  slot: lucid.utils.unixTimeToSlot(Date.now() + 1000000),
                },
              ],
            },
          );

          const policyId = lucid.utils.mintingPolicyToId(mintingPolicy);

          return {
            policyId, mintingPolicy
          }
    }

  const mint = async () => {
    if (!lucid) {
        throw new Error("Lucid is not initialized");
        
    }
    const {mintingPolicy, policyId} = await getMintingPolicy();

    const assetName = fromText(name);

    const tx = await lucid?.newTx()
    .mintAssets({ [policyId + assetName]: 1n })
    .attachMetadata(20 , {
        [policyId]: {
            [name]: {
                name,
                description,
                image,
                mediaType: "image/png"
            }
        }
    })
    .validTo(Date.now() + 200000)
    .attachMintingPolicy(mintingPolicy)
    .complete();

    const signedTx = await tx.sign().complete();
    const txHashResult = await signedTx.submit();
    setTxHash(txHashResult);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Mint Token</h1>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name-input" className="text-sm font-medium text-gray-700 mb-1">
              Token Name
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter token name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description-input" className="text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter token description"
              rows={3}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image-input" className="text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              id="image-input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter image URL"
            />
          </div>

          <button
            onClick={mint}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Mint Token
          </button>

          {txHash && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-700 mb-1">Transaction Hash:</p>
              <p className="text-sm text-gray-600 break-all bg-gray-50 p-3 rounded-md">
                {txHash}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
