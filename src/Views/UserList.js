import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'


import { ListItem, Avatar, Icon } from "@rneui/themed";
import { Button } from '@rneui/base';
import UsersContext from '../context/UsersContext';


export default function UserList(props) {

 


 const { state, dispatch } =  useContext(UsersContext)





  return (
    <View>
     {state.users.map((user, id)=> (
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
         rightContent={()=>(
          <Button
            title="Delete"
            onPress={function deleteUser(){
              {
                Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
                  {
                    text: 'Não'
                   
                  },
                  {
                    text: 'Sim',
            
                    onPress(){
                      dispatch({
                      type: 'deleteUser',
                      payload: user,
                     })
                    }
                  }
                ])
              }
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