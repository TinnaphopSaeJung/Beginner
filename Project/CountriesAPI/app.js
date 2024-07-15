const container = document.getElementById("container");
const getCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url);   //await: รอให้ดึงข้อมูลจาก API มาครบทั้งหมดก่อนจะไปทำอย่างอื่น
    const items = await res.json();

    items.forEach(element => {
        createCard(element);
    });
};

const createCard = (data) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("country");
    const contentHTML = `
        <div class="img-container">
            <img src="${data.flags.png}"/>
        </div>

        <div class="info">
            <h3 class="name">${data.name.common}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `;

    cardElement.innerHTML = contentHTML;
    container.appendChild(cardElement);
};

getCountries();