// In App.js in a new project
import { Appbar ,Avatar} from "react-native-paper";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home";
import About from "./screen/About";
import Task from "./screen/Task";
import Social from "./screen/Social";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Task" component={Task}/>
        <Stack.Screen name="Social" component={Social}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header style={{backgroundColor:"#000000"}}> 
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content   title="Stdimitrov05`App"  />
      <Avatar.Image
          size={50}
          source={{
            uri: "https://scontent.fpdv1-1.fna.fbcdn.net/v/t39.30808-6/s600x600/255736791_1808759105983081_6443734841819099455_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ktztfMGXU14AX-AXE8t&_nc_ht=scontent.fpdv1-1.fna&oh=00_AT_4leciEfJr9-KUkpYwqKov_Dmn-v3hxffe3WR__eiHsg&oe=61EF0593",
          }}
        />
    </Appbar.Header>
  );
}

export default App;
