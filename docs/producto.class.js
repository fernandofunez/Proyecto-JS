class producto {

    constructor(n,s,p,i,m){
        this.nombre = n
        this.stock = s
        this.precio = p
        this.imagen = i
        this.marca = m

    }
     
     Mostrar(){
        const ficha = document.createElement("article")
        
        
            ficha.classList.add("col-4")

            ficha.innerHTML=`<div class="card h-100">
                    <a href="#">
                        <img class="card-img-top img-fluid" src="${this.imagen}" alt="">
                    </a>
                    <div class="card-body">
                        <h4 class="card-title"><a href="#">${this.nombre}-${this.marca} </a> <span class="badge badge-pill badge-success float-right">$${this.precio}</span></h4>
                        <p class="card-text">${this.stock} unid.</p>
                        <button class="btn btn-primary float-right">Comprar</button>
                    </div>
                </div> `

        document.querySelector("#productos-destacados").appendChild(ficha)
     }

     descuento (cupon){ //<---metodo de instancia
        if(cupon  == UHTXTU78I){
            this .precio -=(this.precio * 0.15) 
        }
     } 
        ////////////////////////////////////////
         static armarCatalago(){//<---metodos de clases(o estaticos)

        }
}

    ///////////////////