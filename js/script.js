
// facciamo una griglia con i numeri da 0 a 100

const gridElement = document.querySelector("#grid");

// eseguo un ciclo per arrivare da 1 a 100
for(let i = 1; i <= 100 ; i++) {

//    creo un nuovo elemento html
    const newElement = document.createElement("div", "span");
    
    // creo delle " sottoclassi" per dare uno stile ai nuovi elementi inseriti
    newElement.className = "square border rounded";
    newElement.innerHTML = i;
    newElement.style.color = "black";
    newElement.style.fontWeight = "bold";
    newElement.style.fontSize = "15px";

    // faccio il controllo se la i è multipla solo di 3, solo di 5 o di entrambi i numeri
    if(i % 3== 0 && i % 5 == 0 ) {
        newElement.style.background = "red"
        newElement.innerHTML = " FizzBuzz";   
    } else if(i % 5 == 0) {
        newElement.style.background = "yellow"
        newElement.innerHTML = " Buzz";   
    }else if(i % 3== 0 ) {
        newElement.style.background = "lime"
        newElement.innerHTML = " Fizz";}
        else {
            newElement.style.background = "blue"
            newElement.innerHTML = i;
        }  

        // aggiungo il nuovo elemento creato alla gridElement
    gridElement.append(newElement);
    

}
