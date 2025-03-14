#!/usr/bin/env node

var shell = require('shelljs');
var args = process.argv.slice(2);
var msg;
if (args.length)
  msg = args.join(' ');
else
  msg = 'Some files have changed';

var ret = shell.cmd('git', 'diff', '--quiet');
if (ret.code) {
  shell.echo(msg);
  shell.exit(ret.code);
}
