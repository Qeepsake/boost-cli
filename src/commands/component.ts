import {Command, flags} from '@oclif/command'
import {createTemplate} from '../utils/create-template';

export default class Component extends Command {
  static description = 'react-boost component command creates a component file with the appropriate template. Values for --flavour and --directory flags will default to react-native and ./components respectively.'
  static hidden = false   // hide the command from help

  // custom usage string for help, overrides the default usage
  static usage = 'react-boost component <component name> --flavour <flavour type> --directory <directory path>'

  // examples to add to help, each can be multiline
  static examples = [
  '$ react-boost component MyComponent --flavour react-native --directory ./src/components',
  '$ react-boost component MyComponent',
  ]

  static args = [
  {
      name: 'functionName',        // name of arg to show in help and reference with args[name]
      required: true,              // make the arg required with `required: true`
      description: 'Name of your file and function', // help description
      hidden: false,               // hide this arg from help
  },
  ]

  static flags = {
    flavour: flags.string({
      char: 'f',
      default: 'react-native',      // default value if flag not passed (can be a function that returns a boolean)
    }),
    directory: flags.string({
      char: 'd',                    // shorter flag version
      description: 'The directory you want your function to reside in. (example: ./src/components)', // help description for flag
      hidden: false,                // hide from help
      multiple: false,              // allow setting this flag multiple times
      default: './components',      // default value if flag not passed (can be a function that returns a string or undefined)
      required: false,              // make flag required (this is not common and you should probably use an argument instead)
    }),
 }


  async run() {
    const {args, flags} = this.parse(Component)
    const {flavour, directory} = flags
    const {functionName} = args

    createTemplate(directory, functionName, "component", flavour);
  }
}

