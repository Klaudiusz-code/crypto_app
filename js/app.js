
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

            const tdVolume = document.createElement('td')
            tdVolume.classList.add('td')
            tdVolume.innerText = `${res.volume}`

            const tdChange = document.createElement('td')
            tdChange.classList.add('td')
            tdChange.innerText = `${res.change}`


            tr.appendChild(tdName)
            tdName.appendChild(nameImg)
            tr.appendChild(tdPrice)
            tr.appendChild(tdVolume)
            tr.appendChild(tdChange)
            tb.appendChild(tr)
        }
    }



