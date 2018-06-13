function copy_array(a) {
    let b = Array(a.length);
    i = a.length;
    while (i--) b[i] = a[i];
    return b;
};

function create_option(select, value) {
    var option = document.createElement('option');
    option.innerHTML = value;
    option.value = value;
    select.appendChild(option);
    return value;
}

function normaleizeData(data, ref) {
    let max = data.reduce(function (a, b) {
        return Math.max(a, b);
    });
    let scale_factore = ref / max;
    data = data.map(item => item * scale_factore);
    return data;
}