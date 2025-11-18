// import React, {useState} from 'react';
// import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
// import {mvs} from 'config/metrices';
// import {colors} from 'config/colors';
// import * as IMG from 'assets/images';
// import {Row} from 'components/atoms/row';
// import Bold from 'typography/bold-text';
// import Medium from 'typography/medium-text';

// import Regular from 'typography/regular-text';
// import { navigate } from 'navigation/navigation-ref';

// const HomeTab = () => {
//   const [selectedTab, setSelectedTab] = useState(0);

//   const tabs = [
//     {label: 'New Orders', count: 3},
//     {label: 'Accepted', count: 1},
//     {label: 'Ongoing', count: 1},
//     {label: 'Completed', count: 2},
//     {label: 'Failed', count: 0},
//   ];

//   const orders = [
//     {number: 52621, timeAgo: '5 min ago', status: 'making'},
//     {number: 52622, timeAgo: '10 min ago', status: 'packing'},
//     {number: 52623, timeAgo: '15 min ago', status: 'ready'},
//   ];

//   const getStatusSVG = status => {
//   switch (status) {
//     case 'making':
//       return <IMG.MakingSVG width="100%" height={mvs(60)} />;
//     case 'packing':
//       return <IMG.PackingSVG width="100%" height={mvs(60)} />;
//     case 'ready':
//       return <IMG.ReadySVG width="100%" height={mvs(60)} />;
//     default:
//       return null;
//   }
// };

//   return (
//     <View style={{flex: 1, backgroundColor: colors.primary}}>
//       <ScrollView contentContainerStyle={{flexGrow:1}}>
//       {/* HEADER */}
//       <View style={{paddingHorizontal: mvs(20)}}>
//         <Row style={{justifyContent: 'space-between', marginTop: mvs(15), alignItems: 'center'}}>
//           <View>
//             <Bold label={'Hi, David James'} fontSize={mvs(16)} color={colors.white} />
//             <Medium label={'Have a good day!'} fontSize={mvs(12)} color={colors.white} />
//           </View>

//           <TouchableOpacity
//             style={{
//               height: mvs(35),
//               width: mvs(35),
//               borderRadius: mvs(20),
//               backgroundColor: colors.white,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <Image source={IMG.NotificationHome} style={{height: mvs(21), width: mvs(21)}} resizeMode="contain" />
//           </TouchableOpacity>
//         </Row>

//         {/* LOCATION CARD */}
//         <View
//           style={{
//             backgroundColor: colors.white,
//             borderRadius: mvs(15),
//             marginTop: mvs(20),
//             padding: mvs(15),
//           }}>
//           <Row style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
//             <Image
//               source={IMG.locationHome}
//               resizeMode="contain"
//               style={{height: mvs(30), width: mvs(30), marginRight: mvs(10)}}
//             />
//             <View style={{flex: 1}}>
//               <Medium
//                 label="Street: Manfouha Dist Batha Main"
//                 numberOfLines={2}
//                 fontSize={mvs(15)}
//                 color={colors.black}
//               />

//               <Row style={{justifyContent: 'space-between', alignItems: 'center', marginTop: mvs(10)}}>
//                 <View>
//                   <Regular style={{fontWeight:'400'}} label="Due In" color={colors.subteXTcOLOR} fontSize={mvs(14)} />
//                   <Medium style={{fontWeight:"500"}} color={colors.black} label="1h 15 min" fontSize={mvs(15)} />
//                 </View>

//                 <View>
//                   <Regular label="Distance" color={colors.subteXTcOLOR} fontSize={mvs(14)} />
//                   <Medium color={colors.black} label="5.0 km" fontSize={mvs(15)} />
//                 </View>

//                 <TouchableOpacity
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     borderWidth: 1,
//                     borderColor: colors.primary,
//                     borderRadius: mvs(12),
//                     paddingHorizontal: mvs(12),
//                     paddingVertical: mvs(8),
//                   }}>
//                   <Bold label="Active" fontSize={mvs(13)} color={colors.primary} />
//                   <Image source={IMG.activeArrow} resizeMode="contain" style={{width: mvs(18), height: mvs(18), marginLeft: mvs(5)}} />
//                 </TouchableOpacity>
//               </Row>
//             </View>
//           </Row>
//         </View>
//       </View>

//       {/* WHITE SECTION */}
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: colors.white,
//           marginTop: mvs(15),
//           borderTopLeftRadius: mvs(25),
//           borderTopRightRadius: mvs(25),
//           paddingHorizontal: mvs(15),
//         }}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{flexGrow: 1, paddingBottom: mvs(100)}}>
//           <Bold fontSize={mvs(15)} color={colors.black} label={'All Orders'} style={{marginVertical: mvs(10)}} />

