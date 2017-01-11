![Rock Paper Scissors](./assets/rps.svg.png)

# Rock Paper Scissors with Debugging

This afternoon we're going to take what you learned this morning about JavaScript and put it into practice. Let's build a game! As we go, we'll be talking about debugging tools. We'll get some errors on purpose so we can practice dealing with them 😉

## Pseudocode!

Before we start writing our code, let's do some pseudocoding!

From wikipedia:
> Pseudocode is an informal high-level description of the operating principle of a computer program or other algorithm. It uses the structural conventions of a programming language, but is intended for human reading rather than machine reading.

What does this mean? Basically, pseudocode is a method you can use to plan out how to code something without worrying about syntax. It's like a rough draft or a sketch.

Let's pseudocode the rules of rock paper scissors.

## Set Up

Now that we have a "rough draft" of our rock paper scissors program, let's set up our files so we can start coding.

Go to your desktop and make a new directory.

```bash
cd ~/Desktop
mkdir rock-paper-scissors
cd rock-paper-scissors
```

Next, let's make two files. We'll need an HTML file (that's what we'll open in the browser) and a JavaScript file (that's where we'll write all of the logic for our game).

```bash
mkdir js
touch index.html js/app.js
```

Open the rock-paper-scissors directory in Sublime.

#### Connect JS to HTML

Just like with CSS, our JavaScript files need to be connected to our HTML document.

First, set up the HTML boilerplate (`html` + *tab*). Now let's bring in our JavaScript file. With CSS we use a `<link>` tag; with JavaScript we use a `<script>` tag. Add this script tag in the `<head>`:

```html
<script type="text/javascript" src="./js/app.js"></script>
```

If your project includes DOM manipulation (which we will cover tomorrow), the JavaScript needs to load *after* all of the HTML loads. Since there's no DOM manipulation in this project, we can load the JavaScript first, so it's fine where it is.

Now let's check the connection. Add this line to your JavaScript file:

```js
console.log('connected')
```

Open your HTML file in the browser and then open the Chrome Developer Tools (`command option i`) and click on the **console** tag. You should see this:

![connected](./assets/connected.png)

Our JavaScript is connected to our HTML, so now we can start translating our pseudocode into code!

## Rock Paper Scissors Code Along

Remember, we're also going to learn about how to deal with errors during this code along, so I will make sure we get some errors along the way. Don't worry! Reading and dealing with errors is an important part of the development process.