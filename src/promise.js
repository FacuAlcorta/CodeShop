let carga= true;



let fetchProducts = (time, array) => {
    return new Promise((resolve, reject) => {
        if (carga) {
            setTimeout(() => {
                resolve(array)
            }, time);
        } else {
            reject("Error")
        }
    });
}

fetchProducts(2000, calcularDinero(dinero))
    .then(datos => {console.log(datos)})
    .catch(err => console.log(err))