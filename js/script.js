// Tramite api ottengo i dati che mi serviranno per riempire i campi delle card
// https://lanciweb.github.io/demo/api/pictures/

// dichiaro una variabile che richiama l HTML che mi permetterà di salvarci i dati
const container = document.querySelector(".container");

// effettuo la chiamata all api, gestendo i dati di ritorno 
axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then (response => {
    // salvo i dati richiamati in una variabile
    const data = response.data
    //  console.log(data)

// tramite un ciclo for, prendo in cosiderazione ogni singolo 
// elemento e ne estrapolo i dati
    for(let i = 0; i < data.length; i++) {

        // prendo in cosiderazione il singolo elemento 
        const cardData = data [i];

        // ricreo il formato html gia presente rimuovendo i dati specifici,  
        // in questo modo potro inserici singolarmente i dati per ogni card
        const cardHTML = `
            <div class="card">
                <div class="photo">
                    <img src="${cardData.url}" alt="" class="img">
                    <img src="./img/pin.svg" alt="" id="pin">
                </div>
                
                <div class="date">${cardData.date}</div>
                <div class="text">${cardData.title}</div>
            </div>`
            ;

            // invio ogni volta la card completa all HTML tramite .innerHTML
            container.innerHTML += cardHTML

    }

// tramite i dati ottenuti prima dalla chiamata api, gestisto il click di ogni singola card
// in modo tale che il popup con l immagine vada in display block 

// creiamo una variabile dove salviamo i dati delle card
    const cards = document.querySelectorAll (".card")
    
    // console.log(cards)

    // creiamo un ciclo per l evento click
    cards.forEach(card => {
        card.addEventListener ("click", () => {

         // estrapoliamo l url di ogni singola foto 
         const imgUrl = card.querySelector(".img").src;
        //  console.log (imgUrl)
        
        // creiamo la parte HTML contenente la foto
        const popUpContenuto =  `
        <img src="${imgUrl}" alt="Popup Image">
        `;
        
        // inviamo il tutto tramite .innerHTML
        popupImg.innerHTML = popUpContenuto;

        // rimuoviamo la classe hidden rendendolo in display block
        popup.classList.remove("hidden");

        });
    })
})


// mi assicuro di controllare anche un eventuale errore alla chiamata api
.catch(error => {
    console.log(error);
});

// Chiudi il popup
popupClose.addEventListener('click', () => {

    // al click sul bottone aggiungiamo la classe hidden per nascondelo
    popup.classList.add('hidden'); 
});