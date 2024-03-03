import { View, Text, SafeAreaView } from 'react-native'
import {useDispatch} from 'react-redux'
import { getUserList } from '../redux/action'
import React,{useEffect} from 'react'

const UserList = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  });

  return (
    <SafeAreaView>
      <Text>UserLists from api using  redux sagqa, dont to miss 2 days in a row</Text>
    </SafeAreaView>
  )
}

export default UserList