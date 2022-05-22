const btn = document.getElementById('icon-cart')
const btnClose = document.getElementById('icon-remove')
const product = document.getElementById('list')
const cartList = document.querySelector('#cart')
const footer = document.querySelector('.cart-footer')
const btnPay = document.getElementById('btn-pay')
let cart = []
const btnDelete = document.getElementById('btn-delete')

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('cart')){
        cart = JSON.parse(localStorage.getItem('cart'))
        printCart()
    }
})

btnDelete.addEventListener('click', () => {
    cart = []
    printCart()
})

btnPay.addEventListener('click', () => {
       
    Swal.fire({
        title: 'Todo listo?',
        text: "Una vez confirmado, no se podrá cancelar",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar!'
      }).then((result) => {
        if (result.isConfirmed) {
            cart = []
            printCart() 
            Swal.fire(
                'Confirmado!',
                'Tu pedido llegara pronto',
                'success'
            )
        }
      })      
})

btn.addEventListener('click', ()=> {        
    document.getElementById('popup-cart').style.display='block'
})

btnClose.addEventListener('click', ()=> {        
    document.getElementById('popup-cart').style.display='none'
})

product.addEventListener('click', (e)=> {
    if(e.target.classList.contains('add-cart')){
        setCart(e.target.parentElement);
    }
})

const setCart = (obj)=> {
    const actualProduct = {
        id : obj.querySelector('.add-cart').dataset.id,
        name : obj.querySelector('.pizza-name').textContent,
        price : obj.querySelector('.pizza-price').textContent,
        amount : 1,
    }
    
    cart.push(actualProduct)

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Agregado con exito',
        showConfirmButton: false,
        timer: 1500
      })      

    printCart();
}

const printCart = () => {
    cartList.innerHTML = ''
    if (Object.keys(cart).length > 0){
        cart.forEach(item => {
            const cartContainer = document.createElement('li');
                cartContainer.innerHTML = `
                    <h3 class="product-name">${item.name}</h3>
                    <h3 class="product-price">$${item.price}</h3>
                    <h3 class="product-amount">Cantidad: ${item.amount}</h3>
                    `
                cartList.appendChild(cartContainer)
    
        })

        localStorage.setItem('cart', JSON.stringify(cart))


    } else {
        localStorage.removeItem('cart')
    }

    printFooter()

}

const printFooter = () => {
    footer.innerHTML = ''
    if(Object.keys(cart).length < 1){
        footer.innerHTML = `
        <h3>Tu carrito esta vacio</h3>
        `
    } else {
        const nPrice = Object.values(cart).reduce((acc, {price}) => acc + parseInt(price), 0)

        footer.innerHTML = ''
        const totalPrice = document.createElement('div')
            totalPrice.innerHTML = `
            <div class=totalPrice>
                <h2 id="total">Total</h2>
                <h2 id="price">$${nPrice}</h2>
            </div>            
            `    
        footer.appendChild(totalPrice)
    
    }

}

printFooter()