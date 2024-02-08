import { View, Text, SafeAreaView,StyleSheet,Image,Button } from 'react-native'
import React from 'react'

const Product = (props) => {

  const item = props.item

  return (
    <SafeAreaView style={styles.container}>

<View style={{alignItems: 'center',borderBottomColor:'orange',borderBottomWidth:2,margin:5,padding:10}}>
            <Text style={{fontSize: 24}}>{item.name}</Text>
            <Text style={{fontSize: 24}}>{item.price}</Text>
            <Text style={{fontSize: 24}}>{item.color}</Text>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: item.image}}
            />
            <Button title="Add to Cart" />
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1
  }
})


export default Product