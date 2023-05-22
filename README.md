# Project Name
> In this project, I build a program that mimics Codecademy’s own online store
> Live demo [codecademy-store_simonapiz](https://codecademy-store_simonapiz.surge.sh/). <!-- If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)

## General Information
### purpose of project
Use the entire process of making action creators, setting up a slice reducer, creating the store object, and plugging in the store data into React components.

## Features
The application :
- should display products from the Codecademy store 
- allow the user to add them to their cart. 

In the cart:
- the user can adjust the quantity of each item 
- the running total will be displayed at the bottom.

Lastly:
- the user can choose the currency for the entire application.
 

### Project tasks

- complete the cart’s action creators and reducer logic
- create the `store` using `createStore()` and `combineReducers()`
- pass the `store` resources to presentational components via the top-level `<App/>` component
- render the `<Cart/>` component using the current state data
- dispatch actions to the `store`
- **bonus:** Add a search feature to filter the products shown in the inventory.

## Technologies Used
- Node - version 18
- React - version 18
- Redux - version 4


## Screenshots
![Example screenshot](./img/screenshot.png)
<!-- If you have screenshots you'd like to share, include them here. -->


## Setup
To run this project, install it locally using npm:
```
$ cd ../[directory]
$ npm install
$ npm start
```

## Acknowledgements
This project comes from the [Codecademy's Front-End Engineer](https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/) course.