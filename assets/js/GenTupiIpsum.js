class GenTupiIpsum {
    constructor(el) {
        console.log("class GenTupiIpsum");

        this._el = el;
        this._elBtn = this._el.querySelector("button");
        //this._compteur = -1;
        this._elTupiGerado = document.querySelector("[data-js-tupi-gerado]");

        //this._elNumberOfParagraphs = this._el.querySelector("input");
        //console.log("input value:", this._elNumberOfParagraphs.value);

        this.injecteCitation = this.injecteCitation.bind(this);

        this.init();
        //this.separatePhrase(textoTupiIpsum);
        //this.shuffleArray(textoTupiIpsum);


    }

    init() {
        this.injecteCitation();
        this._elBtn.addEventListener("click", this.injecteCitation);

    }




    /**
    * Function to inject inside DOM the result of text generated
    * 
    */
    injecteCitation() {

        let textSeparated = separatePhrase(textoTupiIpsum),
            textMixed = shuffleArray(textSeparated),
            textFinal = textMixed.join(". ");

        //console.log(textFinal);
        //console.log(textSeparated);

        // Function to separate the phrases after "." from array
        function separatePhrase(array) {
            let block = [], blockF = [];

            for (let i = 0; i < array.length; i++) {
                block.push(array[i].split("."));
                block[i] = block[i].filter((val) => val != "");
            }

            return block.flat(1);
        }


        /* Function to randomize array in-place using Durstenfeld shuffle algorithm */
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }




        this._elTupiGerado.innerHTML = textFinal;

        /*
        let randomId = Math.floor(Math.random() * textoTupiIpsum.length);
        this._elTupiGerado.innerHTML = textoTupiIpsum[randomId];
        */
    }










}



