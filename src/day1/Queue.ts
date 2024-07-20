class Node<T> {
    public value: T;
    public next: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = new Node(item);
        if (this.tail === null) this.tail = this.head = newNode;
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    deque(): T | undefined {
        if (this.head === null) return;
        const { value, next } = this.head;
        this.head = next;
        if (this.head === null) this.tail = null;
        this.length--;
        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
