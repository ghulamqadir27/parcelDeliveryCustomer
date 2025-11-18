import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import { colors } from 'config/colors';
import { Row } from 'components/atoms/row';
import { mvs } from 'config/metrices';
import Medium from 'typography/medium-text';
import * as IMG from 'assets/images';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import { PrimaryButton } from 'components/atoms/buttons';


const TrackingDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'white-content'}
      />
      <Header1x2x title={'Tracking Details'} />


      <ScrollView contentContainerStyle={styles.scrollcontentContainerStyle}>

        {/* Tracking Row */}
        <Row>
          <Row>
            <View>
              <Text style={styles.trackingNumber}>
                Tracking #: <Text style={styles.bold}>52621435344</Text>
              </Text>
            </View>
            <TouchableOpacity style={{ marginLeft: mvs(5) }}>
              <Ionicons name="copy" size={mvs(20)} color={colors.primary} />
            </TouchableOpacity>
          </Row>
          <View style={styles.badge}>
            <Medium style={styles.badgeText} label={'Canceled'} />
          </View>
        </Row>

        {/* Location Section */}
        <Medium style={styles.sectionTitle} label={'Location Details'} />


        <View>
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
        <View style={{ marginTop: mvs(10) }}>
          <Row style={styles.infoRow}>
            <Image
              source={IMG.orderLocation}
              resizeMode="contain"
              style={styles.infoIcon}
            />
            <View>
              <Bold
                label={'Your Location'}
                color={colors.primary}
                fontSize={mvs(12)}
              />
              <Medium
                label={'Batha Main Area Stree Dist '}
                color={colors.black}
                fontSize={mvs(15)}
              />
            </View>
          </Row>
        </View>

        {/* Delivery Timings */}
        <Medium style={[styles.sectionTitle, { marginTop: mvs(15) }]} label={'Delivery Timings'} />


        <View style={styles.timingsRow}>
          <View style={styles.timingBox}>
            <Medium style={{ color: colors.subteXTcOLOR }} label={'Delivery Date'} />

            <Medium
              label={'27 May'}
              color={colors.grey}
              fontSize={mvs(16)}
            />
          </View>

          <View style={styles.timingBox}>
            <Medium style={{ color: colors.subteXTcOLOR }} label={'Due Time'} />
            <Text style={styles.timingValue}>-</Text>
          </View>

          <View style={styles.timingBox}>
            <Medium style={{ color: colors.subteXTcOLOR }} label={'Duration'} />
            <Text style={styles.timingValue}>-</Text>
          </View>
        </View>

        {/* Cancellation Details */}
        <Medium style={[styles.sectionTitle]} label={'Cancellation Details:'} />
        <Regular fontSize={mvs(14)} numberOfLines={3} color={colors.subteXTcOLOR} style={{ fontWeight: '400' }} label={' Delivery was not possible due to address issue / customer unavailable / other'} />



   <View style={{marginTop: mvs(20)}}>

          <Medium style={styles.sectionTitle} label={'Order Delivery Timeline'} />


  <View>
    {[
      {title: 'Driver En Route for Pickup', status: 'completed', time: '12:00 am, 02 Jan 2022'},
      {title: 'Parcel Picked Up', status: 'completed', time: '13:00 pm, 02 Jan 2022'},
      {title: 'Delivery Cancelled', status: 'pending', time: '15:00 pm, 03 Jan 2022'},
    ].map((item, index, array) => (
      <View key={index}>
        {/* TIMELINE ROW */}
        <Row style={{alignItems: 'flex-start'}}>
          {/* LEFT SIDE ICON */}
          <View style={{alignItems: 'center', width: mvs(30)}}>
            <View
              style={{
                height: mvs(24),
                width: mvs(24),
                borderRadius: mvs(12),
                // backgroundColor:
                //   item.status === 'completed' ? '#FFF1ED' : '#F7DFD1',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
              {item.status === 'completed' ? (
                <Image
                  source={IMG.checkorder}
                  style={{height: mvs(20), width: mvs(20)}}
                  resizeMode="contain"
                />
              ) : (
                 <Image
                  source={IMG.circledcrossred}
                  style={{height: mvs(20), width: mvs(20)}}
                  resizeMode="contain"
                />
              )}
            </View>

            {/* LINE BELOW (except last item) */}
            {index < array.length - 1 && (
              <Image
                source={IMG.orderLineNew}
                style={{height: mvs(40), width: mvs(8)}}
                resizeMode='contain'
              />
            )}
          </View>

          {/* TEXT CONTENT */}
          <View style={{flex: 1, paddingLeft: mvs(10)}}>
            <Medium
              label={item.title}
              fontSize={mvs(14)}
              color={item.status === 'completed' ? colors.black : '#A1A1A1'}
              style={{fontWeight: '500'}}
            />
            <Regular
              label={item.time}
              fontSize={mvs(12)}
              color={item.status === 'completed' ? '#707070' : '#C1C1C1'}
            />
          </View>
        </Row>
      </View>
    ))}
  </View>
</View>


      

        {/* Contact Support */}
       

      </ScrollView>
      <View style={{backgroundColor: colors.white, padding: mvs(15)}}>
       {/* <TouchableOpacity style={styles.supportButton}>
          <Text style={styles.supportText}>Contact Support</Text>
        </TouchableOpacity> */}
        <PrimaryButton title='Contact Support' textStyle={{color: colors.primary}} containerStyle={styles.supportButton}/>
    </View>
    </View>
  );
};

export default TrackingDetailsScreen;