//           {/* Tabs */}
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={{paddingHorizontal: mvs(2), marginBottom: mvs(10)}}>
//             {tabs.map((tab, i) => {
//               const isSelected = selectedTab === i;
//               return (
//                 <TouchableOpacity
//                   key={i}
//                   onPress={() => setSelectedTab(i)}
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     backgroundColor: isSelected ? colors.primary : colors.white,
//                     borderWidth: 1,
//                     borderColor: colors.primary,
//                     borderRadius: mvs(20),
//                     paddingHorizontal: mvs(12),
//                     paddingVertical: mvs(4),
//                     marginRight: mvs(8),
//                     height: mvs(40),
//                   }}>
//                   <Medium
//                     color={isSelected ? colors.white : colors.primary}
//                     fontSize={mvs(14)}
//                     label={tab.label}
//                   />
//                   <View
//                     style={{
//                       marginLeft: mvs(6),
//                       backgroundColor: isSelected ? colors.white : colors.primary,
//                       borderRadius: mvs(50),
//                       paddingHorizontal: mvs(8),
//                       paddingVertical: mvs(2),
//                     }}>
//                     <Medium
//                       color={isSelected ? colors.primary : colors.white}
//                       fontSize={mvs(13)}
//                       label={tab.count.toString()}
//                     />
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>

//           {/* Orders List */}
//           {orders.map((order, i) => (
//             <TouchableOpacity
//             onPress={()=> navigate('DeelievryDetailsScreen')}
//               key={i}
//               style={{
//                 borderWidth: 1,
//                 borderColor: colors.primary,
//                 borderRadius: mvs(15),
//                 padding: mvs(12),
//                 marginTop: mvs(15),
//               }}>
//               {/* Order Header */}
//               <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
//                 <Row>
//                   <Regular label="Order#:" color={colors.subteXTcOLOR} fontSize={mvs(14)} />
//                   <Medium label={` ${order.number}`} color={colors.black} fontSize={mvs(15)} />
//                 </Row>
//                 <View
//                   style={{
//                     paddingHorizontal: mvs(10),
//                     paddingVertical: mvs(4),
//                     backgroundColor: '#FFF1ED',
//                     borderRadius: mvs(10),
//                   }}>
//                   <Medium label={order.timeAgo} color={colors.primary} fontSize={mvs(13)} />
//                 </View>
//               </Row>

//               {/* Status Image */}
//               {/* {getStatusImage(order.status) && (
//                 <View style={{alignItems: 'center', marginTop: mvs(10)}}>
//                   <Image
//                     source={getStatusImage(order.status)}
//                     resizeMode="contain"
//                     style={{width: '100%', height: mvs(60)}}
//                   />
//                 </View>
//               )} */}
//               {getStatusSVG(order.status) && (
//   <View style={{alignItems: 'center', marginTop: mvs(10)}}>
//     {getStatusSVG(order.status)}
//   </View>
// )}

//               {/* Pickup Info */}
//               <View style={{marginTop: mvs(10)}}>
//                 <Row
//                   style={{
//                     paddingHorizontal: mvs(6),
//                     paddingVertical: mvs(5),
//                     alignItems: 'center',
//                     backgroundColor: '#F8F8F8',
//                     borderRadius: mvs(8),
//                     justifyContent: 'flex-start',
//                   }}>
//                   <Image
//                     source={IMG.pickupicon}
//                     resizeMode="contain"
//                     style={{height: mvs(30), width: mvs(30), marginRight: mvs(8)}}
//                   />
//                   <View>
//                     <Bold label={'Pick Up'} color={colors.primary} fontSize={mvs(12)} />
//                     <Medium label={'Warehouse: Shop #1'} color={colors.black} fontSize={mvs(15)} />
//                   </View>
//                 </Row>
//               </View>

//               {/* Separator Line */}
//               <View>
//                 <Image
//                   source={IMG.orderline}
//                   resizeMode="contain"
//                   style={{width: mvs(20), height: mvs(24)}}
//                 />
//               </View>

//               {/* Delivery Info */}
//               <View style={{marginTop: mvs(10)}}>
//                 <Row
//                   style={{
//                     paddingHorizontal: mvs(6),
//                     paddingVertical: mvs(5),
//                     alignItems: 'center',
//                     backgroundColor: '#F8F8F8',
//                     borderRadius: mvs(8),
//                     justifyContent: 'flex-start',
//                   }}>
//                   <Image
//                     source={IMG.orderLocation}
//                     resizeMode="contain"
//                     style={{height: mvs(30), width: mvs(30), marginRight: mvs(8)}}
//                   />
//                   <View>
//                     <Bold label={'Drop Off'} color={colors.primary} fontSize={mvs(12)} />
//                     <Medium label={'Customer: Ahmed'} color={colors.black} fontSize={mvs(15)} />
//                   </View>
//                 </Row>
//               </View>

