# Secure Token Handling Tests
This repository contains automated tests to validate secure token handling practices in web applications using Playwright. The tests ensure access tokens are not stored in local storage or session storage, validate secure cookie attributes, implement the Backend for Frontend (BFF) pattern, and test OAuth security enhancements using DPoP.

## Prerequisites
- [nodenv](https://github.com/nodenv/nodenv) - Node.js version manager
- [Yarn](https://yarnpkg.com/) - Package manager

## Setup
1. nodenv install
2. yarn install
3. yarn playwright install

## Running the tests
All scripts can be found in the package.json

To run the tests headless run:
```yarn test```

To run the tests in the UI mode run:
```yarn test:ui```