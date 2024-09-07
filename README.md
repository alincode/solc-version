# Solc version

[![codecov](https://codecov.io/gh/alincode/solc-version/branch/master/graph/badge.svg)](https://codecov.io/gh/alincode/solc-version)
![npm downloads](https://img.shields.io/npm/dt/solc-version.svg)

### Requirements

- node 8.x

### asdf

```
asdf plugin-add nodejs
```

### Install

```sh
npm install solc-version
```

### usage

- versions

```js
const v = require('solc-version')
let select = await v.versions()
const { releases, nightly, all } = select
```

```js
const v = require('solc-version')
const list = JSON.stringify(require('./utils/list.json'))
let select = await v.versions(list)
const { releases, nightly, all } = select
```

- version2url

```js
const v = require('solc-version')
let version = 'v0.4.25-stable-2018.09.13'
let url = await v.version2url(version)
```

```js
const v = require('solc-version')
let version = 'stable'
// let version = 'latest';
let url = await v.version2url(version)
```

```js
const v = require('solc-version')
let version = 'v0.4.25-stable-2018.09.13'
const list = JSON.stringify(require('./utils/list.json'))
let url = await v.version2url(version, list)
```

## License

MIT © [alincode](https://github.com/alincode/solc-version)
