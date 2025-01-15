function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<1?e.classList.add("fixed"):e.classList.remove("fixed")}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=16;t++){const n=document.createElement("PICTURE");n.innerHTML=`\n    <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n    <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="imagen galeria">\n    `,n.onclick=function(){mostrarImagen(t)},e.appendChild(n)}}function mostrarImagen(e){const t=document.createElement("PICTURE");t.innerHTML=`\n    <source srcset="build/img/gallery/full/${e}.avif" type="image/avif">\n    <source srcset="build/img/gallery/full/${e}.webp" type="image/webp">\n    <img loading="lazy" width="200" height="300" src="build/img/gallery/full/${e}.jpg" alt="imagen galeria">\n    `;const n=document.createElement("DIV");n.classList.add("modal"),n.onclick=cerrarmodal;const a=document.createElement("BUTTON");a.textContent="X",a.classList.add("btn-cerrar"),a.onclick=cerrarmodal,n.appendChild(t),n.appendChild(a);const c=document.querySelector("body");c.classList.add("overflow-hidden"),c.appendChild(n)}function cerrarmodal(){const e=document.querySelector(".modal"),t=document.querySelector("body");e.classList.add("fade-out"),setTimeout((()=>{e?.remove(),t.classList.remove("overflow-hidden")}),500)}function resaltarEnlace(){document.addEventListener("scroll",(function(){const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let n="";e.forEach((e=>{const t=e.offsetTop,a=e.clientHeight;window.scrollY>=t-a/3&&(n=e.id)})),t.forEach((e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+n&&e.classList.add("active")}))}))}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})}))}))}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()}));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibmFtZXMiOlsibmF2ZWdhY2lvbkZpamEiLCJoZWFkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzb2JyZUZlc3RpdmFsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNyZWFyR2FsZXJpYSIsImdhbGVyaWEiLCJpIiwiaW1hZ2VuIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsIm9uY2xpY2siLCJtb3N0cmFySW1hZ2VuIiwiYXBwZW5kQ2hpbGQiLCJtb2RhbCIsImNlcnJhcm1vZGFsIiwiYm90b25DZXJyYXIiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJzZXRUaW1lb3V0IiwicmVzYWx0YXJFbmxhY2UiLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZMaW5rcyIsImFjdHVhbCIsImZvckVhY2giLCJzZWN0aW9uIiwic2VjdGlvblRvcCIsIm9mZnNldFRvcCIsInNlY3Rpb25IZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxZIiwiaWQiLCJsaW5rIiwiZ2V0QXR0cmlidXRlIiwic2Nyb2xsTmF2IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VjdGlvblNjcm9sbCIsInRhcmdldCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiXSwic291cmNlcyI6WyJhcHAuanMiXSwibWFwcGluZ3MiOiJBQU9BLFNBQVNBLGlCQUNMLE1BQU1DLEVBQVNDLFNBQVNDLGNBQWMsV0FDaENDLEVBQWdCRixTQUFTQyxjQUFjLG1CQUU3Q0UsT0FBT0MsaUJBQWlCLFVBQVUsV0FDM0JGLEVBQWNHLHdCQUF3QkMsSUFBTSxFQUMzQ1AsRUFBT1EsVUFBVUMsSUFBSSxTQUVyQlQsRUFBT1EsVUFBVUUsT0FBTyxRQUdoQyxHQUNKLENBRUEsU0FBU0MsZUFDTCxNQUNNQyxFQUFVWCxTQUFTQyxjQUFjLHFCQUV2QyxJQUFJLElBQUlXLEVBQUUsRUFBRUEsR0FIZSxHQUdRQSxJQUFJLENBQ25DLE1BQU1DLEVBQVNiLFNBQVNjLGNBQWMsV0FDdENELEVBQU9FLFVBQVksaURBQ21CSCwyRUFDQUEsNkdBQ2tDQSxxQ0FLeEVDLEVBQU9HLFFBQVUsV0FDYkMsY0FBY0wsRUFDbEIsRUFFQUQsRUFBUU8sWUFBWUwsRUFDeEIsQ0FDSixDQUVBLFNBQVNJLGNBQWNMLEdBQ25CLE1BQU1DLEVBQVNiLFNBQVNjLGNBQWMsV0FDdENELEVBQU9FLFVBQVksZ0RBQ3NCSCwwRUFDQUEsNEdBQ2tDQSxxQ0FJM0UsTUFBTU8sRUFBUW5CLFNBQVNjLGNBQWMsT0FDckNLLEVBQU1aLFVBQVVDLElBQUksU0FDcEJXLEVBQU1ILFFBQVVJLFlBR2hCLE1BQU1DLEVBQWNyQixTQUFTYyxjQUFjLFVBQzNDTyxFQUFZQyxZQUFjLElBQzFCRCxFQUFZZCxVQUFVQyxJQUFJLGNBQzFCYSxFQUFZTCxRQUFVSSxZQUd0QkQsRUFBTUQsWUFBWUwsR0FDbEJNLEVBQU1ELFlBQVlHLEdBR2xCLE1BQU1FLEVBQU92QixTQUFTQyxjQUFjLFFBQ3BDc0IsRUFBS2hCLFVBQVVDLElBQUksbUJBQ25CZSxFQUFLTCxZQUFZQyxFQUVyQixDQUVBLFNBQVNDLGNBQ0wsTUFBTUQsRUFBUW5CLFNBQVNDLGNBQWMsVUFDL0JzQixFQUFPdkIsU0FBU0MsY0FBYyxRQUNwQ2tCLEVBQU1aLFVBQVVDLElBQUksWUFDcEJnQixZQUFXLEtBQ1BMLEdBQU9WLFNBQ1BjLEVBQUtoQixVQUFVRSxPQUFPLGtCQUFrQixHQUN4QyxJQUNSLENBRUEsU0FBU2dCLGlCQUNMekIsU0FBU0ksaUJBQWlCLFVBQVUsV0FDaEMsTUFBTXNCLEVBQVcxQixTQUFTMkIsaUJBQWlCLFdBQ3JDQyxFQUFXNUIsU0FBUzJCLGlCQUFpQiwyQkFFM0MsSUFBSUUsRUFBUSxHQUNaSCxFQUFTSSxTQUFRQyxJQUNiLE1BQU1DLEVBQWFELEVBQVFFLFVBQ3JCQyxFQUFnQkgsRUFBUUksYUFFM0JoQyxPQUFPaUMsU0FBWUosRUFBYUUsRUFBZ0IsSUFDL0NMLEVBQVFFLEVBQVFNLEdBQ3BCLElBR0pULEVBQVNFLFNBQVFRLElBQ2JBLEVBQUsvQixVQUFVRSxPQUFPLFVBQ25CNkIsRUFBS0MsYUFBYSxVQUFXLElBQUtWLEdBQ2pDUyxFQUFLL0IsVUFBVUMsSUFBSSxTQUN2QixHQUVSLEdBQ0osQ0FFQSxTQUFTZ0MsWUFDWXhDLFNBQVMyQixpQkFBaUIsMkJBRWxDRyxTQUFRUSxJQUNiQSxFQUFLbEMsaUJBQWlCLFNBQVNxQyxJQUMzQkEsRUFBRUMsaUJBQ0YsTUFBTUMsRUFBZ0JGLEVBQUVHLE9BQU9MLGFBQWEsUUFDNUJ2QyxTQUFTQyxjQUFjMEMsR0FDL0JFLGVBQWUsQ0FDbkJDLFNBQVUsVUFDWixHQUNKLEdBRVYsQ0F4SEE5QyxTQUFTSSxpQkFBaUIsb0JBQW9CLFdBQzFDTixpQkFDQVksZUFDQWUsaUJBQ0FlLFdBQ0oiLCJpZ25vcmVMaXN0IjpbXX0=
