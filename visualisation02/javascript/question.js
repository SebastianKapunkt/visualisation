class Question {
  constructor(id, title_text, time, draw_call, question_text, features) {
    this.id = id;
    this.title = title_text;
    this.time = time;
    this.draw_call = draw_call;
    this.question = question_text;
    this.features = features;
  }

  next_run() {
    if (this.time < 4000) {
      this.time = this.time * 1.5;
    }
  }

  set_title_text(string_id) {
    $(string_id).html(this.title);
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
    case "case_find_red":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("circle", "blue", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "red", 1));
      };
      break;
    case "case_find_small":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("circle", "green", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "green", 0.5));
      };
      break;
    case "case_find_circle":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("square", "blue", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "blue", 1));
      };
      break;
    case "case_find_small_red":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("circle", "blue", 1));
        distractor_features.push(new ObjectFeatures("circle", "blue", 0.5));
        distractor_features.push(new ObjectFeatures("circle", "red", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "red", 0.5));
      };
      break;
    case "case_find_small_circle":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("square", "green", 1));
        distractor_features.push(new ObjectFeatures("square", "green", 0.5));
        distractor_features.push(new ObjectFeatures("circle", "green", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "green", 0.5));
      };
      break;
    case "case_find_small_circle_1":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("square", "blue", 1));
        distractor_features.push(new ObjectFeatures("square", "blue", 0.5));
        distractor_features.push(new ObjectFeatures("triangle", "blue", 1));
        distractor_features.push(new ObjectFeatures("triangle", "blue", 0.5));
        distractor_features.push(new ObjectFeatures("circle", "blue", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "blue", 0.5));
      };
      break;
    case "case_find_red_circle":
      draw_function = function () {
        var distractor_features = [];
        distractor_features.push(new ObjectFeatures("square", "blue", 1));
        distractor_features.push(new ObjectFeatures("square", "red", 1));
        distractor_features.push(new ObjectFeatures("circle", "blue", 1));
        return draw_featureObjects_in_grid(50, 10, null, distractor_features, new ObjectFeatures("circle", "red", 1));
      };
      break;
    case "default_case":
      draw_function = function () {
        console.log("drawWWW");
        context.beginPath();
        context.rect(0, 0, 800, 400);
        context.fillStyle = "blue";
        context.fill();
        return {
          x: pos.x + grid_size / 2,
          y: pos.y + grid_size / 2
        };
      };
      break;
  }

  var current_question = new Question(
    task.id,
    task.title_text,
    task.time,
    draw_function,
    task.question_text,
    task.features
  );
  
  questions.push(current_question);
  return current_question;
}
