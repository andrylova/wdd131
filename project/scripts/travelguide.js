// Favorites array stored in localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Sample destinations data
const destinations = [
  { name: "Nosy Be", type: "Beach", image: "images/nosybe.jpg" },
  { name: "Andasibe-Mantadia Park", type: "Park", image: "images/andasibe.jpg" },
  { name: "Antananarivo", type: "City", image: "images/antananarivo.jpg" }
];

// Function to display featured destinations on Home page
function displayFeatured() {
  const container = document.getElementById('featured-container');
  if (!container) return;
  container.innerHTML = '';
  destinations.slice(0, 3).forEach(dest => {
    container.innerHTML += `
      <div class="destination">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <button onclick="addFavorite('${dest.name}')">Add to Favorites</button>
      </div>
    `;
  });
}

// Function to display all destinations
function displayDestinations(filter = 'All') {
  const container = document.getElementById('destinations-container');
  if (!container) return;
  container.innerHTML = '';
  const filtered = filter === 'All' ? destinations : destinations.filter(d => d.type === filter);
  filtered.forEach(dest => {
    container.innerHTML += `
      <div class="destination">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <p>Type: ${dest.type}</p>
        <button onclick="addFavorite('${dest.name}')">Add to Favorites</button>
      </div>
    `;
  });
}

// Add destination to favorites
function addFavorite(name) {
  if (favorites.includes(name)) {
    alert(`${name} is already in favorites!`);
  } else {
    favorites.push(name);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert(`${name} added to favorites!`);
  }
}

// Filter buttons
document.querySelectorAll('.filter button').forEach(btn => {
  btn.addEventListener('click', () => {
    displayDestinations(btn.getAttribute('data-type'));
  });
});

// Quiz example
const quizBtn = document.getElementById('quiz-btn');
if (quizBtn) {
  quizBtn.addEventListener('click', () => {
    document.getElementById('quiz-result').textContent = "Madagascar's national parks are great for wildlife viewing!";
  });
}

// Contact form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      localStorage.setItem('contact', JSON.stringify({ name, email, message }));
      document.getElementById('form-feedback').textContent = "Thank you! Your message has been saved.";
      contactForm.reset();
    } else {
      alert("Please fill in all required fields.");
    }
  });
}

// Initialize
displayFeatured();
displayDestinations();
