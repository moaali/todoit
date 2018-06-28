## Techs Used
+ React 16
+ Mobx 4
+ Sass
+ Babel
+ Webpack
+ Express
+ Jest/Enzyme

## Prerequisites
+ Node 9.11.1
+ Yarn

## Directory Structure
+ `.config`: Contains the necessary files to run the application bundling and testing (Webpack/Jest).
+ `client`: Contains all frontend files developed using React.
+ `server`: Contains all server side files.

## Installation
After installing the prerequisites mentioned above the available commands are:

```
yarn start           # Compile Node written in ES6 and run the backend server.
yarn prestart        # Run compile-node command.
yarn compile-node    # Compile Node written in ES6 using babel.
yarn build           # Build the application for production.
yarn dev             # Run frontend server for development.
yarn lint            # Lint all JavaScript files using eslint.
yarn test            # Run tests using Jest/Enzyme.
yarn precommit       # Run linting and prettier before commiting files.
```

## Development

In order for the application to work in the development mode two terminals should be used on the first one run `yarn start` and on the second one run `yarn dev`.


## Production

In order for the application to work in the production mode `yarn build` command should be used.

## Testing

In order to run test use `yarn test`.
