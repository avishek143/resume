# Resume
This is my project for building the website for my resume. The primary pieces of tech in use here other than HTML, CSS and JS are bootstrap for styling and chart.js for drawing the graphs depicting the career information.

## Usage

### Pre-Reqs

1. node and npm
2. gulp as global
3. browserify as global

### Installation
Just clone and install the dependencies using `npm install --production=false`

### Gulp Tasks
1. build: Just builds and puts the code into dist folder
2. deploy: Deploys the code into a destination folder. For now you'll need to change the destination in the gulpfile. In the next version I'll provide a more configureable solution.
3. default: The default task is a watch. Use it during development. It doesn't do a auto-reload though
