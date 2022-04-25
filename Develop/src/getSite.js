//make variables for generating each class

const getSite = ({name}) => {
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
      <div class= "card" style ="width: 18rem;">
        <div class = "card-body">
          <h5 class="card-title"></h5>
          <p class="card-text"></p>
        </div>
      </div>
      </body>
    </html>
    `;
};
module.exports = getSite;
