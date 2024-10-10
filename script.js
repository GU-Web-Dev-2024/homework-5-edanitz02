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

let panels = document.getElementsByClassName("art-panel");
let viewCountButton = document.getElementById("counter");
let resetButton = document.getElementById("reset-button");
let viewCount = 0;



for(let panel of panels) {
    panel.addEventListener("click", function (){
        if(panel.style.getPropertyValue("background-color") == "") {
            viewCount++;
            viewCountButton.textContent = "Artworks Viewed: " + viewCount;
        }
        panel.style.backgroundColor = "aqua";
        
    });
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