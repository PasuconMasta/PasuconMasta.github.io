const localJSON = 'https://pasuconmasta.github.io/Final%20Project/data/prices.json'

fetch(localJSON)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);   //temporary checking for valid response and data parsing
 

  const prices = jsonObject['prices'];

  
  for (let i = 0; i < prices.length; i++ ) {
    let price = document.createElement('tr');
    let name = document.createElement('td');
    let maxp = document.createElement('td');
    let halfdayR = document.createElement('td');
    let halfdayW = document.createElement('td');
    let fulldayR = document.createElement('td');
    let fulldayW = document.createElement('td');
    
  
    prices[0]["Max Persons"]
    
    name.textContent = prices[i].name;
    maxp.textContent = prices[i]["Max Persons"];
    halfdayR.textContent = "$ " + prices[i]["half-day-reseved"] + ".00";
    halfdayW.textContent = "$ " + prices[i]["half-day-walkin"] + ".00"; 
    fulldayR.textContent = "$ " + prices[i]["full-day-reseved"] + ".00";
    fulldayW.textContent = "$ " + prices[i]["full-day-walkin"] + ".00"; 
    
    
    price.appendChild(name);
    price.appendChild(maxp);
    price.appendChild(halfdayR);
    price.appendChild(halfdayW);
    price.appendChild(fulldayR);
    price.appendChild(fulldayW);
    
  
 
    
    document.querySelector('tbody.prices').appendChild(price);
    
   
  
}
});