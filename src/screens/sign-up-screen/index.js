import * as IMG from 'assets/images';
import { PrimaryButton } from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
import { Formik } from 'formik';
import { navigate } from 'navigation/navigation-ref';
import React from 'react';
import { TouchableOpacity, View, Image, ScrollView, Alert } from 'react-native';
import PrimaryInput from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import { LoginSchema, signinFormValidation } from 'validations';
import styles from './styles';
import { colors } from 'config/colors';
import { Row } from 'components/atoms/row';
import { FacBookIcon, GoogleIcon } from 'assets/icons';
import Regular from 'typography/regular-text';
import { login } from 'services/api/auth-api-actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { UTILS } from 'utils';
import { STORAGEKEYS } from 'config/constants';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Header1x2x from 'components/atoms/header-home/header-1x-2x';
import { StatusBar } from 'react-native';

const SignUpScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const [rember, setRemember] = React.useState(true);
  const initialValues = {
    email: '',
    password: '',
  };
  const handleFormSubmit = async (values, { resetForm }) => {
    // try {
    //   setLoading(true);
    //   const apiBody = {
    //     email: values.email,
    //     password: values.password,
    //   };
    //   const response = await login(apiBody);
    //   if (response.success) {
        // console.log('Login Successful:', response);
        // if (rember) {
        // await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(response.auth));
        //   const storedUser = JSON.parse(
        //     await UTILS.getItem(STORAGEKEYS.user),
        //   );
        //   console.log('Stored user:', storedUser);
        // }
        // resetForm();
        navigate('Login');
    //   } else {
    //     Alert.alert('Login Failed', response.message || 'Invalid credentials.');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   Alert.alert(
    //     'Error',
    //     error?.message || 'An error occurred. Please try again.',
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };
  async function onGoogleButtonPress() {
    try {

      // 2. Check Play Services
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // 3. Sign in
      const { idToken, user } = await GoogleSignin.signIn();
      console.log('User info:', user);

      if (!idToken) {
        throw new Error('No ID token found - check webClientId configuration');
      }

      // 4. Create Firebase credential
      const credential = GoogleAuthProvider.credential(idToken);
      const auth = getAuth();

      // 5. Sign in with Firebase
      const firebaseUser = await signInWithCredential(auth, credential);

      console.log('Firebase user:', firebaseUser);
      navigate('Drawer');

      return firebaseUser;
    } catch (error) {
      console.error('Full error:', error);
      if (error.code === 'SIGN_IN_CANCELLED') {
        Alert.alert('Cancelled', 'You cancelled the sign in.');
      } else {
        Alert.alert('Error', error.message || 'Sign in failed');
      }
      throw error;
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.imgView}>
          <Image source={IMG.parcelLogo} style={styles.imglogo} resizeMode='contain' />
        </View>

        <Regular
          label={'Sign Up'}
          color={colors.grey}
          fontSize={mvs(24)}
          style={styles.logintext}
        />
        <View style={styles.contentContainerStyle}>
          <KeyboardAvoidScrollview
            contentContainerStyle={styles.keyboradscrollcontent}>
            <View style={styles.contentContainerStyleNew}>
              <Formik
                initialValues={initialValues}
                // validationSchema={LoginSchema}
                onSubmit={handleFormSubmit}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  touched,
                  values,
                  errors,
                }) => {
                  console.log('Formik errors:', errors);
                  console.log('Formik values:', values);

                  return (
                    <>
                      <PrimaryInput
                        isFulName
                        error={touched?.firstName ? errors.firstName : ''}
                        placeholder={'First Name'}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                      // containerStyle={styles.input}
                      />
                      <PrimaryInput
                        isEmailInput
                        keyboardType={'email-address'}
                        error={touched?.email ? errors.email : ''}
                        placeholder={'Email'}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                      // containerStyle={styles.input}
                      />
                      <PrimaryInput
                        isPasswordInput
                        isPassword
                        error={touched?.password ? errors.password : ''}
                        placeholder={'Password'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        errorStyle={{ marginBottom: 0 }}
                      // containerStyle={styles.input}
                      />
                      <PrimaryButton
                        containerStyle={{
                          borderRadius: mvs(50),
                          height: mvs(50),
                          marginTop: mvs(10),
                        }}
                        loading={loading}
                        onPress={handleSubmit}
                        title={'Create Account'}
                      />

                    </>
                  );
                }}
              </Formik>

            </View>
          </KeyboardAvoidScrollview>
        </View>
        <Row style={styles.loginview}>
          <Regular fontSize={mvs(16)} label={'Already have an account?'} color={colors.subText} style={styles.textStyle} />
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Regular style={{fontWeight:'bold'}} fontSize={mvs(16)} label={'Sign In'} color={colors.subText} />
          </TouchableOpacity>
        </Row>
      </ScrollView>
    </View>
  );
};
export default SignUpScreen;
