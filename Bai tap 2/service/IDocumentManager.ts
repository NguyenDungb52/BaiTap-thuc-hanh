export interface IDocumentManager<T>{
    add(t : T)
    delete( id : number, t :T )
    showall(khuID: number)
    findById(id : number)

}