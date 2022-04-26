

const getSite = () => {
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
    
        <title>Your Team's Site</title>
      </head>
      <body>
      ${generateTeam}
      </body>
    </html>
    `;
};
function generateTeam(employeeArray){
  function generateManager(manager){
    return `<div class= "card" style ="width: 18rem; background-color: red;">
        <div class = "card-body">
          <h5 class="card-title">${manager.name}</h5>
          <h5 class="card-title">Manager</h5>
          <p class="card-text">${manager.officeNumber}</p>
          <p class="card-text">${manager.id}</p>
          <p class="card-text">${manager.email}</p>
        </div>
      </div>`;
};
  const document = [];
    
  document.push(
      employeeArray
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
  );  
  return document.join(" ");
      };


// const generateEngineer = () => {
//   `<div class= "card" style ="width: 18rem;">
//         <div class = "card-body">
//         <h5 class="card-title">${Engineer.name}</h5>
//         <h5 class="card-title">Engineer</h5>
//         <p class="card-text">${Engineer.officeNumber}</p>
//         <p class="card-text">${Engineer.id}</p>
//         <p class="card-text">${Engineer.email}</p>
//         </div>
//       </div>`;
// };
// const generateIntern = () => {
//   `<div class= "card" style ="width: 18rem;">
//         <div class = "card-body">
//           <h5 class="card-title"></h5>
//           <p class="card-text"></p>
//           <p class="card-text"></p>
//           <p class="card-text"></p>
//         </div>
//       </div>`;
// };

getSite();
generateTeam();
// generateEngineer();
// generateIntern();

module.exports = getSite;
