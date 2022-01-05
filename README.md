# React useState Workshop

## Task 1 - Random Bootcamper Name Generator - Morning

**1.1:**

This repo has already created the React app. You just need to install the modules - you know the drill!

**1.2:**

First, you'll need to import ```useState``` from React at the top of the file.

**1.3:**

You've been provided with an array of bootcamper names in [this](./src/bootcampers.js) file. Import it into your [App.js file](./src/App.js) so we can use it in our app.

**1.4:**

Create a piece of state at the top of your ```App``` component called ```bootcamperNames```. Use the bootcampers array you've just imported as the initial state for ```bootcamperNames```. If you need a reminder of how to declare state, check the docs!

**1.5:**

What you now have is the whole bootcamper array saved into ```bootcamperNames```, which is fine, but for this task, we just want one name at a time. This is where we'll use the second part of useState, the function that lets you change the value of the state.

Write a function called ```handleClick```, and inside of this, use the function from your useState to set the ```bootcamperNames``` state to be a random name from the array.

**1.6:**

Create a button in ```App.js```, and call the ```handleClick``` function when it gets clicked.

Great! You should now be getting a random bootcamper everytime you click that button. Use the ```<p>``` tag provided to display them!

## Task 2

Now try and repeat the outcome of task one, but this time with a random compliment as well as the bootcamper names. There's an array of compliments in [here](./src/bootcampers.js) that you may have noticed earlier. Feel free to add to the array with more compliments. Make a separate ```<p>``` tag to display the compliment alongside the name you've generated in task one.
