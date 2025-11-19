

import React, {useState, useMemo, useRef, useCallback} from 'react';
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
import BottomSheet, {BottomSheetScrollView, BottomSheetBackdrop} from '@gorhom/bottom-sheet';

const HomeTab = () => {
  const [selectedTab, setSelectedTab] = useState('New Orders');
  const bottomSheetRef = useRef(null);
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [comment, setComment] = useState('');

  const snapPoints = useMemo(() => ['75%'], []);

  const openBottomSheet = useCallback(() => {
    setRating(0);
    setSelectedTags([]);
    setComment('');
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleStarPress = useCallback((starIndex) => {
    setRating(starIndex + 1);
  }, []);

  const handleTagPress = useCallback((tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  }, []);

  const handleDone = useCallback(() => {
    // Close bottom sheet when done is clicked
    closeBottomSheet();
    // Reset states if needed
    // setRating(0);
    // setSelectedTags([]);
    // setComment('');
  }, [closeBottomSheet]);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    [],
  );

  const feedbackTags = [
    'Excellent',
    'Professionalism',
    'Best Service',
    'Poor Service',
    'Average Delivery',
    'Late delivery time',
  ];

  // ✅ All orders (now include orderStatus)
  const orders = useMemo(
    () => [
      {
        number: 52621,
        timeAgo: 'Processing',
        status: 'accepted',
        // orderStatus: 'New Orders',
      },
      {
        number: 52622,
        timeAgo: 'Processing',
        status: 'dispatched',
        // orderStatus: 'Accepted',
      },
      {
        number: 52623,
        timeAgo: 'Processing',
        status: 'onMyWay',
        // orderStatus: 'Ongoing',
      },
      {
        number: 52624,
        timeAgo: 'Processing',
        status: 'delivered',
        // orderStatus: 'Completed',
      },
      {
        number: 52625,
        timeAgo: 'Processing',
        status: 'delivered',
        // orderStatus: 'Completed',
      },
      {
        number: 52626,
        timeAgo: 'Cancel',
        status: 'Cancel',
        // orderStatus: 'cancel',
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
      case 'accepted':
        return <IMG.customerStepper1 width="100%" height={mvs(60)} />;
      case 'dispatched':
        return <IMG.customerDispatched width="100%" height={mvs(60)} />;
      case 'onMyWay':
        return <IMG.customerOnMyWay width="100%" height={mvs(60)} />;
      case 'delivered':
        return <IMG.customerDelivered width="100%" height={mvs(60)} />;
      case 'Cancel':
        return <IMG.customerDecline width="100%" height={mvs(60)} />;
      default:
        return null;
    }
  };

  const renderOrderItem = ({item}) => {
//    const handlePress = () => {
//   if (item.orderStatus === 'Accepted') {
//     navigate('DeliveryParcelPickupScreen');
//   } else if (item.orderStatus === 'Ongoing') {
//     navigate('DeliveryParcelDeliveryDetailsScreen');
//   } else if (item.orderStatus === 'Failed') {
//     navigate('DeliveryParcelReturnDetailsScreen');
//   } else if (item.orderStatus === 'Completed') {
//     navigate('DeliveryParcelCompletedDetailsScreen');
//   } else {
//     navigate('DeelievryDetailsScreen');
//   }
// };

    return (
      <TouchableOpacity
        // onPress={() => navigate('DeelievryDetailsScreen')}
        onPress={()=>navigate("TrackingDetailsScreen")}
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
          {/* {item.orderStatus === 'Completed' ? (
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
          )} */}
           <View style={styles.timeTag}>
              <Medium
                label={item.timeAgo}
                color={colors.primary}
                fontSize={mvs(13)}
              />
            </View>
        </Row>

        {getStatusSVG(item.status) && (
          <View style={styles.statusContainer}>
            {getStatusSVG(item.status)}
          </View>
        )}

        {/* Pickup Info */}

        {item?.status !== 'Cancel' && (
  <>
        
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


        <Image
          source={IMG.orderline}
          resizeMode="contain"
          style={styles.separatorLine}
        />


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
        </>
        )}

 {item.status === 'delivered' && (
        <Row style={{marginVertical:mvs(10)}}>
         
          <TouchableOpacity
            onPress={openBottomSheet}
            style={{
              alignItems: 'center',
              justifyContent:"center",
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: mvs(40),
              paddingHorizontal: mvs(12),
              paddingVertical: mvs(4),
              marginRight: mvs(8),
              height: mvs(50),
              backgroundColor: colors.white,
              width:"100%"
            }}>
            <Medium
              style={{fontWeight: '500',alignItems:"center"}}
              fontSize={mvs(16)}
              color={colors.primary}
              label={'Rate Your Delivery Expense'}
            />
          </TouchableOpacity>
        </Row>
 )}
 {item.status === 'Cancel' && (
  <Row style={{marginVertical: mvs(10)}}>
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.red,
        borderRadius: mvs(40),
        paddingHorizontal: mvs(12),
        paddingVertical: mvs(4),
        height: mvs(50),
        backgroundColor: colors.white,
        width: "100%"
      }}>
      <Medium
        style={{fontWeight: '500', textAlign: "center"}}
        fontSize={mvs(16)}
        color={colors.red}
        label={'Contact Support'}
      />
    </TouchableOpacity>
  </Row>
)}

       
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* HEADER */}
        <View style={{paddingHorizontal: mvs(10)}}>
          <Row style={styles.headerRow}>
            <Row style={{justifyContent:'flex-start',alignItems:"center"}}>
               <Image
                source={IMG.customerLocation}
                style={{height: mvs(35), width: mvs(35)}}
                resizeMode="contain"
              />
            <View style={{marginLeft:mvs(10)}}>
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
            </Row>
            <TouchableOpacity
            //  style={styles.notificationBtn}
             >
              <Image
                source={IMG.customerNotification}
                style={{height: mvs(35), width: mvs(35)}}
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
                    {/* <Ionicons name="scan-outline" size={20} color="#FF6E40" /> */}
                     <TouchableOpacity
            //  style={styles.notificationBtn}
             >
              <Image
                source={IMG.customerScan}
                style={{height: mvs(50), width: mvs(50)}}
                resizeMode="contain"
              />
            </TouchableOpacity>
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

      {/* Driver Review Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          backgroundColor: colors.white,
          borderTopLeftRadius: mvs(25),
          borderTopRightRadius: mvs(25),
        }}
        // handleIndicatorStyle={{
        //   backgroundColor: colors.subteXTcOLOR,
        //   width: mvs(40),
        // }}
        >
        <BottomSheetScrollView
          contentContainerStyle={styles.bottomSheetContent}
          showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Row style={styles.bottomSheetHeader}>
            <Medium
              label="Driver Review"
              fontSize={mvs(15)}
              color={colors.black}
            />
            <TouchableOpacity onPress={closeBottomSheet}>
              <Ionicons name="close" size={mvs(24)} color={colors.subteXTcOLOR} />
            </TouchableOpacity>
          </Row>

          {/* Driver Profile */}
          <View style={styles.driverProfileContainer}>
            <Image
              source={IMG.profilepic}
              style={styles.driverProfileImage}
              resizeMode="cover"
            />
            <Medium
              label="How was your rider with Ahmed"
              fontSize={mvs(14)}
              color={colors.subteXTcOLOR}
              style={styles.driverQuestion}
            />
          </View>

          {/* Star Rating */}
          <View style={styles.starRatingContainer}>
            {[0, 1, 2, 3, 4].map((index) => {
              const isFilled = index < rating;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleStarPress(index)}
                  style={styles.starButton}>
                  <Image
                    source={isFilled ? IMG.customerfilledStar : IMG.customerunfilledStar}
                    style={styles.starImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Feedback Tags */}
          <View style={styles.tagsContainer}>
            {feedbackTags.map((tag, index) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleTagPress(tag)}
                  style={[
                    styles.feedbackTag,
                    isSelected && styles.feedbackTagSelected,
                  ]}>
                  <Medium
                    label={tag}
                    fontSize={mvs(13)}
                    color={isSelected ? colors.white : colors.primary}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Comment Input */}
          <View style={styles.commentContainer}>
            <TextInput
              placeholder="Write something"
              placeholderTextColor={colors.subteXTcOLOR}
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
              style={styles.commentInput}
            />
          </View>

          {/* Done Button */}
          <TouchableOpacity
            onPress={handleDone}
            style={styles.doneButton}>
            <Medium
              label="Done"
              fontSize={mvs(16)}
              color={colors.white}
            />
          </TouchableOpacity>
        </BottomSheetScrollView>
      </BottomSheet>
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
    height: 52,
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
  // Bottom Sheet Styles
  bottomSheetContent: {
    paddingHorizontal: mvs(20),
    paddingTop: mvs(10),
    paddingBottom: mvs(30),
  },
  bottomSheetHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: mvs(20),
  },
  driverProfileContainer: {
    alignItems: 'center',
    marginBottom: mvs(20),
  },
  driverProfileImage: {
    width: mvs(80),
    height: mvs(80),
    borderRadius: mvs(40),
    marginBottom: mvs(10),
  },
  driverQuestion: {
    textAlign: 'center',
    marginTop: mvs(5),
  },
  starRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: mvs(20),
    gap: mvs(8),
  },
  starButton: {
    padding: mvs(4),
  },
  starImage: {
    width: mvs(32),
    height: mvs(32),
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: mvs(20),
    gap: mvs(8),
  },
  feedbackTag: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: mvs(20),
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(8),
    backgroundColor: colors.white,
  },
  feedbackTagSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  commentContainer: {
    marginBottom: mvs(20),
  },
  commentInput: {
    borderWidth: 1,
    borderColor:"#DDDDDD",
    borderRadius: mvs(12),
    paddingHorizontal: mvs(15),
    paddingVertical: mvs(12),
    minHeight: mvs(100),
    textAlignVertical: 'top',
    fontSize: mvs(14),
    color: colors.black,
    backgroundColor:"#F9FAFB",
  },
  doneButton: {
    backgroundColor: colors.primary,
    borderRadius: mvs(40),
    paddingVertical: mvs(15),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: mvs(20),
  },
});
