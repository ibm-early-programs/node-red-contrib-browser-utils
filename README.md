# Node-RED Contrib Browser Utils

[Node-RED](http://nodered.org) nodes for browser functionality such as file upload, camera & microphone.

## Install


Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-browser-utils

## Usage

### Camera

The browser takes a picture with the default camera when the button next to the node is clicked. The node outputs it as a PNG buffer.

The `camera` node has a 2000ms delay to prevent slow camera driver startup causing an issue in some browsers.


###  Microphone

The browser starts recording after the button next to the node is clicked and stops it when the button is clicked again. The node outputs it as a WAV buffer.


### File upload

The node accepts a file to be uploaded and outputs it as a buffer.


## Contributing

For simple typos and fixes please just raise an issue pointing out our mistakes. If you need to raise a pull request please read our [contribution guidelines](https://github.com/node-red-contrib-utils/node-red-contrib-browser-utils/blob/master/CONTRIBUTING.md) before doing so.

## Copyright and license

Copyright 2014, 2016, 2019 IBM Corp. under the Apache 2.0 license.
