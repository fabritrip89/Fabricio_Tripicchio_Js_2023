//*** TAXES   variables como iva envío etc*/
const ivaGeneral = 1.21;
const ivaEspecial = 1.10;
const envio=10

//** Objectr Products*/ 

const pala1 = {
    // category: Paddle,
    // name: AdidasAdipowerCtrl,
    // format: Diamond,
    // composition: EvaBlack,
    // playerType: Professional,
    weight: 365,
    amount: 1,
    price: 200,
    taxes:ivaGeneral,
    ship: envio,
    
}

// console.log(pala1);

//** precompra Carrito */

const totalCarrito = {
    pala1,
    calcularTotal: () =>{
        const total=pala1.amount*pala1.price *pala1.taxes + pala1.ship;
        return total;
    }
}

console.log(totalCarrito.calcularTotal());
