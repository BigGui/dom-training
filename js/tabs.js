/**
 * Removes active class on all #tabs-contents child
 */
function resetAllTabs() {
    document.querySelectorAll("#tabs-links .active, #tabs-contents .active").forEach(function(element) {
        console.log(element);
        element.classList.remove("active");
    });
}

document.querySelectorAll("#tabs-links [data-tab]").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        resetAllTabs();
        this.classList.add("active");
        const tabId = this.dataset.tab;
        document.getElementById(tabId).classList.add("active");
    })
})
