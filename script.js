let button = document.querySelector('button');
let terminal = document.querySelector('.console')
let win = document.querySelector('.window')
let toggle = document.querySelector(".toggle")
toggle.style.display = "none"

button.addEventListener("click", ()=>{
    win.style.display = "none"
    toggle.style.display = "block"
})

toggle.addEventListener("click", ()=>{
    toggle.style.display = "none"
    win.style.display = "block"
})

async function waitRandom(){
    return new Promise((resolve) =>{
        let rand =  Math.random() * 7000;
        setTimeout(resolve, rand);
        
    })
}
async function addMessage(messege){
    terminal.innerText += `\n${messege}`
}
async function addData() {
    
    async function animate() {
        let dot = 0;
        return new Promise((resolve) => {
            let dotInterval = setInterval(() => {    
                if (dot < 3) {
                    terminal.innerText += ".";
                    dot++;
                } 
                else {
                    dot = 0;
                }
            }, 500);
            
            // Stop animation after random wait
            setTimeout(() => {
                clearInterval(dotInterval);
                resolve();  // Resolve when animation is done
            }, 7000);  // You can adjust this time
        });
    }
animate()
await waitRandom()
await addMessage("Connecting the Server")

animate()
await waitRandom()
await addMessage("ByPassing Security Protocols")

animate()
await waitRandom()
await addMessage("Retriving Sensitive Data from device")

animate()
await waitRandom()
await addMessage("Uploading Data to the Server")

await waitRandom()
}
async function main() {
    await addData();
    terminal.innerText += "\nHacking Attack Successful!"
}
main()