import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/Home';
import EventsPage from './src/screens/Events';
import TasksPage from './src/screens/Tasks'; // import TasksPage

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Tasks" component={TasksPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}