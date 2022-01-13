import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import reducers from './src/redux/reducers';
import HomeScreen from './src/screens/home/HomeScreen';
import OrderScreen from './src/screens/order/OrderScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import FavoritesScreen from './src/screens/favorites/FavoritesScreen';
import EateryDetailsScreen from './src/screens/detail/EateryDetailsScreen';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Details"
        component={EateryDetailsScreen}
        options={{
          presentation: 'fullScreenModal',
          headerBackTitleVisible: false,
          headerTitle: '',
          headerTintColor: 'white',
          headerTransparent: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              } else if (route.name === 'Order') {
                iconName = focused ? 'receipt' : 'receipt-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Favorite') {
                iconName = focused ? 'heart' : 'heart-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#EE4E4E',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
          })}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen name="Order" component={OrderScreen} />
          <Tab.Screen name="Favorite" component={FavoritesScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const store = createStore(reducers, applyMiddleware(thunk));

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
