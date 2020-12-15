// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l'uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l'immagine attuale da visualizzare nello slider

let app = new Vue ({
    el: "#root",
    data : {
        counter: 0,
        images: [
            "https://data.pixiz.com/output/user/frame/preview/400x400/8/1/2/7/2997218_1bc38.jpg",
            "https://www.blogtivvu.com/wp-content/uploads/2011/03/nuclear_simpsons-400x300.jpg",
            "https://tutticrimini.files.wordpress.com/2013/07/homer-simpson.jpg?w=400",
            "https://i.ebayimg.com/images/g/cFQAAMXQJ3xRfNBf/s-l400.jpg"
        ]
        
    },

    methods: {
        goNext(){
            this.counter ++
            if(this.counter === this.images.length){
                this.counter = 0;
            }
        },
        goPrev(){
            if(this.counter > 0){
                this.counter --;
            } else {
                this.counter = this.images.length -1;
            }
        }
    }
  });