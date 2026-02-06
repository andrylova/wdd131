let count = localStorage.getItem("reviewCount") || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("reviewCount").textContent = count;

// footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("modified").textContent = document.lastModified;
