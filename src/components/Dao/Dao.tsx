import { useState } from 'react';
import ProposalList from './ProposalList';
import CreateProposal from './CreateProposal';
import VotingPower from './VotingPower';

const Dao = () => {
  const [activeTab, setActiveTab] = useState('proposals');

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Quản trị DAO</h1>
      
      <div className="mb-8">
        <VotingPower />
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b">
          <nav className="flex">
            <button
              className={`px-6 py-4 text-lg font-medium ${
                activeTab === 'proposals'
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('proposals')}
            >
              Danh sách đề xuất
            </button>
            <button
              className={`px-6 py-4 text-lg font-medium ${
                activeTab === 'create'
                  ? 'text-pink-600 border-b-2 border-pink-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('create')}
            >
              Tạo đề xuất mới
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'proposals' ? <ProposalList /> : <CreateProposal />}
        </div>
      </div>
    </div>
  );
};

export default Dao;