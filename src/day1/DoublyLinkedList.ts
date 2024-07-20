class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    private validateIdx(idx: number): void {
        if (idx >= this.length) throw new Error("Out of bounds");
    }

    prepend(item: T): void {
        const newNode = new Node(item);
        console.log("prepending", newNode, "to", this.head);
        if (this.head === null) this.head = this.tail = newNode;
        else if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error("Out of bounds");
        let cursor = this.head;
        for (let i = 0; i < idx; i++) {
            if (cursor?.next) cursor = cursor.next;
            else throw new Error("Out of bounds");
        }
        if (!cursor) throw new Error("Out of bounds");
        const newNode = new Node(item);
        newNode.prev = cursor;
        newNode.next = cursor.next;
        if (newNode.next) {
            newNode.next.prev = newNode;
        }
        cursor.next = newNode;
        this.length++;
    }
    append(item: T): void {
        const newNode = new Node(item);
        if (this.tail === null) {
            this.head = this.tail = newNode;
            console.log(this.head, this.tail);
        } else if (this.tail) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        let cursor = this.head;
        while (cursor) {
            if (cursor.value === item) {
                const { prev, next } = cursor;
                if (prev) prev.next = next;
                else this.head = next;
                if (next) next.prev = prev;
                else this.tail = prev;
                this.length--;
                return item;
            }
            cursor = cursor.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        this.validateIdx(idx);
        if (idx === this.length - 1 && this.tail) return this.tail.value;
        let cursor = this.head;
        for (let i = 0; i < idx; i++) {
            console.log({ cursor, idx });
            if (cursor?.next) cursor = cursor.next;
            else return undefined;
        }
        if (cursor) return cursor.value;
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        this.validateIdx(idx);
        let cursor = this.head;
        for (let i = 0; i < idx; i++) {
            if (cursor?.next) cursor = cursor.next;
            else return undefined;
        }
        if (cursor) {
            const { prev, next } = cursor;
            if (prev === next) {
                this.length = 0;
                this.head = this.tail = null;
                return cursor.value;
            }
            if (prev) prev.next = next;
            else this.head = next;
            if (next) next.prev = prev;
            else this.tail = prev;
            this.length--;
            return cursor.value;
        }
        return undefined;
    }
}
