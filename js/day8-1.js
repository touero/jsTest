let students = [
  {name: 'Touero', age: 20, gender: 'male', class: 1},
  {name: 'Tim', age: 19, gender: 'male', class: 2},
  {name: 'Alice', age: 20, gender: 'female', class: 1},
  {name: 'Rose', age: 19, gender: 'female', class: 2},
  {name: 'Tom', age: 20, gender: 'male', class: 1}
]

function creatTable (loopCreate){
  document.write(`
    <h2>${loopCreate.name}</h2>
    <table>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>gender</th>
        <th>class</th>
      </tr>
  `);
  loopCreate();
  document.write(`</table>`);
}


function loopFor (){
  for (let index = 0; index < students.length; index++) {
    let student = students[index];
    document.write(`
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.class}</td>
      </tr>
      `)
  }
}

function loopObj(){
  students.forEach(student => {
    document.write(`
      <tr>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.class}</td>
      </tr>
      `)
  });
}


creatTable(loopObj)
creatTable(loopFor)