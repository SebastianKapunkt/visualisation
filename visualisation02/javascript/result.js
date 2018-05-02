class Result {
  constructor(id, time, x, y, target_x, target_y) {
    this.id = id;
    this.time = time;
    this.x = x;
    this.y = y;
    this.target_x = target_x;
    this.target_y = target_y;
    console.log("id: " + id);
    console.log("time: " + time);
    console.log("x: " + x + " y: " + y);
  }
}
