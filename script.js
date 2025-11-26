function showAll() {
  document.querySelectorAll(".skills-section").forEach(sec => sec.style.display = "block");
}

function filterByCategory(cat) {
  document.querySelectorAll(".skills-section").forEach(sec => {
    sec.style.display = sec.id === cat ? "block" : "none";
  });
}

function searchSkills() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
