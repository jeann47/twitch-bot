import React, { useState } from 'react'
import { useCavy } from 'cavy'
import { SafeAreaView, Button, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'
import { Header, Colors, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

export default function App() {
  const [show, setShow] = useState(false)
  const generateTestHook = useCavy()

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View ref={generateTestHook('Container')} style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <Button ref={generateTestHook('Button')} title="heloo" onPress={() => setShow(!show)} />
            {show && (
              <View
                ref={generateTestHook('Box')}
                style={{
                  width: 150,
                  height: 150
                }}
              />
            )}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  body: { backgroundColor: Colors.white },
  engine: {
    position: 'absolute',
    right: 0
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
  highlight: { fontWeight: '700' },
  scrollView: { backgroundColor: Colors.lighter },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionDescription: {
    color: Colors.dark,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 8
  },
  sectionTitle: {
    color: Colors.black,
    fontSize: 24,
    fontWeight: '600'
  }
})
