class CoinsTable extends HTMLElement {
    fill(coins) {
        const tbody = this.shadowRoot.querySelector('tbody');

        for (const coin of coins) {
            const tbody_column_name_image = document.createElement('IMG');
            tbody_column_name_image.classList.add('img');
            tbody_column_name_image.src = coin.image;

            const tbody_column_name = document.createElement('TD');
            tbody_column_name.classList.add('td');
            tbody_column_name.appendChild(tbody_column_name_image);
    
            const tbody_column_price = document.createElement('TD');
            tbody_column_price.classList.add('td');
            tbody_column_price.textContent = coin.current_price;
    
            const tbody_column_total_volume = document.createElement('TD');
            tbody_column_total_volume.classList.add('td');
            tbody_column_total_volume.textContent = coin.total_volume;
    
            const tbody_column_change = document.createElement('TD');
            tbody_column_change.classList.add('td');
            tbody_column_change.textContent = coin.price_change_24h;
    
            const tbody_row = document.createElement('TR');
            tbody_row.classList.add('tr');
            tbody_row.appendChild(tbody_column_name);
            tbody_row.appendChild(tbody_column_price);
            tbody_row.appendChild(tbody_column_total_volume);
            tbody_row.appendChild(tbody_column_change);
    
            tbody.appendChild(tbody_row);
        }
    }

    constructor() {
        super();

        (async () => {
            const response = await fetch('/css/coins-table.css');

            const style = document.createElement('STYLE');
            style.innerText = await response.text();
            this.shadowRoot.appendChild(style);
        })();

        const thead_column_name = document.createElement('TH');
        thead_column_name.textContent = 'Name';

        const thead_column_price = document.createElement('TH');
        thead_column_price.textContent = 'Price';

        const thead_column_total_volume = document.createElement('TH');
        thead_column_total_volume.textContent = 'Total Volume';

        const thead_column_change = document.createElement('TH');
        thead_column_change.textContent = 'Change 24';

        const thead_row = document.createElement('TR');
        thead_row.appendChild(thead_column_name);
        thead_row.appendChild(thead_column_price);
        thead_row.appendChild(thead_column_total_volume);
        thead_row.appendChild(thead_column_change);

        const thead = document.createElement('THEAD');
        thead.classList.add('thead');
        thead.appendChild(thead_row);

        const tbody = document.createElement('TBODY');
        tbody.classList.add('tbody');

        const table = document.createElement('TABLE');
        table.appendChild(thead);
        table.appendChild(tbody);

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(table);
    }
}

window.customElements.define("coins-table", CoinsTable);
