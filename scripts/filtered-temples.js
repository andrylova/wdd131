// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 130825,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-889480-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Bern, Switzerland",
    dedicated: "1955, September, 11",
    area: 35246,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-784288-wallpaper.jpg"
  },
  {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "2025, May, 25",
    area: 18000,
    imageUrl: "https://via.placeholder.com/400x250"
  }
];

const container = document.getElementById("temples");

function displayTemples(list) {
  container.innerHTML = "";
  list.forEach(temple => {
    const card = document.createElement("figure");

    card.innerHTML = `
  <h2>${temple.templeName}</h2>
  <p><strong>Location:</strong> ${temple.location}</p>
  <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
  <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
`;


    container.appendChild(card);
  });
}

// Filtering
navigation.addEventListener("click", (e) => {
  if (!e.target.dataset.filter) return;

  const filter = e.target.dataset.filter;

  let filtered = temples;

  switch (filter) {
    case "old":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
  }

  displayTemples(filtered);
});

// Initial load
displayTemples(temples);