//               {/* Bottom Info */}
//               <Row style={{justifyContent: 'space-between', marginTop: mvs(10)}}>
//                 <View>
//                   <Regular style={{fontWeight:'400'}} label="Due In" color={colors.subteXTcOLOR} fontSize={mvs(14)} />
//                   <Medium color={colors.black} style={{fontWeight:"500"}}  label="1h 15 min" fontSize={mvs(15)} />
//                 </View>
//                 <View>
//                   <Regular style={{fontWeight:'400'}} label="Distance" color={colors.subteXTcOLOR} fontSize={mvs(14)}/>
//                   <Medium color={colors.black} style={{fontWeight:"500"}} label="5.0 km" fontSize={mvs(15)} />
//                 </View>
//                 <View>
//                   <Regular  style={{fontWeight:'400'}}label="Duration" color={colors.subteXTcOLOR} fontSize={mvs(14)} />
//                   <Medium color={colors.black} style={{fontWeight:"500"}} label="50 min" fontSize={mvs(15)} />
//                 </View>
//               </Row>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>
//       </View>

//       </ScrollView>
//     </View>
//   );
// };

// export default HomeTab;

import React, {useState, useMemo} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import * as IMG from 'assets/images';
import {Row} from 'components/atoms/row';
import Bold from 'typography/bold-text';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {navigate} from 'navigation/navigation-ref';

