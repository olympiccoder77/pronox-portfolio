document.getElementById("dataForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let popup = document.getElementById("popup");
    let form = document.getElementById("dataForm");
    
    // إظهار الرسالة المنبثقة
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.opacity = "1";
        popup.style.transform = "translate(-50%, -50%) scale(1)";
    }, 50);
    
    let formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdJQTRJTUNXTusDek3mrBErPMQigIZTfsmy1xxo0Dxebed3nw/formResponse"; //Form link
    let formData = new FormData();
    
    // استبدل entry.XXXXXX بمعرفات الإدخال الفعلية من نموذج Google
    formData.append("entry.1951081248", document.getElementById("name").value);
    formData.append("entry.1267305486", document.getElementById("phone").value);
    formData.append("entry.337177248", document.getElementById("message").value);
    
    
    fetch(formURL, { method: "POST", body: formData, mode: "no-cors" })
    .then(() => {
        // إعادة تهيئة النموذج بعد نجاح الإرسال
        form.reset();
        
        // إخفاء الرسالة المنبثقة بعد 3 ثوانٍ
        setTimeout(() => {
            popup.style.opacity = "0";
            popup.style.transform = "translate(-50%, -50%) scale(0.8)";
            setTimeout(() => { popup.style.display = "none"; }, 300);
        }, 4000);
    })
    .catch(error => {
        console.error("خطأ في الإرسال", error);
        popup.style.display = "none";
    });
});