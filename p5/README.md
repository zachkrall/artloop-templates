# p5.js template for art-loop

p5.js runs in a browser environment (like Firefox or Chrome). To allow
p5.js sketches to display with art-loop, we can use
[Electron](https://electronjs.org), an open-source package for creating
cross platform desktop apps with JavaScript, HTML, and CSS.

This means, an HTML page can be displayed as a full-screen app without
using a web browser.

## If you're not yet comfortable using the command line

You can remix [this glitch template](https://glitch.com/edit/#!/art-loop-p5-example?path=README.md:1:0) instead. We will make it an Electron app for
you. ☺️

## Before you get started

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
