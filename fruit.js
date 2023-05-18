const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 
'Avocado 🥑', 
'Banana', 'Bilberry', 
'Blackberry', 'Blackcurrant', 
'Blueberry', 'Boysenberry', 'Currant', 
'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 
'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian',
'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 
'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 
'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 
'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 
'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 
'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 
'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 
'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 
'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

function search(str) {
	let results = [];
	fruit.forEach(f =>{
		if(f.toLowerCase().includes(str.toLowerCase())){
			results.push(f);
		}
	})
   //for(let i= 0; i<fruit.length; i++) {
	//console.log(fruit[i])
	//if(fruit[i].includes(str)){
		//results.push(fruit[i])
	return results;
}

function searchHandler(e) { 
	showSuggestions(search(e.target.value));
   // suggestions.querySelectorAll("li").forEach(i=> i.remove())
	//console.log(e.target.value)
	//let foundFruit= search(e.target.value)
	//console.log(foundFruit)
	//showSuggestions(foundFruit)
}

function showSuggestions(results, inputVal) {
	const fruitList = results.map((list)=>{
		return "<li>" + list + "</li>"; 
	}).join('');

	suggestions.innerHTML = "<ul>" + fruitList + "</ul>"
	suggestions.style.display = 'block';

	//for(let i=0; i<results.length; i++) {
		//let items= document.createElement("li")
		//items.textContent = results[i]
		//suggestions.appendChild(items)
	}

function useSuggestion(e) {
	input.value = e.target.innerHTML;
	suggestions.style.display = 'none';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);



//  background-image: url(image/kizkulesi.webp);











