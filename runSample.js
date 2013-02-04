var libsbmlsim = require('./libsbmlsim.js');
var ref = require('ref');

var myResult = libsbmlsim.libsbmlsim.simulateSBMLFromFile('sample.xml',100,0.1, 10, 0, 41, 0);
libsbmlsim.libsbmlsim.print_result_to_file(myResult, 'sampleOutput.csv', ',');
