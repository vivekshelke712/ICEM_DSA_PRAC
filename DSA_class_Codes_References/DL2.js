
class LinkedList
{
  constructor () 
  {
    this.dlist = null
  }

  create(ele)
  {
	var node=new newNode(ele)  

    if(!this.dlist)
    {
      this.dlist=node
    }
    else
    {
      var temp=this.dlist
      while(temp.next!=null)
      {
        temp=temp.next
      }
      temp.next=node
	  node.prev=temp
    }
  }
  insert(ele, pos)
  {
    var node=new newNode(ele)
    if(pos==1)
    {
      node.next=this.dlist
      this.dlist.prev=node
      this.dlist=node
    }
    else
    {
      var temp=this.dlist
      var i=2
      while(i!=pos && temp.next!=null)
      {
        temp=temp.next
        i=i+1 
      }
      node.next=temp.next
      node.prev=temp
      if(temp.next!=null)
      {
        temp.next.prev=node
      }
      temp.next=node
    }
  }
  del(ele)
  {
    var temp=this.dlist
  	while(temp.data!=ele && temp.next!=null)
  	{
  	 		temp=temp.next
  	}
  	if(temp.data==ele)
  	{
  	  if(temp.prev==null)
  	  {
  	    this.dlist=this.dlist.next
  	    if(this.dlist!=null)
  	      this.dlist.prev=null
  	  }
  	  else
  	  {
  	    if(temp.next!=null)//not last node
  	    {
  	      temp.next.prev=temp.prev
  	    }
  	    temp.prev.next=temp.next
  	 }
  	 temp=null
  	}
  	else
  	    console.log("Element not present")
  }
  display()
  {
    
      var temp=this.dlist
      while(temp!=null)
      {
        console.log(temp.data)
        temp=temp.next
      }
  }
}
class newNode 
{
  constructor (data, prev, next) 
  {
    this.data = data
	  this.prev= null
    this.next = null
  }
}

const dlist = new LinkedList()

dlist.create(1)
dlist.create(2)
dlist.create(3)
console.log("After Create...")
dlist.display()
dlist.insert(10,1)
dlist.insert(20,3)
dlist.insert(30,500)
console.log("After Insert...")
dlist.display()
dlist.del(2)
dlist.del(10)
dlist.del(30)
console.log("After Delete...")
dlist.display()











