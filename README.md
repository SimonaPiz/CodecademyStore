# Codecademy Store
> In this project, I build a program that mimics Codecademy’s own online store

Live demo [codecademy-store_simonapiz](https://codecademy-store_simonapiz.surge.sh/). <!-- If you have the project hosted somewhere, include the link here. -->

![shopping-cart-demo](https://github.com/SimonaPiz/CodecademyStore/assets/91121660/8111b6d8-afca-4f54-bbac-2f8a7dd3c48a)

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Acknowledgements](#acknowledgements)

## General Information
### Purpose
Use the entire process of REDUX to making action creators, setting up a slice reducer, creating the store object, and plugging in the store data into React components.

## Features
The application :
- should display products from the Codecademy store 
- allow the user to add them to their cart. 

![image](https://github.com/SimonaPiz/CodecademyStore/assets/91121660/c2883785-8c7e-473e-bc5c-d560d70007eb)

In the cart:
- the user can adjust the quantity of each item 

![image](https://github.com/SimonaPiz/CodecademyStore/assets/91121660/2e327a3c-3e2f-42a2-a5b2-4da2d91c49b6)

- the running total will be displayed at the bottom.

![image](https://github.com/SimonaPiz/CodecademyStore/assets/91121660/64bce8a2-96b5-47fa-b597-ddc0253b0191)

Lastly:
- the user can choose the currency for the entire application.

![image](https://github.com/SimonaPiz/CodecademyStore/assets/91121660/d6c5a56e-769e-4bac-95f7-e12fc263a30b)

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

## Setup
To run this project, install it locally using npm:
```
$ cd ../[directory]
$ npm install
$ npm start
```

## Acknowledgements
This project comes from the [Codecademy's Front-End Engineer](https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/) course.
