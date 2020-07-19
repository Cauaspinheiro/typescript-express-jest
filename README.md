# typescript-express-node

A boilerplate for creating APIs in Node including TypesScript, Express, Jest and ESLint.

## Features

- Support for different environments in an easy way
- Typescript, ESLint and Jest configuration together
- Scripts for debugging tests and code coverage
- Typed entities
- Easy maintenance
- OOP
- .env file configuration
- Ease of creating tests
- Supertest to test API routes
- Usage examples
- Lint-staged for automatic file linting for commits
- Husky for running scripts using git-hooks
- Commitizen for faster commits using CLI

## Usage

### Git Template

Click on "use this template" (green button) on the repository home page

![template-button](https://imgur.com/dq0tSwL.png)

Create a repository on github

Copy the repository url

![clone-button](https://i.imgur.com/gzyM1oO.png)

Run the following command on your local machine: `git clone <copied-url>`

### Upgrading dependencies

After cloning the repository on your machine, run the following command: `npm update` or if you are using yarn:`yarn upgrade`

This will serve to use the most current dependencies

#### Ready! You can now start creating your project based on the boilerplate

## Installation Guide

### git-clone

Clone the repository using the command: `git clone https://github.com/Cauaspinheiro/typescript-express-jest.git`

### Node & NPM / Yarn

Make sure you have the node and a package manager installed

**Node**: <https://nodejs.org/en/>

If you wanted to use Yarn instead of NPM: <https://yarnpkg.com/>

After that, install the project dependencies locally using `yarn install` or `npm install`

### .env

Using the .env.example file, create an .env file and place your environment variables.

#### Ready! You can now use the project on your local machine

## Scripts

- Commit faster using CLI: `ct`
- Start API in production mode using the typescript build: `start`
- Start the API in development mode with hot-reload: `dev`
- Run the automated tests: `test`
- Run the jest code coverage tests: `test:coverage`
- Run the tests in debug mode: `test:debug`

## Things to add

### Database

Use different databases for each environment

Make seeds from your database and use this data in the tests

### Configuration

Add all code functionality settings (eg, Multer, for image control) in a config folder inside src

## License

![GitHub](https://img.shields.io/github/license/cauaspinheiro/typescript-express-jest?style=for-the-badge)

This project is licensed under the terms of use of the MIT license

> You can read the entire project license [here](https://github.com/Cauaspinheiro/typescript-express-jest/blob/master/LICENSE)
