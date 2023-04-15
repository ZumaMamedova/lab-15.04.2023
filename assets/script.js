

let box = document.querySelector('.box');

function stop(delay){
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, delay);
    })
}

stop(500).then(() => {
    box.classList.add("move");
    return stop(1000);
}).then(() => {
    box.classList.add("size");
    return stop(1000);
}).then(() => {
    box.classList.add("color");
    return stop(1000);
}).then(() => box.classList.add("radius"))

