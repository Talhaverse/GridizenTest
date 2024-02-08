import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:30,textAlign:'right',padding:10,backgroundColor:'orange'}}>0</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
    // flex:1
  }
})

export default Header