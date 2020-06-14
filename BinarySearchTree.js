class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 1;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root == null){
            this.root = newNode;
        } else {
            var current = this.root;
            while(true){
                if(current.value < value){
                    if(current.left == null) 
                    {
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                } else if(current.value > value){
                    if(current.right == null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                } else if(current.value == value){
                    current.frequency++;
                    return this;
                }
            }
        }
    }

    contains(value){
        if(this.root == null) return false;
        if(this.root.value == value) return true;
        var search = this.root;
        var found = false;
        while(found == false && search){
            if(search.value == value){
                found = true;
            } else if(search.value < value){
                search = search.left;
            } else if(search.value > value){
                search = search.right;
            }
        }
        return found;
    }
}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(8);
bst.insert(4);
bst.insert(25);
bst.insert(10);
console.log(bst.contains(8));
console.log(bst.contains(11));
console.log(bst);