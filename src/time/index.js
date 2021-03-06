/**
 * Dependencies
 */
var NOOT = require('../../')('namespace');
var _ = require('lodash');

/***********************************************************************************************************************
 * NOOT.Utils.Time
 ***********************************************************************************************************************
 *
 *
 *
 *
 **********************************************************************************************************************/
var Time = NOOT.Namespace.create({});


/**
 * Time constants
 */
Time.SECOND = 1000;
Time.MINUTE = Time.SECOND * 60;
Time.HOUR = Time.MINUTE * 60;
Time.DAY = Time.HOUR * 24;
Time.WEEK = Time.DAY * 7;



/**
 * @module
 */
module.exports = _.extend(Time, { Measure: require('./lib/measure') });