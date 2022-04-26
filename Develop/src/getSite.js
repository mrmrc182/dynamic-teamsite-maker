const getSite = (employeeArray) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css"/>
        <title>Your Team's Profiles</title>
      </head>
      <body>
      <header><h1>Your Team's Profiles</h1></header>
      <div class="row">
      ${generateTeam(employeeArray)}
      </div>
      </body>
    </html>
    `;
};
function generateTeam(employeeArray) {
  function generateManager(manager) {
    return `<div class= "card" style ="width: 18rem; background-color: red; margin: 10px;">
        <div class = "card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h4 class>Manager</h4>
          <p class="card-text">Mobile: ${manager.officeNumber}</p>
          <p class="card-text">ID: ${manager.id}</p>
          <p class="card-text">Email: <a href="${manager.email}">${manager.email}</a></p>
        </div>
      </div>`;
  }
  function generateEngineer(engineer){
    return `<div class= "card" style ="width: 18rem; background-color: green; margin: 10px;">
          <div class = "card-body">
          <h5 class="card-title">${engineer.name}</h5>
          <h4 class>Engineer</h4>
          <p class="card-text">Github: <a href= "https://github.com/${engineer.github}">${engineer.github}</a></p>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">Email: <a href="${engineer.email}">${engineer.email}</a></p>
          </div>
        </div>`;
  };
  function generateIntern(intern){
    return `<div class= "card" style ="width: 18rem; margin: 10px;">
          <div class = "card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h4 class>Intern</h4>
            <p class="card-text">School: ${intern.school}</p>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="${intern.email}">${intern.email}</a></p>
          </div>
        </div>`;
  };
  const document = [];
  for (let i = 0; i < employeeArray.length; i++) {
    if (employeeArray[i].getRole() === "Manager") {
      document.push(generateManager(employeeArray[i]));
    } else if (employeeArray[i].getRole() === "Engineer") {
      document.push(generateEngineer(employeeArray[i]));
    } else {
      document.push(generateIntern(employeeArray[i]));
    }
  }
  return document.join(" ");
}




module.exports = getSite;
