export const reactNativeComponentTemplate = (functionName: string, fileName: string) => (
  `import React from 'react'
import {View} from 'react-native'
import {styles} from './styles/${fileName}-style.js'
  
export function ${functionName}() {
  return (
    <View>
      {/* Your component here */}
    </View>
  )
}
`
)
