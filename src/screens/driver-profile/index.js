import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Modal,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import * as IMG from 'assets/images';
import Header1x2xOverview from 'components/atoms/headers/header-1x-2x-overview';
import { Row } from 'components/atoms/row';
import BottomSheet from '@gorhom/bottom-sheet';
import { navigate } from 'navigation/navigation-ref';

const DriverProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [documentsVerified, setDocumentsVerified] = useState(false);
const [idCardVerified, setIdCardVerified] = useState(false);



  const openImagePicker = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.8,
      });
      setProfileImage({uri: image.path});
    } catch (err) {
      console.log('Picker cancelled', err);
    }
  };

  return (
    <View style={styles.container}>
      {/* --- Fixed Header --- */}
      <View style={styles.headerSection}>
        <Header1x2xOverview back={false} title={'Your Profile'} />
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.profileImageContainer}>
              <Image
                resizeMode="contain"
                source={profileImage ? profileImage : IMG.Avatar}
                style={styles.profileImage}
              />
            </View>
            {/* <TouchableOpacity
              onPress={openImagePicker}
              style={styles.editButton}>
              <Image
                source={IMG.editicon}
                resizeMode="contain"
                style={{width: mvs(25), height: mvs(25)}}
              />
            </TouchableOpacity> */}
            <View style={{marginLeft: mvs(20)}}>
              <Bold
                label="Ahmad Mossani"
                color={colors.blackgrey}
                fontSize={mvs(15)}
              />
              <View style={{marginTop: mvs(5)}}>
                <Regular
                  label="(+1) 567 564 6752"
                  color={colors.subteXTcOLOR}
                  fontSize={mvs(12)}
                />
              </View>
            </View>
          </View>


        </View>
      </View>

      {/* --- Scrollable Curved White Section --- */}
      <View style={styles.bottomContainer}>
        <ScrollView
          // style={styles.bottomSection}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: mvs(100)}}>
          {/* --- My Profile --- */}
          <Medium label="My Profile" fontSize={mvs(16)} color={'#111827'} />
          <View style={styles.section}>
            <TouchableOpacity
            onPress={()=>navigate("DriverUpdateRegistrationPart1Screen")}
              style={{
                ...styles.optionRow,
                // borderBottomWidth: 1,
                borderBottomColor: '#EBECEF',
              }}>
                <Row style={{alignItems:"center",justifyContent:"flex-start",width:"95%"}}>
              {/* <Image resizeMode='contain' source={IMG.driverprofile} style={styles.optionIcon} />
               */}

                <IMG.profileSvg width={mvs(20)} height={mvs(20)} style={{marginRight:mvs(10)}} />
              <Medium
                fontSize={mvs(14)}
                label="Personal Details"
                color={colors.subteXTcOLOR}
              />
              </Row>
                <View>
              <Image
                source={IMG.rightArrow}
                resizeMode="contain"
                style={{width: mvs(16), height: mvs(16)}}
              />
            </View>
            </TouchableOpacity>
           
          </View>
         
    
          <Medium label="Security" fontSize={mvs(16)} color={'#111827'} style={{marginTop:mvs(10)}}/>
          <View style={styles.section}>
            <TouchableOpacity
            onPress={() => navigate('ResetPassword')}
              style={{
                ...styles.optionRow,
                // borderBottomWidth: 1,
                // borderBottomColor: '#EBECEF',
              }}>
                <Row style={{alignItems:"center",justifyContent:"flex-start",width:"95%"}}>
              {/* <Image resizeMode='contain' source={IMG.prfoileNotify} style={styles.optionIcon} /> */}
              <IMG.lockoutline width={mvs(20)} height={mvs(20)} style={{marginRight:mvs(10)}} />
              <Medium
                fontSize={mvs(14)}
                label="Change Password"
                color={colors.subteXTcOLOR}
              />
              </Row>
                <View>
              <Image
                source={IMG.rightArrow}
                resizeMode="contain"
                style={{width: mvs(16), height: mvs(16)}}
              />
            </View>
            </TouchableOpacity>
           
         
           
          </View>
         

          
           <View style={{...styles.section,backgroundColor:"#FDECF1",borderWidth:1,borderColor:'#F9B5C6',marginTop:mvs(20)}}>
            <TouchableOpacity
            onPress={() => setShowLogoutModal(true)}
              style={{
                ...styles.optionRow,
                // borderBottomWidth: 1,
                // borderBottomColor: '#EBECEF',
              }}>
                <Row style={{alignItems:"center",justifyContent:"flex-start",width:"95%"}}>
              {/* <Image resizeMode='contain' source={IMG.signout} style={styles.optionIcon} /> */}
              <IMG.Logoutoutline width={mvs(20)} height={mvs(20)} style={{marginRight:mvs(10)}} />
              <Medium
                fontSize={mvs(14)}
                label="Sign out"
                color={'#EF4770'}
              />
              </Row>
                <View>
              <Image
                source={IMG.rightArrow}
                resizeMode="contain"
                style={{width: mvs(16), height: mvs(16), tintColor:"#EF4770",}}
              />
            </View>
            </TouchableOpacity>
           
           
         
           
          </View>
          

       
        </ScrollView>
      </View>
      {/* Logout Confirmation Modal */}
{showLogoutModal && (
  <Modal
    transparent
    animationType="slide"
    visible={showLogoutModal}
    onRequestClose={() => setShowLogoutModal(false)}>
    <View style={styles.modalOverlay}>
       <View style={styles.bottomSheetContainer}>
                 <View style={styles.sheetBox}>
                   {/* <Medium style={styles.sheetTitle}>
                     Are you sure you want to decline this delivery?
                   </Medium> */}
                   <Row style={{paddingVertical:mvs(10),borderBottomWidth:1,borderBottomColor:'#ECECEC'}}>
                     <View style={{
                       width:"90%",
                     }}>
                     <Medium
                     numberOfLines={3}
                       color={colors.black}
                       fontSize={mvs(16)}
                       label={'Are you sure you want to Sign Out?'}
                     />
                     </View>
                     <TouchableOpacity onPress={() => setShowLogoutModal(false)}>
                     <Image
                       source={IMG.closeoutline}
                       resizeMode="contain"
                       style={{height: mvs(25), width: mvs(25)}}
                     />
                     </TouchableOpacity>
                   </Row>
                   <Row style={{justifyContent: 'space-around', marginTop: mvs(15)}}>
                     <TouchableOpacity
                     
                       style={styles.noBtn}
                       onPress={() => {
                         setShowLogoutModal(false);
                       }}
                       //  onPress={() => setShowConfirm(false)}
                     >
                       {/* <Medium style={styles.noText}>Yes</Medium>
                        */}
                        <Medium label='Yes' color={colors.primary} fontSize={mvs(16)}/>
                     </TouchableOpacity>
                     <TouchableOpacity
                       style={styles.yesBtn}
                       onPress={() => setShowLogoutModal(false)}>
                         <Medium label='No' color={colors.white} fontSize={mvs(16)}/>
                       {/* <Text style={styles.yesText}>No</Text> */}
                     </TouchableOpacity>
                   </Row>
                 </View>
               </View>
    </View>
  </Modal>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},

  headerArea: {
    backgroundColor: colors.primary,
    paddingBottom: mvs(40), // increased height
    paddingTop: mvs(16),
    paddingHorizontal: mvs(14),
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: mvs(30),
    borderTopRightRadius: mvs(30),
    marginTop: -mvs(25), // adjusted so no overlap
    paddingHorizontal: mvs(16),
    paddingTop: mvs(18),
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  profileCard: {
    backgroundColor: colors.white,
    borderRadius: mvs(14),
    height: mvs(85),
    padding: mvs(14),
    marginHorizontal: mvs(16),
    // marginTop: mvs(10),
    marginBottom: mvs(40),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    justifyContent: 'center',
  },
  profileRow: {flexDirection: 'row', alignItems: 'center'},
  profileImageContainer: {
    width: mvs(60),
    height: mvs(60),
    borderRadius: mvs(30),
    overflow: 'hidden',
  },
  profileImage: {width: '100%', height: '100%'},
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: mvs(-220),
    // width: mvs(22),
    // height: mvs(22),
    // borderRadius: mvs(11),
    // backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  requireCard: {
    backgroundColor: colors.profilebackground,
    borderRadius: mvs(10),
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(14),
    marginTop: mvs(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    borderRadius: mvs(12),
    marginLeft: mvs(35),
    borderWidth: 1,
    borderColor: '#F9B5C6',
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(2),
    backgroundColor: '#FDEDF1',
  },
  statusText: {color: '#F15C5C', fontSize: mvs(12)},

  section: {
    backgroundColor: '#F3F4F6',
    borderRadius: mvs(14),
    padding: mvs(8),
    marginTop: mvs(10),
    shadowColor: '#000',
    shadowOpacity: 0.05,
    borderWidth:1,
    borderColor:"#F3F4F6",
    elevation: 2,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(10),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#E6E6E6',
  },
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.4)',
  justifyContent: 'flex-end',
},
modalContainer: {
  backgroundColor: '#fff',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: mvs(20),
  alignItems: 'center',
},
modalTitle: {
  fontSize: mvs(16),
  color: '#111827',

},
modalButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
},
yesButton: {
  flex: 1,
  borderWidth: 1,
  borderColor: colors.primary,
  borderRadius: 30,
  paddingVertical: mvs(10),
  alignItems: 'center',
  marginRight: 10,
},
noButton: {
  flex: 1,
  backgroundColor: colors.primary,
  borderRadius: 30,
  paddingVertical: mvs(10),
  alignItems: 'center',
  marginLeft: 10,
},
yesText: {
  color: colors.primary,
  fontSize: mvs(14),
  fontWeight: '600',
},
noText: {
  color: '#fff',
  fontSize: mvs(14),
  fontWeight: '600',
},

  optionIcon: {
    width: mvs(20),
    height: mvs(20),
    marginRight: mvs(10),
  },
   bottomSheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    height: '100%',
  },
  sheetBox: {
    backgroundColor: colors.white,
    borderTopLeftRadius: mvs(20),
    borderTopRightRadius: mvs(20),
    padding: mvs(20),
  },
  sheetTitle: {
    fontSize: mvs(15),
    color: colors.black,
    textAlign: 'center',
    marginBottom: mvs(10),
  },
  yesBtn: {
    backgroundColor: colors.primary,
    borderRadius: mvs(30),
    width: '45%',
    alignItems: 'center',
    paddingVertical: mvs(14),
  },
  yesText: {color: colors.white, fontSize: mvs(15)},
  noBtn: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: mvs(30),
    width: '45%',
    alignItems: 'center',
    paddingVertical: mvs(14),
  },
  noText: {color: colors.primary, fontSize: mvs(15)},

  // Reason Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  verifiedCard: {

  // alignItems: 'center',
  // justifyContent: 'center',
},
verifiedBox: {
  // backgroundColor: colors.profilebackground,
  borderRadius: mvs(14),
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: mvs(10),

},

});

export default DriverProfileScreen;
