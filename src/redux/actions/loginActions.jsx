import {
	loginRequest,
	loginSuccess,
	loginFailure,
	clearMessage,
	loginLogout,
} from '../types/loginTypes';
import {
	AuthenticationDetails,
	CognitoUser,
	CognitoUserSession,
	CognitoUserPool
  } from "amazon-cognito-identity-js";
//   import UseHandler from "../../config/UseHandler";
  const Pool_Data = {
    UserPoolId: 'us-east-1_WN7mX5v6o', // Your user pool id here
    ClientId: '556ootgckn7idfhepo7c0up52g',
};
const userPool = new CognitoUserPool(Pool_Data)
const logRequest = () => {
	return {
		type: loginRequest,
	};
};
const logSuccess = email => {
	return {
		type: loginSuccess,
		payload: email,
	};
};
const logFailure = msg => {
	return {
		type: loginFailure,
		payload: msg,
	};
};
const clearMsg = () => {
	return {
		type: clearMessage,
	};
};
export const logout = () => {
	localStorage.clear();
	window.location.reload();
	return {
		type: loginLogout,
	};
};

export const login = (username, password) => async dispatch => {
	dispatch(logRequest());
	try {
		const authenticationData = {
			Username: username,
			Password: password
		  };
		  console.log(authenticationData);
		const authDetails = new AuthenticationDetails(authenticationData);//Encapsula todos los datos necesarios para autenticar a un usuario. 
		//Pase un objeto de este tipo al objeto de continuación para continuar con el proceso de autenticación. Este contenido de este objeto se establece cuando se construye y es inmutable después.
		const userData = {
		Username: username,
		Pool: userPool
		};
		const congnitoUser = new CognitoUser(userData);
		congnitoUser.authenticateUser(authDetails, {
			
			onSuccess(result: CognitoUserSession) { //me da una sesión, de la que puedo obtener un jwtToken
			  console.log(result);
			  console.log(CognitoUserSession);
		localStorage.setItem('Token', JSON.stringify(result.accessToken.jwtToken));
		localStorage.setItem('isAuthenticated', true);
		localStorage.setItem('data', JSON.stringify(result));
			  dispatch(logSuccess(result));
			},
		  });
	} catch (error) {
			dispatch(logFailure(error));
			setTimeout(() => {
				dispatch(clearMsg());
			}, 3000);
	}
};
