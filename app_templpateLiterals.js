//this is  a part of ES6
const name = 'John';
const age = 31;
const job = 'Developer';
city = 'Melbourne';
let html;

function hello(){
  return 'hello';
}

//html strings needed when dynamic data insert from JS
//eg: populating a table

//Without template strings(literals) (ES5) - old way
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

html = '<ul>' +
        '<li>Name: ' + name + ' </li>' +
        '<li>Aeg: ' + age + ' </li>' +
        '<li>City: ' + city + ' </li>' +
        '<li>Job: ' + job + ' </li>' +
        '</ul>'


//with template strings/ literals (ES6)
//back keys denotes template strings
html = `
      <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li> ${2+2}</li> 
        <li> ${hello()}</li>
        <li> ${age>30 ? 'over 30': 'under 30'}</li>
      </ul>
      `;


document.body.innerHTML = html;