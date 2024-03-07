import { View, Text, SafeAreaView,FlatList } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import { getUserList } from '../redux/action'
import React,{useEffect} from 'react'

const UserList = () => {

  const dispatch = useDispatch();
  const userList = useSelector((state)=>state.reducer)


  useEffect(() => {
    dispatch(getUserList());
  },[]);
  console.warn('in component',userList);

  return (
    <SafeAreaView style={{flex:1}}>
      <FlatList
        data={userList[0].users}
        keyExtractor={item => item.firstName}
        renderItem={({ item }) => <Text style={{fontSize:25}}>{item.firstName + " " + item.lastName + " " + item.age}</Text>}
      />
    </SafeAreaView>
  )
}        

export default UserList