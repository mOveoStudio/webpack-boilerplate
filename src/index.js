/**
 * Created by Gaëtan on 06-Oct-19.
 */

class Bitume{
    constructor(kilo = 20){
        let ciment = kilo;
        console.log(`J'aime les ${ciment}kg de climent`);
        document.querySelector("body").style.background = "#56e223"
    }
}

let bit = new Bitume(26);
