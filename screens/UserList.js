import { View, Text, SafeAreaView } from 'react-native'
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
    <SafeAreaView>
      {
       UserList.length?
        userList.map((item)=>(<Text style={{fontSize:20}}>{item.gender}</Text>))
        :<Text>not fetching data</Text>       
      }
    </SafeAreaView>
  )
}

export default UserList