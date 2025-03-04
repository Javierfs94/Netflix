document.addEventListener("DOMContentLoaded", function () {
  const row = document.querySelector(".carousel-container");
  const films = document.querySelectorAll(".film");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  rightArrow.addEventListener("click", function () {
    row.scrollBy({ left: row.offsetWidth, behavior: "smooth" });
  });

  leftArrow.addEventListener("click", function () {
    row.scrollBy({ left: -row.offsetWidth, behavior: "smooth" });
  });

  const activeIndicator = document.querySelector(".indicators .active");
  if (activeIndicator && activeIndicator.previousElementSibling) {
    activeIndicator.previousElementSibling.classList.add("active");
    activeIndicator.classList.remove("active");
  }

  const pageNum = Math.ceil(films.length / 5);
  const indicatorsContainer = document.querySelector(".indicators");

  for (let i = 0; i < pageNum; i++) {
    const indicador = document.createElement("button");
    if (i === 0) {
      indicador.classList.add("active");
    }
    indicatorsContainer.appendChild(indicador);
    indicador.addEventListener("click", function (e) {
      row.scrollLeft = i * row.offsetWidth;
      document.querySelector(".indicators .active").classList.remove("active");
      e.target.classList.add("active");
    });
  }

  films.forEach(function (film) {
    film.addEventListener("mouseenter", function (e) {
      const elemento = e.currentTarget;
      setTimeout(function () {
        films.forEach((f) => f.classList.remove("hover"));
        elemento.classList.add("hover");
      }, 300);
    });
  });

  row.addEventListener("mouseleave", function () {
    films.forEach((film) => film.classList.remove("hover"));
  });

    
});
