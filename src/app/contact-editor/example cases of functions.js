//con una istruzione le graffe sono opzionali
const fn1 = () => console.log("non ho parametri"); //senza parametri parentesi è obbligatorio
const fn2 = p => console.log("ho 1 parametr0 " + p);   //con 1 parametro parentesi è opzionale
const fn3 = (a,b) => console.log(a+b); //Con più di un parametro i parentesi sono obbligatori. Non fa return, o fa return di undefined
const fn4 = (a,b) => a+b;   //return implicito
const fn5 = (a,b) => {
    const result = a+b; 
    return result;
}   // con più di una istruzione, le graffe non sono più opzionali