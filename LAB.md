# Lab 00: Intro Lab

This lab will ensure everyone has the pieces in place to do a successful lab submission.

## Setup

1. Fork this repository to your own github account
2. Open the terminal and navigate to your project directory
    * Should be based off your home `~` directory
    * Avoid spaces in folder paths
4. `> cd lab-00-intro`
5. `> code .`

## Requirements

1. Add `index.html` and make sure you can launch with Live Server
1. Add a `index.js` file with the following contents:
  ```js
  var x = 12;
  var y = x + 30;
  
  // eslint-disable-next-line no-console
  console.log('the answer is', y);
  
  ```  
1. Add the class `.eslintrc` file
1. Add a `.travis.yml` file with the following contents:
  ```yaml
  language: "node_js"
  node_js: "10"
  before_script:
    - npm i eslint
  script:
    - npx eslint .
  ```
  
## Submission

1. Check that you have no eslint errors locally:
  * Look at the problems tab in VSCode, and/or
  * run `> npx eslint .` from the terminal in your project folder
2. Git add, commit, push
3. Open PR from your fork to **your named branch** in main repo
4. Do canvas submission
