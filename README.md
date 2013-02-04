# 'node-libsbmlsim'

`node-libsbmlsim` uses [`ffi`](https://github.com/rbranson/node-ffi) to wrap
around the libsbmlsim C API.

Currently, the methods for simulating an SBML model from file and printing the
results to file are exposed. Further methods can be added to the
`libsbmlsim.js` library file.

`runSample.js` is a sample file that simulates `sample.xml` and generates
`sampleOutput.csv`.
