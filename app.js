console.log("It's alive");
const starwars_url="https://swapi.dev/api/people"


function fetchcharacters() {
  fetch(starwars_url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
fetchcharacters()

function rednerCharacterTable(containerE1 Character) {
 let character = ` 

<tr>
 <td>$character.name</td>
 <td>$character.height</td>
 <td>$character.mass</td>
 <td>$character.gender</td>
 <td>$character.birth_year</td>
</tr> ` ; 
}