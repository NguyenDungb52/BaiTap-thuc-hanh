export class Document {
  private id: number;
  private producer: string;
  private quantity: number;

  constructor( id: number, producer: string,quantity: number) {
    this.id = id
    this.producer = producer
    this.quantity = quantity

  }
  public getId(): number {
    return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getProducer(): string {
        return this.producer;
    }

    public setProducer(producer: string): void {
        this.producer = producer;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public setQuantity(quantity: number): void {
        this.quantity = quantity; 
    }
}
