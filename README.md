# React-Starter

Starting project for `Create React App`.

## IMPORTANT

When starting a new project, make sure to update files in `.github/workflows`, docker commands in `package.json`, and `README.md`.

## Technologies

- JavaScript
- [React (Create React App)](https://reactjs.org/)
- [Jest](https://jestjs.io/) / [Enzyme](https://enzymejs.github.io/enzyme/docs/guides/jest.html)
- [Redux (easy-peasy)](https://easy-peasy.dev/)
- [Twin](https://github.com/ben-rogerson/twin.macro) ([Tailwind](https://tailwindcss.com/) & [Styled Components](https://styled-components.com/))
- [React Bootstrap](https://react-bootstrap.github.io/components/navbar/)
- [React Router](https://reactrouter.com/)

## File Structure

- In the `src` folder, there should be `components`, `store`, `styles`, and `api` folders.
- In the `components` folder, there should be `App`, `pages`, `presentational`, and `container` folders.
  - In `App` component, routes are mapped to components.
  - In `pages` folder, components that show website pages are stored in this folder. Try to write unit tests and integration tests for each of these components.
  - In `presentational` folder, components that do not manipulate any data or work with state are stored in this folder. Don't write tests for these components; it is pointless.
  - In `container` folder, components that do manipulate data or work with state are in this folder. Try to write unit tests and integration tests for each of these components.
- In the `store` folder, there should be an `index.js` file in which all ministores are combined to create the redux store for the entire app. Each subfolder created should be a ministore for a particular thing, such as user and status.
  - In the ministore folder, there should be `actions.js`, `index.js`, `state.js`, `thunks.js`.
    - In `index.js`, combine actions, state, and thunks together to form a ministore.
    - In `state.js`, initial state is given in this file.
    - In `actions.js`, state manipulation is done in this file.
    - In `thunks.js`, using functions that make API calls and performing any side effects, such as stop loading after making API call, are done in this file.
- In the `api` folder, there should be functions for making API calls. These functions will be used by thunks.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
