/**
 * Display the project with data given as en object.
 * @param {object} project - Object with data project with keys image, title and description.
 */
function displayProject(project) {
    document.getElementById("gallery-picture").src = project.image;
    document.getElementById("gallery-title").innerText = project.title;
    document.getElementById("gallery-description").innerText = project.description;
}

document.querySelectorAll("#gallery-thumbs img.thumbs-img").forEach(function(img){
    img.addEventListener("mouseover", function(event){
        displayProject({
            image: this.src,
            title: this.dataset.title,
            description: this.dataset.description
        });
    })
});