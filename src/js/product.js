// Блоки для слайдера
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let item5 = document.getElementById("item5");
let item6 = document.getElementById("item6");

// Продукты для слайдера
let product1 = document.getElementById("1");
let product2 = document.getElementById("2");
let product3 = document.getElementById("3");
let product4 = document.getElementById("4");
let product5 = document.getElementById("5");
let product6 = document.getElementById("6");

// Нвавигация
let prev = document.getElementById("prevProduct");
let next = document.getElementById("nextProduct");

//Размещаем слайды с продукцией
item1.innerHTML = product1.innerHTML;
item2.innerHTML = product2.innerHTML;
item3.innerHTML = product3.innerHTML;
item4.innerHTML = product4.innerHTML;
item5.innerHTML = product5.innerHTML;
item6.innerHTML = product6.innerHTML;

// Счетчик слайдов
let count = 1;

next.addEventListener("click", ()=> {
    count ++;
    //item1
    if (count <= 6) {
        
        item1.innerHTML = document.getElementById(count).innerHTML;
    } else {
        item1.innerHTML = document.getElementById(count-6).innerHTML;
        count = 1;
    }
    //item2 
    if (count < 6) {
        item2.innerHTML = document.getElementById(count+1).innerHTML;
    } else {
        item2.innerHTML = document.getElementById(count-5).innerHTML;
        count = 0;
    }
    //item3
    if (count < 5) {
        item3.innerHTML = document.getElementById(count+2).innerHTML;
    } else {
        item3.innerHTML = document.getElementById(count-4).innerHTML;
    }
    //item4
    if (count < 4) {
        item4.innerHTML = document.getElementById(count+3).innerHTML;
    } else {
        item4.innerHTML = document.getElementById(count-3).innerHTML;    
    }
    //item5
    if (count < 3) {
        item5.innerHTML = document.getElementById(count+4).innerHTML;
    } else {
        item5.innerHTML = document.getElementById(count-2).innerHTML;    
    }
    //item
    if (count < 2) {
        item6.innerHTML = document.getElementById(count+5).innerHTML;
    } else {
        item6.innerHTML = document.getElementById(count-1).innerHTML;    
    }
    let items = document.getElementsByClassName("product_slider_item");
    for (elem of items) {
        let oneElement = elem;
        oneElement.style.opacity = 0.3;
        setTimeout(() => {
            const interval = setInterval(() => {
                oneElement.style.opacity = parseFloat(oneElement.style.opacity) + 0.1;
                if(oneElement.style.opacity > 1) {
                    clearInterval(interval);
                }
            }, 50);
        }, 100);
    }
});

prev.addEventListener("click", ()=> {
    count --;
    if (count <= 0) {
        count = 6;
    }
    //item1
    item1.innerHTML = document.getElementById(count).innerHTML;
    //item2 
    if (count < 6) {
        item2.innerHTML = document.getElementById(count+1).innerHTML;
    } else {
        item2.innerHTML = document.getElementById(count-5).innerHTML;
    }
    //item3
    if (count < 5) {
        item3.innerHTML = document.getElementById(count+2).innerHTML;
    } else {
        item3.innerHTML = document.getElementById(count-4).innerHTML;
    }
    //item4
    if (count < 4) {
        item4.innerHTML = document.getElementById(count+3).innerHTML;
    } else {
        item4.innerHTML = document.getElementById(count-3).innerHTML;    
    }
    //item5
    if (count < 3) {
        item5.innerHTML = document.getElementById(count+4).innerHTML;
    } else {
        item5.innerHTML = document.getElementById(count-2).innerHTML;    
    }
    //item6
    if (count < 2) {
        item6.innerHTML = document.getElementById(count+5).innerHTML;
    } else {
        item6.innerHTML = document.getElementById(count-1).innerHTML;    
    }
    let items = document.getElementsByClassName("product_slider_item");
    for (elem of items) {
        let oneElement = elem;
        oneElement.style.opacity = 0.3;
        setTimeout(() => {
            const interval = setInterval(() => {
                oneElement.style.opacity = parseFloat(oneElement.style.opacity) + 0.1;
                if(oneElement.style.opacity > 1) {
                    clearInterval(interval);
                }
            }, 50);
        }, 100);
    }
});
