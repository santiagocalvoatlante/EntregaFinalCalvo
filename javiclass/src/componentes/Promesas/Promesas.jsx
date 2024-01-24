import React from 'react'

const Promesas = () => {

    console.log("Tarea 1");
    console.log("Tarea 2");

    setTimeout(() => {
        console.log("Tarea A");
    }, 2000)

    setTimeout(() => {
        console.log("Tarea B");
    }, 1000)

    const tusPromesas = () => {
        return new Promise((resolve, reject) => {

            if (estado == true) {
                resolve("Promesa cumplica");} else{
                reject("Promesa rechazda");

            }
        })
    }


    return (
        <div>Promesas</div>
    )
}

export default Promesas