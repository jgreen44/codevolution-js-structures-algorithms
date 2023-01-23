// enqueue: adds element to rear/tail of collection
// dequeue: removes element from front/head of collection

class Queue{
  constructor() {
    this.items = [];
  }

  enqueue(element){
    this.items.push(element);
  }

  dequeue(){
    // shift removes and returns element from begging of array
    return this.items.shift();
  }

  isEmpty(){
    return this.items.length === 0;
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[0];
    }
    return null;
  }

  size(){
    return this.items.length;
  }

  print(){
    console.log(this.items.toString());
  }
}

class QueueBetterTimeComplexity{
  constructor() {
    this.items = {};
    // because of object instead of array, we need to keep track
    // of the front and rear pointers
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element){
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue(){
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty(){
    return this.rear - this.front ===0;
  }

  peek(){
    return this.items[this.front]  ;
  }

  size(){
    return this.rear - this.front;
  }

  print(){
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());


const queueBetterTimeComplexity = new QueueBetterTimeComplexity();
console.log(queueBetterTimeComplexity.isEmpty());

queueBetterTimeComplexity.enqueue(10);
queueBetterTimeComplexity.enqueue(20);
queueBetterTimeComplexity.enqueue(30);

console.log(queueBetterTimeComplexity.size());
queueBetterTimeComplexity.print();

console.log(queueBetterTimeComplexity.dequeue());
console.log(queueBetterTimeComplexity.peek());
