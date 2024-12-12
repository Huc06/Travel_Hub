import { Link } from 'react-router-dom';
import { useLucid } from '../context/LucidProvider';

const Header = () => {
  const { connectWallet, address } = useLucid();

  return (
    <header className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-black text-4xl font-bold">
            Community Manga
          </Link>
        </div>
        <nav className="flex items-center space-x-4 text-2xl">
          <Link to="/" className="text-black hover:text-pink-500">Trang Chủ</Link>
          <Link to="/projects" className="text-black hover:text-pink-500">Toàn bộ các dự án</Link>
          <Link to="/CurrentPlan" className="text-black hover:text-pink-500">Kế hoạch hiện tại</Link>
        </nav>
        <div className="flex items-center">
          <button onClick={connectWallet} className="px-8 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300">
            Connect Wallet
          </button>
          <p className="text-gray-600 ml-4">{address ? `${address.slice(0, 8)}...` : 'No address connected'}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;