function copy_array(a) {
    let b = Array(a.length);
    i = a.length;
    while (i--) b[i] = a[i];
    return b;
};

function create_option(select, value){
    var option = document.createElement('option');
    option.innerHTML = value;
    option.value = value;
    select.appendChild(option);
    return value;
}