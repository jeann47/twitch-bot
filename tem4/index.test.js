import React from 'react'
import { AppRegistry } from 'react-native'
import { Tester, TestHookStore } from 'cavy'
import ExampleSpec from './specs/exampleSpec'
import { name as appName } from './app.json'
import App from '~/App'
const testHookStore = new TestHookStore()

function AppWrapper() {
  return (
    <Tester specs={[ExampleSpec]} store={testHookStore}>
      <App />
    </Tester>
  )
}

AppRegistry.registerComponent(appName, () => AppWrapper)
