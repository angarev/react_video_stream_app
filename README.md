## Live video stream app created with React and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


### Setup up json-server

To setup up the project clone the repository on your computer. There are three folders - api, client, and rtmpserver. I used json-server to generate a fake server. Go to api folder and run `npm install`. Once the installation is complete run `npm start`. The server will start on port: 3001. 

### Setup up react app

The procedure for the react app is the same. Enter in client folder and type `npm install` and `npm start`. The app will start in port: 3000. 

### Setup up Media server

I used node-media-server to generate media server. Enter in rtmpserver folder and type `npm install` and `npm start`. 

### Setup up OBS studio

I used OBS studio [LINK](https://obsproject.com/) to start live streaming. Once the installation is complete go "Scenes" window and adds a new scene. Add Display Capture and Audio Input Capture from the next window. 

### Start streaming

Go to the main page and create a stream. Add title and description of your stream. When clicking on the link you will see a page with a video player. To start streaming you have tp to copy id from URL and go to Settings in OBS player. Click to Stream Tab. In the Server field add `rtmp://localhost/live` and in Stream key paste you ID. 

That's it. 

