class Pelicula {
	constructor(i, t, e, d, p, tr) {
		this.ID = i,
		this.Titulo = t
		this.Estreno = e
		this.Descripcion = d
		this.Poster =  p
		this.Trailer = tr
	}

	Mostrar() {
		// console.log('Imprimiendo.....');
		// 1) Capturar el elemento y (CLONARLO)
		let elemento = document.querySelector('.pelicula').cloneNode(true)

		// 2) Remplazar/llenar con los datos de "esta"  Pelicula 
			elemento.querySelector('h4').innerText = this.Titulo
			elemento.querySelector('p').innerText = this.Descripcion
			elemento.querySelector('img').src = this.Poster
		
		// 3) Generar el comportamiento de "Reproductor"
		elemento.querySelector("a").onclick = (e) => {
			// Desactivar el hipervinculo
			e.preventDefault()
			// El this es la Pelicula
			// console.log(this.Trailer)
			
			let reproductor = document.querySelector('#playMovie')
			console.log(reproductor);
			// reproductor.querySelector('#titulo').innerHTML = this.Titulo + "(" + this.Descripcion +")"
			reproductor.querySelector('#titulo').innerHTML = `${this.Titulo}  (${this.Descripcion})`
			reproductor.querySelector('iframe').src = this.Trailer
			reproductor.querySelector('#descripcion').innerHTML = this.Estreno
			reproductor.querySelector('#imagen').src = this.Poster

			window.scroll({
				behavior : "smooth",
				top: reproductor.offsetTop
			})
			
		}


		// 4) Desocultar el elemento clonado
		elemento.classList.remove('hide')


		// 5) Anexar el elemento en el contenedor  (PADRE)
		document.querySelector('#peliculas').appendChild(elemento)	
		// console.log(elemento)
	}

	static parse(data) {
		data = JSON.parse(data)

		if (data instanceof Array) {

			/*// --------          VIEJA FORMA          -------
			let peliculas = []
			data.forEach(item => {
				let pelicula =  new Pelicula(item.idPelicula, item.Titulo, item.Descripcion, item.Estreno, item.Poster, item.Trailer)
				peliculas.push(pelicula)
			})
			return peliculas */

			// --------          NUEVA FORMA          -------
			return data.map(item => 
				new Pelicula(item.idPelicula, item.Titulo, item.Descripcion, item.Estreno, item.Poster, item.Trailer)
			)


		} else if (data instanceof Object){
			return new Pelicula(idPelicula, data.Titulo, data.Descripcion, data.Estreno, data.Poster, data.Trailer)
		} else {
			return null
		}
	}
}

//  ----------------    Ajax   ------------------------
/*
const ajax = new XMLHttpRequest()
ajax.open("GET", "https://api.myjson.com/bins/fiuhw")
ajax.onload = function () {
	if (this.status == 200) {
		
		let peliculas = Pelicula.parse(this.response)
		
		peliculas.forEach((pelicula) => {
			pelicula.Mostrar()						
		});
	}
}
ajax.send()

*/
