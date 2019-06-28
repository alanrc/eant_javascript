class Producto {
	// 1) Constructor
	constructor(n, p, s, d) {
		this.nombre = n
		this.precio = p
		this.stock = s
		this.disponible = d

	}
	// 2) Metodos de Instancia
	Mostrar(neto = true) {
		let ficha = document.createElement("ul")
			
		let conteinido =`
			<li>Nombre: ${this.nombre}</li>
			<li>Precio: ARS ${neto ? this.precio : this.precioBruto()}</li>
			<li>Stock: ${this.stock} unid.</li>
			<li>Disponible: ${this.disponible ? 'SI' :'NO'} </li>
			`
		ficha.innerHTML = conteinido
		document.body.appendChild(ficha)
	}
	precioBruto() {
		return (precio / 1.21).toFixed(2)
	}
	// 3) Metodos de Clase (o Metodos Estaticos)
	static parse(data) {
		console.log('Ahora deberia convertir object en Producto')
		data = JSON.parse(data)

		if (data instanceof Array) {//<--- Hay muchos Object
			// let productos = new Array()
			let productos = []
			data.forEach(item => {
				let producto = new Producto(item.nombre, item.stock, item.precio, item.disponible)
				productos.push(producto)
			})
			return productos
		} else if(data instanceof Object) {//<--- Hay un solo Object

		} else {//<--- No hay ningun Object (No hay nada...)

		}
	}
}

/////////////////////////////////////////////////
let objProducto = new Producto("te de tilo", 55.69, 200, false)
let objProducto2 = new Producto("Submarino", 67.55, 260, true)
let objProducto3 = new Producto("Lemon Pie", 115.25, 500, true)