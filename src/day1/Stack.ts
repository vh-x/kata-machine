class Node<T> {
    public value: T;
    public bottom: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.bottom = null;
    }
}

export default class Stack<T> {
    public length: number;
    private top: Node<T> | null;
    constructor() {
        this.length = 0;
        this.top = null;
    }

    push(item: T): void {
        const node = new Node(item);
        node.bottom = this.top;
        this.top = node;
        this.length++;
    }
    pop(): T | undefined {
        if (this.top === null) return;
        const { value, bottom } = this.top;
        this.top = bottom;
        this.length--;
        return value;
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}
