const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
let a1 =[];
let a2=[];
let a4 =[];
books.forEach(content=>{
	if (content.rented === 0) {
		a1.push(content.title);
	}
	a2.push(content.rented);
	a4.push(content.title);
	
});

if (a1 => []) {
	console.log("Ils ont ete tous imprente!");
}
for (var i = 0; i < books.length; i++) {
	if (books[i]["rented"] === (Math.max(...a2))) {
		console.log(`le livre le plus emprunté :${books[i]["title"]}`);
	}
	if (books[i]["rented"] === (Math.min(...a2))) {
		console.log(`le livre le moins emprunté :${books[i]["title"]}`);
	}
};
for (var i = 0; i < books.length; i++) {
	if (books[i]["id"] === 873495) {
		console.log(`le livre avec l'ID: :${books[i]["title"]}`);
	}
	
}
console.log(`La liste des livre par alphabetique:${a4.sort()}`);

books.shift();
for (var i = 0; i < books.length; i++) {

		console.log(books[i]["title"]);
	
	
}


