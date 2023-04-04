# LAB - Virtual Store

An online shopping portal for a fictional store

## Authors: Jeremy Cleland

## [Code Sandbox- Deployment](https://i7c31w-3000.csb.app/)
## Problem Domain

Our application will power an online storefront that will allow our users to browse our product offerings by category, place items in their shopping cart, and check-out when they are ready to make their purchase

## Core Requirements 

The core requirements and functionality are as follows:

- Display a list of our product categories
- Display a listing of products for each category, when the category  is selected
- From the product listings:
  - Click to view a full detail page about the product
  - Add the product to your shopping cart
- Shopping cart (simple version) always visible on screen
- Full shopping cart and check out screen available from main navigation

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. React
1. ES6 Classes
1. Redux Store for Application State
1. Deployed API with MongoDB storage for storing categories and products
1. Superagent or Axios for performing API Requests
1. Material UI for layout and styling
1. Test Driven Development, using Jest
1. Deployment to a cloud provider (Netlify, Amplify, or GitHub Pages)

## Phase 1: Application Setup

- Basic React Application
- Redux State Management
- State managed in memory
- Material UI Components & Styling

- ### User Stories

  - As a user, I expect to see a list of available product categories in the store so that I can easily browse products.

  - As a user, I want to choose a category and see a list of all available products matching that category.

  - As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

- #### Phase 1 Technical Requirements / Notes

  - Create a visually appealing site using Material UI.
  - Use a Redux Store to manage the state of categories and items in the store.
  - Display a list of categories from state.
  - When the user selects (clicks on) a category:
    - Identify that category as selected (change of class/display).
    - Show a list of products associated with the category.


- #### Phase 1 Application Structure 

  ├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js 
│   │   ├── products.js
│   ├── components
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json

## Phase 2: Shopping Cart

- Add items to a shopping cart
- Update quantities
- Remove items from the cart
- Show the cart in real-time on the UI

## Phase 3: Live Data

- Connect the application a live API
- Persist changes to products based on cart activity.

## Phase 4: Checkout & Detail Pages

- Refactor the store to use the latest Redux design pattern (Redux Toolkit)
- Add a cart checkout page
- Add a product details page

## Application Structure

├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cart.js
│   ├── components
│   │   ├── storefront
│   │   │   └── categories.js
│   │   │   └── current-category.js
│   │   │   └── products.js
│   │   │   └── storefront.js
│   │   ├── products
│   │   │   └── details.js
│   │   ├── cart
│   │   │   └── simplecart.js
│   │   │   └── checkout.js
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json
