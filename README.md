# E-comerce

for Runing this project use:
npm i
npm run dev

## 1. Product Listing
Display a list of available products on the homepage.

Each product will have basic details like name, price, image, and category.

## 2. Product Filtering by Category
Allow users to filter products based on their category (e.g., Electronics, Clothing, Furniture, etc.).

Filters should dynamically update the displayed products without page reload.

## 3. User Registration with Field Validation
Provide a user registration form with fields like Name, Email, and Password.

Implement validation rules:

All fields must be filled.

Email must be in a valid format.

Password should meet minimum security criteria (e.g., minimum 6 characters).

On successful registration, save user data to localStorage.

## 4. User Login with Email and Validation
Create a login form where users can log in using their registered email and password.

Implement login validations:

Ensure the entered email exists.

Ensure the password matches.

After successful login, store the user's unique ID in localStorage to manage session tracking.

## 5. User Cart Functionality
Allow logged-in users to add products to their personal cart.

Display the cart items with options to increase quantity or remove items.

Cart data should be persistent (saved to localStorage) even after page reloads.

## 6. Multi-User Data Handling
When multiple users are registered:

Each user should have a unique cart associated with their unique user ID.

When a user adds products to the cart, the data should be saved under their specific ID in localStorage.

On login, only the currently logged-in user's cart data should be retrieved and displayed.
