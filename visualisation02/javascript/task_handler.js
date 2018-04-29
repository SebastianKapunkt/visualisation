class Task {
  constructor(load_when_ready) {
    this.load_when_ready = load_when_ready;
    this.tasks = [];
    this.current_task = 0;
  }

  init(){
    var function_to_call = this.load_when_ready;
    var self = this;
    $.getJSON("tasks.json", function (json) {
      self.tasks = json;
      console.log("tasks loaded!");
      function_to_call(self);
    });
  }

  get_next_task() {
    if (this.current_task < this.tasks.length) {
      this.current_task++;
      return this.tasks[this.current_task-1];
    } else {
      return null;
    }
  }

  has_task_left(){
    return this.current_task < this.tasks.length;
  }

  get_task_length(){
    return this.tasks.length;
  }

  set_current_to_last(){
    this.current_task = this.tasks.length;
  }
}
