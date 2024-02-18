import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarArray = () => {

    useEffect(() => {
        const cargarData = async () => {
            try {
                const productos = [
                    { id: "1", nombre: "Adidas Alphaboost V2", precio: 1000, img: "../img/boost.jpg", idCat: "2", desc: "Los Adidas Alphaboost V2 son zapatillas deportivas diseñadas para correr y ofrecen una combinación de amortiguación y soporte para corredores." },
                    { id: "2", nombre: "Adidas Ozelle", precio: 2000, img: "../img/Ozelle.jpg", idCat: "2", desc: "Para pies delgados recomendamos comprar el talle inferior.Unisex" },
                    { id: "3", nombre: "Nike Air Max Systm", precio: 3000, img: "../img/airmax.jpg", idCat: "3", desc: "Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física." },
                    { id: "4", nombre: "Converse All Star BB Prototype CX Mid Textil", precio: 4000, img: "../img/midtextil.jpg", idCat: "3", desc: "La capellada de mesh se combina con suede para brindarte transpirabilidad, comodidad y un look que combina lo mejor del deporte y el estilo. La lengüeta garantiza una fácil colocación, mientras que el sistema de cordones tejidos ocultos proporciona el máximo apoyo y protección mientras te moves." },
                    { id: "5", nombre: "Lacoste Lineshot", precio: 5000, img: "../img/lacoste.jpg", idCat: "4", desc: "La mezcla de tradición e innovación. Estilo Lacoste clásico, inspirado en las zapatillas de tenis de los 90. Las nuevas Lineshot cuentan con acabados técnicos con líneas retro, empeine transpirable y comodidad mejorada." },
                    { id: "6", nombre: "Nike Pegasus 40", precio: 5000, img: "../img/pegasus.jpg", idCat: "1", desc: "La serie Pegasus suele incorporar la tecnología Air Zoom de Nike en la entresuela para proporcionar amortiguación y respuesta" },
                    { id: "7", nombre: "Z Adidas Ultraboost Light", precio: 6000, img: "../img/ultraboost.jpg", idCat: "1", desc: "Mantener una energía inagotable durante toda la carrera es el sueño. Estas zapatillas de running adidas lo hacen realidad gracias a la última generación de adidas BOOST. " },
                    { id: "8", nombre: "Asics Novablast 3 ", precio: 6000, img: "../img/nova.jpg", idCat: "1", desc: "El modelo de Zapatillas Running Asics Novablast 3 Hombre se inspira en una característica geométrica de origami para la parte superior y la entresuela. Cuenta con una construcción de lengüeta en la parte superior que ayuda a mejorar el ajuste y al mismo tiempo reduce el movimiento.  " },
                    { id: "9", nombre: "Asics Noosa Tri 14", precio: 6000, img: "../img/nosa.jpg", idCat: "1", desc: " La numeración Argentina NO se encuentra exhibida en la caja / etiqueta del producto. Para ahorrar tiempo en cambios, te recomendamos revisar la guía de talles." },
                    { id: "10", nombre: "Saucony Endorphin Speed 2", precio: 8000, img: "../img/endor.jpg", idCat: "1", desc: " Tras un año repleto de premios, vuelven las Endorphin Speed 2 con la combinación perfecta de amortiguación PWRRUN PB ultraligera y chasis de nylon flexible. Brillan tanto en los esprines y los entrenamientos."},
                    { id: "11", nombre: "Lacoste Tech Point", precio: 8000, img: "../img/tenis.jpg", idCat: "2", desc: "La numeración Argentina NO se encuentra exhibida en la caja / etiqueta del producto. Para ahorrar tiempo en cambios, te recomendamos revisar la guía de talles. " },
                    { id: "12", nombre: "On Cloud X 3 Shiftv", precio: 6000, img: "../img/cloud.jpg", idCat: "2", desc: "Comodidad ultraligera y alto rendimiento: diseñadas para personas enérgicas que no pueden estarse quietas." },
                    { id: "13", nombre: "Adidas X Plrboost", precio: 7000, img: "../img/Plrboost.jpg", idCat: "2", desc: "Da bastante talla.En base a las devoluciones, recomendamos la talla inmediatamente inferior " },
                    { id: "14", nombre: "Nike Air Force 1 07", precio: 8000, img: "../img/force.jpg", idCat: "3", desc: "El fulgor vive en el Air Force 1 '07 LV8. Al combinar la comodidad de la cancha con un estilo fuera de la cancha, este calzado agrega un toque de estilo ingenioso a un modelo original de básquetbol. " },
                    { id: "15", nombre: " Nike Air Max 97 SE", precio: 9000, img: "../img/max.jpg", idCat: "3", desc: " Un diseño histórico. Este calzado de edición especial rinde homenaje a Frank Rudy, el hombre que creó la codiciada piedra angular de la amortiguación Air. " },
                    { id: "16", nombre: " Vans Old Skool", precio: 5000, img: "../img/vans.jpg", idCat: "3", desc: " La numeración Argentina NO se encuentra exhibida en la caja / etiqueta del producto. Para ahorrar tiempo en cambios, te recomendamos revisar la guía de talles." },
                    { id: "17", nombre: " Nike Dunk High Retro", precio: 9000, img: "../img/dunk.jpg", idCat: "4", desc: " Con un diseño más icónico que las olas ámbar de cereal, este Dunk High redefine lo atemporal. Los refuerzos de lona con variaciones naturales evocan la ropa de trabajo clásica, y los revestimientos de cuero texturizado en un tono cálido. " },
                    { id: "18", nombre: " Nike Court Legacy Lift", precio: 8000, img: "../img/court.jpg", idCat: "4", desc: "La numeración Argentina NO se encuentra exhibida en la caja / etiqueta del producto. Para ahorrar tiempo en cambios, te recomendamos revisar la guía de talles. " },
                    { id: "19", nombre: " Originals Nizza Platform Mid", precio: 9000, img: "../img/niza.jpg", idCat: "4", desc: " La numeración Argentina NO se encuentra exhibida en la caja / etiqueta del producto. Para ahorrar tiempo en cambios, te recomendamos revisar la guía de talles." },
                    { id: "20", nombre: "Originals Forum Low CL ", precio: 8000, img: "../img/forum.jpg", idCat: "4", desc: "Lanzada al mercado por primera vez en 1984, la Adidas Forum Low, “más que una zapatilla, es una declaración de estilo”, anuncia la marca. " },

                ]

                const productosCollection = collection(db, "inventario");

                productos.forEach(async (producto) => {
                    const productoDoc = doc(productosCollection, producto.id.toString());
                    await setDoc(productoDoc, producto);
                })
            } catch (error) {
                console.log(error => console.log("No se han podido cargar los productos", error))
            }
        }

        cargarData();

    }, [])


    return (
        <div></div>
    )
}

export default CargarArray