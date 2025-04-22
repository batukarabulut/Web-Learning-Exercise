document.addEventListener("DOMContentLoaded", async () => {
    
    const ul = document.querySelector(".navbarEcon ul");

    const tickerTrack = document.createElement("div");
    tickerTrack.classList.add("ticker-track");
    const financeUrl = "https://run.mocky.io/v3/2ac931e9-de50-47e8-b4d7-e707d7b554db";


    try{
        const response = await fetch(financeUrl);
        const data = await response.json();

        data.finance.forEach(item => {
            let className = "flat";
            
            if(item.change > 0){
                className = "up";
            }
            else if(item.change < 0){
                className = "down"
            }

            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";

            const strong = document.createElement("strong");
            strong.textContent = item.name + " ";

            const valueText = document.createTextNode(`${item.value.toLocaleString("tr-TR", {minimumFractionDigits:2})} `);

            const span = document.createElement("span");
            span.textContent = `%${item.change.toFixed(2)} ${item.change > 0 ? "▲" : item.change < 0 ? "▼" : ""}`;
            span.classList.add(className);

            a.appendChild(strong);
            a.appendChild(valueText);
            a.appendChild(span);
            li.appendChild(a);
            ul.appendChild(li);
        });

    
    }
    catch(error){
        console.error("Finans verisi alınamadı:", error);
    }

    // Slider part

    const slider = document.getElementById("newsSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.getElementById("sliderDots");
    const newsUrl = "https://run.mocky.io/v3/2ef3ac57-2fb0-443e-8bc0-9b96f3dfbc10";

    let currentIndex = 0;
    let slides = [];

    function updateSlider() {
        if (slides.length === 0) return;
        
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
        
        document.querySelectorAll(".dot").forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }

    function goToSlide(index) {
        if (slides.length === 0) return;
        currentIndex = index;
        updateSlider();
    }

    prevBtn.addEventListener("click", () => {
        if (slides.length === 0) return;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", () => {
        if (slides.length === 0) return;
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    try {
        const response = await fetch(newsUrl);
        const data = await response.json();

        slider.innerHTML = '';
        dotsContainer.innerHTML = '';
        slides = [];

        data.news.forEach((item, index) => {
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
            slides.push(slide);

            const dot = document.createElement("div");
            dot.classList.add("dot");
            if (index === 0) dot.classList.add("active");

            dot.addEventListener("mouseover", () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        updateSlider();
    }
    catch(error) {
        console.error("Slider verisi alınamadı.", error);
    }

    const closeAdLeft = document.getElementById("close-ad-left");
    const leftAd = document.getElementById("sticky-ad-left");
    const closeAdRight = document.getElementById("close-ad-right");
    const rightAd = document.getElementById("sticky-ad-right");

    closeAdLeft.addEventListener("click", () =>{
        leftAd.style.display = "none";
    })

    closeAdRight.addEventListener("click", () =>{
        rightAd.style.display = "none";
    })
    





})
