# Project Name

jQuery Server-Side Calculator

## Description

This project is a calculator. The calculations happen on the JavaScript based server-side. Utilizing GET and POST requests, the calculator displays the result of the calculation on below the input form and lists a history of past calculations.


### Prerequisites

Node.js
-NPM
-NPM Body-Parser
-Express

### Installation

1) Go to: https://github.com/FCLee12/weekend-jquery-server-calculator
2) Look at the top right of the webpage for the 'fork' button
3) Create a fork under your own GitHub account
    ***** Verify you are in your own fork of the project *****
        -At the top left of the webpage, you should see the path to the repo
        -Your GitHub account name should appear before the first '/'
4) Open your terminal
5) Navigate to the desired location you want to place the project files using the terminal
6) On the webpage of your forked copy, look for the 'code' button
7) Assuming you've set up your SSH, click on the SSH tab and copy the file path
7) Back on your terminal, enter the following into your terminal:
    git clone *PASTE COPIED FILE PATH HERE*
8) Hit enter, the repo will be downloaded into your current working directory
9) The repo should now exist in your local machine
10) cd into the repo
11) Run the following commands in your terminal, waiting each time for installation to complete before running the next command:
      1) npm init --yes
      2) npm install express
      3) npm install body-parser
12) Upon completion of those installs, you have to start the server with the following command: node server/server.js
13) In a browser, go to: localhost:5000 to view the webpage, the calculator is now ready for use

### Usage

1) Confirm your server is on by checking the terminal on VS Code (using control + ~) or your computer terminal for a log message: "Server is running on port 5000"
  1) If it's not giving you that log message, use the command: node server/server.js to start the server
  2) If the server is throwing an error, please verify dependencies are installed properly
  3) To force reset the server use the command: killall node
      3a) If that is unsuccessful, use this one instead: killall -9 node
2) After confirming the server is running, go to your browser and enter localhost:5000 into the url bar and hit enter
3) Enter any number in the input fields and the operator you would like to use
  3a) Please note, this calculator has limited functionality and can only handle two number calculations at this time
4) When ready, click the '=' button to get the result, the result will appear below the input fields and the calculation you just ran will appear below in a listed format
5) The 'C' button can be used to clear the input fields as needed

### Built With:

HTML
CSS
JavaScript
jQuery
Node
-Express
-Body-Parser

### Acknowledgement:

Thanks to Prime Digital Academy who equipped and helped me to make this application a reality.

Support:

If you have suggestions or issues, please email me at fueclee.12@gmail.com
