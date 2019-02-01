# House Automation
This is a small ionic app which simulates a UI for a house automation application. It mocks a potential backend API and visualizes the response coming back from it. This is not a feature complete app rather than a proof of concept.

Because of lack of time the main focus was functionality and a structured code. Especially regarding UI / UX more time should be spent.

## Why ionic
When I though about home automation I though about people who enter there home and turn on the lights with their phone or with a tablet mounted to the wall. Ionic is a cross platform (iOS / Android) framework for building apps that run as a native app on a device. In order to run this app on a tablet mounted tot the wall I though it is a good idea to already start with ionic to finally distribute the app thru the stores (Google / Apple).

An other reason to use ionic is the already pre styled UI components that can be used and are tested to render correctly on different platforms.

## Requirements
To run this app npm and ionic are needed to be installed.

### Install npm
A guide how to install npm can be found here: https://www.npmjs.com/get-npm

### Install ionic
To install ionic, simple type in the following command:
```
npm install -g ionic
```

## Run the app
```
ionic serve
```

### Browser support
The app is tested on the current versions of Safari and Chrome and works best when responsive mode is active with a tablet oder phone.

### Run as a static app on a web server (not recommended)
If needed the app can be build and run on a web server as a static site.
```
ionic build
```
The static files can be found in the generated folder `www`.

## Run tests
To run the unit tests a chrome browser must be installed.
```
ng test
```