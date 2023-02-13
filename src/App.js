import logo from './logo.svg';
import './App.css';

import LoginPage from './pages/LoginPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId =
	'1089162439818-ap9m4c845mu1s06pk6mbb1foo392b6nk.apps.googleusercontent.com';
function App() {
  return (
    <div>
      <LoginPage/>
     </div>
  );
}

export default App;
