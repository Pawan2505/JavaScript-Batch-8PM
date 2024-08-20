document.querySelector('#submit')
    .addEventListener('submit', (e) => {
        e.preventDefault()
        const allInput = document.querySelectorAll('.product input')
        const p_category = document.querySelector('.product select').value
        const p_desc = document.querySelector('.product textarea').value


        const p_name = allInput[0].value;
        const p_price = allInput[1].value;
        const p_qty = allInput[2].value;
        const p_image = allInput[3].value;

        const productList = JSON.parse(localStorage.getItem('productList')) || [];
        const id = productList.length + 1
        const product = {
            id, p_category, p_name, p_price, p_qty, p_desc, p_image
        }

        productList.push(product)
        console.log(productList)
        localStorage.setItem('productList', JSON.stringify(productList))
        window.location.reload()
        show()
    })

function show() {
    const product = JSON.parse(localStorage.getItem('productList'))
    var result = ""
    product?.forEach((products) => {
        result += `
                <div class="col-lg-4 mt-4">
                    <div class="card shadow border-0">
                        <img src=${products.p_image} alt="" height="300px" class="border p-2">
                        <div class="card-body">
                            <h3>${products.p_category}</h3>
                            <ul>
                                <li>${products.p_name}</li>
                                <li>${products.p_price}</li>
                                <li>${products.p_qty}</li>
                                <li>${products.decription}</li>
                            </ul>
                            <button class="btn btn-warning w-100" onclick="addToCart(${products.id})">add to cart</button>
                        </div>
                    </div>
                </div>
            `
    })
    document.querySelector('#productInfo').innerHTML = result
}
show()

function addToCart(id) {
    const product = JSON.parse(localStorage.getItem('productList'))
    const cart = JSON.parse(localStorage.getItem('cartList')) || [];

    ///// product exist or not according to id
    const existProduct = product.find((item) => {
        return item.id === id
    })
     ///// cart exist or not according to id
    const existCart = cart.find((item) => {
        return item.id === id
    })
    console.log(existCart)

    if (existCart) {
        existCart.count += 1
    } else {
        cart.push({ ...existProduct, count: 1 })
    }
    localStorage.setItem('cartList', JSON.stringify(cart))
}