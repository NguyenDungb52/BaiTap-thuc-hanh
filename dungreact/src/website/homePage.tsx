import { addProduct } from "../api/product"

 

const HomePage  = () =>{
    const add = async() =>{
        let name:any = document.getElementById('name')
        let price:any = document.getElementById('price')
        let quantity:any = document.getElementById('quantity')
        const newProduct = {
            name: name.value,
            price: price.value,
            quantity: quantity.value
        }
        await addProduct(newProduct)
    }
    return(
        <div>
            <h1>Them san pham</h1>
            <div>
                <label>ten san pham</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label>gia tien</label>
                <input type="number" id="price" />
            </div>
            <div>
                <label>so luong</label>
                <input type="number" min={1} id="quantity" />
            </div>
            <button onClick={add}>them</button>
        </div>
    )
}

export default HomePage