**************************************GitHub Link**************************************************
https://github.com/sana2990/ShoppyGlobe/tree/main/shoppyglobe

*****************************About Application*****************************************************
The application contains multiple pages connected through React Router. Users can navigate between:

Home page
Product details page
Cart page
Checkout page

Products are fetched dynamically from an external API, so an active internet connection is required for product data to load properly.

The application also uses Redux Toolkit for global state management. The Redux Provider is configured in main.jsx, allowing all components to access shared cart and search data through the Redux store.


***********************************User Guide****************************************************
When the application starts, the user is taken to the Home page where all available products are displayed. Each product card contains the product image, product name, and price. Users can browse through the available products and click on any product card to open the detailed product page.

On the product details page, users can view complete information about the selected product, including:

Product image
Product description
Product price

An “Add to Cart” button is available on this page. Pressing this button adds the product to the shopping cart. If the product is already present in the cart, the quantity automatically increases instead of creating a duplicate item. After adding the product, the application redirects the user to the Cart page.

The Header section of the application contains:

Search bar
Search button
Home button
Cart icon

The Search input box allows users to type the name of a product they want to find. After typing the product name, pressing the Search button filters the products shown on the Home page according to the entered text. If the search box is empty, all products are displayed normally.

The Home button redirects the user back to the main product listing page at any time.

The Cart icon opens the Cart page. A small badge appears on top of the cart icon showing the total number of items currently added to the cart.

Inside the Cart page, users can:

View all added products
See product quantity
View total price
Modify quantities
Remove products

Each cart item contains three main buttons:

“+” button → increases product quantity
“–” button → decreases product quantity
“Remove” button → completely removes the product from the cart

The quantity cannot go below 1, preventing invalid cart values.

At the top of the Cart page, the application displays the Total Amount. This total is calculated automatically based on:

Product price
Product quantity
Total number of items in the cart

If products exist in the cart, a Checkout button becomes visible. Pressing this button opens the Checkout page.

The Checkout page displays:

All selected products
Product quantities
Final total payable amount

This acts as the final summary page before a payment process would normally occur in a full ecommerce system.

The application also includes an Error Page. If a user enters an invalid URL or route that does not exist, the application automatically displays a custom “404 Page Not Found” screen with an option to return to the Home page.

The application is fully responsive, meaning it adjusts automatically for:

Mobile devices
Tablets
Desktop screens

This ensures all buttons, product cards, navigation links, and forms remain usable on smaller screens.