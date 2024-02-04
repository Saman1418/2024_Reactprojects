class Node:
    def __init__(self,data):
        self.data = data
        self.next = None

class linklist:
    def __init__(self):
        self.head = None

    def atbegg(self,data):
        new = Node(data)
        if(self.head == None):
            self.head = new
        else:
            new.next = self.head
            self.head = new

    def atend(self,data):
        new = Node(data)
        if(self.head==None):
            self.head = new
        else:
            temp = self.head
            while temp.next:
                temp = temp.next
            temp.next = new

    def count(self,x):
        count = 0
        temp = self.head
        while temp:
            count+=1
            temp = temp.next
        temp = self.head
        for i in range(count-x-1):
            temp = temp.next
        return temp.data




    def delbigg(self):
        self.head = self.head.next

    def delend(self):
        temp = self.head
        while temp.next.next:
            temp = temp.next
        temp.next = None

    def printf(self):
        if(self.head == None):
            return None
        else:
            temp = self.head
            while temp:
                print(temp.data,end="-->")
                temp = temp.next



l1 = linklist()
l1.atbegg("11")
l1.atbegg("22")
l1.atbegg("33")
l1.atbegg("44")
l1.atbegg("55")
l1.atend("66")
l1.atend("77")
# l1.delbigg()
# l1.delend()
# l1.delend()
# l1.delbigg()
print(l1.count(2))
l1.printf()

