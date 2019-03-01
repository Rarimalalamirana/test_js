const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
let a=[];
let a2 =[];
let a3 =[];
entrepreneurs.forEach(content=>{
  if (content.year>1970 && content.year<1980) {
   a.push(content.first)
  }
  a2.push(`${content.first}-${content.last}`);
  a3.push(content.last);
});
   console.log(`les entrepreneurs nee  dans les années 70 sont:  ${a}`);
console.log( `le tableau contenant les entrepreneurs: ${a2}`);
entrepreneurs.forEach(content=>{
  var a = 2019-content.year
 console.log(`${content.first} a ${a} ans aujourd'hui.`);
});
console.log(` les inventeurs par ordre alphabétique du nom de famille:${a3.sort()}`)
