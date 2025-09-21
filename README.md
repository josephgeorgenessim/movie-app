# 🎬 React Native Movie App

A beautiful and responsive mobile application built with React Native and Expo that allows users to browse, search, and discover movies.

## ✨ Features

- Browse popular and trending movies
- Search for specific movies
- View detailed movie information
- Clean and intuitive user interface
- Built with TypeScript for type safety
- Uses Expo for easy development and testing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app (for testing on physical devices)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-app.git
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your TMDB API key:
   ```
   TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

5. Run the app:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Scan the QR code with your phone's camera (Expo Go app required)

## 🛠️ Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Tailwind CSS (NativeWind)
- TMDB API
- Axios for API requests
- React Query for data fetching and caching

## 📁 Project Structure

```
movie-app/
├── app/                 # Main application code
│   ├── (tabs)/          # Tab navigation
│   └── movies/          # Movie details screens
├── assets/              # Images, fonts, and other static files
├── components/          # Reusable UI components
├── constants/           # App constants and configurations
├── interfaces/          # TypeScript type definitions
├── services/            # API services and hooks
└── types/               # Global type definitions
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- Expo team for the amazing development experience
- React Native community for continuous support and improvements
