let input = require("readline-sync");
export class hoGiaDinh {
    private giaDinh : any = []
   
    add(t:any) {
        this.giaDinh.push(t)
        console.log(this.giaDinh);
    }
    edit( id:number){
       if(this.giaDinh.length > 0 ){
            for(let i = 0; i < this.giaDinh.length; i++ ){
                if(this.giaDinh[i].id === id){
                    let id = +input.question('nhap id moi')
                    let diachi = input.question('nhap dia chi moi')
                    let newHoGD = {
                        ...this.giaDinh[i],
                        id: id,
                        diaChi: diachi
                    }

                    this.giaDinh.splice(i,1,newHoGD)
                    console.log(this.giaDinh)
                }
            }
       }else{
            console.log('k co gd nao de sua')
       }
    }

    remove(id:number){
        if(this.giaDinh.length > 0 ){
            for(let i = 0; i < this.giaDinh.length; i++ ){
                if(this.giaDinh[i].id === id){
                    this.giaDinh.splice(i,1)
                    console.log(this.giaDinh)
                }
            }
       }else{
            console.log('k co gd nao de sua')
       }
    }

    show(){
        console.log(this.giaDinh)
    }

    searchNumberPeople(){
        if(this.giaDinh.length > 0 ){
            let arr : any = []
            for(let i = 0; i < this.giaDinh.length; i++ ){
                if(this.giaDinh[i].tv.length > 5){
                    arr.push(this.giaDinh[i])
                }
            }
            console.log(arr)
       }else{
            console.log('khong co gia dinh nao de tim')
       }
    }

    searchNamePeople(name: any){
        if(this.giaDinh.length > 0 ){
            let arr : any = []
            for(let i = 0; i < this.giaDinh.length; i++ ){
                if(this.giaDinh[i].khu === "khu A"){
                    for(let j =0 ; j<this.giaDinh[i].tv.length;j++){
                        if(this.giaDinh[i].tv[j].ten === name){
                            console.log(this.giaDinh[i])
                        }
                    }
                }
            }
            console.log(arr)
       }else{
            console.log('khong co gia dinh nao de tim')
       }
    }
}