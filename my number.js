// projects completed

// المتغير
const d = 10;

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("projects completed");
    if (element) {
        element.textContent = d; 
    }
});

// satsfied clients

// المتغير
const c = 12;

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("satsfied clients");
    if (element) {
        element.textContent = c; 
    }
});


// عداد الزوار
let count = 3204; // بداية العد
        const counterElement = document.getElementById('counter');

        setTimeout(() => {
            const interval = setInterval(() => {
                count++;
                counterElement.innerText = `+${count} visitors`;
                if (count === 3774) { //نهاية العد
                    clearInterval(interval);
                }
            }, 1); // السرعة
        }, ); //تأخير البدء 

