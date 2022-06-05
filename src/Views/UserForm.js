import {TextInput, View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'


const UserForm = ({route, navigation}) => {

  const [user, setUser] = useState(route.params ? route.params : {})

  return (
 
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={(name) => setUser(...user, name)}
        value={user.name}
        placeholder="Informe o nome"
      />
     <Text>Email</Text>
     <TextInput
       style={style.input}
       onChangeText={(email) => setUser(...user, email)}
       value={user.email}
       placeholder="Informe o Email"
     />
      <Text>Url do Avatar</Text>
     <TextInput
       style={style.input}
       onChangeText={(avatarUrl) => setUser(...user, urlAvatar)}
       value={user.avatarUrl}
       placeholder="Informe a URL do Avatar"
     />
     <Button
     title='Salvar'
     onPress={()=> {
       //função para salvar
       //blablallba
       
       navigation.goBack()
     }}
     />
     </View>   
  )
}


const style = StyleSheet.create({

  form:{
    padding:12
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  }
})

export default UserForm