# p5.js template for artloop

This is a template for creating [artloop](https://github.com/zachkrall/artloop) comptabile p5.js sketches.

## what is p5.js?

p5.js reference documentation: [(English)](https://p5js.org/reference/) [(Español)](https://p5js.org/es/reference/) [(简体中文)](https://p5js.org/zh-Hans/reference/)

p5.js runs in a browser environment (such as Firefox or Chrome). To allow
p5.js sketches to display with art-loop, we can use
[Electron](https://electronjs.org), an open-source package for creating
cross platform desktop apps with JavaScript, HTML, and CSS.

This means, an HTML page can be displayed as a full-screen app without
using a web browser. Cool!

## what if I'm not comfortable with the command-line

The command-line and terminal environments can be complicated, especially
if you have never used it before. If you are still learning how to use
the command-line, you can remix
[this glitch template](https://glitch.com/edit/#!/art-loop-p5-example?path=js/sketch.js) to create an art-loop compatible sketch
instead.

If you share your Glitch URL, we can bundle it as an electron app for you. 😊

<a href="https://glitch.com/edit/#!/remix/art-loop-p5-example"><img src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg" alt="Remix on Glitch" /></a>

## using this template

* Install Node.js [(English)](https://nodejs.org/en/)
[(Español)](https://nodejs.org/es/) [(한국어)](https://nodejs.org/ko/)
[(中文)](https://nodejs.org/zh-cn/) [(العربية)](https://nodejs.org/ar/)
  * To see if you currently have Node.js installed on your computer
  you can run the following command in your terminal:
  ```bash
  node --version
  ```
  * You should also double check that NPM (Node Package Manager) is
  correctly installed by running the following command in your terminal:
  ```bash
  npm --version
  ```
* Once you have the template downloaded, you will want to install all of
the dependencies in your project folder. You can do this by running the
following command in your terminal:
```bash
npm install
```
* `js/sketch.js` contains your p5.js sketch. Add your code to this file.
* To have a live preview of your sketch while you are editing, run this
command in your terminal:
```bash
npm run dev
```
