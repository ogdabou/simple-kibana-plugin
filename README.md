# deck_gl

> Sample Kibana Visualization plugin using full React approach & external library usage.

---



## development


### Setup your environment

- Mapbox token: Put your mapbox token in `public/vis.js`
- Have the following project structure

**Directory structure & clone kibana**

```bash

mkdir -p kibana-work/kibana-extra
cd kibana-work

git clone git clone --depth 1 --branch v6.5.4 git@github.com:elastic/kibana.git

cd kibana-extra
git clone git@github.com:ogdabou/simple-kibana-plugin.git

tree 
.         
├── kibana             
└── kibana-extra
    └── deck_gl (this plugin repository)
```

**Install YARN**

https://yarnpkg.com/lang/en/docs/install/#debian-stable

**Use NodeJS v8.14.0**

```bash
nvm install v8.14.0
nvm use v8.14.0
```


### Start coding

```bash
cd kibana-work/kibana-extra/simple-kibana-plugin

# Starts ES locally
npm run-script dev

yarn start --oss
yarn kbn bootstrap
```

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following yarn scripts.

  - `yarn kbn bootstrap`

    Install dependencies and crosslink Kibana and all projects/plugins.

    > ***IMPORTANT:*** Use this script instead of `yarn` to install dependencies when switching branches, and re-run it whenever your dependencies change.

  - `yarn es snapshot --license oss --version 6.4.2`

    Start Elasticsearch for local development

  - `yarn start --oss`

    Start kibana and have it include this plugin. You can pass any arguments that you would normally send to `bin/kibana`

  - `yarn build`

    Build a distributable archive of your plugin.

  - `yarn test:browser`

    Run the browser tests in a real web browser.

  - `yarn test:server`

    Run the server tests using mocha.

For more information about any of these commands run `yarn ${task} --help`. For a full list of tasks checkout the `package.json` file, or run `yarn run`.

### Known issues

Look at this

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
echo vm.max_map_count=262144 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```