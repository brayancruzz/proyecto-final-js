var obtained = {};

function fetchData() {
    fetch('inventario.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(data => {
            const cardContainer = document.createElement('li');
            cardContainer.innerHTML = `
                <img src=${data.image}></img>
                <div class="pizza-data">
                    <h2 class="pizza-name">${data.name}</h2>
                    <h2 class="pizza-price">${data.price}</h2>
                    <button class="add-cart" data-id="${data.id}">Agregar</button>
                </div>
                `
            list.appendChild(cardContainer)
        } )

    })
} 

fetchData()
