const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
          <ul className="list-disc list-inside">
            <li className="mt-2">Email: <a href="mailto:mangacommunity@gmail.com" className="text-yellow-400 hover:underline">manga@community.com</a></li>
            <li className="mt-2">We appreciate your support on this journey!</li>
            <li className="mt-4">&copy; 2024 Community Manga JSC. All Rights Reserved.</li>
          </ul>
        </div>
      </footer>
    );
};

export default Footer;