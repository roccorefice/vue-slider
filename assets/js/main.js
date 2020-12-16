// Istruzioni:
// Ricreare lo slider di immagini ma questa volta con Vue
// Bonus ufficiale:
// Facciamo in modo che il nostro slider scorra automaticamente in avanti,
// e ogni 3 secondi visualizzi un immagine differente.
// Tip: possiamo usare una lifecycle Hook per inserire un nostro script quando l'istanza Vue é stata caricata.
// Possibili extra Bonus:
// cliccando sui pallini visualizzeremo l'immagine corrispondente
// cliccando sulle frecce della tastiera sinista e destra scorriamo tra le immagini

let app = new Vue ({
    el: "#root",
    data : {
        //contatore che corrisponde all' index dell'array
        counter: 0,
        //array di immagini
        images: [
            "https://data.pixiz.com/output/user/frame/preview/400x400/8/1/2/7/2997218_1bc38.jpg",
            "https://www.blogtivvu.com/wp-content/uploads/2011/03/nuclear_simpsons-400x300.jpg",
            "https://tutticrimini.files.wordpress.com/2013/07/homer-simpson.jpg?w=400",
            "https://i.ebayimg.com/images/g/cFQAAMXQJ3xRfNBf/s-l400.jpg"
        ]
    },

    methods: {
        //funzione che permette di andare avanti nelle immagini
        goNext(){
            //incremento
            this.counter ++
            //se il contatore si trova nell'ultima posizione,
            if(this.counter === this.images.length){
                //allora torna alla posizione 0
                this.counter = 0;
            }
        },
        //funzione che permette di andare indietro nelle immagini
        goPrev(){
            //decremento
            this.counter --;
            //se il contatore si trova oltre lo 0
            if(this.counter < 0){
                //allora torna alla posizione ultima dell'array
                this.counter = this.images.length -1;
            } 
        },

        ///////////////////////////
        /////// EXTRA BONUS ///////
        ///////////////////////////

        //ad ogni click su un pallino verrà assegnato al counter il valore di i
        clickPoint (i){
            this.counter=i;
        }
    },

    ///////////////////////////
    ///// BONUS UFFICIALE /////
    ///////////////////////////

    // utilizzo del created hook
    // sconsigliato l'uso della arrow function
    created: function(){
        //richiamare la funzione goNext con il this. 
        setInterval(this.goNext, 3000);
    },

    
    ///////////////////////////
    /////// EXTRA BONUS ///////
    ///////////////////////////

    //mounted hook
    mounted: function(){
        document.addEventListener("keyup", e => {
            if (e.key === "ArrowRight"){
                this.goNext();
            } else if(e.key === "ArrowLeft"){
                this.goPrev();
            }
        });
    }

});