var ToDoMaker = (function (){
    var id = 0;
    return function TodoListItem (name, description){
        id += 1;
        this.name = name;
        this.description = description;
        this.status = false;
        this.id = id;
        this.createdAt = new Date();
    }
}());

var toDoList = new Vue({
    el: "#toDoList",
    data: {
        items: [],
        name:" ",
        description:" ",
        total: 0,
        complete: 0,
        incomplete: 0
        
        },
    methods: {
        addItem: function () {
        this.items.push(new ToDoMaker(this.name, this.description))
        this.name = " "
        this.description = " "
        this.total ++
        this.incomplete ++
        },
        removeItem: function(thisItem){
            for(var i = 0; i < this.items.length; i++){
                if(toDoList.items[i].id == thisItem){
                    toDoList.items.splice(i, 1)
                    this.total--
                    this.incomplete--
                }
            }    
        },
        completeItem: function(thisItem){
            for(var i = 0; i < this.items.length; i++){
                if(toDoList.items[i].id == thisItem){
                    this.items[i].status = !this.items[i].status
                    this.complete++
                    this.incomplete--
                }
            }    
        }
    }

            
        
    
});
