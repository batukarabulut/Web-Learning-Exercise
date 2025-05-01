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

    const slider = document.querySelector(".sllider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector("next");

    sliderUrl = "https://run.mocky.io/v3/3bb01e8a-f167-4635-85f2-ffa017c3b2af";
    currentIndex = 0;

    slides = [];

    const updateSlider = () => {
        if(slides.length === 0) return;

        slides.forEach((slide,index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    prevBtn.addEventListener("click", () => {
        if(slides.length === 0) return;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        if(slides.length === 0) return;
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    try{
        const response = await fetch(sliderUrl);
        const data = await response.json();

        slider.innerHTML = "";
        slides = [];
    }
    catch(error){
        console.error("Slider Verisi Alınamadı", error);
    }



});
