# WeatherWave

WeatherWave is a web application that provides weather forecasts and detailed weather information for different locations. It utilizes the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface.

## Table of Contents

- [WeatherWave](#weatherwave)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Search for weather forecasts by location.

- View current weather conditions.

- Get detailed weather information including temperature, humidity, wind speed, and more.

- Responsive design for various devices.

- Fetch weather data using the OpenWeatherMap API.

## Technologies Used

- Next.js: React framework for server-side rendering and static site generation.

- React: JavaScript library for building user interfaces.

- TypeScript: Typed superset of JavaScript.

- Tailwind CSS: Utility-first CSS framework for styling.

- Jotai: State management library.

- Axios: Promise-based HTTP client for making API requests.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/weatherwave.git
   cd weatherwave
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

   ```sh
   NEXT_PUBLIC_WEATHER_KEY=your_openweathermap_api_key
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 with your browser to see the result.

## Usage

- Use the search bar in the navigation to find weather forecasts by location.

- Click on the current location icon to fetch weather data for your current location.

- View detailed weather information including temperature, feels-like temperature, visibility, humidity, wind speed, air pressure, sunrise, and sunset.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.

2. Create your feature branch (`git checkout -b feature/my-new-feature`).

3. Commit your changes (`git commit -am 'Add some feature'`).

4. Push to the branch (`git push origin feature/my-new-feature`).

5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.