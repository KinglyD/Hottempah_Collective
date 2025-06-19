// main.js

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.className;

  // Home page logic
  if (page.includes("page-home")) {
    const list = document.getElementById("home-event-list");
    if (list) {
      list.innerHTML = `
        <article class="event-card">
          <img src="assets/event1.jpg" alt="Night Vibes Kigali">
          <div class="info">
            <h3>Night Vibes Kigali</h3>
            <p class="meta">Fri • 27 Jun • The Hut, Kigali</p>
            <p class="price">5 000 RWF</p>
            <a class="btn sm" href="events.html">Get Ticket</a>
          </div>
        </article>
      `;
    }
  }

  // Events page logic
  if (page.includes("page-events")) {
    const eventsData = [
      { title: "Trap Safari", date: "Sat • 05 Jul • Nairobi Warehouse", price: "10 000 KES", img: "assets/event2.jpg" },
      { title: "Afro‑Groove Night", date: "Sat • 12 Jul • Le Rooftop, Kigali", price: "7 000 RWF", img: "assets/event3.jpg" }
    ];
    const list = document.getElementById("event-list");
    if (list) {
      list.innerHTML = eventsData.map(event => `
        <article class="event-card">
          <img src="${event.img}" alt="${event.title}">
          <div class="info">
            <h3>${event.title}</h3>
            <p class="meta">${event.date}</p>
            <p class="price">${event.price}</p>
            <button class="btn primary sm">Buy Ticket</button>
          </div>
        </article>
      `).join("");
    }
  }

  // Creators page logic
  if (page.includes("page-creators")) {
    const creators = [
      { name: "DJ Ama", city: "Lagos", genre: "Afro-House", img: "assets/artist1.jpg" },
      { name: "Mzizi", city: "Nairobi", genre: "Afro-Fusion", img: "assets/artist2.jpg" }
    ];
    const list = document.getElementById("creator-list");
    if (list) {
      list.innerHTML = creators.map(c => `
        <article class="creator-card">
          <img src="${c.img}" alt="${c.name}">
          <h3>${c.name}</h3>
          <p>${c.city} • ${c.genre}</p>
          <a href="shops.html" class="btn sm">View Shop</a>
        </article>
      `).join("");
    }
  }

  // Shops page logic
  if (page.includes("page-shops")) {
    const products = [
      { title: "Kigali Vibes Hoodie", price: "25 000 RWF", img: "assets/hoodie.jpg" },
      { title: "Afro Groove Cap", price: "10 000 RWF", img: "assets/cap.jpg" }
    ];
    const list = document.getElementById("shop-list");
    if (list) {
      list.innerHTML = products.map(p => `
        <article class="shop-card">
          <img src="${p.img}" alt="${p.title}">
          <div class="info">
            <h3>${p.title}</h3>
            <p class="price">${p.price}</p>
            <button class="btn primary sm">Add to Cart</button>
          </div>
        </article>
      `).join("");
    }
  }

  // Login page logic
  if (page.includes("page-login")) {
    const form = document.getElementById("login-form");
    form?.addEventListener("submit", e => {
      e.preventDefault();
      alert("🔒 Demo only — real auth coming soon!");
    });
  }
});
