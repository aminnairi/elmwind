# elmwind

Template for creating Web Applications using Elm, Tailwind & Vite.

## Summary

- [Requirements](#requirements)
- [Installation](#installation)
- [Startup](#startup)
  - [Docker Compose](#docker-compose)
  - [NPM](#npm)
- [Dependencies](#dependencies)
  - [Docker Compose](#docker-compose-1)
  - [NPM](#npm-1)
- [Development](#development)
  - [Docker Compose](#docker-compose-2)
  - [NPM](#npm-2)
- [Build](#build)
  - [Docker Compose](#docker-compose-3)
  - [NPM](#npm-3)
- [Preview](#preview)
  - [Docker Compose](#docker-compose-4)
  - [NPM](#npm-4)
- [Shutdown](#shutdown)
  - [Docker Compose](#docker-compose-5)
  - [NPM](#npm-5)

## Requirements

- [Git](https://git-scm.com/)

And

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

Or

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

[Back to summary](#summary)

## Installation

```bash
git clone https://github.com/aminnairi/elmwind my-project
cd my-project
```

[Back to summary](#summary)

## Startup

This will create a Docker container for running Node commands. You can skip this step if you are using Node & NPM instead.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose up --detach
```

[Back to summary](#summary)

### NPM

No equivalent.

[Back to summary](#summary)

## Dependencies

This will install the dependencies needed for running the next command, don't skip this step.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose exec node npm install
```

[Back to summary](#summary)

### NPM

```bash
npm install
```

[Back to summary](#summary)

## Development

Start editing this project by appending changes to the files under the [`src`](./src) folder.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose exec node npm run dev
```

[Back to summary](#summary)

### NPM

```bash
npm run dev
```

[Back to summary](#summary)

## Build

Files that you can host will be located under the `public` folder at the root of this project.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose exec node npm run build
```

[Back to summary](#summary)

### NPM

```bash
npm run build
```

[Back to summary](#summary)

## Preview

This will simulate a production Web server hosting your files from the `public` folder.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose exec node npm start
```

[Back to summary](#summary)

### NPM

```
npm start
```

[Back to summary](#summary)

## Shutdown

This will stop all the Docker Compose services previously started. If you are using Node & NPM you can skip this step.

[Back to summary](#summary)

### Docker Compose

```bash
docker-compose down
```

[Back to summary](#summary)

### NPM

No equivalent.

[Back to summary](#summary)