![bottle-vue-kickstart-main](https://cloud.githubusercontent.com/assets/11155743/24041455/9fbd99ec-0b1e-11e7-9ba0-a429a28591b0.jpg)

# Very basic kickstart Bottle kit with Vue.js
[![GitHub release](https://img.shields.io/badge/version-0.4.2-brightgreen.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart) [![licence](https://img.shields.io/badge/Python-2.7_or_3.4+-red.svg?style=flat-square)](https://www.python.org/downloads/) [![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat-square)](https://github.com/koddr/bottle-vue-kickstart/blob/master/LICENSE.md)

Simplify development of reactive web applications on [Bottle](http://bottlepy.org/) – lightweight WSGI micro web-framework for Python! A simple process of installing and deploying. Everything has already been done for you. Just enjoy writing your code!

## What is this?

Kickstart kit included latest version of `npm` packs:

* Axios (for make AJAX calls)
* Babel (for turn ES6 code into readable vanilla)
* Vue.js (for reactive 'em all)
* Webpack (for pack 'em all)

For visual design I use [Bulma](https://github.com/jgthms/bulma). This is a modern CSS framework based on Flexbox. Small and smart. If you haven't seen it before I promise – you'll like it!

## How to install?

First, clone this git repository:

```bash
$ git clone git@github.com:koddr/bottle-vue-kickstart.git
```

Second, install `npm` dependencies and make build:

```bash
$ cd bottle-vue-kickstart
$ npm install && npm run build
```

Third, prepare your virtual environment and install Bottle with all extensions:

> Since `0.4.2` we use [Pipenv](https://github.com/pypa/pipenv) project for manage virtual environments.
>
> ```bash
> $ pip install pipenv
> ```
>
> More info here: https://packaging.python.org/tutorials/managing-dependencies/#managing-dependencies

```bash
$ pipenv install
```

> Now, virtual environment is automaticaly create. If you want to know system link, just use `pipenv --venv`.
> Result is something like this: `/Users/username/.virtualenvs/bottle-vue-kickstart--XXXXXX`

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
├── articles.db
├── package.json
├── Pipfile
├── run.py
└── webpack.config.js
```

### What's next? Build something awesome and make web beautiful again!

## Developers

Development and maintenance of `Bottle Vue kickstart kit` project engaged by Vic Shóstak (aka [Koddr](https://koddr.me)). If you want to write a «thank you» or ask something, [use this e-mail](mailto:koddr.me@gmail.com).

## Your help

If you want help, we will be glad reviews about `Bottle Vue kickstart kit` on personal blogs (including Twitter), online media and/or specialized IT-portals. Thank you!

## License

[The MIT License (MIT)](https://github.com/koddr/bottle-vue-kickstart/blob/master/LICENSE.md)
