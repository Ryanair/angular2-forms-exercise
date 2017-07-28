# Angular 2 - Forms Exercise

Workshop Exercise on Angular 2 Forms.

The main purpose of this exercise is to get familiar with Angular 2 forms development concepts.

## Required

For this exercise you need to have [NodeJS](https://nodejs.org/en/) installed.

## Exercise

Your goal is to create a simple payment form with the following specs

1. FirstName : required and no more than 100 characters long
2. LastName: required
3. Credit-Card: required and provides 3 fields

    a. Cardholder's name: required

    b. Card number: required with the following pattern /5[1-5]{3}-[1-5]{4}-[1-5]{4}-[1-5]{4}/g

    c. CCV: required, 3 digit number

You may use the Template Driven approach, however the Reactive one is preferred mostly.

## Guidelines

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

Please spend time to familiarize with the structure of the code.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
