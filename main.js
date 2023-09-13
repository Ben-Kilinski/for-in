let house = {
    street: "Echad HaAm",
    city: "Ramat Gan",
    country: "Israel",
    bedrooms: 5,
    habitants: 6
}
console.log(house)

for(const key in house){
    console.log(key+":")
}