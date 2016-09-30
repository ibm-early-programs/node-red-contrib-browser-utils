# Node-RED Contrib Browser Utils

<a href="http://nodered.org" target="_new">Node-RED</a> media nodes proposing browser inputs as file upload, camera & microphone.

## Install


Run the following command in the root directory of your Node-RED install

    npm install node-red-contrib-browser-utils

## Usage

### Camera

The browser takes a picture by clicking the button next to the node using the camera. The node outputs it as a JPEG buffer.

The `camera` node has a 2000ms delay to prevent slow camera driver startup causing an issue in some browsers


###  Microphone

The browser starts recording after clicking the button next to the node and stops it after clicking again. The node outputs it as a WAV buffer.


### File upload

The node accepts any file to be upload and it outputs as a buffer.


## Contributing

For simple typos and fixes please just raise an issue pointing out our mistakes. If you need to raise a pull request please read our [contribution guidelines](https://github.com/node-red-contrib-utils/node-red-contrib-browser-utils/blob/master/CONTRIBUTING.md) before doing so.

## Copyright and license

Copyright 2014, 2016 IBM Corp. under the Apache 2.0 license.

