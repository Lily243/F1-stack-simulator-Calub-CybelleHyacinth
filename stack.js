
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack();

$(document).ready(function(){

    $("#push").click(function(){
        let value = $("#data").val();

        if(value.trim() === ""){
            alert("Please enter a value.");
            return;
        }

        stack.push(value);
        $("#stack").prepend(`<div class="row bg-primary push">${value}</div>`);

        $("#data").val("");
    });

    $("#pop").click(function(){
        let deletedItem = stack.pop();

        if(deletedItem === undefined){
            alert("Stack is empty!");
            return;
        }

        $("#stack .push").first().remove();
        $(".popped").empty();

        $(".popped").append(
            `<div class="row pop text-bg-danger border border-light">${deletedItem}</div>`
        );
    });

    $("#peek").click(function(){

        if(stack.isEmpty()){
            alert("Stack is empty!");
            return;
        }

        $("#stack .push").removeClass("border border-warning border-3");

        stack.peek();

        $("#stack .push").first().addClass("border border-warning border-3");

    });

    $("#clear").click(function(){

        stack.clear();

        $("#stack").empty();
        $(".popped").empty();

    });
});