# Star Rating App

This is a simple React application that allows users to rate items using star icons.

## Features

- Users can click on a star icon to select a rating.
- Double-clicking on a selected star icon resets the rating to zero.
- When hovering over the star icons, they highlight based on the hovered or selected rating.

## Installation

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/star-rating-app.git
```

2. Navigate to the project directory:

```
cd star-rating-app
```

3. Install dependencies using npm or yarn:

```
npm install
```
or
```
yarn install
```

## Usage

To start the development server, run the following command:

```
npm start
```
or
```
yarn start
```

The application will be available at `http://localhost:3000` in your browser.

## Dependencies

The project was built using the following main dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Create React App](https://create-react-app.dev/): A command-line tool for creating React applications with no build configuration.
- [react-icons](https://react-icons.github.io/react-icons/): A library of icons for React projects.
- [react-tooltip](https://react-tooltip.netlify.app/): A simple tooltip library for React.
- [Font Awesome](https://fontawesome.com/): Icon toolkit based on CSS and Less.

## Project Structure

```
star-rating-app/
  ├── public/
  │   └── index.html
  ├── src/
  │   ├── components/
  │   │   └── star-rating.component.jsx
  │   ├── App.js
  │   └── index.js
  ├── package.json
  ├── README.md
  └── ...
```

- `public/`: Contains the static HTML file.
- `src/`: Contains the main source files.
  - `components/`: Contains the `StarRating` component.
  - `App.js`: The main application component.
  - `index.js`: Entry point of the application.
- `package.json`: Configuration file for npm packages.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
