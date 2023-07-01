import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/screens/Home';
import EventsPage from './src/screens/Events';
import TasksPage from './src/screens/Tasks';
import Reminders from './src/screens/Reminders';
import Login from './src/screens/Login';
import styles from './src/styles/AppStyles'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Events" component={EventsPage} />
        <Stack.Screen name="Tasks" component={TasksPage} />
        <Stack.Screen name="Reminders" component={Reminders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}