export const reactNativeComponentTemplate = (functionName: string) => (
  `import React from 'react';
import {View} from 'react-native';

export function ${functionName}(){
    return (
        <View>
            {/* Your component here */}
        </View>
   ) 
}`
)
