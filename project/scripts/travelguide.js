// Load favorites from localStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Destinations data
const destinations = [
  // BEACHES
  { name: "Nosy Be", type: "Beach", image: "images/nosibe.jpg", description: "Nosy Be is a popular island destination known for its white sandy beaches, turquoise waters, and relaxed atmosphere. Ideal for swimming, snorkeling, and tropical sunsets." },
  { name: "Foulpointe", type: "Beach", image: "images/foulpointe.jpg", description: "Foulpointe is a coastal town on Madagascar’s east coast. Calm lagoon, palm-lined beaches, and peaceful environment attract visitors." },
  { name: "Sainte Marie", type: "Beach", image: "images/saintemarie.jpg", description: "Sainte Marie is an island famous for beaches, pirate history, and whale watching. Offers a quiet and authentic island experience." },

  // CITIES
  { name: "Antananarivo", type: "City", image: "images/antananarivo.jpg", description: "Antananarivo, Madagascar's capital, is the political and cultural hub with markets, historical sites, and hilltop views." },
  { name: "Antsirabe", type: "City", image: "images/antsirabe.jpg", description: "Antsirabe is a highland city known for cool climate, colonial architecture, thermal springs, and local crafts." },
  { name: "Morondava", type: "City", image: "images/morondava.jpg", description: "Morondava is famous for the Avenue of Baobabs and is a gateway to natural attractions with a relaxed seaside vibe." },

  // PARKS
  { name: "Ranomafana National Park", type: "Park", image: "images/ranomafana.jpg", description: "Near Fianarantsoa, Ranomafana has lush rainforest, waterfalls, and rare species including lemurs and birds." },
  { name: "Tsingy de Bemaraha", type: "Park", image: "images/tsingy.jpg", description: "UNESCO World Heritage Site with dramatic limestone formations, caves, suspension bridges, and unique wildlife." },
  { name: "Ankarafantsika National Park", type: "Park", image: "images/ankarafantsika.jpg", description: "Dry forests, lakes, and diverse bird species make it a top birdwatching spot." },
  { name: "Isalo National Park", type: "Park", image: "images/isalo.jpg", description: "Isalo features sandstone formations, canyons, natural pools, and hiking trails. One of Madagascar’s most visited parks." }
];

// Display featured destinations on Home page
function displayFeatured() {
  const container = document.getElementById("featured-container");
  if (!container) return;

  container.innerHTML = "";
  destinations.slice(0, 3).forEach(dest => {
    container.innerHTML += `
      <article class="destination">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <button onclick="addFavorite('${dest.name}')">Add to Favorites</button>
      </article>
    `;
  });
}

// Display destinations with filtering
function displayDestinations(filter = "All") {
  const container = document.getElementById("destinations-container");
  if (!container) return;

  container.innerHTML = "";
  const filtered = filter === "All" ? destinations : destinations.filter(dest => dest.type === filter);

  filtered.forEach(dest => {
    container.innerHTML += `
      <article class="destination">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
        <p><strong>Type:</strong> ${dest.type}</p>
        <button onclick="addFavorite('${dest.name}')">Add to Favorites</button>
      </article>
    `;
  });
}

// Add destination to favorites with inline feedback
function addFavorite(name) {
  const feedback = document.getElementById("form-feedback") || document.createElement("div");
  feedback.style.color = "green";
  feedback.style.marginTop = "0.5rem";
  feedback.id = "form-feedback";
  document.body.prepend(feedback);

  if (favorites.includes(name)) {
    feedback.textContent = `${name} is already in your favorites.`;
  } else {
    favorites.push(name);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    feedback.textContent = `${name} has been added to your favorites.`;
  }
}

// Filter buttons
document.querySelectorAll(".filter button").forEach(button => {
  button.addEventListener("click", () => displayDestinations(button.dataset.type));
});

// Culture page quiz facts
const facts = [
  "Madagascar has over 100 species of lemurs found nowhere else in the world.",
  "The island is the world’s largest producer of vanilla.",
  "Madagascar has landscapes ranging from rainforests to deserts and limestone formations."
];
const quizBtn = document.getElementById("quiz-btn");
if (quizBtn) {
  quizBtn.addEventListener("click", () => {
    const fact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("quiz-result").textContent = fact;
  });
}

// Initialize content
displayFeatured();
displayDestinations();
