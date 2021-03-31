# React Assessment

The repo contains 2 projects:

1. mock-api: which is a simple rest api served up using `json-server` which provides a collection of employees that can be listed, added to, removed from or updated
2. mock-ui: a react application which lists the employees & allows you to add & remove them

The react app is a little out of date & makes use of class based components to build the ui & lacks unit tests. 

Refactor the react app to make use of functional components & hooks for maintaining the component state. You do *not* need to write tests to cover all scenarios or components, however some tests are required.

## Instructions
- Create a fork of this repository in your own GitHub account
- Once complete, please send a link to your repository to tim@geminisolution.co.za and CC: elrika@geminisolution.co.za.
- To run the apps from the root you can use 1 of the following:

### Yarn
* `yarn --cwd ./mock-api start` : starts up the mock api at `http://localhost:3000`
* `yarn --cwd ./mock-ui start` : starts up the mock api at `http://localhost:1234`

### NPM
* `npm --prefix ./mock-api start` : starts up the mock api at `http://localhost:3000`
* `npm --prefix ./mock-ui start` : starts up the mock api at `http://localhost:1234`
