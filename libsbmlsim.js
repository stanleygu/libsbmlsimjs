var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');
var voidPtr = ref.refType(ref.types.void);
exports.CONSTANTS = {
    '': {
        '0': 'NoError',
        '1': 'Unknown',
        '2': 'FileNotFound',
        '3': 'InvalidSBML',
        '4': 'SBMLOperationFailed',
        '5': 'InternalParserError',
        '6': 'OutOfMemory',
        '7': 'SimulationFailed',
        NoError: 0,
        Unknown: 1,
        FileNotFound: 2,
        InvalidSBML: 3,
        SBMLOperationFailed: 4,
        InternalParserError: 5,
        OutOfMemory: 6,
        SimulationFailed: 7
    }
};
var myResult = exports.myResult = Struct({
    error_code: ref.types.uint32,
    error_message: ref.types.CString,
    num_of_rows: ref.types.int32,
    num_of_columns_sp: ref.types.int32,
    num_of_columns_param: ref.types.int32,
    num_of_columns_comp: ref.types.int32,
    column_name_time: ref.types.CString,
    column_name_sp: voidPtr,
    column_name_param: voidPtr,
    column_name_comp: voidPtr,
    values_time: voidPtr,
    values_sp: voidPtr,
    values_param: voidPtr,
    values_comp: voidPtr,
    values_time_fordelay: voidPtr,
    num_of_delay_rows: ref.types.int32,
});
var myResultPtr = exports.myResultPtr = ref.refType(myResult);
var Model_t = exports.Model_t = voidPtr;
var Model_tPtr = exports.Model_tPtr = ref.refType(Model_t);
exports.libsbmlsim = new FFI.Library('libsbmlsim', {
    simulateSBMLModel: [myResultPtr, [Model_t, ref.types.double, ref.types.double, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.double, ref.types.double, ref.types.double]],
    simulateSBMLModelf: [myResultPtr, [Model_tPtr, ref.types.double, ref.types.double, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.double, ref.types.double, ref.types.double, ref.types.int32]],
    simulateSBMLFromString: [myResultPtr, [ref.types.CString, ref.types.double, ref.types.double, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.int32]],
    simulateSBMLFromFile: [myResultPtr, [ref.types.CString, ref.types.double, ref.types.double, ref.types.int32, ref.types.int32, ref.types.int32, ref.types.int32]],
    printf: [ref.types.int32, [ref.types.CString]],
    print_result_list: [ref.types.void, [Model_t, voidPtr, voidPtr, voidPtr]],
    print_result: [ref.types.void, [myResultPtr]],
    print_result_to_file: [ref.types.void, [myResultPtr, ref.types.CString, ref.types.char]],
});
