import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from 'reactotron-react-native'
import { APP_NAME, DEBUG_HOST } from '@env'

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: APP_NAME,
    host: DEBUG_HOST
  })
  .useReactNative({
    asyncStorage: true,
    networking: { ignoreUrls: /symbolicate/ }
  })
  .connect()

function connectConsoleToReactotron() {
  console.log = Reactotron.log
  console.OldWarn = console.warn
  console.warn = (...args) => {
    console.OldWarn(...args)
    console.log(...args)
  }
}
connectConsoleToReactotron()
