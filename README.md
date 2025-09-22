# 🎬 MovieMax - React Native Movie App

A beautiful and responsive mobile application built with React Native, Expo, and TypeScript that allows users to browse trending movies, search for films, and view detailed information about their favorite movies.

## ✨ Features

- 🎥 Browse trending and latest movies
- 🔍 Search for movies by title
- 📱 Responsive design for all screen sizes
- ⚡ Fast and smooth user experience
- 🔄 Pull-to-refresh functionality
- 📱 Cross-platform (iOS & Android)
- 🎨 Modern UI with smooth animations
- 🔒 Type-safe with TypeScript
- 🚀 Built with Expo for easy development

## 🛠 Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Reanimated
- React Native Masked View
- Expo Router
- NativeWind (TailwindCSS for React Native)
- TMDB API
- Appwrite (Backend)

## 📱 Screens

- **Home**: Displays trending and latest movies
- **Search**: Search for movies by title
- **Movie Details**: View detailed information about a movie
- **Saved**: Save your favorite movies (coming soon)
- **Profile**: User profile and settings

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
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
   APPWRITE_ENDPOINT=your_appwrite_endpoint
   APPWRITE_PROJECT_ID=your_appwrite_project_id
   ```

4. Start the development server:
   ```bash
   npx expo start
   ```

5. Run the app:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)

## 🏗 Project Structure

```
movie-app/
├── app/                  # App navigation and screens
│   ├── (tabs)/           # Tab navigation
│   ├── movies/           # Movie details screen
│   └── _layout.tsx       # Root layout
├── assets/               # Images, fonts, and other static files
├── components/           # Reusable components
├── constants/            # App constants and configuration
├── interfaces/           # TypeScript interfaces
├── services/             # API and data services
└── types/                # TypeScript type definitions
```

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for the movie data API
- [Appwrite](https://appwrite.io/) for backend services
- [Expo](https://expo.dev/) for the amazing development experience
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

