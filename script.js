
    // side bar
    document.addEventListener("DOMContentLoaded", ()=> {
        let sidetoogle = document.getElementById("sidebar-toogle")
        let sidebar = document.getElementById("sidebar");
        let shadows = document.getElementById("shadow");
        let menulink = document.getElementById("side-lists")
     
        const openMenu = () => {
            sidebar.style.top = "0";
            shadows.style.display = "block";
        };
      
        const closeMenu = () => {
            sidebar.style.top = "-400px";
            shadows.style.display = "none";
        };
            sidetoogle.addEventListener("click", openMenu);
            shadows.addEventListener('click', closeMenu);
            menulink.addEventListener('click', closeMenu);
        });
        // swiper slider
        document.addEventListener('DOMContentLoaded', function() {
            
            var swiper = new Swiper(".swiper-container", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                  rotate: 20,
                  stretch: 0,
                  depth: 350,
                  modifier: 1,
                  slideShadows: true
                },
                pagination: {
                    el: ".swiper-pagination"
                  }
              });
          });

      // galley view
      document.addEventListener('DOMContentLoaded', () => {
        const photos = document.querySelectorAll(".image-pic");
        const backshadow = document.getElementById("gallery-shadow");
        let activePhoto = null;
    
        // Handle image click to activate
        photos.forEach(photo => {
            photo.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevents the click from bubbling up to the slider
                if (activePhoto) {
                    activePhoto.classList.remove("active");
                }
                activePhoto = photo;
                photo.classList.add("active");
                backshadow.style.display = "block";
            });
        });
    
        // Handle background shadow click to deactivate
        backshadow.addEventListener('click', () => {
            if (activePhoto) {
                activePhoto.classList.remove("active");
            }
            backshadow.style.display = "none";
        });
    
        // Handle clicking on the empty space in the slider to deactivate
        document.addEventListener('click', (event) => {
            if (activePhoto && !activePhoto.contains(event.target)) {
                activePhoto.classList.remove("active");
                backshadow.style.display = "none";
            }
        });
      });

  // about text
  document.addEventListener("DOMContentLoaded", function () {
    // Register ScrollTrigger with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Create animation for about text and image
    gsap.from(".about-text", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".about-img img", {
      opacity: 0,
      scale: 0.9,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".about-img img",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Optional: Add text ticker animation
    gsap.to(".text-content", {
      xPercent: -100,
      duration: 15,
      ease: "none",
      repeat: -1,
    });
  });

  // heading title and servcies title
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for heading title
    gsap.from(".heading-title h6", {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".heading-title",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".heading-title img", {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".heading-title img",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // Animation for service style title
    gsap.from(".services-title h3", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".services-title h4", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.3, // delay to create a stagger effect
      scrollTrigger: {
        trigger: ".services-title",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // banner 
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for banner experience text
    gsap.from(".banner-experience-text", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".banner-experience",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

 
  

  // contact 
  document.addEventListener("DOMContentLoaded", function() {
    // GSAP animation for the image
    gsap.from(".contact img", {
       opacity: 0,
       y: 50,
       duration: 1,
       ease: "power2.out",
       scrollTrigger: {
          trigger: ".contact img",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true
       }
    });

    // GSAP animation for the headings
    gsap.from(".contact h3, .contact h4, .contact h5", {
       opacity: 0,
       y: 50,
       duration: 1,
       stagger: 0.2,
       ease: "power2.out",
       scrollTrigger: {
          trigger: ".contact h3",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true
       }
    });

    // GSAP animation for the social links
    gsap.from(".contact-social-links ul li", {
       opacity: 0,
       y: 50,
       duration: 1,
       stagger: 0.1,
       ease: "power2.out",
       scrollTrigger: {
          trigger: ".contact-social-links ul",
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true
       }
    });
 });