// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import * as SVGS from 'assets/icons/tab-icons';
// import {colors} from 'config/colors';
// import {mvs} from 'config/metrices';
// import {useAppSelector} from 'hooks/use-store';
// import {Text, TouchableOpacity, View} from 'react-native';
// import ActivityScreen from 'screens/activity';
// import CustomAlertScreen from 'screens/custom-alert';
// import HomeTab from 'screens/home-tab';
// import JobsHomeScreen from 'screens/jobs-home-screen';
// import JobsScreen from 'screens/jobs-screen';
// import PortfolioScreen from 'screens/portfolio-screen';

// function MyTabBar({state, descriptors, navigation}) {
//   return (
//     <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingBottom: mvs(10)}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;
//         const isFocused = state.index === index;
//         const Icon = SVGS[`${route.name}${isFocused ? 'Active' : ''}`];

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate({name: route.name, merge: true});
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             key={index}
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               height: mvs(80),
//             }}>
//             <View
//               style={{
//                 backgroundColor: isFocused ? colors.primary : colors.transparent,
//                 borderRadius: mvs(50),
//                 height: mvs(50),
//                 width: mvs(50),
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginBottom: isFocused ? mvs(5) : mvs(-5),
//               }}>
//               <Icon height={mvs(24)} width={mvs(24)} />
//             </View>
//             <Text
//               style={{
//                 fontSize: mvs(12),
//                 color: isFocused ? colors.primary : colors.black,
//                 marginTop: isFocused ? mvs(5) : 0,
//               }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// export const TabBar = () => {
//   const Tab = createBottomTabNavigator();
//   const {user} = useAppSelector(s => s);
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{headerShown: false}}
//       tabBar={props => <MyTabBar {...props} />}>
//       <Tab.Screen name="Home" component={HomeTab} />
//       <Tab.Screen name="Alert" component={CustomAlertScreen} />
//       <Tab.Screen name="Jobs" component={JobsScreen} />
//       <Tab.Screen name="Portfolio" component={PortfolioScreen} />
//       <Tab.Screen name="Activities" component={ActivityScreen} />
//     </Tab.Navigator>
//   );
// };
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeTab from 'screens/home-tab';
import CustomAlertScreen from 'screens/custom-alert';
import JobsScreen from 'screens/jobs-screen';
import PortfolioScreen from 'screens/portfolio-screen';
import * as IMG from 'assets/images';
import React from 'react';
import Medium from 'typography/medium-text';
import ChatScreen from 'screens/chat-screen';
import OverviewScreen from 'screens/overview-screen';
import ReviewFromAdminScreen from 'screens/review-from-admin';
import DriverProfileScreen from 'screens/driver-profile';
import HelpCenterScreen from 'screens/help-center-screen';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
<View style={{backgroundColor:colors.white}}>
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

        // ✅ Different icons for focused/unfocused states
        const iconSource =
          route.name === 'Home'
            ? isFocused
              ? IMG.DeliveryFocused
              : IMG.Deliverysimple
            : route.name === 'HelpCenterScreen'
            ? isFocused
              ? IMG.SupportFilled
              : IMG.SupportSimple
            : route.name === 'OverviewScreen'
            ? isFocused
              ? IMG.overviewFocused
              : IMG.overviewsimple
            : route.name === 'DriverProfileScreen'
            ? isFocused
              ? IMG.profilefocused
              : IMG.profilesimple
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
              width: isFocused ? mvs(120) : mvs(55),
              borderRadius: mvs(30),
              paddingHorizontal: mvs(10),
            }}>
            <Image
              source={iconSource}
              style={{
                height: mvs(25),
                width: mvs(25),
                marginRight: isFocused ? mvs(8) : 0,
              }}
              resizeMode="contain"
            />
            {isFocused && (
              // <Text
              //   style={{
              //     fontSize: mvs(13),
              //     color: colors.white,
              //     fontWeight: '500',
              //   }}>
              //   {label}
              // </Text>
              <Medium label={label} style={{fontWeight:"500"}} color={colors.white} fontSize={mvs(15)}/>
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
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{tabBarLabel: 'Orders'}}
      />
      {/* <Tab.Screen
        name="OverviewScreen"
        component={OverviewScreen}
        options={{tabBarLabel: 'Overview'}}
      /> */}
      <Tab.Screen
        name="HelpCenterScreen"
        component={HelpCenterScreen}
        options={{tabBarLabel: 'Chat'}}
      />
      
      <Tab.Screen
        name="DriverProfileScreen"
        component={DriverProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
};
