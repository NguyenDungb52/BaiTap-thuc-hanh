interface Collection <T>{
    add(o : T) : void
    remove(o : T) : void
}
class List<T> implements Collection<T>{
    private items : T[]  = []

    add(o : T) : void {
        this.items.push(o)
    }
    remove(o: T): void {
        let index 
    }
}