$(function() {
    const row = document.querySelector(".carousel-container");
    const films = document.querySelectorAll(".film");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");

    leftArrow.addEventListener("click", () => {
        row.scrollLeft -= row.offsetWidth;
        const activeIndicator = document.querySelector(".indicators .active");
        if (activeIndicator.previousSibling) {
            activeIndicator.previousSibling.classList.add("active");
            activeIndicator.classList.remove("active");
        }
    });

    rightArrow.addEventListener("click", () => {
        row.scrollLeft += row.offsetWidth;
        const activeIndicator = document.querySelector(".indicators .active");
        if (activeIndicator.nextSibling) {
            activeIndicator.nextSibling.classList.add("active");
            activeIndicator.classList.remove("active");
        }
    });

    const pageNum = Math.ceil(films.length / 5);
    for (let i = 0; i < pageNum; i++) {
        const indicador = document.createElement("button");
        if (i === 0) {
            indicador.classList.add("active");
        }
        document.querySelector(".indicators").appendChild(indicador);
        indicador.addEventListener("click", (e) => {
            row.scrollLeft = i * row.offsetWidth;
            document.querySelector(".indicators .active").classList.remove("active");
            e.target.classList.add("active");
        });
    }

    films.forEach((film) => {
        film.addEventListener("mouseenter", (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                films.forEach(film => film.classList.remove("hover"));
                elemento.classList.add("hover");
            }, 300);
        });
    });

    row.addEventListener("mouseleave", () => {
        films.forEach(film => film.classList.remove("hover"));
    });


    $.ajax({
        url: 'http://localhost:8080/film/all',
        // data : { id : 123 , name: "", genre:""},
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(json) {
            console.log("Success request");
        },

        error: function(xhr, status) {
            console.log('Sorry, there was a problem');
        },

        complete: function(xhr, status) {
            console.log('Request done');
        }
    });

});