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
    <div id="card" class="card">
        
       ${staffAnswers}
        
    </div>
    
</article> 

    
</body>
</html>
    `
}

module.exports = generateHtml