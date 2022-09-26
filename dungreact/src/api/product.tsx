import instance from "./instance";


export const getAll = () =>{
    const url = "/product";
    return instance.get(url)
}


export const addProduct = (item:any) =>{
    const url = "/product"
    return instance.post(url,item)
}