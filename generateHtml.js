const generateHtml = function (staffAnswers) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Employee Bios</title>
    <link rel="icon" type="image/x-icon" href="./src/favicon.jpg">
</head>
<body>
    <header>
       <h1>Peter's Hotdogs and Pizzaria</h1>
       <div id="linkbar">Home Shop About Us Contact Us</div>
    </header>
<article>       
       ${staffAnswers}   
</article> 

    
</body>
</html>
    `
}


const generateCard = function(arr) {
    let staffInfo = '';
    
    if (arr.staffJob === 'Manager') {
        staffInfo =`Office Number: ${arr.staffOffice}`
    } else if (arr.staffJob === 'Engineer') {
        staffInfo = `Github: <a href="https://github.com/${arr.staffGithub}">${arr.staffGithub}</a>`
    } else if (arr.staffJob === 'Intern') {
        staffInfo = `School: ${arr.staffSchool}`
    }
    return`
    <div class="card">
    <p id="staff-name">
    Name: ${arr.staffName}
    </p>
    <p id="staff-number">
    Employee ID: ${arr.staffId}
    </p>
    <p id="staff-email">
    Email: <a href="mailto:${arr.staffEmail}">${arr.staffEmail}</a>
    </p>
    <p id="staff-unique">
    ${staffInfo}
    </p>
    </div>
    `}


    module.exports = {generateHtml, generateCard};