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
                    <img src="${cardData.url}" alt="" id="img">
                    <img src="./img/pin.svg" alt="" id="pin">
                </div>
                
                <div class="date">${cardData.date}</div>
                <div class="text">${cardData.title}</div>
            </div>`
            ;

            // invio ogni volta la card completa all HTML tramite .innerHTML
            container.innerHTML += cardHTML

    }
})


// mi assicuro di controllare anche un eventuale errore alla chiamata api
.catch(error => {
    console.log(error);
});