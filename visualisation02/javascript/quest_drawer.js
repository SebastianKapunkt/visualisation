class ObjectFeatures {
    constructor(form = "square", color = "blue", size = 1) {
        this.form = form;
        this.color = color;
        this.size = size;
    }
}

function draw_featureObjects_in_grid(grid_size, grid_distance, distractor_count, distractor_features, target_features) {
    var field_count_x = parseInt(canvas.width / (grid_size + grid_distance));
    var field_count_y = parseInt(canvas.height / (grid_size + grid_distance));
    var field_count = field_count_x * field_count_y;

    // get random fields
    var fields = [];
    for (var i = 0; i < field_count; i++) {
        fields.push(i);
    }

    if (distractor_count == null || distractor_count == 0) {
        distractor_count = Math.floor((Math.random() * fields.length / 3)) + fields.length / 3;
    }
    else if (distractor_count > field_count - 1) {
        distractor_count = field_count - 1;
    }

    var random_fields = [];
    for (var i = 0; i < distractor_count; i++) {
        var random_field = Math.floor((Math.random() * fields.length));
        random_fields.push(fields[random_field]);
        fields.splice(random_field, 1);
    }

    var target_field = fields[Math.floor((Math.random() * fields.length))];

    // draw features in grid
    for (i = 0; i < random_fields.length; i++) {

        var features;
        if (distractor_features != null && distractor_features.length > 0) {
            features = distractor_features[Math.floor((Math.random() * distractor_features.length))];
        }
        else {
            features = new ObjectFeatures("square", "blue", 1);
        }

        var pos = get_position(random_fields[i], field_count_y, grid_size, grid_distance);
        draw_featureObject(pos, grid_size, features);
    }

    if (target_features == null) {
        features = new ObjectFeatures("square", "red", 1);
    }

    var pos = get_position(target_field, field_count_y, grid_size, grid_distance);
    draw_featureObject(pos, grid_size, target_features);

    return {
        x: pos.x + grid_size / 2,
        y: pos.y + grid_size / 2
    };
}

function get_position(target_field, field_count_y, grid_size, grid_distance) {
    return {
        x: parseInt(target_field / field_count_y) * (grid_size + grid_distance),
        y: parseInt(target_field % field_count_y) * (grid_size + grid_distance)
    };
}

function draw_featureObject(pos, grid_size, features) {
    var x = pos.x + ((grid_size - (grid_size * features.size)) / 2);
    var y = pos.y + ((grid_size - (grid_size * features.size)) / 2);
    grid_size *= features.size;

    context.beginPath();
    context.fillStyle = features.color;

    console.log(features.form);
    switch (features.form) {
        case "square":
            context.rect(x, y, grid_size, grid_size);
            context.fill();
            break;
        case "circle":
            context.arc(x + grid_size / 2, y + grid_size / 2, grid_size / 2, 0, 2 * Math.PI);
            context.fill();
            break;
        case "triangle":
            var path = new Path2D();
            path.moveTo(x, y + grid_size);
            path.lineTo(x + grid_size, y + grid_size);
            path.lineTo(x + grid_size / 2, y);
            context.fill(path);
            break;
        case "diamond":
            var path = new Path2D();
            path.moveTo(x + grid_size / 2, y + grid_size);
            path.lineTo(x + grid_size, y + grid_size / 2);
            path.lineTo(x + grid_size / 2, y);
            path.lineTo(x, y + grid_size / 2);            
            context.fill(path);
            break;
        default:
            console.log("this form does not exist!");
            break;
    }
}