import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
    Button,
  } from 'react-native';
  import React from 'react';
  import Product from './Product';
  import Header from './Header';

  
  
  const ProductWrapper = ({navigation}) => {
    const products = [
      {
        name: 'Macbook',
        color: 'white',
        price: 3000,
        image:
          'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
      },
      {
        name: 'Ryzen',
        color: 'blue',
        price: 6000,
        image:
          'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
      },
      {
        name: 'Samsung',
        color: 'green',
        price: 1000,
        image:
          'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
      },
      {
        name: 'Chromebook',
        color: 'black',
        price: 10000,
        image:
          'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
      },
    ];
  
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Go to User List" onPress={()=>{navigation.navigate('UserList')}}/>
        <Header />
        <ScrollView>
          { 
          products.map((item) => <Product item={item} />)
          }
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default ProductWrapper;
  