# Beerflix
## Introduction
The project consists of a web that renders objects recieved from an API. All resources are managed through Webpack.

## Installing the App
First, you need to install all dependenncies from the project. Run
```shell
npm install

## Running the App
There are several scripts to build and run the app in various modes.
To build the files into `/dist` without browser auto updating run:
```shell
npm start

Lastly, to run in production mode, with file minyfication, use:
```shell
npm run prod

## Using the App
### List of beers
From root page `'/'`, you can access a list of beers. A filtering form will be displayed when the user clicks or taps on the magnifying glass icon.

Results will be rendered, up to a maximum of 10.
### Beer detail page
From the detail page `'/detail.html?id=${id}'` the user can check for some more information about the selected beer, and has a commenting option at his disposal.

At the bottom of the page, the user can input a comment, and it will be rendered in the comment section along with the date of the comment.
## Final notes
The image from the navbar is selected and download responsively.