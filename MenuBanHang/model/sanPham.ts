
let input = require("readline-sync")
export class sanPham{
  private sanPham : any = []


   addSanPham(t : any){
        this.sanPham.push(t)
        console.log(this.sanPham)

   }
   editSanPham(id : any){
            if(this.sanPham.length > 0 ){
                for( let i = 0; i<this.sanPham.length; i++){
                 if( this.sanPham[i].idSanPham === id){
                    let idSanPhamMoi = +input.question('nhap id san pham moi ')
                    let  tenSanPhamMoi = input.question('nhap san pham moi ')
                    let sanPhamMoi = {
                        idSanPhamMoi : idSanPhamMoi,
                        tenSanPhamMoi :tenSanPhamMoi
                    }
                    this.sanPham.splice(i,1,sanPhamMoi)
                    console.log(this.sanPham)
                 }
                }
            }else{
                console.log('k co san pham nao de sua')
            }
   }
   removeSanPham(id : number){
            if(this.sanPham.length > 0){
                for(let i = 0; i<this.sanPham.length; i++){
                    if(this.sanPham[i].idSanPham == id ){
                        this.sanPham.splice(i,1)
                        console.log(this.sanPham)
                    }
                }
            }else{
                console.log('k co san pham nao de xoa')
            }
   }
   showSanPham(){
        console.log(this.sanPham)
   }

}