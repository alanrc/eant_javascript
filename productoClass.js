alert('joooaooaoa')

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
	static parse() {
		console.log('Ahora deberia convertir object en Producto');
	}
}

/////////////////////////////////////////////////
let objProducto = new Producto("te de tilo", 55.69, 200, false)
let objProducto2 = new Producto("Submarino", 67.55, 260, true)
let objProducto3 = new Producto("Lemon Pie", 115.25, 500, true)