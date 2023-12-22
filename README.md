# Newsletter sign-up form with success message - Frontend Mentor

![Design preview for the Newsletter sign-up form with success message coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution of this challenge!

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Your challenge is to build out this newsletter form and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Links

Live Site URL: [https://juliawalton.github.io/email-signup-success-popup/](https://juliawalton.github.io/email-signup-success-popup/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Regular expression

## What I learned

This project was a fun challenge that combined form validation with a popup success modal. It was good to practice the logic and organization for adding the hidden and active classes.

```js
function showSuccess(input) {
  register.className = "register hidden";
  success.className = "success active";
  update.innerText = input.value;

  const returnBtn = document.querySelector(".return");
  returnBtn.addEventListener("click", (e) => {
    register.className = "register active";
    success.className = "success hidden";
    email.value = "";
  });
}
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
