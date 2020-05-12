let links = document.querySelectorAll("nav a")

// for (let link in links) {
// 	console.log(link)
// }
//debugger
links.forEach(function(link){ //<-- Funcion...
	link.onclick = validarLink //<-- Funcionalidad...
})

function validarLink(evento){
	evento.preventDefault() //<-- JS interrumpe el comportamiento predeterminado
	
	let rta = confirm(`Está seguro que desea ir al "${evento.target.innerText}"?`)

	if( rta ){
		//ACA HAY QUE REPROGRAMAR QUE EL NAVEGADOR VAYA A DONDE DICE EL LINK CLICKEADO
		window.location.href = evento.target.href
	}
}