
class Queue {
	constructor()
  {
    this.arr = new Array();
		this.rear = -1;
		this.front = -1;
		this.size = 5;
		
	}
	enQueue(value) 
  {
		if ((this.front == 0 && this.rear == this.size - 1) || (this.rear == (this.front - 1) % (this.size - 1))) 
    {
			console.log("Queue is Full");
			return;
		}
		else if (this.front == -1) 
    {
			this.front = this.rear = 0;
			this.arr[this.rear] = value;
		}
		else if (this.rear == this.size - 1 && this.front != 0) {
			this.rear = 0;
			this.arr[this.rear] = value;
		}
		else {
			this.rear++;
			this.arr[this.rear] = value;
		}
	}
	deQueue() 
  {
		if (this.front == -1) 
    {
			console.log("Queue is Empty");
			return INT_MIN;
		}
		let data = this.arr[this.front];
		this.arr[this.front] = -1;
		if (this.front == this.rear) 
    {
			this.front = -1;
			this.rear = -1;
		}
		else if (this.front == this.size - 1)
			this.front = 0;
		else
			this.front++;
		
		return data;
	}
	displayQueue() {
		if (this.front == -1) {
			console.log("Queue is Empty");
			return;
		}
		console.log("\nElements in Circular Queue are: ");
		if (this.rear >= this.front) {
			for (let i = this.front; i <= this.rear; i++)
				console.log(this.arr[i]);
		}
		else {
			for (let i = this.front; i < this.size; i++)
				console.log(this.arr[i]);
			for (let i = 0; i <= this.rear; i++)
				console.log(this.arr[i]);
		}
	}
}


let q = new Queue;

q.enQueue(14);
q.enQueue(22);
q.enQueue(13);
q.enQueue(-6);

q.displayQueue();

console.log("Deleted value = ", q.deQueue());
console.log("Deleted value = ", q.deQueue());
q.displayQueue();
q.enQueue(9);
q.enQueue(20);
q.enQueue(5);
q.displayQueue();
q.enQueue(20);

