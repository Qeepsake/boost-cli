export const getFileName = (componentName: string) => {
  // Splits names with TitleCase or camelCase
  const splitComponentName: string[] = componentName.match(/(?<=[a-z])(?=[A-Z])/g) ?? []
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
