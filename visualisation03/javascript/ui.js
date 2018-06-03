contents = [];

(function () {
    contents.push({
        "id": "origin-content",
        "content": document.getElementById("origin-content"),
        "button": document.getElementById("origin-btn")
    });
    contents.push({
        "id": "time-content",
        "content": document.getElementById("time-content"),
        "button": document.getElementById("time-btn")
    });

    activate_content('origin-content');

    console.log(contents);
})();

function activate_content(id) {
    contents.map(c => {
        c['content'].classList.remove("show-content");
        c['button'].classList.remove("highlight-button");
        c['content'].classList.add("hide-content");
    });
    contents.filter(
        c => c['id'] === id
    ).map(c => {
        c['content'].classList.remove("hide-content");
        c['content'].classList.add("show-content");
        c['button'].classList.add("highlight-button");
    });
}