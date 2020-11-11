let h1 = document.querySelector('h1');
//nasłuchiwanie na ruch myszką "mousemove"
document.body.addEventListener("mousemove", function(e){
    h1.textContent = `${e.pageX}(x)px, ${e.pageY}(y)px`;

    // "clientX(Y)" - pokazuje koordynaty (X,Y) od początku ---przeglądarki
    // "pageX(Y)" -   pokazuje koordynaty (X,Y) od początku ---strony
    // "screenX(Y)" - pokazuje koordynaty (X,Y) od początku ---ekranu

    // lepiej dać "event" do funkcji - "e":
    // console.log(event.clientX);         // - dobrze
    console.log(e.clientX, e.clientY);     // - lepiej

    //zmiana koloru bgc-body
    document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX/e.clientY * 20})`;
})