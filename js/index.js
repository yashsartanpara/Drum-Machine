let pads = document.getElementById('drum').children;
console.log(pads.length);
let keys = [81, 87, 69, 65, 83, 68, 90, 88, 67];
let labels = ['clap', 'closehat', 'crash', 'kick', 'openhat', 'snare', 'tom1', 'tom2', 'tom3'];
let display = document.getElementById('display');

window.onkeydown = function (args) {
    for (let i = 0; i < pads.length; i++) {

        if (args.keyCode === keys[i]) {
            pads[i].children[0].play();
            display.innerHTML = labels[i]

        }
    }

};

for (let i = 0; i < pads.length; i++) {
    pads[i].addEventListener('click', function () {
        pads[i].children[0].play();
        display.innerHTML = labels[i]
    });
}




