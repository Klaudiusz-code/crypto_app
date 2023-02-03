export const resultCurrency = (currency,page =1) => {
    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    const selectedCurrencies = currency.slice(startIndex, endIndex);
    let numberOfPages = Math.ceil(currency.length / 10);

    const paginationDiv = document.querySelector('.pagination__menu');

    const createPagination = () => {
        while (paginationDiv.firstChild) {
            paginationDiv.removeChild(paginationDiv.firstChild);
        }
        for (let i = 1; i <= numberOfPages; i++) {
            // Tworzymy przycisk dla każdej strony
            const button = document.createElement("button");
            button.classList.add('pagination__menu-btn')
            button.innerHTML = i;
            button.addEventListener("click", () => {
                resultCurrency(currency, i);
            });
            paginationDiv.appendChild(button);
        }
    };
    createPagination();

    const tb = document.querySelector('tbody');
    tb.innerHTML = '';
    tb.classList.add('tbody');

    for (const res of selectedCurrencies) {
        const tr = document.createElement('tr');
        tr.classList.add('tr');

        const tdName = document.createElement('td');
        tdName.classList.add('td');

        const nameImg = document.createElement('img');
        nameImg.classList.add('img');
        nameImg.src = `${res.img}`;

        const tdPrice = document.createElement('td');
        tdPrice.classList.add('td');
        tdPrice.innerText = `${res.price}`;

        const tdMax = document.createElement('td');
        tdMax.classList.add('td');
        tdMax.innerText = `${res.max24}`;

        const tdMin = document.createElement('td');
        tdMin.classList.add('td');
        tdMin.innerText = `${res.min24}`;

        const tdChange = document.createElement('td');
        if (res.change > 0) {
            tdChange.innerHTML = `
            <i class='bx bx-chevron-up' ></i>
            ${res.change} %`;
            tdChange.classList.add('positive');
        } else if (res.change < 0) {
            tdChange.innerHTML = `
            <i class='bx bx-chevron-down' ></i>
            ${res.change} %`;
            tdChange.classList.add('negative');
        } else {
            tdChange.innerHTML = `${res.change} %`;
        }

        tr.appendChild(tdName);
        tdName.appendChild(nameImg);
        tr.appendChild(tdPrice);
        tr.appendChild(tdMax);
        tr.appendChild(tdMin);
        tr.appendChild(tdChange);
        tb.appendChild(tr);
    }
};