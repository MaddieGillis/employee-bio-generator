# Employee Bio Generator

## Description

GIVEN a command-line application that accepts user input…

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

This project is to help someone populate they’re employee bio or “about us” page with out having to constantly re-write the same code over and over. I learned a lot about using classes and async code. I also learned how to write and run tests using Jest.


## Installation

Requires inquirer 8.2.4 and jest. Type npm -i into the command line to download them.

## Usage
To use first install required packages via typing npm i in the command line.
Once done, write “node index.js” into the command-line.
You will be prompted to enter in information about the employee.
Continue entering employees until you have put in all required staff.
To finish select ‘No’ when prompted to add another employee.
It will then populate the index.hmtl
(Note: CSS was provided as an example for styling, CSS can be changed to fit one’s needs, all generated staff cards have the class of “card”) 

https://drive.google.com/file/d/1zcQeOoGgjFdlqX5SEfHaBA0faV6QOcOd/view 

Example end product
![image](https://user-images.githubusercontent.com/112782694/212523735-5a7e7935-47aa-474a-a553-5f5b058580ca.png)

## Tests
Tests use Jest. Type npm test into the command line to run tests

## Credits
Dog background by Karsten Winegeart on Unsplash https://unsplash.com/@karsten116?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
Inquirer documentation
fs documentation
w3 schools
Javapoint
Plural Sight courses
StackoverFlow


## License

Copyright 2023 Madeline Gillis

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


