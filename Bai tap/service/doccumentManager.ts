
import { IDocumentManager } from './IDocumentManager';
import { Document } from '../model/document';
export class DocumentManager implements IDocumentManager<Document>{
    documents : Document [] = []
    add(t: Document) {
        this.documents.push(t)
    }
    edit(id: number, t: Document) {
       let index = this.findById(id)
       this.documents[index] = t 
    }
    delete(id: number) {
       let index = this.findById(id)
       this.documents.slice(index,1)
    }
    showAll() {
       return this.documents
    }
    findById(id: number) {
        for(let i = 0; i<this.documents.length; i++ ){
            if(this.documents[i].getId() == id  ){
                return i 
            }
        }
        return -1
    }


}