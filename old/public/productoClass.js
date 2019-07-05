class Producto {
	// 1) Constructor
	constructor(id, n, p, m, c, s, pr, i, d = false) {
		this.id = id
		this.nombre = n
		this.precio = p
		this.marca = m
		this.categoria = c
		this.stock = s
		this.presentacion = pr
		this.imagen = i
		this.disponible = d


	}
	// 2) Metodos de Instancia
	Mostrar(neto = true) {
		let ficha = document.createElement("ul")
			
		let conteinido =`
			<li>Nombre: ${this.nombre}</li>
			<li>Precio: ARS ${neto ? this.precio : this.precioBruto()}</li>
			<li>Marca: ${this.marca} </li>
			<li>Categoria: ${this.categoria} </li>
			<li>Stock: ${this.stock} unid.</li>
			<li>Presentacion: ${this.presentacion} </li>
			<li>Imagen: ${this.imagen} </li>
			<img src=${this.imagen} width="20px" height="20"  alt=""/>
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
				// let producto = new Producto(item.nombre,  item.stock, item.precio, item.disponible)s 
				let producto = new Producto(item.idProducto,item.Nombre, item.Precio, item.Marca, item.Categoria, item.Stock, item.Presentacion, item.Imagen)
				productos.push(producto)
			})
			return productos
		} else if(data instanceof Object) {//<--- Hay un solo Object
			// let producto = new Producto(data.nombre, data.precio, data.stock, data.disponible)
			let producto = new Producto(data.Nombre, data.Precio, data.marca, data.Categoria, data.Stock, data.Presentacion, data.Imagen, data.disponible)
			return producto
		} else {//<--- No hay ningun Object (No hay nada...)
			return null
			
		}
	}
}

/////////////////////////////////////////////////
// let objProducto = new Producto("te de tilo", 55.69, 200, false)
// let objProducto2 = new Producto("Submarino", 67.55, 260, true)
// let objProducto3 = new Producto("Lemon Pie", 115.25, 500, true)