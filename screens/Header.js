import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
          <View style={{backgroundColor:'yellow',borderRadius:15,height:40,width:40,marginTop:15}}>
            <Text style={{fontSize:30,textAlign: 'center',}} > {cartItems} </Text> 
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex:1
  },
});

export default Header;
