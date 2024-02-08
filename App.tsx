import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Product from './screens/Product'
import Header from './screens/Header'

const App = () => {

const products = [
  {
    name: 'Samsung Mobile',
    color: 'white',
    price: 3000,
    image : 'https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8'
  },
  {
    name: 'Apple Mobile',
    color: 'white',
    price: 6000,
    image : 'https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8'
  },
  {
    name: 'Oppo Mobile',
    color: 'white',
    price: 1000,
    image : 'https://fastly.picsum.photos/id/365/200/200.jpg?hmac=1d3GDxGN6ctXX3y8q4PA_hKu6fLOCEGbgeKZKJ8K8U8'
  },
]


  return (
    <View style={styles.container} >
      <Header />
      <Product />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default App