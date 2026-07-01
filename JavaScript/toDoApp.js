let req = prompt("Please Enter ur request : ");
let todo = [];

while(true) {
    if(req === "list") {
        if(todo.length === 0) console.log("No Data is here, Kindly add it for display");
        for(let i = 0; i < todo.length; i++) {
            console.log("------------------------------------------");
            
            console.log(`${i} : ${todo[i]}`);  
            
            console.log("------------------------------------------");
        }
    }
    else if(req === "add") {
        let tasks = prompt("Please Add the tasks : ");
        todo.push(tasks);
        console.log("Tasks are added");        
    }
    else if(req === "delete") {
        let idx = Number(prompt("Kindly enter the index tasks to delete :"));
        if(idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Tasks deleted");
            
        }
        else console.log("Invalid Index");   
    }
    else if(req === "quit") {
        console.log("Quitting the app !!");
        break;
    }
    else console.log("Please enter a valid request");

    req = prompt("Please enter ur request : ")
}