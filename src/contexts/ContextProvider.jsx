import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
      name: 'PG Estated Development'
    });
    const [token, _setToken] = useState();

    // console.log('token', token);

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const checkToken = () => {
      if (localStorage.getItem('ACCESS_TOKEN')) {
        return true
      } else {
        return false
      }

  }



    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            checkToken
        }}>
        {children}
        </StateContext.Provider>
    )
}

ContextProvider.propTypes = {
  children: PropTypes.element
}

export const useStateContext = () => useContext(StateContext)

