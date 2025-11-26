function showAll() {
  document.querySelectorAll(".skills-section").forEach(sec => sec.style.display = "block");
}

function scrollToSection(id, offset = 100) { 
  if (id === 'top') {
    window.scrollTo({ top: offset, behavior: 'smooth' });
  } else {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
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
