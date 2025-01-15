document.addEventListener('DOMContentLoaded', function() { 
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija(){
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().top < 1){
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

    });
}

function crearGaleria(){
    const  CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i=1;i<=CANTIDAD_IMAGENES ; i++){
        const imagen = document.createElement('IMG');
        imagen.src=`src/img/gallery/full/${i}.jpg`;
        imagen.alt='Imagen galeria';

        
        //*Event Handler : Es una funcion que se ejecuta cuando un evento ocurre, en este caso el evento es el click
        imagen.onclick = function(){
            mostrarImagen(i);
        }
        
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i){
    const imagen = document.createElement('IMG');
    imagen.src=`src/img/gallery/full/${i}.jpg`;
    imagen.alt='Imagen galeria';
    
    //*Generar modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarmodal;

    //*Agregar boton de cerrar\
    const botonCerrar = document.createElement('BUTTON');
    botonCerrar.textContent = 'X';
    botonCerrar.classList.add('btn-cerrar');
    botonCerrar.onclick = cerrarmodal;

    //*Agregar imagen y boton al modal 
    modal.appendChild(imagen);
    modal.appendChild(botonCerrar);

    //*Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

}

function cerrarmodal(){
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        body.classList.remove('overflow-hidden');
    } , 500);
}

function resaltarEnlace(){
    document.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navegacion-principal a');

        let actual ='';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual= section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href')=== '#'+ actual){
                link.classList.add('active');
            } 
         })
    });
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a');

    navLinks.forEach(link => {
        link.addEventListener('click', e =>{
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}