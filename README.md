# Mac Calculator Clone

Replicate the builtin Mac calculator as a web app.

This this the base repo for the [Mac Calculator Clone](http://jsdev.learnersguild.org/goals/150) goal.

![calculator-with-history](https://cloud.githubusercontent.com/assets/8385/22572149/9be3c83e-e957-11e6-9431-9b9742b6b4af.png)

## Installation and Setup

_Fill this out_

## Usage and Examples

_...and this_

## Stage 1 Specs
 - [x] All text is in the Roboto web font
 - [x] Your HTML and CSS follows this style guide
 - [x] The calculator is positioned in the center of the page, both vertically and horizontally
 - [x] The calculator is a fixed size. It does not change in size when the page resizes.
 - [x] If the window is too small for the calculator, the page scrolls, both vertically and horizontally
 - [x] Each button has a CSS transition to slightly darken the background color on hover over 100ms
 - [x] Each button has a CSS transition to slightly darken the background color on click over 100ms
 - [ ] All class names re: the calculator are name-spaced under .calculator-…
 - [x] Your stylesheet contains little to no duplicate style declarations

## Stage 2 Specs
- [x] Your JavaScript is written in ES5
- [x] Your JavaScript follows this style guide
- [x] Your JavaScript defines 1 or less global variables
- [x] The Calculator display is not an <input>
- [ ] Typing a relevant key at any point is reflected on the calculator
- [x] Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes - 
- [x] The state of the calculator is not be stored in the DOM
- [ ] The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
- [ ] When the length of the number displayed exceeds the width available, the font-size deterministically drops

## Stage 3 Specs
 - [ ] Each calculator acts independently.
 - [ ] Clicking anywhere on a calculator focuses that calculator.
 - [ ] Typing a relevant key affects the focused calculator.
 - [ ] Use event delegation to avoid binding a click event listener to each button
 - [ ] The focused calculator is opacity: 1
 - [ ] The not-focused calculator is opacity: 0.5

## General Specs
General

 - [ ] Repository includes a README file with basic installation and setup instructions.
 - [ ] All package dependencies are properly declared in package.json.
 - [ ] All major features are added via pull requests with a clear description and concise commit messages.
 - [ ] Code uses a linter and there are no linting errors.
 - [x] Variables, functions, files, etc. have appropriate and meaningful names.
 - [x] Functions are small and serve a single purpose.
 - [x] The artifact produced is properly licensed, preferably with the MIT license.
