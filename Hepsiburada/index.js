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

    const slider = document.querySelector(".slides");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const sliderUrl = "https://run.mocky.io/v3/68ffc2e5-1680-416f-a955-225f2735c34b";
    let currentIndex = 0;

    let slideElements = [];

    const updateSlider = () => {
        if (slideElements.length === 0) return;
        slideElements.forEach((slide,index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    prevBtn.addEventListener("click", () => {
        if (slideElements.length === 0) return;
        currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        if (slideElements.length === 0) return;
        currentIndex = (currentIndex + 1) % slideElements.length;
        updateSlider();
    });


    try{
        const response = await fetch(sliderUrl);
        const data = await response.json();

        slider.innerHTML = "";
        slideElements = [];

        data.forEach((item,index) => {
            const slide = document.createElement("div");
            slide.classList.add("slide");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.title;

            img.onload = function() {
                if (index === 0) {
                    slider.style.height = `${this.height}px`;
                }
            };


            slide.appendChild(img);
            slider.appendChild(slide);
            slideElements.push(slide);
        });

        updateSlider();
    }
    catch(error){
        console.error("Slider Verisi Alınamadı", error);
    }



/*
 setInterval(() => {
            currentIndex = (currentIndex + 1) % slideElements.length;
            updateSlider();
        }, 5000); // Change slide every 5 seconds
*/

});
