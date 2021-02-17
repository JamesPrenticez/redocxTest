https://www.npmjs.com/package/docx - Full write a word doc in js syntax... looks overly complex
https://www.npmjs.com/package/docxtemplater - You need to write a template word doc => upload it => stick in some JSON => download it again...
https://www.npmjs.com/package/redocx - I think this is going to be like react native - looks simple and intuitive yet less support than other options

npm install --save-dev babel-cli babel-core babel-preset-env babel-preset-react babel-preset-stage-0 <= DONT BOTHER WITH THIS SHIT
npm install --save react redocx
npm install --save-dev babel-cli redocx <= YOU ONLY NEED THIS

Create a .babelrc
{
  "presets": [
    "env",
    "stage-0", ... This shit got depreciatednpm
    "react"
  ]
}

https://babeljs.io/docs/en/babel-preset-stage-0/
https://github.com/babel/babel-upgrade

npx babel-upgrade --write
npx browserslist@latest --update-db

Update webpack.config.js with:
  target: 'node',
  node: {
    fs: "empty",
    child_process: "empty",
 },

 Maybe worth doing not sure?
 cd node_modules/redocx/
 npm update

&&

 cd node_modules/redocx/node_modules/cross-spawn
 npm i -D spawn-sync

 &&

  cd node_modules/officegen
  npm i -D readable-stream


Update this shit and point it in the right direction
C:\Users\JamesPrentice\GitHub\redocxTest\node_modules\officegen\lib\basicgen.js
    require('stream').Transform || require('../node_modules/readable-stream/lib/_stream_transform')
    require('stream').PassThrough || require('../node_modules/readable-stream/lib/_stream_passthrough')
    require('stream').PassThrough || require('../node_modules/readable-stream/lib/_stream_passthrough')

Install this:
npm i webpack-node-externals --save

Webpack loved it when I added this to the config:
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'web',
  externals: [nodeExternals()],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
}

chucked a script in the package json
    "devon": "webpack-dev-server --mode development",

Installed this....
npm i -g strip-ansi
