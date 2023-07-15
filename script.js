const products = [
    { 
   
  id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'product1.jpg' },
    { 
   
  id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'product2.jpg' },
    // Add more products here
  ];
  
  // Function to display the home page content
  function displayHomePage() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section id="featured-products">
        <h2>Featured Products</h2>
        ${products.map(product => `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `).join('')}
      </section>
    `;
  }
  
  // Function to display the products page content
  function displayProductsPage() {
    
   
  const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section id="all-products">
        <h2>All Products</h2>
        ${products.map(product => getProductHTML(product)).join('')}
      </section>
    `;
  }
  
  // Function to display the about page content
  function displayAboutPage() {
    const mainContent = document.getElementById('main-content');
    mainContent.
    main
  
   
  innerHTML = `
      <section id="about-us">
        <h2>About Us</h2>
        <p>Some information about your company and what you offer.</p>
      </section>
    `;
  }
  
  // Function to display the contact page content
  function displayContactPage() {
    
   
  const mainContent = document.getElementById('main-content');
    mainContent.
   
  innerHTML = `
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Provide ways for customers to contact you, such as phone number or email.</p>
      </section>
    `;
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    
   
  // Add your logic to handle adding products to the cart
  }
  
  // Utility function to generate HTML for a product
  function getProductHTML(product) {
    return `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  }
  
  // Event listeners for navigation links
  document.getElementById('home-link').addEventListener('click', displayHomePage);
  document.getElementById('products-link').addEventListener('click', displayProductsPage);
  document.getElementById('about-link').addEventListener('click', displayAboutPage);
  document.getElementById('contact-link').addEventListener('click', displayContactPage);
  
  // Initial page load
  displayHomePage();