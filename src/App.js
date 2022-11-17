import './App.css';
import ShoppingList from './ShoppingList';
import SimpleInput from './SimpleForm';
import UserForm from './UserForm';

function App() {
  return (
    <div className="App">
      <SimpleInput />
      <hr></hr>
      <ShoppingList />
      
      <UserForm /> 
      <hr></hr>
      
    </div>
  );
}

export default App;
