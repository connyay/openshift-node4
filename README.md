# This project is no longer maintained. PRs will be accepted.


# [node.js v4](https://nodejs.org/) cartridge for [OpenShift](https://www.openshift.com/)

## Usage

`rhc create-app <app name> https://raw.githubusercontent.com/connyay/openshift-node4/master/metadata/manifest.yml`


What this cartridge provides out of the box
---
1. **node.js** ([latest stable](http://semver.io/node/stable) currently 4.2.3)
2. **npm** (latest stable currently 2.14.7)
3. **[grunt](https://www.npmjs.com/package/grunt-cli)**
4. **[gulp](https://www.npmjs.com/package/gulp)**
5. **[forever](https://www.npmjs.com/package/forever)**
6. **[bower](https://www.npmjs.com/package/bower)**

What this cartridge does out of the box
---
*Not much.*

1. Installs node.js v4
2. Installs grunt, gulp, bower, and forever globally (specified by `$OPENSHIFT_NPM_GLOBALS`)
3. Allows the user to manually install required dependencies (in a `build` [action_hook](http://openshift.github.io/documentation/oo_user_guide.html#action-hooks)). An example of this can be found [here](template/.openshift/action_hooks/build)
4. Runs `npm start` if `package.json` is found in repo directory (log is written to `$OPENSHIFT_NODE4_LOG_DIR`)

Note
---
For now I just dropped the contents of the node-v4.2.3.tar.xz [here](bin/node). I will move to resolving the latest stable and downloading on the gear in the near future.

Thanks!
---
These repos helped out a ton while developing this cartridge.

1. [engineersamuel/openshift-origin-cartridge-nodejs](https://github.com/engineersamuel/openshift-origin-cartridge-nodejs)
2. [wshearn/openshift-origin-cartridge-nodejs](https://github.com/wshearn/openshift-origin-cartridge-nodejs)
3. [ramr/nodejs-custom-version-openshift](https://github.com/ramr/nodejs-custom-version-openshift)
4. [heroku/heroku-buildpack-nodejs](https://github.com/heroku/heroku-buildpack-nodejs)
