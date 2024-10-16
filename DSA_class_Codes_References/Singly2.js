class Node 
{
   constructor(element)
   {
      this.element=element;
      this.next=null;
     
   }
}
class LinkedList
{
   constructor()
   {
      this.head=null;
      this.size=0;
   }
   add (element)
   {
          var temp=new Node(element);
          var temp1;
          if(this.head==null)
          {
               this.head=temp;
          }
          else
          {
              temp1=this.head;
              while(temp1.next)
               {
                  temp1=temp1.next;
               }
               temp1.next=temp;
          }
   this.size++;
     }
addAt(element,position)
{
  if(position<0||position>this.size)
  console.log("Invalide position");
  else
  {
     var temp=new Node(element);
     var var1,var2;
     var1=this.head;
     if(position==0)
     {
       var1.next=this.head;
       this.head=temp;
     }
     else
     {
        var1=this.head
        var it=0;
        while(it<position)
        {
          it++;
          var2=var1;
          var1=var1.next;
        }
        temp.next=var1;
        var2.next=temp;
     }
     this.size++;
  }
}
remove()
{
   if(this.head==null)
   {
      console.log("LinkedList list is underflow");
   }
   else
   {
     var temp1,temp2;
     temp1=this.head;
     temp2=this.head;
     while(temp1.next)
     {
       temp1=temp1.next;
     }
    while(temp2.next!=temp1)
    {
      temp2=temp2.next;
    }
    temp2.next=null;
   }
}
showList()
{
   var temp1=this.head;
   while(temp1)
   {
     console.log(temp1.element);
     temp1=temp1.next;
   }
}
}
var LL=new LinkedList();
LL.add(21);
LL.add(22);
LL.add(23);
LL.showList();
console.log("Inser element");
LL.addAt(54,1);
LL.showList();
console.log("Remove Last element");
LL.remove()
LL.showList();
