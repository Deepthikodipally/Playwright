// Scenario 2: Search Functionality

// Positive Scenarios:
// -------------------
// 1. Valid Product Search
//    - Navigate to https://demo.opencart.com/.
//    - Search for "Laptop".
//    - Verify search results contain products with the word "Laptop".
//    - Select the first product.
//    - Verify product details page is displayed.



// 2. Search with Exact Product Name
//    - Enter product name exactly (e.g., "MacBook").
//    - Verify the correct product appears at the top of search results.

// 3. Search with Partial Name
//    - Enter partial keyword (e.g., "Lap").
//    - Verify that suggestions or results still show related products.


// Negative Scenarios:
// -------------------
// 1. Invalid Search Keyword
//    - Search for a random text (e.g., "abcdxyz").
//    - Verify "There is no product that matches the search criteria." message is displayed.

// 2. Empty Search
//    - Click the search button without typing anything.
//    - Verify that it either shows an error message OR returns all products.

// 3. Special Characters in Search
//    - Search using symbols (e.g., "@@@###").
//    - Verify that no product is found and appropriate message is shown.