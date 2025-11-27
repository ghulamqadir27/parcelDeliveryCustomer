
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {TouchableOpacity, View} from 'react-native';
import HomeTab from 'screens/home-tab';
import TrackOrderTab from 'screens/track-order-tab';
import DriverProfileScreen from 'screens/driver-profile';
import HelpCenterScreen from 'screens/help-center-screen';
import * as IMG from 'assets/images'; // SVGs imported as components
import React from 'react';
import Medium from 'typography/medium-text';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{backgroundColor: colors.white}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: colors.white,
          height: mvs(60),
          justifyContent: 'space-around',
          alignItems: 'center',
          borderTopLeftRadius: mvs(25),
          borderTopRightRadius: mvs(25),
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {width: 0, height: -2},
          elevation: 8,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          
          const Icon =
            route.name === 'Home'
              ? isFocused
                ? IMG.homeActive
                : IMG.homeSimple
              : route.name === 'HelpCenterScreen'
              ? isFocused
                ? IMG.SupportActive
                : IMG.SupportSimpleNew
              : route.name === 'DriverProfileScreen'
              ? isFocused
                ? IMG.profileActive
                : IMG.profileSimple
              // : route.name === 'TrackOrderTab'
              // ? isFocused
              //   ? IMG.trackOrderActive
              //   : IMG.trackOrderSimple
              : null;

          const onPress = () => {
            if (!isFocused) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={{
                flexDirection: isFocused ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isFocused ? colors.primary : colors.white,
                height: mvs(45),
                width: isFocused ? mvs(120) : mvs(120),
                borderRadius: mvs(30),
                paddingHorizontal: mvs(10),
              }}>
              
              {Icon && <Icon width={mvs(25)} height={mvs(25)} style={{marginRight: isFocused ? mvs(8) : 0}} />}

              {isFocused && (
                <Medium
                  label={label}
                  style={{fontWeight: '500'}}
                  color={colors.white}
                  fontSize={mvs(15)}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export const TabBar = () => {
  const {user} = useAppSelector(s => s);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeTab} options={{tabBarLabel: 'Home'}} />
      {/* <Tab.Screen name="TrackOrderTab" component={TrackOrderTab} options={{tabBarLabel: 'Orders'}} /> */}
      <Tab.Screen name="HelpCenterScreen" component={HelpCenterScreen} options={{tabBarLabel: 'Support'}} />
      <Tab.Screen name="DriverProfileScreen" component={DriverProfileScreen} options={{tabBarLabel: 'Profile'}} />
    </Tab.Navigator>
  );
};

