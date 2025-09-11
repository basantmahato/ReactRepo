// DeeplyNestedComponent.js
import { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

function DeeplyNestedComponent() {
  // Use the useContext hook to get the value from the UserContext.
  const userName = useContext(UserContext);

  return <h2>Hello, {userName}!</h2>;
}
export default DeeplyNestedComponent;