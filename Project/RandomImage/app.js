const container = document.querySelector(".container");
const row = 3;
const cols = 3;

const accessKey = 'FqQJJK-e6RYEB5gusel6s5GraJSlsAGrhiCAS-l9E8o'; // แทนที่ด้วย Access Key ของคุณ

async function getRandomImage() {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`);
    const data = await response.json();
    return data.urls.small;
}

for (let i = 0; i < row * cols; i++) {
    //พื้นที่แสดงภาพ
    const imageElement = document.createElement("img");

    //ดึงภาพแบบสุ่มจาก Unsplash
    getRandomImage().then(url => {
        imageElement.src = url;
        container.appendChild(imageElement);
    }).catch(error => {
        console.error("Error fetching image:", error);
    });
}
