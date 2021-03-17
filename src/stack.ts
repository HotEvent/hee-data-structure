export class Stack<T = any> {
    constructor(private array: T[]) {

    }

    get length() {
        return this.array.length;
    }

    isEmpty() {
        return this.array.length === 0;
    }
    push(item: T) {
        return this.array.push(item);
    }
    pop() {
        return this.array.pop();
    }
    get top() {
        return this.array[this.array.length - 1];
    }
}