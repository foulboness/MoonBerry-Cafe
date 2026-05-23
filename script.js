const modal = document.getElementById("recipe-modal");
const closeBtn = document.getElementById("close-modal");

const titleEl = document.getElementById("modal-title");
const imgEl = document.getElementById("modal-image");

const ingEl = document.getElementById("modal-ingredients");
const dirEl = document.getElementById("modal-directions");
const tipEl = document.getElementById("modal-tips");

const buttons = document.querySelectorAll(".recipe-btn");

const filterButtons = document.querySelectorAll(".filter-btn");
const recipes = document.querySelectorAll(".recipe-card");

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".recipe-card");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = searchInput.value.toLowerCase().trim();

  cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();

    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // active state
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    recipes.forEach(card => {
      const category = card.querySelector(".recipe-btn").dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {

    titleEl.textContent = btn.dataset.title;
    imgEl.src = btn.dataset.img;

    ingEl.innerHTML = btn.dataset.ingredients
  .split("\n")
  .map(item => `♡ ${item}`)
  .join("<br>");
    dirEl.innerHTML = btn.dataset.directions
  .split("\n")
  .map(step => `✧ ${step}`)
  .join("<br>");
    tipEl.textContent = btn.dataset.tips || "";

    modal.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }

});


