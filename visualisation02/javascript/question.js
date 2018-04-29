class Question {
  constructor(id, title_text, time, draw_call, question_text) {
    this.id = id;
    this.title = title_text;
    this.time = time;
    this.draw_call = draw_call;
    this.question = question_text;
  }

  next_run() {
      if(this.time < 4000){
        this.time = this.time * 2;
      }
  }

  set_title_text(string_id) {
    $(string_id).text(this.title);
  }

  set_question_text(string_id) {
    $(string_id).html(this.question);
  }

  get_time() {
    return time;
  }

  draw(canvas) {
    this.draw_call(canvas);
  }
}

function next_question(task) {
  var draw_function = null;

  switch (task.type) {
    case "case1":
      draw_function = function() {
        console.log("drawWWW");
        context.beginPath();
        context.rect(0, 0, 800, 400);
        context.fillStyle = "blue";
        context.fill();
      };
      break;
  }

  var current_question = new Question(
    task.id,
    task.title_text,
    task.time,
    draw_function,
    task.question_text
  );
  questions.push(current_question);
  return current_question;
}
