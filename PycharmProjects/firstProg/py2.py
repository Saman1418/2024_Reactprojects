# linklist
class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class linklist:
    def __init__(self):
        self.head = None

    def atbegg(self,data):
        newnode = Node(data)
        if(self.head==None):
            self.head=newnode
        else:
            newnode.next=self.head
            self.head=newnode

    def atend(self,data):
        newnode=Node(data)
        if(self.head==None):
            self.head=newnode
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = newnode

    def atmid(self,data):
        newnode=Node(data)
        if(self.head==None):
            self.head=newnode
        else:
            temp = self.head
            count = 0
            while temp:
                count+=1
                temp = temp.next
            mid = count//2
            temp = self.head
            for i in range(mid-1):
                temp=temp.next
            newnode.next = temp.next
            temp.next = newnode



    def printall(self):
        if self.head==None:
            print("empty")
        else:
            temp = self.head
            while temp:
                print(temp.data,end="-->")
                temp=temp.next

l1=linklist()
l1.atbegg("11")
l1.atbegg("22")
l1.atbegg("33")
l1.atbegg("44")
l1.atend("55")
l1.atend("66")
l1.atmid("333333333")
l1.printall()