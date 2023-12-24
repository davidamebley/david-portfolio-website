# David Amebley - Portfolio Website
This is a full-stack portfolio website with Sanity as the backend and ReactJS as the front end.

## Live
The application is running live at https://davidamebley.com/

## Contents

The project contains the following directories:

- `/frontend` - Contains the React app code

- `/backend` - Contains the Sanity studio code

The React app fetches data from the Sanity studio and uses it to display the portfolio content.

## Running Locally

To run this project locally:

1. Run `npm install` in both the `frontend` and the `backend` directories to install dependencies
2. In the `/frontend` directory, run `npm run start` to start the React dev server
3. Run `sanity start` to run the Sanity studio on localhost:3333

The React app will run on localhost:3000 and fetch data from the local Sanity studio.

## Deployment

The React app is deployed on Netlify and the Sanity studio on Sanity's hosted backend. The frontend URL is configured to fetch data from the production Sanity dataset.
