# Cardano Travel Booking Application

## Overview

This project is a decentralized travel booking application built with React, TypeScript, and Vite. It allows users to book flights, hotels, and car rentals using ADA cryptocurrency. The application leverages the Lucid library for Cardano blockchain interactions, providing a seamless experience for users to connect their wallets and make transactions.

## Features

- **Flight Booking**: Users can browse and book flights to various destinations.
- **Hotel Booking**: Users can view and reserve hotel rooms.
- **Car Rental Services**: Users can rent cars for their travel needs.
- **Wallet Integration**: Connects to Cardano wallets for secure transactions.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Lucid**: A library for interacting with the Cardano blockchain.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cardano-manga.git
   cd cardano-manga
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Configuration

### ESLint Configuration

To enable type-aware linting, update your ESLint configuration as follows:

- Configure the top-level `parserOptions` property in your ESLint config:

   ```javascript
   export default tseslint.config({
     languageOptions: {
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

- Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

### Tailwind CSS Configuration

Ensure that your `tailwind.config.js` file includes the paths to your template files:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.
- Special thanks to the Cardano community for their guidance in blockchain development.
