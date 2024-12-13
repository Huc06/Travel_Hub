interface Proposal {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'passed' | 'failed';
  votesFor: number;
  votesAgainst: number;
  endTime: string;
}

const ProposalList = () => {
  const proposals: Proposal[] = [
    {
      id: 1,
      title: "Translate Chainsaw Man Manga",
      description: "Proposal to translate the entire Chainsaw Man manga into Vietnamese",
      status: 'active',
      votesFor: 750000,
      votesAgainst: 250000,
      endTime: "2024-04-01"
    },
    {
      id: 2,
      title: "Translate Jujutsu Kaisen Manga",
      description: "Proposal to translate Jujutsu Kaisen manga from chapter 100",
      status: 'passed',
      votesFor: 800000,
      votesAgainst: 100000,
      endTime: "2024-03-15"
    }
  ];

  return (
    <div className="space-y-6">
      {proposals.map((proposal) => (
        <div key={proposal.id} className="border rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{proposal.title}</h3>
              <p className="text-gray-600">{proposal.description}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              proposal.status === 'active' ? 'bg-blue-100 text-blue-800' :
              proposal.status === 'passed' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {proposal.status === 'active' ? 'Ongoing' :
               proposal.status === 'passed' ? 'Passed' :
               'Failed'}
            </span>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>For ({proposal.votesFor.toLocaleString()} votes)</span>
              <span>Against ({proposal.votesAgainst.toLocaleString()} votes)</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{
                  width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%`
                }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Ends: {new Date(proposal.endTime).toLocaleDateString()}
            </div>
            {proposal.status === 'active' && (
              <div className="space-x-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  For
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                  Against
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProposalList; 