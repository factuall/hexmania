const hexwidth = 41;
const hexheight = 36;
let columns = Math.round(screen.width / hexwidth);
let rows = Math.round(screen.height / hexheight);
columns = Math.round(screen.width / hexwidth);
rows = Math.round(screen.height / hexheight);


let scene = document.getElementById("scene");

function updatePattern(){
    columns = Math.round(screen.width / hexwidth);
    rows = Math.round(screen.height / hexheight);
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
            let hex = document.createElement("img");
            hex.src = "hex.svg";
            hex.style.position = "absolute";
        
    
            let offsetX = (y % 2 != 0) ? hexwidth/2 : 0;
            let leftPos = offsetX + (x * hexwidth) ;
            let topPos = y * hexheight;
    
            hex.style.left = leftPos + "px";
            hex.style.top = topPos + "px";
            hex.style.filter = "invert("+ x/columns +")"
            hex.id = y * 10 + x;
            hex.className = "hex";
            scene.appendChild(hex);
    
    
            let top = document.createElement("img");
            top.src = "hex.svg";
            top.style.position = "absolute";
            top.style.left = leftPos + "px";
            top.style.top = -24 + topPos + "px";
            top.id = y * 10 + x;
            top.className = "hex";
            scene.appendChild(top);
    
            
        }
    }
}
updatePattern();



window.addEventListener("resize", (e) => {
    let list  = document.getElementsByClassName("hex")
    for (var i = 0; i < list.length; i++) {
        list[i].remove();
    }
    columns = Math.round(screen.width / hexwidth);
    rows = Math.round(screen.height / hexheight);
    updatePattern();
});