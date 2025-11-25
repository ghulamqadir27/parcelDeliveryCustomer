import * as IMG from 'assets/images';
import { PrimaryButton } from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
import { Formik } from 'formik';
import { navigate, goBack } from 'navigation/navigation-ref';
import React from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PrimaryInput from 'components/atoms/inputs';
import { KeyboardAvoidScrollview } from 'components/atoms/keyboard-avoid-scrollview/index';
import styles from './styles';
import { colors } from 'config/colors';
import { ForgotPasswordSchema } from 'validations';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';

const CreateNewPasswordScreen = props => {
  const [loading, setLoading] = React.useState(false);

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const handleFormSubmit = async values => {
    // Handle form submission logic here
    navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-left" size={mvs(30)} color={colors.black} />
        </TouchableOpacity>
        
      </View>
      <View style={styles.contentContainerStyle}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.keyboradscrollcontent}>
          <View style={styles.contentContainerStyleNew}>
            <Formik
              initialValues={initialValues}
              // validationSchema={ForgotPasswordSchema}
              onSubmit={handleFormSubmit}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
              }) => (
                <>
                  <Regular
                    label={'Input your email a verification code will be sent to this email.'}
                    color={colors.subText}
                    fontSize={mvs(16)}
                    style={styles.forgottext}
                    numberOfLines={3}
                  />
                  <PrimaryInput
                    isPasswordInput
                    isPassword
                    error={touched?.newPassword ? errors.newPassword : ''}
                    placeholder={'New Password'}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                    errorStyle={{ marginBottom: 0 }}
                    containerStyle={{marginTop:mvs(15)}}
                  />
                  <PrimaryInput
                    isPasswordInput
                    isPassword
                    error={touched?.confirmPassword ? errors.confirmPassword : ''}
                    placeholder={'Confirm New Password'}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    errorStyle={{ marginBottom: 0 }}
                    containerStyle={{marginTop:mvs(15)}}
                  />

                  <PrimaryButton
                    containerStyle={{
                      borderRadius: mvs(50),
                      marginTop: mvs(30),
                    }}
                    loading={loading}
                    onPress={handleSubmit}
                    title={'Save'}
                  />
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};

export default CreateNewPasswordScreen;

