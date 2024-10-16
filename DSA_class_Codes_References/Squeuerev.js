//Reversing Stack using Queue
class Queue
{
  constructor () 
  {
    this.front = null
    this.rear = null
  }

  insert(ele)
  {
	    var node = new newNode(ele)
	    if(this.front==null)							
	      this.front=node
	    else
		    this.rear.next=node
	    this.rear=node
  }
  //Get from queue and push on stack
  push_stack()
  {
    var temp=this.front
	  while(temp!=null)
	  {
	    top.push(temp.data)
  	  temp=temp.next
  	  this.front=this.front.next
	   }
  }
  display()
  {
      var temp=this.front
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
}
class Stack
{
  constructor () 
  {
    this.top = null
  }

  push(ele)
  {
	  var node=new newNode(ele)
	  node.next=this.top
	  this.top=node
  }
  //pop from stack and add to queue
  pop_add_queue()
  {
	  var temp=this.top
	  while(temp!=null)
	  {
	    front.insert(temp.data)
  	  temp=temp.next
  	}
    this.top=null
  }
    display()
    {
        var temp=this.top
        while(temp!=null)
        {
          console.log(temp.data)
          temp=temp.next
        }
    }
}

class newNode 
{
  constructor (data, next) 
  {
    this.data = data
    this.next = null
  }

}

const top = new Stack()
const front = new Queue()
top.push(10)
top.push(20)
top.push(30)
top.push(40)
top.push(50)
top.push(60)
console.log("After PUSH...")
top.display()
top.pop_add_queue()
console.log("After adding to Queue...")
front.display()
front.push_stack()
console.log("After REVERSE...")
top.display()

