# Cats, Dogs & Pandas?

Warmup to practice manipulating the DOM & Events with jQuery. You should use jQuery for all of the following.

### Commit 1

When the mouse moves within the body, console.log the x and y coordinates. [The docs on mousemove](http://api.jquery.com/mousemove/) may be helpful here.

### Commit 2

Instead of using console.log, replace the text of the h1 with the current coordinates of the mouse.

### Commit 3

When the mouse moves, change the css of each of your images so that the margin-left and margin-top change along with the x and y coordinates of your mouse. [Read the docs on css](http://api.jquery.com/css/). Try dividing the x and y coordinates by a factor (anywhere from 6 - 20) before setting your margin, and make this factor different for each image.

### Commit 4

Have it so that when you click on any image, it either adds or removes the ".border" class

### Bonus 1

Have it so that when you click on the body, it freezes position of the images.
> [Check out the documentation .off()](http://api.jquery.com/off/)

### Bonus 2

If I click on an image now, for some reason it is freezing the position of all the images. All I want it to do is add or remove the border though. How do I stop that from happening?
> [What is this? A hint? What the heck is event propagation?](https://api.jquery.com/event.stoppropagation/)
