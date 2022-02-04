# Around React

## Github Pages: https://AlecDrosu.github.io/around-react

This is the second React sprint. I still love React! I am trying to add the following features:

--Validation on the forms
--Loading Symbols

For Both of these I was a bit confused. Would I need to create a Validation component? And then pass
it down to the form components? Would I instead add a validation function for each popup individually?
I'll look online to see what the best course is. As far as the Loading symbols, I am pretty sure I would 
just need to add it to the submit value, where I add ellipses before the submit button if it is loading.
My main plan for that was to have a loading function inside PopupWithForm.js. But I was unsure how to do that since I would need props.isLoading from app.js, but I never call popupWithForm directly, I only call all the other forms. The problem there is that the submit button is defined in popupWithForm only.

Still some stuff to work on.

Besides that though, everything should work fine, and it was way easier to do than just using vanilla JS.

### After First Review

I made all the changes. The one thing I was confused about was how to prevent the avatar link from showing up when the popup is open. It seems to only be a problem here since I am using ref.