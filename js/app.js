// Pobieramy funkcje API
import { getCoins } from './coin-geko/index.js';

// Definiujemy niestandardowy element
import './coins-table.js';

// Pobieramy kursy kryptowalut
const coinsData = await getCoins();

// Wyszukujemy nasz niestandardowy element na stronie i uzupełniamy kursami
const coinsTable = document.querySelector("coins-table");
coinsTable.fill(coinsData);
