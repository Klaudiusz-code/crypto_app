export const resultCurrency = (currency) => {
        for(const res of currency){

            const tb = document.querySelector('tbody');
            tb.classList.add('tbody')

            const tr = document.createElement('tr')
            tr.classList.add('tr')

            const tdName = document.createElement('td')
            tdName.classList.add('td')

            const nameImg = document.createElement('img')
            nameImg.classList.add('img')
            nameImg.src =`${res.img}`

            const tdPrice = document.createElement('td')
            tdPrice.classList.add('td')
            tdPrice.innerText = `${res.price}`

            const tdMax = document.createElement('td')
            tdMax.classList.add('td')
            tdMax.innerText = `${res.max24}`

            const tdMin = document.createElement('td')
            tdMin.classList.add('td')
            tdMin.innerText = `${res.min24}`

            const tdChange = document.createElement('td')
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
            }
            else {
                tdChange.innerHTML = `${res.change} %`
            }

            tr.appendChild(tdName)
            tdName.appendChild(nameImg)
            tr.appendChild(tdPrice)
            tr.appendChild(tdMax)
            tr.appendChild(tdMin)
            tr.appendChild(tdChange)
            tb.appendChild(tr)
        }
    }



