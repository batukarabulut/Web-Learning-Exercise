document.addEventListener("DOMContentLoaded", async () => {
    const quickLinksUrl = "https://run.mocky.io/v3/62dfa9a1-48e8-4468-832f-54acb4cfad64";
    const quicksContainer = document.querySelector(".quick-links-container");
    
    try {
        const response = await fetch(quickLinksUrl);
        const data = await response.json();
        
        data.forEach((element) => {
            const quicksDiv = document.createElement("div");
            quicksDiv.classList.add("quick-link-card");
            
            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.title;

            quicksDiv.appendChild(img);
            quicksContainer.appendChild(quicksDiv);
        });

    } catch (error) {
        console.error("Quick links cannot find.", error);
    }
});
