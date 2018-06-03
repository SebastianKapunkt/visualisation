let min_x = 0;
let min_y = 0;
var canvas = document.getElementById("main_canvas");
// (function () {
//     resize();
//     let bla = countries_data.features
//         .map(f => f.geometry.coordinates);

//     let values = [];
//     bla.map(f => {
//         if (f[0][0].length == 2) {
//             values = values.concat(f[0]);
//         } else {
//             values = values.concat(f[0].reduce((acc, e) => acc.concat(e), []));
//         }
//         return f;
//     });
//     console.log(values);
//     min_x = values.reduce((a, b) => a[0] < b[0] ? a : b)[0];
//     min_y = values.reduce((a, b) => a[1] < b[1] ? a : b)[1];
//     max_x = values.reduce((a, b) => a[0] > b[0] ? a : b)[0];
//     max_y = values.reduce((a, b) => a[1] > b[1] ? a : b)[1];
//     console.log(min_x);
//     console.log(min_y);
//     console.log();
//     console.log(canvas.width / max_y);
//     redraw(bla);

//     window.onresize = function (event) {
//         resize();
//         redraw(bla);
//         console.log(canvas.width / max_x);
//     }

// })();

function redraw(bla) {
    bla.map(f => {
        if (f[0][0].length == 2) {
            drawGeometry(f[0]);
        } else {
            f.map(x => drawGeometry(x[0]));
        }
        return f;
    });
}

function drawGeometry(coordinates) {
    var canvas = document.getElementById("main_canvas");
    var context = canvas.getContext("2d");

    context.strokeStyle = "#FF0000";

    context.beginPath();

    coordinates = coordinates.map(c => {
        x = c[0] + 181;
        y = -c[1] + 84;
        context.lineTo(
            x * canvas.width / max_x / 2.03,
            y * canvas.width / max_x / 2.03
        )
        return c;
    });

    context.stroke();
}