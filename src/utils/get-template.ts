import {reactNativeComponentTemplate} from '../templates/react-native-component-template'
import {utilityTemplate} from '../templates/utility-template'

export const getTemplate = (command: string, flavour?: string) => {
  switch (command) {
  case 'component':
    switch (flavour) {
    case 'react-native':
      return reactNativeComponentTemplate
    default:
      return reactNativeComponentTemplate
    }
  case 'utility':
    return utilityTemplate
  default:
    return reactNativeComponentTemplate
  }
}
