import { View, Text, SafeAreaView,StyleSheet,Image,Button } from 'react-native'
import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../redux/action'

const Product = (props) => {

  const item = props.item;
  const dispatch = useDispatch();

   const handleAddToCart = (item) => {
    dispatch(addToCart(item))
   }

  return (
    <SafeAreaView style={styles.container}>

<View style={{alignItems: 'center',borderBottomColor:'orange',borderBottomWidth:2,margin:5,padding:10}}>
            <Text style={{fontSize: 24}}>{item.name}</Text>
            <Text style={{fontSize: 24}}>{item.price}</Text>
            <Text style={{fontSize: 24}}>{item.color}</Text>
            <Image
              style={{width: 100, height: 100,marginBottom:10}}
              source={{uri: item.image}}
            />
            <Button style={{}} title="Add to Cart" onPress={()=>handleAddToCart(item)} />

          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
     flex:1,
     
  }
})


export default Product