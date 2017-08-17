#!/usr/bin/env node

const
  program = require('commander'),
  npm = require('npm'),
  fs = require('fs'),
  log = console.log;

program
  .version('1.0.4');

program
  .command('init')
  .description('Generate the package.json file')
  .action(() => {
    npm.load({}, () => {
      npm.init(err => {
        if (err) {
          log(err);
        } else {
          const pkg = JSON.parse(fs.readFileSync('package.json'));
          pkg.unreal_project = true;
          fs.writeFileSync('package.json', JSON.stringify(pkg, undefined, 2));
        }
      });
    })
  });

program
  .command('install <module>')
  .description('Install the specified Unreal module')
  .option(' --save', 'save to package.json file')
  .action((mdl, options) => {
    const config = {};
    options.save && (config.save = true);
    npm.load(config, () => {
      npm.install(mdl, err => {
        log(err, 'done');
      });
    })
  });

program
  .command('publish')
  .description('Publish the Unreal module on the npm registry')
  .action(() => {
    npm.load({}, () => {
      npm.publish((err) => {
        err && log(err);
      })
    })
  });

program
  .parse(process.argv);
