class Pelicula {
	constructor(t, e, d, p, tr) {
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

		// 3) Desocultar el elemento clonado
		elemento.classList.remove('hide')


		// 4) Anexar el elemento en el contenedor  (PADRE)
		document.querySelector('#peliculas').appendChild(elemento)	
		// console.log(elemento)
	}

	static parse(data) {
		data = JSON.parse(data)

		if (data instanceof Array) {
			let peliculas = []
			data.forEach(item => {
				let pelicula =  new Pelicula(item.Titulo, item.Descripcion, item.Estreno, item.Poster, item.Trailer)
				peliculas.push(pelicula)
			})
			return peliculas
		} else if (data instanceof Object){
			let pelicula = new Pelicula(data.Titulo, data.Descripcion, data.Estreno, data.Poster, data.Trailer)
			return pelicula
		} else {
			return null
		}
	}
}

//  ----------------    Ajax   ------------------------
const ajax = new XMLHttpRequest()
ajax.open("GET", "https://api.myjson.com/bins/fiuhw")
ajax.send()
ajax.onload = function () {
	if (this.status == 200) {
		
		let peliculas = Pelicula.parse(this.response)
		
		peliculas.forEach((pelicula) => {
			pelicula.Mostrar()						
		});
	}
}


//    ----------------    Eventos   ----------------

document.querySelector('').addEventListener('click', function() {
	reproducirVideo()
})

function reproducirVideo() {
	console.log('diste click...')
}