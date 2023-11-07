import React, { useEffect } from 'react'
import StackAuthNavigator from './StackAuthNavigarot'
import BottomTabNavigator from './BottomTabNavigator'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSession } from '../../src/db';
import { setUser, setImageProfile } from '../features/auth/authSlice';


const MainNavigator = () => {

  const { user } = useSelector(state => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchSession()
      .then(
        value => {
          if (typeof value[0].email !== 'undefined') {
            dispatch(setUser({ email: value[0].email, username: value[0].username, id_user: value[0].id_user }))
            dispatch(setImageProfile(value[0].image_profile))
          }
        },
        error => { console.log(error) }
      );
  }, [])

  //const {data} = useGetProfileImageQuery(localId)
  //useEffect(()=>{
  //  if(data){
  //    dispatch(setImageProfile(data.image))
  //  }
  //}, [data])

  return user ? <BottomTabNavigator /> : <StackAuthNavigator />
}

export default MainNavigator
