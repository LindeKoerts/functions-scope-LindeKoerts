// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailaddress) {
    const apenstaartje = emailaddress.indexOf('@');
    const domain = emailaddress.substring(apenstaartje + 1);
    return domain;
}

const domain1 = getEmailDomain("n.eeken@novi-education.nl");
const domain2 = getEmailDomain("t.mellink@novi.nl");
const domain3 = getEmailDomain("a.wiersma@outlook.com");

console.log(domain1, domain2, domain3);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emailaddres) {
    const apenstaartje = emailaddres.indexOf('@');
    const domain = emailaddres.substring(apenstaartje + 1);
    console.log(domain);


    switch (domain) {
        case "novi-education.nl":
            return "Student";
        case "novi.nl":
            return "Medewerker";
        default:
            return "Extern";
    }

}

const emailOne = typeOfEmail("n.eeken@novi-education.nl");
const emailTwo = typeOfEmail("t.mellink@novi.nl");
const emailThree = typeOfEmail("novi.nlaapjesk@outlook.com");

console.log(emailOne, emailTwo, emailThree);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (email) {
    const containsApenstaart = email.includes('@')
    const containsComma = email.includes(',')
    const containsDot = email.includes('.')
    const noDotInTheEnd = containsDot !== email.length-1;

    if (containsApenstaart && !containsComma && noDotInTheEnd) {
        return true;
    } else {
        return false;
    }

    const valid1 = checkEmailValidity("n.eeken@novi.nl");
    const valid2 = checkEmailValidity("tessmellink@novi.nl");
    const valid3 = checkEmailValidity("n.eekenanovi.nl");
    const valid4 = checkEmailValidity("n.eeken@novinl.");
    const valid5 = checkEmailValidity("tessmellink@novi,nl");

    console.log(valid1, valid2, valid3, valid4, valid5);



}