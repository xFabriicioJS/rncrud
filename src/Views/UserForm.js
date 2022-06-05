import { View, Text } from 'react-native'
import React, { useState } from 'react'

const UserForm = ({route, navigation}) => {

  const [user, setUser] = useState(route.params ? route.params : {})

  return (
    <View>
      <Text>{user.id}</Text>
    </View>
  )
}

export default UserForm