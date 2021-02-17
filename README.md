<img src="./boost-cli.png" width="315" /><br/>

# Boost CLI

CLI tool to build the wireframes of components and utilities for a React/ React Native project.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![License](https://img.shields.io/npm/l/boost-cli.svg)](https://github.com/boost-academy/boost-cli/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
* [Publish](#publish)
<!-- tocstop -->

# Install
<!--install-->
1. Login to npm with `npm login`. Then replace USERNAME with your GitHub username (in lowercase), TOKEN with your [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token), and PUBLIC-EMAIL-ADDRESS with your email address. Make sure you grant the token the `read:packages` permission to install the package.

```
npm login --scope=@boost-academy --registry=https://npm.pkg.github.com

> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```

2. `npm install` the package. Replace x.x.x with the current version.

```
npm install -g @boost-academy/boost-cli@x.x.x
```
<!-- installstop -->

# Usage
Refer to [Commands](#commands) for the commands available.
<!-- usage -->
```sh-session
$ boost-cli COMMAND
running command...
$ boost-cli (-v|--version|version)
@boost-academy/boost-cli/0.0.1 darwin-x64 node-v14.15.4
$ boost-cli --help [COMMAND]
USAGE
  $ boost-cli COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`boost-cli component [COMPONENTNAME]`](#boost-cli-component-componentname)
* [`boost-cli help [COMMAND]`](#boost-cli-help-command)
* [`boost-cli utility [UTILITYNAME]`](#boost-cli-utility-utilityname)

## `boost-cli component [COMPONENTNAME]`

The component command creates a component file with the appropriate component template. Values for the --flavour and --directory flags will default to react-native and ./components respectively. It also creates a corresponding file for your component's styles in the `/styles` subdirectory in the directory. The `COMPONENTNAME` splits by uppercase letters to form the file name, so `MyComponent` becomes `my-component.js`.

```
USAGE
  $ boost-cli component [COMPONENTNAME]

ARGUMENTS
  COMPONENTNAME  Name of your component

OPTIONS
  -d, --directory=directory  [default: ./components] The directory you want your function to reside in. (example:
                             ./src/components)

  -f, --flavour=flavour      [default: react-native]

DESCRIPTION
  E.g. boost-cli component MyComponent -f react-native -d ./src/components
  - Creates a component file named my-component.js in ./src/components
  - Creates a file for your component's style named my-component-style.js in ./src/components/styles

EXAMPLES
  $ boost-cli component MyComponent
  $ boost-cli component MyComponent --flavour react-native
  $ boost-cli component MyComponent --directory ./src/components
  $ boost-cli component MyComponent --flavour=react-native --directory./src/components
  $ boost-cli component MyComponent -f react-native -d ./src/components
```

_See code: [src/commands/component.ts](https://github.com/boost-academy/boost-cli/blob/v0.0.1/src/commands/component.ts)_

## `boost-cli help [COMMAND]`

display help for boost-cli

```
USAGE
  $ boost-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `boost-cli utility [UTILITYNAME]`

The utility command creates a utility file with the utility template. Value for the --directory flag will default to ./utils. The `UTILITYNAME` splits by uppercase letters to form the file name, so `MyUtility` becomes `my-utility.js`.

```
USAGE
  $ boost-cli utility [UTILITYNAME]

ARGUMENTS
  UTILITYNAME  Name of your utility

OPTIONS
  -d, --directory=directory  [default: ./utils] The directory you want your function to reside in. (example:
                             ./src/utils)

DESCRIPTION
  E.g. boost-cli utility MyUtility -d ./src/utils
  - Creates a utility file named my-utility.js in ./src/utils

EXAMPLES
  $ boost-cli utility MyUtility
  $ boost-cli utility MyUtility --directory ./src/utils
  $ boost-cli utility MyUtility --directory=./src/utils
  $ boost-cli utility MyUtility -d ./src/utils
```

_See code: [src/commands/utility.ts](https://github.com/boost-academy/boost-cli/blob/v0.0.1/src/commands/utility.ts)_
<!-- commandsstop -->

# Publish
<!--publish-->
The repo is configured to use GitHub Actions to automatically publish the package to GitHub Packages.

1. Update the versioning in `package.json`

2. Create a new release in the repository\
Creating a new release in your repository triggers the workflow to build and test your code. If the tests pass, then the package will be published to GitHub Packages.
<!-- publishstop -->
