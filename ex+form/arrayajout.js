var elements = []; // Tableau pour stocker les éléments

function ajouterElement() {
    var user= document.getElementById("user").value;
    elements.push(user);
    afficherElements();
}

function supprimerElement() {
    if (elements.length > 1) {
        elements.pop();
        afficherElements();
    }
}

function afficherToString() {
    afficherResultat(elements.toString());
}

function retirerDernier() {
    if (elements.length > 1) {
        elements.pop();
        afficherElements();
    }
}

function ajouterDebut() {
    var user = document.getElementById("user").value;
    elements.unshift(user);
    afficherElements();
}

function afficherJoin() {
    afficherResultat(elements.join(' - '));
}
function retirerPremier() {
    if (elements.length > 1) {
        elements.shift();
        afficherElements();
    }
}

function afficherLongueur(){
    afficherResultat('longueur du tableau ' +elements.length);

}
function trierTableau() {
    elements.sort();
    afficherElements();
}

function inverserTableau() {
    elements.reverse();
    afficherElements();
}




function afficherElements() {
    afficherResultat('STUDENTS : ' + elements.join(', '));
}

function afficherResultat(result) {
    document.getElementById("output").innerHTML = result;
}