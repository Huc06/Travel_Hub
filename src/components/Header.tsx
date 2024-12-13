import { Link } from 'react-router-dom';
import { useLucid } from '../context/LucidProvider';
import { useState } from 'react';

const Header = () => {
  const { connectWallet, address: walletAddress, lucid } = useLucid();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isConnected = !!walletAddress;

  return (
    <header className="bg-white-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black text-4xl font-bold">
            Community Manga
          </Link>
        </div>
        
        <nav className="flex items-center space-x-6 text-lg">
          <Link to="/" className="text-gray-700 hover:text-pink-500 transition-colors">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-pink-500 transition-colors">
            Manga Projects
          </Link>
          <Link to="/dao" className="text-gray-700 hover:text-pink-500 transition-colors">
            DAO Governance
          </Link>
          <Link to="/CurrentPlan" className="text-gray-700 hover:text-pink-500 transition-colors">
            Roadmap
          </Link>
        </nav>

        <div className="flex items-center">
          <div className="relative">
            {!isConnected ? (
              <button 
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md" 
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <>
                <button 
                  className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium shadow-sm hover:shadow-md flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Connected</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                      <p className="font-medium">Governance Token</p>
                      <p className="text-pink-600">0 DAO</p>
                    </div>
                    <button 
                      onClick={async () => {
                        const addr = await lucid?.wallet.address()
                        if (addr) {
                          await navigator.clipboard.writeText(addr)
                        }
                      }}
                      className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                    >
                      <span>{walletAddress ? `${walletAddress.slice(0, 8)}...` : ''}</span>
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" 
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;