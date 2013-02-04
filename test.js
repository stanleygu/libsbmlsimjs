var libsbmlsim = require('./libsbmlsim.js');
var ref = require('ref');

var myResult = ref.refType('libsbmlsim.MyResult');

libsbmlsim.simulateSBMLFromFile('sample.xml',100,0.1, 10, 0, 41, 0);
