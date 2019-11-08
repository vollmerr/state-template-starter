const cp = require('child_process');
const os = require('os');

const npxCmd = os.platform().startsWith('win') ? 'npx.cmd' : 'npx';
const mode = process.argv[2];

// set to load .env.{NODE_ENV}* files. This will be overridden by cra
process.env.NODE_ENV = mode;
// use cra's env loading settings (https://create-react-app.dev/docs/adding-custom-environment-variables/)
// for example 'staging' NODE_ENV loads '.env.staging' then 'env.staging.local', etc
require('react-scripts/config/env'); // eslint-disable-line

cp.spawn(npxCmd, ['react-scripts', 'build'], { stdio: 'inherit' })
  .on('exit', process.exit);
