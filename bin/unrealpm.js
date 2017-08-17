#!/usr/bin/env node

const
    program = require('commander'),
    log = console.log;

program
    .version('1.0.3');

program
    .command('init')
    .description('generates the package.json file')
    .action(() => {
        log('init');
});

program
    .command('install <module>')
    .description('install the specified cpp module or dependency')
    .option(' --save', 'save to package.json file' )
    .action((module, options) => {
        log(module);
     });

program
    .command('publish')
    .description('publish on npm registry your code');

program
    .parse(process.argv);
