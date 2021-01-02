import AsyncStorage from '@react-native-community/async-storage'

export async function writeToStorage({ key, data }) {
  await AsyncStorage.setItem(key, JSON.stringify(data))
}

export async function readFromStorage({ key, parse = false }) {
  const data = await AsyncStorage.getItem(key)
  return parse ? JSON.parse(data) : data
}

export async function removeFromStorage({ key }) {
  await AsyncStorage.removeItem(key)
}
