export class Magazine extends Document {
    issue : number
    month : string 

    


    

    constructor( issue : number,month : string ) {
        super()
            this.issue = issue
            this.month = month 
    }
    public getIssue(): number {
        return this.issue
    }

    public setIssue(issue : number): void {
        this.issue = issue
    }

    public getMonth(): string {
        return this.month
    }

    public set(month : string): void {
        this.month = this.month
    }
    
}