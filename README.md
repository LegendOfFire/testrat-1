# testrat

## Setup

### Setup frontend

It's based on [Angular 2](https://angular.io/).

#### One-shot setup after cloning the repo

Install `npm` dependencies:

```
cd frontend
npm install
```

In current implementation there's a bug in module `angular2-fontawesome`, here's a workaround to fix it:

```
cd frontend/node_modules/angular2-fontawesome
ln -sf src lib
```

Install [shellinabox](https://github.com/shellinabox/shellinabox), note that I'm running Arch Linux, you may need eifferent commands for other Linux distributions.

```
sudo pacman -S shellinabox
```

#### Regular setup


Start `npm`:

```
cd frontend
npm start
```

Start `shellinabox` in another terminal, note that you many want to use your own user name and directory instead.

```
cd utils
eval `./startsshagent`
shellinaboxd -dt -s '/:yy:wheel:HOME/home/yy/w/ericsson/testrat/utils/moshellproxy.sh ${url}'
```

Launch browser and go to `localhost:3000`.

