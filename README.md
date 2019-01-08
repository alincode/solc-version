# Solc version

![GitHub package version](https://img.shields.io/github/package-json/v/alincode/ajax-caching.svg)
![npm downloads](https://img.shields.io/npm/dt/ajax-caching.svg)
[![Dependency Status](https://img.shields.io/david/alincode/ajax-caching.svg?style=flat)](https://david-dm.org/alincode/ajax-caching)

### Install

```sh
npm install solc-version
```

### usage

* versions

```js
const v = require('solc-version');
let select = await v.versions();
const { releases, nightly, all } = select;
```

* version2url

```js
const v = require('solc-version');
let version = 'v0.4.25-stable-2018.09.13';
let url = await v.version2url(version);
```

## License
MIT © [alincode](https://github.com/alincode/solc-version)