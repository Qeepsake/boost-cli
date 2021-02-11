import {Command, flags} from '@oclif/command'
import {createTemplate} from '../utils/create-template'
import {getTemplate} from '../utils/get-template'
import {getFileName} from '../utils/get-file-name'

export default class Component extends Command {
  static description = 'The utility command creates a utility file with the utility template. Value for the --directory flag will default to ./utils. The `UTILITYNAME` splits by uppercase letters to form the file name, so `MyUtility` becomes `my-utility.js`.\n' +
`E.g. boost-cli utility MyUtility -d ./src/utils
- Creates a utility file named my-utility.js in ./src/utils`

  static hidden = false   // hide the command from help

  // custom usage string for help, overrides the default usage
  static usage = 'utility [UTILITYNAME]'

  // examples to add to help, each can be multiline
  static examples = [
    '$ boost-cli utility MyUtility',
    '$ boost-cli utility MyUtility --directory ./src/utils',
    '$ boost-cli utility MyUtility --directory=./src/utils',
    '$ boost-cli utility MyUtility -d ./src/utils',
  ]

  static args = [
    {
      name: 'utilityName',                  // name of arg to show in help and reference with args[name]
      required: true,                       // make the arg required with `required: true`
      description: 'Name of your utility',  // help description
      hidden: false,                        // hide this arg from help
    },
  ]

  static flags = {
    directory: flags.string({
      char: 'd',                    // shorter flag version
      description: 'The directory you want your function to reside in. (example: ./src/utils)', // help description for flag
      hidden: false,                // hide from help
      multiple: false,              // allow setting this flag multiple times
      default: './utils',           // default value if flag not passed (can be a function that returns a string or undefined)
      required: false,              // make flag required (this is not common and you should probably use an argument instead)
    }),
  }

  async run() {
    const {args, flags} = this.parse(Component)
    const {directory} = flags
    const {utilityName} = args

    const utilityFileName = getFileName(utilityName)

    createTemplate(directory, utilityFileName, getTemplate('utility'), utilityName)
  }
}
