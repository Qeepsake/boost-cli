import * as fs from 'fs'
import * as path from 'path'
import cli from 'cli-ux'
import {statPath} from '../utils/stat-path'
import {Template} from '../types'

export const createTemplate = (directory: string, fileName: string, template: Template, componentName: string) => {
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

  const filePath = resolvedDirectoryPath + '/' + fileName + '.js'
  const filePathStat = statPath(filePath)

  // Check if the file exists
  if (filePathStat && filePathStat.isFile()) {
    cli.action.stop(`File ${fileName}.js exists. Choose another name or delete the existing file.`)
  } else {
    // If not, create file
    fs.writeFile(filePath, template(componentName, fileName), err => {
      if (err) {
        cli.action.stop(err.toString() + ` ${fileName}.js not created. Please try again.`)
      } else {
        cli.action.stop(`${fileName}.js created successfully!`)
      }
    })
  }
}
