    let reviewScroll = document.querySelector(".feedback_content");
    let prev = document.getElementById("prevBtn");
    let next = document.getElementById("nextBtn");

    next.addEventListener("click",  ()=> {
        reviewScroll.style.scrollBehavior = "smooth";
        reviewScroll.scrollLeft += 810;
    });
    prev.addEventListener("click",  ()=> {
        reviewScroll.style.scrollBehavior = "smooth";
        reviewScroll.scrollLeft -= 810;
    });
    
    window.addEventListener("resize", ()=> {
        let reviewWidth = reviewScroll.offsetWidth;
        let reviewMargin = reviewWidth - 21;

        next.addEventListener("click",  ()=> {
            reviewScroll.style.scrollBehavior = "smooth";
            reviewScroll.scrollLeft += reviewMargin;
        });
        prev.addEventListener("click",  ()=> {
            reviewScroll.style.scrollBehavior = "smooth";
            reviewScroll.scrollLeft -= reviewMargin;
        });
    });

