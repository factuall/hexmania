const hexwidth = 41;
const hexheight = 36;


let scene = document.getElementById("scene");

for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        let hex = document.createElement("img");
        hex.src = "hex.svg";
        hex.style.position = "absolute";
    

        let offsetX = (y % 2 != 0) ? hexwidth/2 : 0;
        let leftPos = offsetX + (x * hexwidth) ;
        let topPos = y * hexheight;

        hex.style.left = leftPos + "px";
        hex.style.top = topPos + "px";
        scene.appendChild(hex);


            let top = document.createElement("img");
            top.src = "hex.svg";
            top.style.position = "absolute";
            top.style.left = leftPos + "px";
            top.style.top = -24 + topPos + "px";
            scene.appendChild(top);

    }
}
