const scrollBtn = document.querySelector(".top");
const rootElement = document.documentElement;   //อ้างอิง Tag html

document.addEventListener("scroll", showBtn);

function showBtn() {
    const pageHeight = rootElement.scrollHeight - rootElement.clientHeight;
    
    if (rootElement.scrollTop / pageHeight > 0.3) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }
}

scrollBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}