// import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import MenuComponent from './components/MenuComponent';
// import Dishdetailcomponent from './components/Dishdetailcomponent';
// import MainComponent from './components/MainComponent';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// export default function App(){
//   return(
//     <View>
//     <NavigationContainer>
//     <Drawer.Navigator>
//       <Drawer.Screen name="MainComponent" component={MainComponent} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='MenuComponent' mode='card'>
//             <Stack.Screen name="MenuComponent" component={MenuComponent} />
//             <Stack.Screen name="Dishdetailcomponent" component={Dishdetailcomponent} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// }


import React,{ useEffect } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';


function LogoTitle({navigation}) {
  return (
  <View>
 <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
 </View>
  );
}

function Feed({ navigation }) {
  React.useEffect(() => {
  const unsubscribe = navigation.addListener('drawerOpen', (e) => {
    
  });
});
  return (
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:20}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
    </SafeAreaView>
  );
}

function Notifications() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}



const Stack = createStackNavigator();


function Stacknav() {
  return(
      <Stack.Navigator initialRouteName='Home' mode='card'>
      <Stack.Screen name="Insta Reels Downloader" component={MyDrawer} options={{ headerTitle:<LogoTitle/> }} />
      </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Insta Reels Downloader" component={Stacknav} options={{ headerTitle:<LogoTitle/> }} />
      <Drawer.Screen name="Home" component={Feed} options={{ headerTitle: 'Feed' }}/>
      <Drawer.Screen name="Download Post" component={Notifications} options={{ headerTitle: 'Download Post' }}/>
      <Drawer.Screen name="Download Reels" component={Notifications} options={{ headerTitle: 'Download Reels' }}/>
      <Drawer.Screen name="Privacy Policy" component={Notifications} options={{ headerTitle: 'Privacy Policy' }}/>
      <Drawer.Screen name="About" component={Notifications} options={{ headerTitle: 'Abouts' }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stacknav/>
    </NavigationContainer>
  );
}
