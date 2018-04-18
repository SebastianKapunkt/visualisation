var tasks = [];
var current_tasks = 0;

$.getJSON("tasks.json", function(json) {
    tasks = json;
});

function get_first_task() {
    current_tasks = 0;
    return tasks[0];
}

function get_next_tasks(){
    current_tasks++;
    if (current_tasks < tasks.length){
        return tasks[current_tasks];
    }else{
        return null;
    }
    
}
