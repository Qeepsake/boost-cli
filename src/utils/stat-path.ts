import * as fs from 'fs'

export const statPath = (path: string) => {
  try {
    return fs.statSync(path)
  } catch (error) {
  }
  return false
}
