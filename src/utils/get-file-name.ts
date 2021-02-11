export const getFileName = (componentName: string) => {
  const splitComponentName: string[] = componentName.match(/[A-Z][a-z]+/g) ?? []
  let fileName: string = componentName
  for (let i = 0; i < splitComponentName.length; i++) {
    if (i === 0) {
      fileName = splitComponentName[i].toLowerCase()
    } else {
      fileName = fileName + '-' + splitComponentName[i].toLowerCase()
    }
  }
  return fileName
}
