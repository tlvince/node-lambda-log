/**
 * @module lambda-log
 */

const LambdaLog = require('./lib/LambdaLog');
/**
 * Instance of the [LambdaLog](#lambdalog) class which is exported when calling `require('lambda-log')`.
 * For more advanced usage, you can create a new instance of the LambdaLog class via `new log.LambdaLog()`.
 * @type LambdaLog
 * @kind LambdaLog Instance
 * @alias module:lambda-log
 *
 * @example
 * const log = require('lambda-log');
 *
 * log.info('Hello world!');
 */
const log = new LambdaLog();

module.exports = log;
