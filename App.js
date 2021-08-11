import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer} from '@react-navigation/native'

import {Restorent, OrderDelivery} from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();

function App(props) {
  return (
     <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown : false
          }}
          initialRouteName="Tabs"
        >
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Restorent" component={Restorent} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;