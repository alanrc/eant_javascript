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

			if ( window.auth2.currentUser.get().isSignedIn() ) {
				
				let reproductor = document.querySelector('#playMovie')
				
				reproductor.querySelector('#titulo').innerHTML = `${this.Titulo}  (${this.Descripcion})`
				reproductor.querySelector('iframe').src = this.Trailer
				reproductor.querySelector('#descripcion').innerHTML = this.Estreno
				reproductor.querySelector('#imagen').src = this.Poster
	
				window.scroll({
					behavior : "smooth",
					top: reproductor.offsetTop
				})
			} else {
				// logueate .....gil...
				auth2.signIn().then(function() {
					let usuario = auth2.currentUser.get().getBasicProfile()
					// alert(`Bienvenido  ${usuario.getGivenName()}`)
					document.querySelector("#user-data").classList.remove("hide")
					
					document.querySelector("#user-data strong").innerText = usuario.getGivenName()
					document.querySelector("#userdata button").onclick = function() {
						auth2.signOut()
						document.querySelector("#user-data").classList.add("hide")
					}
				})
			}
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
