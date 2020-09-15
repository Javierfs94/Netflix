$(function() {
    const fila = document.querySelector(".carousel-container");
    const peliculas = document.querySelectorAll(".movie");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    
    leftArrow.addEventListener("click", () => {
        fila.scrollLeft -= fila.offsetWidth;
        const indicadorActivo = document.querySelector(".indicadores .activo");
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add("activo");
            indicadorActivo.classList.remove("activo");
        }
    });
    
    rightArrow.addEventListener("click", () => {
        fila.scrollLeft += fila.offsetWidth;
        const indicadorActivo = document.querySelector(".indicadores .activo");
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add("activo");
            indicadorActivo.classList.remove("activo");
        }
    });
    
    const pageNum = Math.ceil(peliculas.length / 5);
    for (let i = 0; i < pageNum; i++) {
        const indicador = document.createElement("button");
        if (i === 0) {
            indicador.classList.add("activo");
        }
        document.querySelector(".indicadores").appendChild(indicador);
        indicador.addEventListener("click", (e) =>{
            fila.scrollLeft = i * fila.offsetWidth;
            document.querySelector(".indicadores .activo").classList.remove("activo");
            e.target.classList.add("activo");
        });
    }
    
    peliculas.forEach((movie) => {
        movie.addEventListener("mouseenter", (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculas.forEach(movie => movie.classList.remove("hover"));
                elemento.classList.add("hover");
            }, 300);
        });
    });
    
    fila.addEventListener("mouseleave", () => {
        peliculas.forEach(movie => movie.classList.remove("hover"));
    });
    
 
    $.ajax({
        url : 'http://localhost:8080/movie/all',
        // data : { id : 123 , name: "", genre:""},
        type : 'GET',
        crossDomain: true,
        dataType : 'json',
        success : function(json) {
            console.log("Se ha realizado la petición correctamente");
        },
    
        error : function(xhr, status) {
            console.log('Disculpe, existió un problema');
        },
    
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });



});

