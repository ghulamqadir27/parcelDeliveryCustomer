import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
  StatusBar,
  Dimensions,
} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';

const GetStartedScreen = props => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get('window'),
  );
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const dimensionChangeHandler = Dimensions.addEventListener(
      'change',
      ({window}) => {
        setScreenDimensions(window);
        setIsLandscape(window.width > window.height);
      },
    );

    // Cleanup
    return () => {
      dimensionChangeHandler?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContainer,
          isLandscape && styles.landscapeScrollContainer
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[
          styles.topSection,
          isLandscape && styles.landscapeTopSection
        ]}>
          <Image 
            source={IMG.getStartedLogo} 
            style={[
              styles.imglogo,
              isLandscape && styles.landscapeImgLogo
            ]} 
          />
          <View style={[
            styles.titleview,
            isLandscape && styles.landscapeTitleView
          ]}>
            <Bold
              label={'Get Started as a Driver'}
              color={colors.white}
              fontSize={isLandscape ? mvs(22) : mvs(26)}
              style={{
                fontWeight: '700',
                letterSpacing: 0.2,
                lineHeight: isLandscape ? mvs(28) : mvs(32),
                textAlign: 'center'
              }}
            />
          </View>
        </View>

        <View style={[
          styles.middleSection,
          isLandscape && styles.landscapeMiddleSection
        ]}>
          <Image 
            source={IMG.getstartedimage} 
            style={[
              styles.imgStyle,
              isLandscape && styles.landscapeImgStyle
            ]} 
          />
        </View>

        <View style={[
          styles.buttonView,
          isLandscape && styles.landscapeButtonView
        ]}>
          <PrimaryButton
            containerStyle={styles.button}
            onPress={() => navigate('Login')}
            title={'Sign In'}
            textStyle={styles.buttonText}
          />
          <PrimaryButton
            containerStyle={styles.button2}
            onPress={() => navigate('SignUp')}
            title={'Sign Up'}
            textStyle={styles.buttonText2}
          />
          <TouchableOpacity
            // onPress={() => navigate('TrackOrderTab')}
            onPress={()=>navigate('TrackOrderTab', { from: 'Home' })
}
          >
            <Bold
              label={'Track Parcel Now'}
              color={colors.white}
              fontSize={isLandscape ? mvs(22) : mvs(16)}
              style={{
                fontWeight: '700',
                letterSpacing: 0.2,
                lineHeight: isLandscape ? mvs(28) : mvs(32),
                textAlign: 'center'
              }}
            />
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default GetStartedScreen;