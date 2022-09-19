let input = require("readline-sync")
export class khackHang{
    public khackHang : any = []
 
 
    addKhackHang(t : any){
        this.khackHang.push(t)
        console.log(this.khackHang)
    }
    editKhackHang(t : any){
        if(this.khackHang.length > 0 ){
            for( let i = 0; i<this.khackHang.length; i++){
             if( this.khackHang[i].idKhackHang === t ){
                let idKhackHangMoi = +input.question('nhap id khack hang moi ')
                let  tenKhackHangMoi = input.question('nhap ten khack hang moi ')
                let khackHangMoi = {
                    idKhackHangMoi : idKhackHangMoi,
                    tenKhackHangMoi :tenKhackHangMoi
                }
                this.khackHang.splice(i,1,khackHangMoi)
                console.log(this.khackHang)
             }
            }
        }else{
            console.log('k co san pham nao de sua')
        }
    }
    removeKhackHang(id : number){
            if(this.khackHang.length > 0){
                for(let i = 0; i< this.khackHang.length ; i++ ){
                    if(this.khackHang[i].idKhackHang == id){
                            this.khackHang.splice(i,1)
                            console.log(this.khackHang)
                    }
                }
            }else{
                console.log(' khong co khack hang nao')
            }
        
    }
    showKhackHang(){
      console.log(this.khackHang)
    }
 
 }