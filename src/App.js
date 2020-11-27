import './App.css';
import SignUp from './components/signup';
import {Container} from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
     <div className="App">
        <Container className="d-flex align-items-center justify-content-center"
          style={{minHeight: "100vh"}}>
           <div className="w-100" style={{maxWidth: '400px'}}>
              <SignUp/>
          </div>
       </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
