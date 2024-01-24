const productos = [
    {id:1, nombre: "Zapatillas Adidas Alphaboost V2", precio: 1000, img:"../img/boost.jpg", idCat:"2" },
    {id:2, nombre: "Zapatillas Adidas Ozelle", precio: 2000, img:"../img/Ozelle.jpg", idCat:"2"  },
    {id:3, nombre: "Zapatillas Nike Air Max Systm", precio: 3000, img:"../img/airmax.jpg", idCat:"3" },
    {id:4, nombre: "Zapatillas Converse All Star BB Prototype CX Mid Textil", precio: 4000, img:"../img/midtextil.jpg", idCat:"3"  },
]
   export const getProductos = () => {
return new Promise ((resolve) => {
    setTimeout ( () => {
        resolve (productos);
    },2000)

    })
   }

   export const getUnProducto = (id) => {
    return new Promise (resolve => {
setTimeout (()=>{
const producto = productos.find(prod => prod.id === id);
resolve(producto)
},2000)
    }  )
   }

   export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() =>{

            const productosCategoria = productos.filter (prod => prod.idCat === idCategoria );
            resolve(productosCategoria);

        },100)
        
    })
   }