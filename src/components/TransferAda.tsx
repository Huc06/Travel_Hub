import { React, useState } from "react";
import { useLucid } from "../context/LucidProvider";

export const TransferAda = () => {
    const { lucid } = useLucid();
    const [ada, setAda] = useState<number>(0);
    const [receiverAddress, setReceiverAddress] = useState<string>("");
    const [txHash, setTxHash] = useState<string>("");
    
    const transferAda = async () => {
        if (!lucid) {
            throw new Error('Lucid instance not initialized');
        }
        const tx = await lucid.newTx()
            .payToAddress(receiverAddress, { lovelace: BigInt(ada) * 1000000n })
            .complete();

        const signedTx = await tx.sign().complete();

        const txHashResult = await signedTx.submit();
        setTxHash(txHashResult);
    }

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-100 rounded-lg shadow mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transfer Ada</h2>
            <input type="number" value={ada} onChange={(e) => setAda(Number(e.target.value))} className="mb-4 px-4 py-2 border border-gray-300 rounded-md" placeholder="Amount of Ada" />
            <input type="text" value={receiverAddress} onChange={(e) => setReceiverAddress(e.target.value)} className="mb-4 px-4 py-2 border border-gray-300 rounded-md" placeholder="Receiver's Address" />
            <button onClick={transferAda} className="px-8 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">Transfer</button>
            <p className="mt-4 text-gray-600">{txHash ? `Transaction Hash: ${txHash}` : 'No transaction yet'}</p>
        </div>
    )
}