var cities = ""
var final_text = ""

let arrive = true
let howManyCities = 0

while (arrive === true) {

    if (final_text === "") {
        var turistName = prompt("Qual é o seu nome?")
        final_text += "Seu nome é: " + turistName + "e você já visitou: "
    }

    let arrived = confirm("Você já visitou mais que " + howManyCities + " cidade(s)?")

    if (arrived === true) {
        var cityName = prompt("Qual é o nome da cidade?")

    howManyCities++

    if (cities === "")
        cities += cityName
    } else (
        cities += " ," + cityName
    )

    if (arrived === false) {
        arrive = false
        final_text += cities
    }
} 
alert(final_text)
