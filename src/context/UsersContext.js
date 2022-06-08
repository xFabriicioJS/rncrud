import React, { createContext, useReducer } from 'react';
import users from '../data/users'



const UsersContext = createContext({})
const initialState = { users }

export function UsersProvider({children}){




    function reducer(state, action){

       

        switch (action.type) {

            
            case 'deleteUser':
            
            const user = action.payload
            return{
                
                ...state,
                users: state.users.filter(u => u.id !== user.id)
            }
            case 'createUser':
                const newUser = action.payload    
                newUser.id = Math.random();
                return{
                    ...state,
                    users: [...state.users, newUser]

                }
           case 'updateUser':
               const updatedUser = action.payload
               return{
                   ...state,
                   users: state.users.map(u => u.id === updatedUser.id ? updatedUser : u)
               }

        }

    //    if(action.type === 'deleteUser'){
    //         const user = action.payload
    //         return{
    //             ...state,
    //             users: state.users.filter(u => u.id !== user.id)
    //       }
        
    //     return state
    //    }
    //    return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <UsersContext.Provider value={{
           state, dispatch
        }}>
            {children}
        </UsersContext.Provider>
    )
}


export default UsersContext;