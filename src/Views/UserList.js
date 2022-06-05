import { View, Text, Alert } from 'react-native'
import React from 'react'
import users from '../data/users'

import { ListItem, Avatar, Icon } from "@rneui/themed";
import { Button } from '@rneui/base';


export default function UserList(props) {

 




  return (
    <View>
     {users.map((user, id)=> (
        <ListItem.Swipeable
         onPress={()=>{props.navigation.navigate("UserForm", user)}}
         key={id}
         bottomDivider
         leftContent={()=>(
           <Button
            title="Info"
            onPress={()=> props.navigation.navigate('UserForm', user)}
            icon={{name: 'info', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
            />
         )}
         rightContent={(confirmUserDelection)=>(
          <Button
            title="Delete"
            onPress={(user) => {
              Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
                {
                  text: 'Não'
                 
                },
                {
                  text: 'Sim',

                  onPress(){
                    console.warn('delete')
                  }
                }
              ])
            }}

            icon={{ name: 'delete', color: 'white' }}
            buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
          />
         )}
         >
          <Avatar source={{uri: user.avatarUrl}} />
            <ListItem.Content>  
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
            
                <ListItem.Chevron
                onPress={()=>props.navigation.navigate("UserForm", user)}
                />
           
        </ListItem.Swipeable>
     ))}
    </View>
  )
}