const HomeTab = () => {
  const [selectedTab, setSelectedTab] = useState('New Orders');

  // ✅ All orders (now include orderStatus)
  const orders = useMemo(
    () => [
      {
        number: 52621,
        timeAgo: '5 min ago',
        status: 'making',
        orderStatus: 'New Orders',
      },
      {
        number: 52622,
        timeAgo: '10 min ago',
        status: 'packing',
        orderStatus: 'Accepted',
      },
      {
        number: 52623,
        timeAgo: '15 min ago',
        status: 'ready',
        orderStatus: 'Ongoing',
      },
      {
        number: 52624,
        timeAgo: '20 min ago',
        status: 'ready',
        orderStatus: 'Completed',
      },
      {
        number: 52625,
        timeAgo: '25 min ago',
        status: 'packing',
        orderStatus: 'Completed',
      },
      {
        number: 52626,
        timeAgo: '30 min ago',
        status: 'making',
        orderStatus: 'Failed',
      },
    ],
    [],
  );

  // ✅ Define tabs dynamically based on orderStatus
  // const tabs = useMemo(() => {
  //   const statuses = [
  //     'New Orders',
  //     'Accepted',
  //     'Ongoing',
  //     'Completed',
  //     'Failed',
  //   ];
  //   return statuses.map(label => ({
  //     label,
  //     count: orders.filter(o => o.orderStatus === label).length,
  //   }));
  // }, [orders]);

  // ✅ Filter orders based on selected tab
  // const filteredOrders = useMemo(
  //   () => orders.filter(o => o.orderStatus === selectedTab),
  //   [orders, selectedTab],
  // );

  const getStatusSVG = status => {
    switch (status) {
      case 'making':
        return <IMG.MakingSVG width="100%" height={mvs(60)} />;
      case 'packing':
        return <IMG.PackingSVG width="100%" height={mvs(60)} />;
      case 'ready':
        return <IMG.ReadySVG width="100%" height={mvs(60)} />;
      default:
        return null;
    }
  };

  const renderOrderItem = ({item}) => {
   const handlePress = () => {
  if (item.orderStatus === 'Accepted') {
    navigate('DeliveryParcelPickupScreen');
  } else if (item.orderStatus === 'Ongoing') {
    navigate('DeliveryParcelDeliveryDetailsScreen');
  } else if (item.orderStatus === 'Failed') {
    navigate('DeliveryParcelReturnDetailsScreen');
  } else if (item.orderStatus === 'Completed') {
    navigate('DeliveryParcelCompletedDetailsScreen');
  } else {
    navigate('DeelievryDetailsScreen');
  }
};

    return (
      <TouchableOpacity
        // onPress={() => navigate('DeelievryDetailsScreen')}
        onPress={handlePress}
        style={styles.orderCard}>
        <Row style={styles.orderHeader}>
          <Row>
            <Regular
              label="Order#:"
              color={colors.subteXTcOLOR}
              fontSize={mvs(14)}
            />
            <Medium
              label={` ${item.number}`}
              color={colors.black}
              fontSize={mvs(15)}
            />
          </Row>
          {/* <View style={styles.timeTag}>
          <Medium label={item.timeAgo} color={colors.primary} fontSize={mvs(13)} />
        </View> */}
          {/* Time Tag or Rating */}
          {item.orderStatus === 'Completed' ? (
            // ⭐ Rating stars shown for Completed orders
            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map((star, i) =>
                i < 4 ? (
                  <IMG.starFilled key={i} width={mvs(16)} height={mvs(16)} />
                ) : (
                  <IMG.StarEmpty key={i} width={mvs(16)} height={mvs(16)} />
                ),
              )}
            </View>
          ) : (
            // 🕒 Normal time tag for all others
            <View style={styles.timeTag}>
              <Medium
                label={item.timeAgo}
                color={colors.primary}
                fontSize={mvs(13)}
              />
            </View>
          )}
        </Row>

        {getStatusSVG(item.status) && (
          <View style={styles.statusContainer}>
            {getStatusSVG(item.status)}
          </View>
        )}

        {/* Pickup Info */}
        <View style={{marginTop: mvs(10)}}>
          <Row style={styles.infoRow}>
            <Image
              source={IMG.pickupicon}
              resizeMode="contain"
              style={styles.infoIcon}
            />
            <View>
              <Bold
                label={'Pick Up'}
                color={colors.primary}
                fontSize={mvs(12)}
              />
              <Medium
                label={'Warehouse: Shop #1'}
                color={colors.black}
                fontSize={mvs(15)}
              />
            </View>
          </Row>
        </View>

        {/* Separator Line */}
        <Image
          source={IMG.orderline}
          resizeMode="contain"
          style={styles.separatorLine}
        />

        {/* Delivery Info */}
        <View style={{marginTop: mvs(10)}}>
          <Row style={styles.infoRow}>
            <Image
              source={IMG.orderLocation}
              resizeMode="contain"
              style={styles.infoIcon}
            />
            <View>
              <Bold
                label={'Drop Off'}
                color={colors.primary}
                fontSize={mvs(12)}
              />
              <Medium
                label={'Customer: Ahmed'}
                color={colors.black}
                fontSize={mvs(15)}
              />
            </View>
          </Row>
        </View>

 {item.orderStatus === 'Ongoing' && (
        <Row style={{marginVertical:mvs(10)}}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent:"center",
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: mvs(20),
              paddingHorizontal: mvs(12),
              paddingVertical: mvs(4),
              marginRight: mvs(8),
              height: mvs(40),
              backgroundColor: colors.primary,
              width:"45%"
            }}>
            <Medium
              style={{fontWeight: '500',alignItems:"center"}}
              fontSize={mvs(12)}
              color={colors.white}
              label={'Navigate'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent:"center",
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: mvs(20),
              paddingHorizontal: mvs(12),
              paddingVertical: mvs(4),
              marginRight: mvs(8),
              height: mvs(40),
              backgroundColor: colors.white,
              width:"45%"
            }}>
            <Medium
              style={{fontWeight: '500',alignItems:"center"}}
              fontSize={mvs(12)}
              color={colors.primary}
              label={'Delivered'}
            />
          </TouchableOpacity>
        </Row>
 )}

        {/* Bottom Info */}
        {/* {item.orderStatus === 'New Orders' && (
          <Row style={styles.bottomRow}>
            <View>
              <Regular
                label="Due In"
                color={colors.subteXTcOLOR}
                fontSize={mvs(14)}
              />
              <Medium
                color={colors.black}
                label="1h 15 min"
                fontSize={mvs(15)}
              />
            </View>
            <View>
              <Regular
                label="Distance"
                color={colors.subteXTcOLOR}
                fontSize={mvs(14)}
              />
              <Medium color={colors.black} label="5.0 km" fontSize={mvs(15)} />
            </View>
            <View>
              <Regular
                label="Duration"
                color={colors.subteXTcOLOR}
                fontSize={mvs(14)}
              />
              <Medium color={colors.black} label="50 min" fontSize={mvs(15)} />
            </View>
          </Row>
        )} */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* HEADER */}
        <View style={{paddingHorizontal: mvs(20)}}>
          <Row style={styles.headerRow}>
            <View>
              <Bold
                label={'Hi, David James'}
                fontSize={mvs(16)}
                color={colors.white}
              />
              <Medium
                label={'Have a good day!'}
                fontSize={mvs(12)}
                color={colors.white}
              />
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Image
                source={IMG.NotificationHome}
                style={{height: mvs(21), width: mvs(21)}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Row>

          {/* LOCATION CARD */}
           <View style={styles.searchRow}>
                  <View style={styles.searchBox}>
                    <Ionicons name="search" size={18} color="#bbb" style={{ marginLeft: 10 }} />
                    <TextInput
                      placeholder="Tracking Number"
                      placeholderTextColor="#bbb"
                      style={styles.input}
                    />
                  </View>
          
                  <View style={styles.scanButton}>
                    <Ionicons name="scan-outline" size={20} color="#FF6E40" />
                  </View>
                </View>
        </View>

        {/* WHITE SECTION */}
        <View style={styles.whiteSection}>
          <Bold
            fontSize={mvs(15)}
            color={colors.black}
            label={'Current Shipping'}
            style={{marginVertical: mvs(10)}}
          />

          {/* Tabs */}
          {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.tabContainer}>
            {tabs.map(tab => {
              const isSelected = selectedTab === tab.label;
              return (
                <TouchableOpacity
                  key={tab.label}
                  onPress={() => setSelectedTab(tab.label)}
                  style={[
                    styles.tab,
                    {
                      backgroundColor: isSelected
                        ? colors.primary
                        : colors.white,
                    },
                  ]}>
                  <Medium
                    color={isSelected ? colors.white : colors.primary}
                    fontSize={mvs(14)}
                    label={tab.label}
                  />
                  <View
                    style={[
                      styles.tabCount,
                      {
                        backgroundColor: isSelected
                          ? colors.white
                          : colors.primary,
                      },
                    ]}>
                    <Medium
                      color={isSelected ? colors.primary : colors.white}
                      fontSize={mvs(13)}
                      label={tab.count.toString()}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView> */}

          {/* Orders List */}
          <FlatList
            data={orders}
            renderItem={renderOrderItem}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: mvs(100)}}
            ListEmptyComponent={
              <View style={{alignItems: 'center', marginTop: mvs(50)}}>
                <Medium
                  label="No Orders Found"
                  color={colors.subteXTcOLOR}
                  fontSize={mvs(15)}
                />
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  headerRow: {
    justifyContent: 'space-between',
    marginTop: mvs(15),
    alignItems: 'center',
  },
  notificationBtn: {
    height: mvs(35),
    width: mvs(35),
    borderRadius: mvs(20),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationCard: {
    backgroundColor: colors.white,
    borderRadius: mvs(15),
    marginTop: mvs(20),
    padding: mvs(15),
  },
  locationIcon: {height: mvs(30), width: mvs(30), marginRight: mvs(10)},
  locationBottomRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: mvs(10),
  },
  activeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: mvs(12),
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(8),
  },
  activeArrow: {width: mvs(18), height: mvs(18), marginLeft: mvs(5)},
  whiteSection: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: mvs(15),
    borderTopLeftRadius: mvs(25),
    borderTopRightRadius: mvs(25),
    paddingHorizontal: mvs(15),
  },
  tabContainer: {paddingHorizontal: mvs(2), marginBottom: mvs(10)},
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: mvs(20),
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(4),
    marginRight: mvs(8),
    height: mvs(40),
  },
  tabCount: {
    marginLeft: mvs(6),
    borderRadius: mvs(50),
    paddingHorizontal: mvs(8),
    paddingVertical: mvs(2),
  },
  orderCard: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: mvs(15),
    padding: mvs(12),
    marginTop: mvs(15),
  },
  orderHeader: {justifyContent: 'space-between', alignItems: 'center'},
  timeTag: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(4),
    backgroundColor: '#FFF1ED',
    borderRadius: mvs(10),
  },
  statusContainer: {alignItems: 'center', marginTop: mvs(10)},
  infoRow: {
    paddingHorizontal: mvs(6),
    paddingVertical: mvs(5),
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: mvs(8),
    justifyContent: 'flex-start',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: mvs(4),
  },
    searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },

  searchBox: {
    flex: 1,
    backgroundColor: '#fff',
    height: 48,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    marginLeft: 6,
    color: '#333',
    fontSize: 14,
  },

  scanButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  starIcon: {
    width: mvs(16),
    height: mvs(16),
    marginLeft: mvs(2),
  },

  infoIcon: {height: mvs(30), width: mvs(30), marginRight: mvs(8)},
  separatorLine: {width: mvs(20), height: mvs(24)},
  bottomRow: {justifyContent: 'space-between', marginTop: mvs(10)},
});
