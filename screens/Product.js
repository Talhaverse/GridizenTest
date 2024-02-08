import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

const Product = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Products</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1
  }
})


export default Product