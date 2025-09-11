// App.js
import { UserContext } from './UserContext.jsx';
import  MiddleComponent  from './MiddleComponent.jsx';

function App() {
  const userName = "Alice";

  // Wrap the components that need access to the data.
  // The 'value' prop is the data you're sharing.
  return (
    <UserContext.Provider value={userName}>
      <h1>Welcome to the App!</h1>
      <MiddleComponent />
    </UserContext.Provider>
  );
}

export default App;