import { Document } from "./document"
export class Book extends Document{
    private page :number
    private author : string
    constructor(id : number, producer : string, quantity : number, page : number,author : string) {
        super(id,producer,quantity)
        this.page = page
        this.author = author
   
    
}
public getPage():number {
    return this.page;
}

public setPage(page :number): void {
    this.page = page;
}

public getAuthor(): string {
    return this.author;
}

public setAuthor(author: string): void {
    this.author = author;
}
}