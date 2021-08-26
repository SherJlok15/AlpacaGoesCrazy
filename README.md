Task:
1. Create a reactjs application which is capable to render nested json data struture of the following format:

{
  "data": [
    {
      "name": "String",
      "children": [
        {
          "name": "String",
          "children": [
            // ...
          ]
        }, {
          "name": "String",
          "children": [
            // ...
          ]
        },
        // ...
      ]
    }, {
      "name": "String",
      "children": [
        // ...
      ]
    },
    // ...
  ]
}

2.Make each node show/hide all nested components by click on it's name.

3.Make collapsible component logic from step 2 reusable between different components by using react hooks or HOC.

4.Using react context make it so when you click on any last node it will close all nodes in the tree (showing only continent list).

5.Create a function to generate nested mock data for your component. Function input should be: n-depth of JSON tree, m-number of children in each node. Output should be JSON structure compatible with your react component. Data can be random. Bonus task: make it so application will not consume a lot of memory for big n and m numbers when displayed with your component (generate data as needed by subcomponents).

6.Connect this countries graphql API to your components to display nesting of Continent, Country and Language types

7.Bonus task: host your application with github pages.
