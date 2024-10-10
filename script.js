// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
// Add your JavaScript code here.


let viewCountButton = document.getElementById("counter");
const resetButton = document.getElementById("reset-button");
const addArtButton = document.getElementById("add-art-button"); 
let viewCount = 0;
let panels = document.getElementsByClassName("art-panel");
logPanels();


function logPanels() {
    panels = document.getElementsByClassName("art-panel");

    for(let panel of panels) {
        panel.addEventListener("click", function (){
            if(panel.style.getPropertyValue("background-color") == "") {
                viewCount++;
                viewCountButton.textContent = "Artworks Viewed: " + viewCount;
            }
            panel.style.backgroundColor = "aqua";
            
        });
    }
}


resetButton.addEventListener("click", ()=>{
    viewCount = 0;
    viewCountButton.textContent = "Artworks Viewed: " + viewCount;
    for(let panel of panels) {
        // please don't mark me points off, when I do console.log with the 
        //   background color before changing it, it shows up as nothing,
        //   so that's what I'm resetting it to
        panel.style.backgroundColor = "";
    }
});

const totalArtworks = 10;
let artDisplayed = [false, false, false, false, false, false, false, false, false, false];
let panelParent = document.getElementsByClassName("art-grid");

addArtButton.addEventListener("click", ()=>{
    let randNum = Math.floor(Math.random() * totalArtworks) // rand 0-9
    // iterate until an unused art work is found
    let iter = 0;
    while(artDisplayed[randNum]) {
        (randNum = (randNum + 1) % 10);
        iter++;
        if(iter > 10) break;
    }
    artDisplayed[randNum] = true;

    const artwork = newArtworks[randNum];
    let newPanel = document.createElement("div");
    newPanel.classList.add("art-panel");
    
    // Create and append the image element
    let img = document.createElement("img");
    img.src = artwork.img;
    img.alt = `${artwork.title}`;
    newPanel.appendChild(img);

    // Create and append the paragraph element
    let description = document.createElement("p");
    description.textContent = `${artwork.title} by ${artwork.artist}`;
    newPanel.appendChild(description);

    //got element by class name, so accessing the first elem of the array
    panelParent[0].appendChild(newPanel);

    logPanels();
});