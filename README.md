# Local installation

### Requirement

Install node (at least version 18; eg: node v**18.18.0**)

### Build

From the main directory of the project run:

```bash
yarn
```

And then run:

```bash
cd sdk/community-js
yarn
```

### Run

Use the start command from webstorm or launch the command:

```bash
npm start
```

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the
`gh-pages` branch.

### Convert from openapi to slate

Install widdershins globally with

```
sudo npm i -g widdershins
```

```
widdershins --search false --language_tabs 'shell:cURL' 'javascript:Javascript' -x --expandBody --summary openapi -o openapi.md
```