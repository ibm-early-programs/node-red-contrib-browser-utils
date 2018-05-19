/**
 * Copyright 2013, 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var bodyParser = require('body-parser')

module.exports = function (RED) {
  var requestSize = '50mb'

  function Node (config) {
    RED.nodes.createNode(this, config);
    var node = this;

    RED.httpAdmin.get('/node-red-fileinject/status', function (req, res) {
      var n = RED.nodes.getNode(req.query.id)
      var status = {};
      if ('true' == req.query.status) {
        status = {fill:'red', shape:'dot', text:'sending file...'}
      }
      if (n) {
        n.status(status);
      }
      res.json({});
    });


    RED.httpAdmin.post('/node-red-fileinject/:id', bodyParser.raw({ type: '*/*', limit: requestSize }), function(req,res) {

        var node = RED.nodes.getNode(req.params.id)

        if (node != null) {
            try {
                node.receive({payload: req.body})
                node.status({})
                res.sendStatus(200)
            } catch(err) {
                res.sendStatus(500)
                node.error(RED._("inject-file.failed", { error: err.toString() }))
            }
        } else {
            res.status(404).send("no node found")
        }
    })

    this.on('input', function (msg) {
      if(msg.payload !== '') {
        node.send(msg)
      }
    })
  }
  RED.nodes.registerType('fileinject', Node)
};
