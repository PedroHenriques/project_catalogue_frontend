# Sample Property Listing/Browsing Web Application - Project Catalogue - Frontend

## Context

This repository was built as part of a code challenge to build an application (back and front end), using NodeJS on the backend and React+Redux on the frontend.  

This repository was built in roughly 12h from scratch, which means no TDD and the code organization is not always ideal.  

The backend counterpart of this repo can be found at [https://github.com/PedroHenriques/project_catalogue_backend](https://github.com/PedroHenriques/project_catalogue_backend).

## Setup - Production mode

1. `cd` into the root of the repo
2. In a cmd/terminal run `npm i` followed by `npm run build-prod`

## Setup - Development mode

1. `cd` into the root of the repo
2. In a cmd/terminal run `npm i` followed by `npm run watch`
3. The application can be reached at `localhost:9000`

**NOTE**

The NPM script `watch` was created with windows in mind.  
If you're running another OS and the script doesn't behave well, you can run `npm run build-dev -- -w` on 1 terminal window and `npm start` on another terminal window.

**NOTES:**  

. Add your Google Maps API key in the `src/index.template.html` file.

. It is recomended to install the chrome extension `Redux DevTools`, which can be installed from the [Chrome webstore](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).