import React, { useEffect } from 'react'
import StackAuthNavigator from './StackAuthNavigarot'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'


const MainNavigator = () => {
  const { user, localId } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  //const {data} = useGetProfileImageQuery(localId)
  //useEffect(()=>{
  //  if(data){
  //    dispatch(setImageProfile(data.image))
  //  }
  //}, [data])

  return user ? <BottomTabNavigator /> : <StackAuthNavigator />
}

export default MainNavigator
