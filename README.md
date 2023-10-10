# Creating a Nodejs mySQL Login Tutorial

## We are going to need:

1. XAMP to be installed to run mysql Server
2. VS Code or any development environment
3. GIT for version controling
4. We need to have nodejs installed in our machine

### Now Open VS Code in a new window

Open an integrated terminal and create a package.json file
> $ npm init -y
It is going to store all dependencies and all related information to our project

### Next we are going to install 
   1. express (to start our server), 
   2. mysql (to connect nodejs to mysql server),
   3. dotenv (to store and protect sensitive information such as passwords and so on)
   4. hbs or handlebars (Our template for the html part)
   5. bcryptjs (to encrypt user passwords)
   6. cookie-parser & jsonwebtoken(so we can start using cookies)
   7. 

#### Now in terminal write 
> $ npm install express mysql dotenv hbs

#### Next install nodemon so whenever we do any changes the server will restart automatically
> $ npm i --save nodemon 

<!-- > ###               "app.js" 

    const express = require("express")

 -->

### Adding Bootstrap to style our Homepage

#### Right above the declaring the css file in our index.hbs file
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

#### Right above the ending body tag in our index.hbs file
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>


