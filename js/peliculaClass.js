class Pelicula {
	constructor(t, e, d, p, tr) {
		this.titulo = t
		this.estreno = e
		this.descripcion = d
		this.poster =  p
		this.trailer = tr
	}

	Mostrar() {
		// console.log('Imprimiendo.....');
		// 1) Capturar el elemento y (CLONARLO)
		let elemento = document.querySelector('.pelicula').cloneNode(true)

		// 2) Remplazar/llenar con los datos de "esta"  Pelicula 
			elemento.querySelector('h4').innerText = this.titulo
			elemento.querySelector('p').innerText = this.estreno
			elemento.querySelector('img').src = this.poster

		// 3) Desocultar el elemento clonado
		elemento.classList.remove('hide')


		// 4) Anexar el elemento en el contenedor  (PADRE)
		document.querySelector('#peliculas').appendChild(elemento)	
		console.log(elemento)
	}
}
