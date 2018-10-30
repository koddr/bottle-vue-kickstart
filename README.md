![bottle-vue-kickstart-main](https://cloud.githubusercontent.com/assets/11155743/24041455/9fbd99ec-0b1e-11e7-9ba0-a429a28591b0.jpg)

# Very basic Bottle kickstart kit with Vue.js and Webpack
[![GitHub release](https://img.shields.io/badge/version-0.5.1-brightgreen.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart) [![licence](https://img.shields.io/badge/Python-2.7_or_3.4+-red.svg?style=flat-square)](https://www.python.org/downloads/) [![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart/blob/master/LICENSE.md)

## What's included to kit?

* Bottle `0.12.13` (stable)

NPM packages:

* Axios `0.18+` (AJAX calls)
* PostCSS/Autoprefixer `7.2+` (automate CSS prefixes)
* Babel `7.1+` (turn ES6 code to vanilla)
* Vue.js `2.5+` (the basis of reactive web applications)
* Webpack `3.10+` with config (SCSS, ES6, Vue.js)
* Web font loader `1.6+` (async load font from Google Fonts)

Example:

* Out the box application for test kit with latest [Bulma CSS framework](https://github.com/jgthms/bulma)

### What's Bottle?

[Bottle](http://bottlepy.org/) – is lightweight WSGI micro web-framework for Python. A simple process of installing and deploying. Everything has already been done for you. Just enjoy writing your code!

> Simplify development of reactive web applications — use this kickstart kit now!

## How to install and use kit?

First, clone this GitHub repository:

```bash
$ git clone git@github.com:koddr/bottle-vue-kickstart.git
```

Second, install NPM dependencies and make build:

```bash
$ cd bottle-vue-kickstart
$ npm install
$ npm run build # or `npm run watch` for hot-reload
```

Third, prepare your virtual environment:

Since `0.4.2` we use [Pipenv](https://github.com/pypa/pipenv) project for manage virtual environments. 

Install via `pip` to your system:

```bash
$ pip install pipenv
```

> More info about Pipenv here: [Managing dependencies, Python.org](https://packaging.python.org/tutorials/managing-dependencies/#managing-dependencies).

And now, install Bottle with all extensions: 

```bash
$ pipenv install
```

> Yes, virtual environment is automaticaly create. If you want to know system link, just use `pipenv --venv`.
> Result is something like this: `/Users/username/.virtualenvs/bottle-vue-kickstart--XXXXXX`. Use it in PyCharm or else.

Finally, run development server:

```bash
$ python3 run.py

Bottle v0.12.13 server starting up (using AutoServer())...
Listening on http://localhost:8080/
Hit Ctrl-C to quit.
...
```

### If you did everything right...

![Result without database](https://cloud.githubusercontent.com/assets/11155743/24055182/24a5a04c-0b50-11e7-89a6-8f5d85c98e08.png)

(Optional) Install database with example objects:

```bash
$ python3 _devtools/install_init_database.py
```

Now, your yellow section on http://localhost:8080/ will look like this:

![Result with database](https://cloud.githubusercontent.com/assets/11155743/24043867/cf79c344-0b29-11e7-8066-8ebd83e68acb.png)

And we done!

## Final app structure

``` html
├── _devtools
│   └── install_init_database.py
├── static
│   ├── assets
│   │   ├── js
│   │   │   └── script.js
│   │   └── scss
│   │       └── style.scss
│   ├── css
│   │   └── style.min.css
│   ├── images
│   │   └── bottle-vue-kickstart-logo-horizontal.svg
│   └── js
│       └── script.min.js
├── templates
│   ├── index.html
│   └── layout
│       └── base.html
├── .babelrc
├── .editorconfig
├── .gitignore
├── articles.db
├── package.json
├── package-lock.json
├── Pipfile
├── Pipfile.lock
├── postcss-config.js
├── README.md
├── run.py
└── webpack.config.js
```

> What's next? Build something awesome and make web beautiful again!

### Author & maintainers

Development and maintenance engaged by [Vic Shóstak](https://github.com/koddr) (aka Koddr).
If you want to say «thank you» and/or ask me about `Bottle Vue kickstart kit` — [create new issue](https://github.com/koddr/bottle-vue-kickstart/issues/new).

___
> ### Your assistance will help make project even better!
> 
> * [Donate with PayPal](https://www.paypal.me/koddr/9.99usd)
> * [Donate with Credit/Bank card, Yandex.Money](https://money.yandex.ru/to/41001601525977/599)
> 
> #### Thanks for supporting!
___

### License

[The MIT License (MIT)](https://github.com/koddr/bottle-vue-kickstart/blob/master/LICENSE.md)
