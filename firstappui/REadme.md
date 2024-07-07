# REdux toolkit

- Install @reduxjs/toolkit and react-redux 
- Build our store
- Connect our store to our app
- create the slice
- dispatch an action
- Reducer fn
- Selector


# Types of testing
- unit testing
- Integration Testing
- End to end Testing - e2e testing

# Setting up testing in our app

- Install react-testing-library and jest
- installed babel dependencies
- Configure babel.config.js
# As parcel already use babel so parcel babel will interfere with this babel configuration 
# to fix the conflict

- Configure parcel config file to disable default babel transpilation

- Jest Configuration npx jest --init
- Install jsdom library for 
- Install @babel/preset-react library -to make JSX work in test cases
- Include @babel/preset-react inside my babel.config this will help our testing library to convert jsx code into html.
-  Install @testing-library/jest-dom

- in every type of test case you will render something assert something and query something

- u will also add coverage in gitignore