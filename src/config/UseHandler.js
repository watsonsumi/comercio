import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const Pool_Data = {
    UserPoolId: 'us-east-1_WN7mX5v6o', // Your user pool id here
    ClientId: '556ootgckn7idfhepo7c0up52g',
};

export default function UseHandler() {
    const [state, setstate] = useState({
        loading: false,
        isAuthenticated: false
    })

    const { loading, isAuthenticated } = state;

    const userPool = new CognitoUserPool(Pool_Data)

    const getAuthenticatedUser = () => {
        return userPool.getCurrentUser()
    }

    return {
        loading,
        isAuthenticated,
        userPool,
        getAuthenticatedUser
    }
};