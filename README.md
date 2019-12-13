![bottle-vue-kickstart-main](https://cloud.githubusercontent.com/assets/11155743/24041455/9fbd99ec-0b1e-11e7-9ba0-a429a28591b0.jpg)

# Very basic Bottle kickstart kit with Vue.js and Webpack

[![GitHub release](https://img.shields.io/badge/version-0.5.3-brightgreen.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart) [![licence](https://img.shields.io/badge/Python-2.7_or_3.4+-red.svg?style=flat-square)](https://www.python.org/downloads/) [![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart/blob/master/LICENSE.md)

## What's included to kit?

Python packages:

* Bottle `0.12.16` (stable)
* SQLAlchemy (with bottle-sqlalchemy) `latest`
* Jinja2 `latest`

NPM packages:

* Axios `0.18+` (AJAX calls)
* PostCSS/Autoprefixer `7.2+` (automate CSS prefixes)
* Babel `7+` (turn ES6 code to vanilla)
* Vue.js `2.6+` (the basis of reactive web applications)
* Webpack `3+` with config (SCSS, ES6, Vue.js)
* Web font loader `1.6+` (async load font from Google Fonts)

CSS, styles:

* [Bulma CSS framework](https://github.com/jgthms/bulma) `latest`

## What's Bottle?

[Bottle](http://bottlepy.org/) is lightweight WSGI micro web-framework for Python. A simple process of installing and deploying. Everything has already been done for you. Just enjoy writing your code!

> Simplify development of reactive web applications — use this kickstart kit now!

## How to install and use kit?

First, clone this GitHub repository:

```console
foo@bar:~$ git clone https://github.com/koddr/bottle-vue-kickstart.git
```

Second, install NPM dependencies and make build:

```console
foo@bar:~$ cd bottle-vue-kickstart
foo@bar:~$ npm install
foo@bar:~$ npm run build # or `npm run watch` for hot-reload
```

Third, prepare your virtual environment:

Since `0.4.2` we use [Pipenv](https://github.com/pypa/pipenv) project for manage virtual environments. 

Install via `pip` to your system:

```console
foo@bar:~$ pip install pipenv
```

> More info about Pipenv here: [Managing dependencies, Python.org](https://packaging.python.org/tutorials/managing-dependencies/#managing-dependencies).

And now, install Bottle with all extensions: 

```console
foo@bar:~$ pipenv install
```

> Yes, virtual environment is automaticaly create. If you want to know system link, just use `pipenv --venv`.
>
> Result is something like this: `/Users/username/.virtualenvs/bottle-vue-kickstart--XXXXXX`.
>
> Use it in JetBrains PyCharm, VS Code or else.

Finally, run development server:

```console
foo@bar:~$ python3 run.py

  Bottle v0.12.16 server starting up (using AutoServer())...
  Listening on http://localhost:8080/
  Hit Ctrl-C to quit.
```

### If you did everything right...

![Result without database](https://cloud.githubusercontent.com/assets/11155743/24055182/24a5a04c-0b50-11e7-89a6-8f5d85c98e08.png)

(Optional) Install database with example objects:

```console
foo@bar:~$ python3 _devtools/install_init_database.py
```

Now, your yellow section on http://localhost:8080/ will look like this:

![Result with database](https://cloud.githubusercontent.com/assets/11155743/24043867/cf79c344-0b29-11e7-8066-8ebd83e68acb.png)

And we done!

## Final app structure

```console
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

### What's next? Build something awesome and make web beautiful again!

## Developers

- Idea and active development by [Vic Shóstak](https://github.com/koddr) (aka Koddr).

## Project assistance

If you want to say «thank you» or/and support active development `Bottle Vue.js Kickstart`:

1. Add a GitHub Star to project.
2. Twit about project [on your Twitter](https://twitter.com/intent/tweet?text=I%20found%20cool%20starter%20pack%20with%20%23Python%20%40bottlepy%20and%20%23JavaScript%20%40vuejs%20%F0%9F%91%8D%20Also%2C%20include%20configured%3A%20%40webpack%2C%20%23axios%2C%20%40Autoprefixer%20and%20%40babeljs%20%F0%9F%8E%89&url=https%3A%2F%2Fgithub.com%2Fkoddr%2Fbottle-vue-kickstart).
3. Donate some money to project author via PayPal: [@paypal.me/koddr](https://paypal.me/koddr?locale.x=en_EN).
4. Join DigitalOcean at our [referral link](https://m.do.co/c/b41859fa9b6e) (your profit is **$100** and we get $25).

Thanks for your support! 😘 Together, we make this project better every day.

## License

MIT
