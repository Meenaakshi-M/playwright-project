# What's in this Playwright Project?

In this project, I wanted to showcase how AI can be leveraged for a end to end test planning: from understanding an application to creating, executing and fixing automated tests.
The demo site that I used for my project is an online banking application called Parabank(which is not a real bank:)) https://parabank.parasoft.com/parabank/index.htm.
To start small, my initial focus is on the home page of the Parabank application. 
I used Playwright agents which first created a test plan for the home page followed by creating automated test scripts for one of the test scenarios from the test plan. I then executed the automated tests to verify it actually works!! When one of the tests failed, I used the playwright healer agent to fix the failing test
Playwright agents were using Claude Haiku 4.5 as the LLM
In order to provide a context of the application under test to the agents, Playwright has a seed file. This file basically tells the agents, from which state of the application you want to start your tests. You can either start your testing from scratch or continue your testing from an existing test suite and state of an application. 

# Command to install Playwright Agents
Before installing the agents, make sure you have the latest version of Playwright and also VS Code version of v1.105 or higher is required
npx playwright init-agents --loop=vscode

# Prompts used
## Create Test Plan
Generate a test plan for the home page and save it as homepage-testplan under specs folder
## Create Test Scripts
Generate a test file for each test under 2. Customer Login Form section from the test plan
## Fix my failing test
'Login form with invalid username' test failed in my recent run. Can you fix it?
