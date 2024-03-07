import { View, Text, SafeAreaView,StyleSheet,Image,Button } from 'react-native'
import React,{useEffect,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart,removeFromCart } from '../redux/action'


const Product = (props) => {
  
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) =>state.reducer)
  const [isAdded,setIsAdded] = useState(false)
  const [isRemoved,setIsRemoved] = useState(false)

   const handleAddToCart = (item) => {
    dispatch(addToCart(item))
   }

   const handleRemoveFromCart = (item) =>{
    dispatch(removeFromCart(item.name))
  }

   useEffect(()=>{
    let result = cartItems.filter((element)=>{
      return item.name === element.name
    })
    if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }

   },[cartItems])

  return (
    <SafeAreaView style={styles.container}>

<View style={{alignItems: 'center',borderBottomColor:'lightblue',borderBottomWidth:2,margin:5,padding:10}}>
            <Text style={{fontSize: 24}}>{item.name}</Text>
            <Text style={{fontSize: 24}}>{item.price}</Text>
            <Text style={{fontSize: 24}}>{item.color}</Text>
            <Image
              style={{width: 100, height: 100,marginBottom:10,borderRadius:20}}
              source={{uri: item.image}}
            />
            {
              isAdded?
              <Button style={{}} title="Remove From Cart" onPress={()=>handleRemoveFromCart(item)} />
              :
              <Button style={{}} title="Add to Cart" onPress={()=>handleAddToCart(item)} />



            }

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