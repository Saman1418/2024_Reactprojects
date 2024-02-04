
class Node:
    def __init__(self,data):
        self.data = data
        self.left = None
        self.right = None



def inorder(root):
    if root != None:
        inorder(root.left)
        print(root.data)
        inorder(root.right)


def maxhight(root):
    if root==None:
        return 0
    else:
        ml=maxhight(root.left)
        mr=maxhight(root.right)
        return mr + 1

def isBalanced(root):
    if root==None:
        return 0
    else:
        ls = isBalanced(root.left)
        rs = isBalanced(root.right)
        return max(ls , rs)



root = Node(10)
root.left = Node(20)
root.right = Node(30)
root.right.left = Node(40)
root.right.right = Node(50)
inorder(root)

# t1 = tree()
print(maxhight(root))
print(isBalanced(root))