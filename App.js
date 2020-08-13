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


import React,{ useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import { SearchBar } from 'react-native-elements';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle({navigation}) {
  return (
  <View>
 <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
 </View>
  );
}

function Home({ navigation }) {
  const [searchstate, setsearchState] = useState("");
  React.useEffect(() => {
  const unsubscribe = navigation.addListener('drawerOpen', (e) => {
    
  });
});
  var updateSearch = (search) => {
    setsearchState({ search });
  };

  return (
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:3}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
        <SearchBar
        style={{marginTop:'20%'}}
        containerStyle={{ borderWidth: 0, borderRadius: 25}}
        placeholder="Paste the INsta Reels Link here."
        onChangeText={updateSearch}
        value={searchstate}
        lightTheme = 'true'
        round = 'true'
      />
    </SafeAreaView>
  );
}

function DownloadPost({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:3}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
    </SafeAreaView>
  );
}

function DownloadReels({ navigation }) {
  return(
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:3}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
    </SafeAreaView>
    );
}

function PrivacyPolicy({ navigation }) {
  return(
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:3}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
    </SafeAreaView>
    );
}

function About({ navigation }) {
  return(
    <SafeAreaView style={{flex:1, flexDirection:'column', marginTop:3}}>
    <View>
     <Icon name="menu" size={40} color="black" style={{ justifyContent: 'flex-start'}} onPress={() => navigation.toggleDrawer()}/>
    </View>
    </SafeAreaView>
    );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
          screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
           height: 70,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
const DownloadPostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
           height: 70,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Download Post" component={DownloadPost} /> 
    </Stack.Navigator>
  );
}
const AboutStackNavigator = () => {
  return (
    <Stack.Navigator       
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
           height: 70,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
const DownloadReelsStackNavigator = () => {
  return (
    <Stack.Navigator       
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
           height: 70,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Download Reels" component={DownloadReels} />
    </Stack.Navigator>
  );
}
const PrivacyPolicyStackNavigator = () => {
  return (
    <Stack.Navigator       
    screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
           height: 70,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerTitleAlign: "center",
      }}>
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
}


function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackNavigator} options={{ headerTitle: 'Feed' }}/>
      <Drawer.Screen name="Download Post" component={DownloadPostStackNavigator} options={{ headerTitle: 'Download Post' }}/>
      <Drawer.Screen name="Download Reels" component={DownloadReelsStackNavigator} options={{ headerTitle: 'Download Reels' }}/>
      <Drawer.Screen name="About" component={AboutStackNavigator} options={{ headerTitle: 'Download Reels' }}/>
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicyStackNavigator} options={{ headerTitle: 'Download Reels' }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <MyDrawer/>
    </NavigationContainer>
  );
}
