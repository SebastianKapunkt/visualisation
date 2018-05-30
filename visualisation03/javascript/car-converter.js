let lines = car_data.split("\n");
lines.map( l => {
    items = l.split("	");
    items.map( i => console.log(i));
});
