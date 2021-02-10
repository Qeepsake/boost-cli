import * as fs from 'fs'
import * as path from 'path'
import {statPath} from '../utils/stat-path'
import cli from 'cli-ux'

import {getTemplate} from './get-template'

export const createTemplate = (directory: string, functionName: string, command: string, flavour?: string) => {
  const template = getTemplate(command, flavour)
  cli.action.start('Creating your file')

  const resolvedDirectoryPath = path.resolve(directory)
  const directoryPathStat = statPath(resolvedDirectoryPath)

  // Check if directory exists
  if (directoryPathStat && directoryPathStat.isDirectory()) {
    // Directory exists
  } else {
    // Directory doesn't exist, create directory
    try {
      fs.mkdirSync(resolvedDirectoryPath, {recursive: true})
    } catch (error) {
      cli.action.stop(error.toString() + `${directory} not created. Please try again.`)
    }
  }

  const filePath = resolvedDirectoryPath + '/' + functionName + '.js'
  const filePathStat = statPath(filePath)

  // Check if the file exists
  if (filePathStat && filePathStat.isFile()) {
    cli.action.stop(`File ${functionName}.js exists. Choose another name or delete the existing file.`)
  } else {
    // If not, create file
    fs.writeFile(filePath, template(functionName), err => {
      if (err) {
        cli.action.stop(err.toString() + ` ${functionName}.js not created. Please try again.`)
      } else {
        cli.action.stop(`${functionName}.js created successfully!`)
      }
    })
  }
}
