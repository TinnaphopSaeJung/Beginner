const result = document.getElementById("result");
const listItem = [];
const filter = document.getElementById("filter");

filter.addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();
    listItem.forEach(item => {
        if (item.innerText.toLowerCase().includes(search)) {  //ถ้าเป็น True แสดงว่าเจอ
            //แสดงรายการ
            item.classList.remove("hide");
        } else {
            //ซ่อนรายการที่ไม่เกี่ยวข้อง
            item.classList.add("hide");
        }
    });
});

async function getData() {
    const url = "https://restcountries.com/v3.1/all";
    const res = await fetch(url);
    const items = await res.json();

    // เรียงลำดับตามชื่อประเทศ
    items.sort((a, b) => a.name.common.localeCompare(b.name.common));

    result.innerHTML = "";

    items.forEach(data => {
        const li = document.createElement("li");
        listItem.push(li);

        li.innerHTML = `
            <img src="${data.flags.png}">
            <div class="info">
                <h4>${data.name.common}</h4>
                <p>${formatNumber(data.population)}</p>
            </div>
        `;

        result.appendChild(li);
    });
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

getData();