react-boost
===========

CLI tool to build the wireframes of components and utilities for a React/ React Native project

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/react-boost.svg)](https://npmjs.org/package/react-boost)
[![Downloads/week](https://img.shields.io/npm/dw/react-boost.svg)](https://npmjs.org/package/react-boost)
[![License](https://img.shields.io/npm/l/react-boost.svg)](https://github.com/aspect-apps/react-boost/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g react-boost
$ react-boost COMMAND
running command...
$ react-boost (-v|--version|version)
react-boost/0.0.0 darwin-x64 node-v14.15.4
$ react-boost --help [COMMAND]
USAGE
  $ react-boost COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`react-boost component [COMPONENT_NAME] --flavour [FLAVOUR] --directory [DIRECTORY_PATH]`](#react-boost-component-name---flavour-flavour---directory-directory)
* [`react-boost utility [FILE]`](#react-boost-utility-file)
* [`react-boost help [COMMAND]`](#react-boost-help-command)

## `react-boost component [COMPONENT_NAME] --flavour [FLAVOUR] --directory [DIRECTORY_PATH]`

react-boost command

```
USAGE
  $ react-boost component [FUNCTIONNAME] --flavour [FLAVOUR] --directory [DIRECTORYPATH]

ARGUMENTS
  FUNCTIONNAME  Name of your file and function 

OPTIONS
  -d, --directory  [default: ./components] The directory you want your function to reside in. (example:
                             ./src/components)

  -f, --flavour  [default: react-native]

EXAMPLES
  $ react-boost component <Component name> --flavour react-native --directory ./component
  $ react-boost utility <Utlity name>
```

_See code: [src/commands/component.ts](https://github.com/aspect-apps/react-boost/blob/v0.0.0/src/commands/component.ts)_

## `react-boost utility [FILE]`

describe the command here

```
USAGE
  $ react-boost utility [FILE]

ARGUMENTS
  FUNCTIONNAME  Name of your file and function 

OPTIONS
  -d, --directory=directory  [default: ./components] The directory you want your function to reside in. (example:
                             ./src/components)
```

_See code: [src/commands/utility.ts](https://github.com/aspect-apps/react-boost/blob/v0.0.0/src/commands/utility.ts)_


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
<!-- commandsstop -->
