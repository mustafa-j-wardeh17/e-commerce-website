# E-Commerce Website

Welcome to our React-based e-commerce website! This platform offers a seamless shopping experience with features like product browsing, secure payment processing, and more.

## Features

- **User Authentication**: Utilizing Firebase authentication for secure user login/signup.
- **Product Search and Sort**: Match-Sorter and Sort-By allow easy product discovery.
- **Payment Processing**: React Stripe Checkout integrates Stripe for secure payments.
- **State Management**: Redux and Redux Persist manage application state efficiently.
- **Navigation**: React Router DOM enables smooth navigation between pages.
- **Toast Notifications**: React Toastify provides non-intrusive notifications for user actions.

## Libraries Used

- `axios`: For HTTP requests.
- `firebase`: For authentication, real-time database, and hosting.
- `localforage`: For offline data storage.
- `match-sorter`: For searching and sorting products.
- `react`: Core library for building UI components.
- `react-dom`: For rendering React components in the DOM.
- `react-redux`: For state management.
- `react-router-dom`: For client-side routing.
- `react-stripe-checkout`: For Stripe integration.
- `react-toastify`: For toast notifications.
- `redux`: For predictable state management.
- `redux-persist`: For persisting Redux store data.
- `sort-by`: For sorting product listings.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:
```
cd <project-folder>
npm install
```

3. Set up Firebase:
- Create a Firebase project.
- Enable Authentication .
- Copy Firebase config and paste it into your project's Firebase configuration.

4. Configure Stripe:
-Set up a Stripe account.
-Obtain Stripe API keys and add them to your project.

5. Start the development server:

```
npm start
```
