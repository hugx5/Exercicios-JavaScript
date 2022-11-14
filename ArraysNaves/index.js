//1-Filtrar o nome das naves que tem mais de 9 tripulantes
//2-Informar o numero da plataforma em que esta a primeira nave que ainda esta com engate pendente
//3- Destacar o nome de todas  as naves colocando-as em caixa alta e exibindo
//4- Exibir um alerta com todas estas informaçoes 


const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
  return spaceship[1] > 9
}).map(spaceship => {
  return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => {
  return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
  return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)