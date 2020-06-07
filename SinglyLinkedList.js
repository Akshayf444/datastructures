class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        //create new node object as we are adding new node at the end of the list
        var newNode = new Node(val);

        if (!this.head) {
            //if head is not set that means list is empty 
            //so make head and tail both since list has only one element
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        if (this.length == 0) return false;
        var current = this.head;
        var counter = this.length;
        while (counter > 0) { //loop throught elements
            console.log(current.val);
            current = current.next;
            counter--;
        }
    }

    //pop basically means making second last element as last element
    pop() {

        if (this.length == 0) return false; //if list is empty
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            return list;
        }

        var secondListElement = this.head;
        var counter = this.length;
        while (counter > 2) {
            secondListElement = secondListElement.next;//get second last element
            counter--;
        }
        secondListElement.next = null;//make next property on secondlast element i.e simply removing reference to next element
        this.tail = secondListElement;//assing second last element to tail
        this.length--;//
        return this;

    }

    //remove head node and make 2nd node as head
    shift() {
        if (this.length == 0) return false;//list is empty
        if (this.length == 1) return this.pop;
        var newHead = this.head.next;
        this.head = newHead;
        this.length--;
        return this;
    }

    //add node at the start
    unshift(val) {
        var newNode = new Node(val);
        if (this.length == 0) return this.push(val);
        var originalHead = this.head;
        this.head = newNode;
        this.head.next = originalHead;
        this.length++;
        return this;

    }

    //get node by its index
    get(index) {
        if (index < 0) return false;
        if (index == 0) return this.head;
        if (index >= this.length) return false;

        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return foundNode;
        }
        return false;
    }

    insert(index,val){
        var newNode = new Node(val);
        if(index === 0) return this.unshift(val);
        if(index === this.length - 1) this.push(val);
        if (index < 0 || index >= this.length) return false;

        var newHead = this.get(index - 1);
        var temp = newHead.next;//get next link of selected element
        newHead.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList();
list.push("Akshay");
list.push("Mohite");
list.push("Nechal");
list.push("Patan");
list.push("Satara");
list.push("Maharashtra");
list.push("India");
list.traverse();
list.pop();
console.log("=====after popping=========");
list.traverse();
list.shift();
console.log("=========after shift=======");
list.traverse();
list.unshift("new node at start");
console.log("=========after unshift=======");
list.traverse();
console.log(list.get(2));
list.set(1,"Akshay Mohite")
console.log("=========after set=======");
list.traverse();

