/* global require, module */

var winston = require('winston');
var Mail = require('winston-mail').Mail;

module.exports = function(options) {
  var logger = new(winston.Logger)({
    transports: [
      new(winston.transports.Console)({
        level: options.level,
        colorize: 'true'
      })
    ]
  });

  if (options.file) {
    logger.add(winston.transports.File, options.file);
  }

  if (options.mail) {
    logger.add(Mail, options.logging.mail);
  }

  return logger;

};
