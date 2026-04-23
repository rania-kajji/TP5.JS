let nombreSecret = Math.floor(Math.random() * 10) + 1;
let essais = 0;
let proposition;

do {
    proposition = parseInt(prompt("Devinez le nombre entre 1 et 10 :"));
    essais++;
    if (proposition < nombreSecret) {
        alert("C'est plus grand !");
    } else if (proposition > nombreSecret) {
        alert("C'est plus petit !");
    }
} while (proposition !== nombreSecret);

alert("Bravo ! Score : " + essais + " tentatives.");