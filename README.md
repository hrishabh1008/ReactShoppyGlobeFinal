# ShoppyGlobe - Modern E-commerce React Application

ShoppyGlobe is a feature-rich e-commerce web application built with modern React and cutting-edge web technologies. It provides a seamless shopping experience with product browsing, detailed product views, cart management, and more.

## 🚀 Features

- **Modern React (v19.0.0)** - Utilizing the latest React features and improvements
- **Lightning Fast Development** - Powered by Vite for instant HMR (Hot Module Replacement)
- **Responsive Design** - Fully responsive UI that works on desktop, tablet, and mobile devices
- **Product Catalog** - Browse through a diverse range of products with search functionality
- **Product Details** - View comprehensive information about products
- **Shopping Cart** - Add, remove, and adjust quantities of products in cart
- **State Management** - Robust state handling with Redux Toolkit and React-Redux
- **Client-Side Routing** - Seamless navigation with React Router DOM v7
- **API Integration** - Efficient HTTP requests with Axios
- **Styling** - Modern styling with TailwindCSS
- **Type Safety** - TypeScript support for better development experience
- **Code Quality** - ESLint configuration for maintaining code quality
- **Lazy Loading** - Components are loaded on demand for better performance
- **Error Handling** - Elegant error boundaries and fallback UI

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.0.0
- **State Management:** Redux Toolkit 2.7.0, React Redux 9.2.0
- **Routing:** React Router DOM 7.5.3
- **HTTP Client:** Axios 1.9.0
- **Styling:** TailwindCSS 4.1.5
- **Build Tool:** Vite 6.3.1
- **Code Quality:** ESLint 9.22.0
- **Package Manager:** npm

## 📁 Project Structure

```
shoppyGlobe/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images, fonts, and other static assets
│   │   ├── Cart.jsx       # Shopping cart page
│   │   ├── CartItem.jsx   # Individual cart item component
│   │   ├── Header.jsx     # App header with navigation
│   │   ├── NotFound.jsx   # 404 page
│   │   ├── ProductDetail.jsx # Detailed product view
│   │   ├── ProductItem.jsx   # Individual product card
│   │   └── ProductList.jsx   # Product catalog page
│   ├── redux/             # Redux state management
│   │   ├── cartSlice.js   # Cart state management
│   │   ├── productsListSlice.js # Products state management
│   │   └── store.js       # Redux store configuration
│   ├── utils/             # Utility functions
│   ├── App.css            # App-wide styles
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── .gitignore             # Git ignore file
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependencies
└── vite.config.js         # Vite configuration
```

## 🔄 Application Flow

1. **Initialization**: 
   - Application bootstraps from `main.jsx`
   - Redux store is initialized with product list and cart slices
   - React Router is configured for navigation
   - Lazy loading is set up for optimized performance

2. **Home Page / Product List**:
   - The application starts at the root route `/` showing `ProductList.jsx`
   - Header component renders with navigation and cart icon
   - ProductList component fetches products from an API
   - Products are displayed in a responsive grid via ProductItem components
   - Each product card displays essential information and "Add to Cart" button

3. **Product Details**:
   - Clicking on a product navigates to `/productlist/:id` route
   - ProductDetail component loads with comprehensive product information
   - Users can view product specifications, price, and images
   - "Add to Cart" functionality is available from the detail page

4. **Shopping Cart**:
   - Cart icon in the header shows the number of items
   - Clicking on the cart icon navigates to `/cart` route
   - Cart component displays all added items using CartItem components
   - Users can increase/decrease quantities or remove items
   - Total price is calculated based on items and quantities
   - "Checkout" option is available for completing the purchase

5. **Error Handling**:
   - If a user navigates to a non-existent route, the NotFound component is shown
   - Suspense components provide loading indicators during lazy-loading

## 🛍️ Redux State Management

The application uses Redux Toolkit for state management:

- **Cart Slice**: Manages the shopping cart state including items, quantities, and totals
- **Products List Slice**: Manages product catalog state including product fetching and filtering

## 🚀 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/hrishabh1008/ReactShoppyGlobeFinal.git
cd shoppyGlobe
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the production build:
```bash
npm run preview
```

## 🔍 Code Quality

The project maintains high code quality through:

- ESLint configuration for code linting
- Structured component organization
- Consistent coding patterns
- Type checking with TypeScript
- Error boundaries for graceful error handling

## 📱 Responsive Design

ShoppyGlobe is built with mobile-first approach, ensuring a great user experience across:
- Desktop computers
- Tablets
- Mobile phones

The responsive layout automatically adjusts based on screen size, providing optimal viewing and interaction experience.

## 🔗 GitHub Repository

[https://github.com/hrishabh1008/ReactShoppyGlobeFinal.git]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.