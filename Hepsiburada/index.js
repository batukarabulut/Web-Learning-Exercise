document.addEventListener("DOMContentLoaded", async () => {
    const quickLinksUrl = "https://run.mocky.io/v3/3439a138-03d8-4205-b80b-0ec4a0288623";
    const quicksContainer = document.querySelector(".quick-links-container");
    
    try {
        const response = await fetch(quickLinksUrl);
        const data = await response.json();
        
        data.forEach((element) => {
            const quicksDiv = document.createElement("div");
            quicksDiv.classList.add("quick-link-card");

            const imgLink = document.createElement("a");
            imgLink.href = element.url;
            imgLink.target = "_blank";

            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.title;

            imgLink.appendChild(img);
            quicksDiv.appendChild(imgLink);
            quicksContainer.appendChild(quicksDiv);
        });

    } catch (error) {
        console.error("Quick links cannot find.", error);
    }
});
