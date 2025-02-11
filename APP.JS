//TODO APP
let todo =[];
let req = prompt("Enter your request you want to");

while(true){
    if(req == "quit"){
        console.log("You quitting");
        break;
    }
    else if(req=="add"){
        let task = prompt("enter your task you want to add");
        todo.push(task);
        console.log("Task added successfully");
        }
   
     else if(req =="list"){
        for(list of todo ){
            console.log(list);
        }
        console.log("---------");
    } else if( req== "delete"){
        let idx = prompt("Enter the element you want delete");
        todo.splice(idx,1);
        console.log("Deleted successfully");
    }else{
        console.log("wrong request");
    }
    req = prompt("Enter your request you want to");
}