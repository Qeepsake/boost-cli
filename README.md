boost-cli
===========

CLI tool to build the wireframes of components and utilities for a React/ React Native project.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/boost-cli.svg)](https://npmjs.org/package/boost-cli)
[![Downloads/week](https://img.shields.io/npm/dw/boost-cli.svg)](https://npmjs.org/package/boost-cli)
[![License](https://img.shields.io/npm/l/boost-cli.svg)](https://github.com/React-Native-Boost/boost-cli/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Install
<!--intall-->
```
$ npm install -g boost-cli
```
or
```
$ yarn global add boost-cli
```

<!-- installstop -->

# Usage
<!-- usage -->
```sh-session
$ npm install -g @react-native-boost/boost-cli
$ react-boost COMMAND
running command...
$ react-boost (-v|--version|version)
@react-native-boost/boost-cli/0.0.1 darwin-x64 node-v14.15.4
$ react-boost --help [COMMAND]
USAGE
  $ react-boost COMMAND
...
```
<!-- usagestop -->

# Commands
<!-- commands -->
* [`react-boost component [COMPONENTNAME]`](#react-boost-component-componentname)
* [`react-boost help [COMMAND]`](#react-boost-help-command)
* [`react-boost utility [UTILITYNAMxE]`](#react-boost-utility-utilitynamxe)

## `react-boost component [COMPONENTNAME]`

The component command creates a component file with the appropriate component template. Values for the --flavour and --directory flags will default to react-native and ./components respectively.

```
USAGE
  $ react-boost component [COMPONENTNAME]

ARGUMENTS
  COMPONENTNAME  Name of your component

OPTIONS
  -d, --directory=directory  [default: ./components] The directory you want your function to reside in. (example:
                             ./src/components)

  -f, --flavour=flavour      [default: react-native]

EXAMPLES
  $ react-boost component MyComponent
  $ react-boost component MyComponent --flavour react-native
  $ react-boost component MyComponent --directory ./src/components
  $ react-boost component MyComponent --flavour=react-native --directory./src/components
  $ react-boost component MyComponent -f react-native -d ./src/components
```

_See code: [src/commands/component.ts](https://github.com/React-Native-Boost/boost-cli/blob/v0.0.1/src/commands/component.ts)_

## `react-boost help [COMMAND]`

display help for react-boost

```
USAGE
  $ react-boost help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `react-boost utility [UTILITYNAMxE]`

The utility command creates a utility file with the utility template. Value for the --directory flag will default to ./utils.

```
USAGE
  $ react-boost utility [UTILITYNAMxE]

ARGUMENTS
  UTILITYNAME  Name of your utility

OPTIONS
  -d, --directory=directory  [default: ./utils] The directory you want your function to reside in. (example:
                             ./src/utils)

EXAMPLES
  $ react-boost utility MyUtility
  $ react-boost utility MyUtility --directory ./src/utils
  $ react-boost utility MyUtility --directory=./src/utils
  $ react-boost utility MyUtility -d ./src/utils
```

_See code: [src/commands/utility.ts](https://github.com/React-Native-Boost/boost-cli/blob/v0.0.1/src/commands/utility.ts)_
<!-- commandsstop -->
