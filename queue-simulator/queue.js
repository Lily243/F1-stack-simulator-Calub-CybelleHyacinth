class Queue {

    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
        return element;
    }

    dequeue() {
        if (this.items.length === 0) {
            return undefined;
        }

        return this.items.shift();
    }

    peek() {
        if (this.items.length === 0) {
            return undefined;
        }

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    print() {
        return this.items.join(" ");
    }
}

const queue = new Queue();

$(document).ready(function() {
     $("#enqueue").click(function(){

        let value = $("#data").val();

        if(value.trim() === ""){
            alert("Please enter a value.");
            return;
        }

        queue.enqueue(value);

        $("#queue").append(
            `<div class="row bg-primary queue-item">${value}</div>`
        );

        $("#data").val("");
    });

        $("#dequeue").click(function(){

        let deletedItem = queue.dequeue();

        if(deletedItem === undefined){
            alert("Queue is empty!");
            return;
        }

        $("#queue .queue-item").first().remove();

        $(".popped").empty();

        $(".popped").append(
            `<div class="row pop text-bg-danger border border-light">${deletedItem}</div>`
        );

    });

        $("#peek").click(function(){

        if(queue.isEmpty()){
            alert("Queue is empty!");
            return;
        }

        $("#queue .queue-item").removeClass("border border-warning border-3");

        queue.peek();

        $("#queue .queue-item").first().addClass("border border-warning border-3");

    });

        $("#clear").click(function(){

        queue.clear();

        $("#queue").empty();

        $(".popped").empty();

    });
});