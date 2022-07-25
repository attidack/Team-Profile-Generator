const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100 shadow">
          <div class="card-header bg-primary text-white">
              <h3>${manager.name}</h3>
              <h4><i class="bi bi-cup-hot"></i> Manager</h4>
          </div>
          <div class="card-body bg-light">
            <div class="border bg-white">
              <p><strong>ID:</strong> ${manager.id}</p>
            </div>
            <div class="border bg-white">
              <p><strong>Email:</strong> <a href="mailto:${manager.email}">${manager.email}</a></p>
            </div>
            <div class="border bg-white">
              <p><strong>Office Number:</strong> ${manager.officeNumber}</p>
            </div>
          </div>

      </div>
  </div>
  `;
}

const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100 bg-light shadow">
          <div class="card-header bg-primary text-white">
              <h3>${engineer.name}</h3>
              <h4><i class="bi bi-eyeglasses"></i> Engineer</h4>
          </div>
          <div class="card-body bg-light">
            <div class="border bg-white">
              <p><strong>ID:</strong> ${engineer.id}</p>
            </div>
            <div class="border bg-white">
              <p><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            </div>
            <div class="border bg-white">
              <p><strong>Github:</strong> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
          </div>
      </div>
  </div>
  `
}

const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
      <div class="card h-100 bg-light shadow">
          <div class="card-header bg-primary text-white">
              <h3>${intern.name}</h3>
              <h4><i class="bi bi-mortarboard"></i> Intern</h4>
          </div>
          <div class="card-body bg-light">
            <div class="border bg-white">
              <p><strong>ID:</strong> ${intern.id}</p>
            </div>
            <div class="border bg-white">
              <p><strong>Email:</strong><a href="mailto:${intern.email}">${intern.email}</a></p>
            </div>
            <div class="border bg-white">
              <p><strong>School:</strong> ${intern.school}</p>
            </div>
          </div>
  </div>
</div>
  `
};

generateHTML = (data) => {

  pageArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  const employeeCards = pageArray.join('')

  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;
}
 
const generateTeamPage = function (employeeCards) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <header>
      <div class="align-center pb-5">
        <h1 class="bg-danger p-5 w-100 text-center text-white">My Team</h1>
      </div>
      
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = generateHTML; 
