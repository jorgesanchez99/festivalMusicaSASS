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
}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkgeyBcclxuICAgIG5hdmVnYWNpb25GaWphKCk7XHJcbiAgICBjcmVhckdhbGVyaWEoKTtcclxuICAgIHJlc2FsdGFyRW5sYWNlKCk7XHJcbiAgICBzY3JvbGxOYXYoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBuYXZlZ2FjaW9uRmlqYSgpe1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG4gICAgY29uc3Qgc29icmVGZXN0aXZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2JyZS1mZXN0aXZhbCcpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHNvYnJlRmVzdGl2YWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDwgMSl7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXJHYWxlcmlhKCl7XHJcbiAgICBjb25zdCAgQ0FOVElEQURfSU1BR0VORVMgPSAxNjtcclxuICAgIGNvbnN0IGdhbGVyaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsZXJpYS1pbWFnZW5lcycpO1xyXG5cclxuICAgIGZvcihsZXQgaT0xO2k8PUNBTlRJREFEX0lNQUdFTkVTIDsgaSsrKXtcclxuICAgICAgICBjb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgICAgICBpbWFnZW4uc3JjPWBzcmMvaW1nL2dhbGxlcnkvZnVsbC8ke2l9LmpwZ2A7XHJcbiAgICAgICAgaW1hZ2VuLmFsdD0nSW1hZ2VuIGdhbGVyaWEnO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLypFdmVudCBIYW5kbGVyIDogRXMgdW5hIGZ1bmNpb24gcXVlIHNlIGVqZWN1dGEgY3VhbmRvIHVuIGV2ZW50byBvY3VycmUsIGVuIGVzdGUgY2FzbyBlbCBldmVudG8gZXMgZWwgY2xpY2tcclxuICAgICAgICBpbWFnZW4ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIG1vc3RyYXJJbWFnZW4oaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdhbGVyaWEuYXBwZW5kQ2hpbGQoaW1hZ2VuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9zdHJhckltYWdlbihpKXtcclxuICAgIGNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lNRycpO1xyXG4gICAgaW1hZ2VuLnNyYz1gc3JjL2ltZy9nYWxsZXJ5L2Z1bGwvJHtpfS5qcGdgO1xyXG4gICAgaW1hZ2VuLmFsdD0nSW1hZ2VuIGdhbGVyaWEnO1xyXG4gICAgXHJcbiAgICAvLypHZW5lcmFyIG1vZGFsXHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgIG1vZGFsLm9uY2xpY2sgPSBjZXJyYXJtb2RhbDtcclxuXHJcbiAgICAvLypBZ3JlZ2FyIGJvdG9uIGRlIGNlcnJhclxcXHJcbiAgICBjb25zdCBib3RvbkNlcnJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xyXG4gICAgYm90b25DZXJyYXIudGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICBib3RvbkNlcnJhci5jbGFzc0xpc3QuYWRkKCdidG4tY2VycmFyJyk7XHJcbiAgICBib3RvbkNlcnJhci5vbmNsaWNrID0gY2VycmFybW9kYWw7XHJcblxyXG4gICAgLy8qQWdyZWdhciBpbWFnZW4geSBib3RvbiBhbCBtb2RhbCBcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGltYWdlbik7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChib3RvbkNlcnJhcik7XHJcblxyXG4gICAgLy8qQWdyZWdhciBhbCBIVE1MXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2VycmFybW9kYWwoKXtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsPy5yZW1vdmUoKTtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXJmbG93LWhpZGRlbicpO1xyXG4gICAgfSAsIDUwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2FsdGFyRW5sYWNlKCl7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmVnYWNpb24tcHJpbmNpcGFsIGEnKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdHVhbCA9Jyc7XHJcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gc2VjdGlvbi5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSAoc2VjdGlvblRvcCAtIHNlY3Rpb25IZWlnaHQgLyAzKSl7XHJcbiAgICAgICAgICAgICAgICBhY3R1YWw9IHNlY3Rpb24uaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZihsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpPT09ICcjJysgYWN0dWFsKXtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2Nyb2xsTmF2KCl7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZlZ2FjaW9uLXByaW5jaXBhbCBhJyk7XHJcblxyXG4gICAgbmF2TGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uU2Nyb2xsID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlY3Rpb25TY3JvbGwpO1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59Il0sImZpbGUiOiJhcHAuanMifQ==
