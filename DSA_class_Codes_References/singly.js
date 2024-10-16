class node
{
	constructor(value)
	{
		this.data=value;
		this.next=null;
	}
}
class sll
{
	constructor()
	{
		this.head=null;
		this.count=0;
	}
	insertatfirst(val)
	{
		var newnode=new node(val);

		if(this.head==null)
		{
			this.head=newnode;
		}
		else
		{
			newnode.next=this.head;
			this.head=newnode;
		}
		this.count++;
	}
	insertatlast(val)
	{
		var newnode=new node(val);
		let cur=this.head;
		while(cur.next)
		{
			cur=cur.next;	
		}
		cur.next=newnode;
		this.count++;
	}

	insertatpos(val,pos)
	{
		var newnode=new node(val);
		
		let cur=this.head;
		
		let i=1;
		if(pos<0 || pos>this.count)
		{
				console.log("Invalid position");
		}
		else if(pos==1)
		{
			this.insertatfirst(val);
		}
		else if(pos==this.count)
		{
				this.insertatlast(val);
		}
		else
		{
			while(i<pos-1)
			{
				cur=cur.next;
				i++;
			}
			newnode.next=cur.next;
			cur.next=newnode;
			this.count++;
		
		}
	}
	
	display()
	{
		let cur=this.head;
		if(this.head==null)
		{
			console.log("Empty list");
		}
		else{
			while(cur.next)
			{
				console.log(cur.data+"->");
				cur=cur.next;
			}
		console.log(cur.data+"->null");
		}
	}
	deletefirst()
		{
				let cur=this.head;
				if(this.head==null)
				{
					console.log("empty");
				}
				else
				{
					this.head=cur.next;
					cur.next=null;
					this.count--;
					
				}
				
		}
		deletelast()
		{
			let cur=this.head;
			
			//let i=1;
			
			while(cur.next.next)
			{
				cur=cur.next;
				
				//i++;
			}
			cur.next=null;
			this.count--;
			
			
			
			
			
		}
		deletepos(pos)
		{
			let i=1;
			let cur=this.head;
			if(pos<0 || pos>this.count)
			{
				console.log("Invalid position");
			
			}
			else if(pos==1)
			{
				
				this.deletefirst();
				
			} 
			else
			{
				while(i<pos-1)
				{
					cur=cur.next;
					i++;
				}
				let temp=cur.next;
				cur.next=temp.next;
				temp.next=null;
				this.count--;
				
			} 
			
		}
		search(val)
		{
			let cur=this.head;
			let f=0;
			while(cur.next)
			{
				if(cur.data==val)
				{
					f=1;
					break;
				}
				else
					f=0;
					cur=cur.next;
			}
			if(f==1)
			{
				alert("found "+cur.data);
			}
			else
			{
				alert("Not found");
			}
		}
		
	
}
var list1=new sll()
list1.insertatfirst(30);
list1.insertatfirst(20);
list1.insertatfirst(10);
list1.insertatpos(40,3);
list1.insertatpos(50,2);
list1.deletefirst();
//list1.deletepos(3);
//list1.deletepos();
//list1.deletepos(5);
//list1.insertatpos(60,3);
//list1.insertatpos(23,2);
//list1.search(24);
list1.display();
console.log(list1.count);	

