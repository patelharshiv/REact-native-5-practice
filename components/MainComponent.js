import React from 'react';
import {View, SafeAreaView, Button} from 'react-native'; 

function MainComponent() {
	console.log("hiii");
	return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
	)
}

export default MainComponent