// Sample data for the menu with image URLs
const menuItems = [
    {
        name: "Paneer Tikka",
        category: "appetizers",
        description: "Spiced paneer cubes grilled to perfection.",
        price: "₹250",
        image: "paneer_tikka.jpg" // Add the path to your image
    },
    {
        name: "Chicken Biryani",
        category: "main-courses",
        description: "Aromatic rice with tender chicken pieces.",
        price: "₹350",
        image: "chicken_biryani.jpg" // Add the path to your image
    },
    {
        name: "Gulab Jamun",
        category: "desserts",
        description: "Soft milk-based balls soaked in sweet syrup.",
        price: "₹120",
        image: "gulab_jamun.jpg" // Add the path to your image
    },
    {
        name: "Samosa",
        category: "appetizers",
        description: "Crispy fried pastry with spiced potato filling.",
        price: "₹40",
        image: "samosa.jpg" // Add the path to your image
    },
    {
        name: "Butter Chicken",
        category: "main-courses",
        description: "Creamy chicken in a rich tomato-based sauce.",
        price: "₹400",
        image: "butter_chicken.jpg" // Add the path to your image
    },
    {
        name: "Rasgulla",
        category: "desserts",
        description: "Soft spongy balls made from chhena dipped in sugar syrup.",
        price: "₹150",
        image: "rasgulla.jpg" // Add the path to your image
    }
  ];
  
  // Function to display menu items
  function displayMenuItems(menuItems) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';
  
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item', 'show');
        menuItem.setAttribute('data-category', item.category);
  
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-image"/>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;
        menu.appendChild(menuItem);
    });
  }
  
  // Function to filter menu items by category
  function filterMenu(category) {
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(item => {
        if (category === 'all') {
            item.classList.add('show');
        } else {
            item.getAttribute('data-category') === category
                ? item.classList.add('show')
                : item.classList.remove('show');
        }
    });
  }
  
  // Initialize the menu on page load
  window.onload = function() {
    displayMenuItems(menuItems);
  };
  