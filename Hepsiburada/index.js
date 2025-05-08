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
    const firsatlarUrl = "https://run.mocky.io/v3/296dc32c-1ff7-4906-9e5a-9554f4ec5530";

    const firsatImage = document.getElementById("firsat-image");
    const firsatName = document.getElementById("firsat-name");
    const firsatPrice = document.getElementById("firsat-price");
    const firsatLink = document.getElementById("firsat-link");
    
    let firsatProducts = [];
    let firsatIndex = 0;
    
    function showFirsatProduct() {
        const product = firsatProducts[firsatIndex];
        if (!product) {
            console.warn("Ürün verisi eksik:", firsatIndex);
            return;
        }
        firsatImage.src = product.image;
        firsatImage.alt = product.name;
        firsatName.textContent = product.name;
        firsatPrice.textContent = product.price;
        firsatLink.href = product.url;
    }
    
    try {
        const response = await fetch(firsatlarUrl);
        const data = await response.json(); 
    
        if (data.length > 0) {
            firsatProducts = data;
            showFirsatProduct();
            setInterval(() => {
                firsatIndex = (firsatIndex + 1) % firsatProducts.length;
                showFirsatProduct();
            }, 3000);
        } else {
            console.error("Fırsatlar listesi boş veya hatalı:", data);
        }
    } catch (error) {
        console.error("Fırsatlar verisi alınamadı.", error);
    }
    
    const setupResponsiveNavbar = () => {
        const navbar = document.getElementById("main-navbar");
        const navbarList = document.getElementById("navbar-menu");

        // Hamburger menü butonu oluştur
        const hamburger = document.createElement("button");
        hamburger.classList.add('hamburger');
        hamburger.setAttribute('aria-label', 'Menüyü aç');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'navbar-menu');

        // Hamburger icon oluştur - daha açık bir şekilde
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        
        hamburger.appendChild(span1);
        hamburger.appendChild(span2);
        hamburger.appendChild(span3);

        // Karartma overlay'i oluştur
        const overlay = document.createElement("div");
        overlay.classList.add('menu-overlay');
        document.querySelector('.navbar-container').appendChild(overlay);

        // Hamburger'ı navbara ekle
        navbar.insertBefore(hamburger, navbar.firstChild);
        
        // Debug: Hamburger menü doğru oluşturuldu mu?
        console.log("Hamburger menü oluşturuldu:", hamburger);
        console.log("Hamburger içindeki span sayısı:", hamburger.querySelectorAll('span').length);

        // Hamburger tıklama olayı
        hamburger.addEventListener('click', () => {
            navbarList.classList.toggle('active');
            hamburger.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Menünün açık olup olmadığını kontrol et
            const isOpen = navbarList.classList.contains('active');
            
            // Accessibility için aria özelliklerini güncelle
            hamburger.setAttribute('aria-expanded', isOpen);
            
            // Menü açıkken body scroll'u engelle
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Overlay'e tıklayınca menüyü kapat
        overlay.addEventListener('click', () => {
            navbarList.classList.remove('active');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Add has-submenu class to items with dropdown
        const menuItems = navbarList.querySelectorAll('li');
        
        menuItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (submenu) {
                item.classList.add('has-submenu');
                
                // On mobile, make parent links toggleable for submenus
                const parentLink = item.querySelector('a');
                
                parentLink.addEventListener('click', (e) => {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Check if this submenu is already open
                        const isAlreadyOpen = item.classList.contains('submenu-open');
                        
                        // First close all open submenus
                        menuItems.forEach(menuItem => {
                            if (menuItem.classList.contains('submenu-open')) {
                                menuItem.classList.remove('submenu-open');
                            }
                        });
                        
                        // Then, if current wasn't open before, open it
                        if (!isAlreadyOpen) {
                            item.classList.add('submenu-open');
                        }
                        // If it was open, it's now closed by the code above
                    }
                });
                
                // Handle clicks on the submenu itself to prevent closing
                submenu.addEventListener('click', (e) => {
                    // If click is on a link, allow default action (navigation)
                    if (e.target.tagName === 'A') {
                        // If in mobile view, close the menu
                        if (window.innerWidth <= 992) {
                            // Close the mobile menu
                            navbarList.classList.remove('active');
                            hamburger.classList.remove('active');
                            overlay.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                        // Let the link work normally (no preventDefault)
                        return;
                    }
                    
                    // If not clicking on a link, prevent event from bubbling up
                    e.stopPropagation();
                });
            }
        });

        // Add resize handler to reset mobile menu state on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992 && navbarList.classList.contains('active')) {
                navbarList.classList.remove('active');
                hamburger.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                // Reset any open submenus
                const openSubmenus = navbarList.querySelectorAll('.submenu-open');
                openSubmenus.forEach(item => {
                    item.classList.remove('submenu-open');
                });
            }
        });
    }

    // Call the setup function
    setupResponsiveNavbar();
});
