class Producto {

    constructor(n, s, p, i, m){
        this.nombre = n
        this.stock = s
        this.precio = p
        this.imagen = i
        this.marca = m
        this.estado = false
        this.vDOM = document.createElement("article")
    }

    Mostrar(){ //<-- Metodos de Instancia

        this.vDOM.classList.add("col-4")

        this.vDOM.innerHTML = `<div class="card h-100">
                            <a href="#">
                                <img class="card-img-top img-fluid" src="${this.imagen}" alt="">
                            </a>
                            <div class="card-body">
                                <h4 class="card-title"><a href="#">${this.marca} - ${this.nombre}</a> <span class="badge badge-pill badge-success float-right">$${ parseFloat(this.precio).toFixed(2) }</span></h4>
                                <p class="card-text">${this.stock} unid.</p>
                                <button class="btn btn-warning btn-editar float-left">Editar</button>
                                <button class="btn btn-primary btn-comprar float-right">Comprar</button>
                            </div>
                        </div>`
        //debugger
        if( !this.estado ){ //<-- La interfaz AUN no está anexada al DOM...
            document.querySelector("#productos-destacados").appendChild( this.vDOM )
            this.estado = true 
        }

        this.vDOM.querySelector(".btn-editar").onclick = (evento) => {
            //console.log(evento.target) //<-- El boton clickeado
            
            this.marca = prompt("Ingrese nueva marca:", this.marca)
            this.nombre = prompt("Ingrese nuevo nombre:", this.nombre)
            this.stock = prompt("Ingrese nuevo stock:", this.stock)
            this.precio = prompt("Ingrse nuevo precio:", this.precio)
            this.imagen = prompt("Ingrese nueva imagen:", this.imagen)

            this.Mostrar()

            //debugger
            //Aca voy a enviar los nuevos datos al servidor...
            let datos = new FormData()
            datos.append("marca", this.marca)
            datos.append("nombre", this.nombre)
            datos.append("stock", this.stock)
            datos.append("precio", this.precio)
            datos.append("imagen", this.imagen)

            let config  = {
                method : "POST",
                headers : {
                    "Content-Type" : "application/x-www-form-urlencoded"
                },
                body : datos
            }
            fetch("https://webhook.site/08984cf8-0c9b-4115-bad4-da50123a865c", config)

            console.log(this) //<-- El objeto "Producto" con el que se armó la interfaz
        }

       
    }

    Descuento( cupon ){ //<-- Metodo de Instancia
        if( cupon == "UH7XTU78I" ){
            this.precio -= (this.precio * 0.15)
        }
    }
    //////////////////////////////////////////////////////////////////
    static armarCatalogo(objetos, rango){ //<-- Metodos de Clase (o estaticos)
        
        let productos = objetos.map( ({Nombre, Stock, Precio, Imagen, Marca}) => new Producto(Nombre, Stock, Precio, Imagen, Marca) )

        let resultado = rango ? productos.filter( producto => producto.precio > rango.min && producto.precio < rango.max ) : productos  //<-- Operador ternario

        return resultado
    }
}