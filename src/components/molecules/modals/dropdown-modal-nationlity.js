import {CrossModal, CrossModalRed} from 'assets/icons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {colors} from 'config/colors';
import {ORDER_ITEMS} from 'config/constants';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Medium from 'typography/medium-text';

const DropdownModalNationality = ({
  style = {},
  value,
  visible = false,
  onClose = item => {},
  onChangeText,
  items = [],
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        {/* <View style={styles.header} /> */}
        <TouchableOpacity onPress={() => onClose()} style={styles.cross}>
          <Entypo name={'circle-with-cross'} size={30} color={colors.red} />
        </TouchableOpacity>
        <Medium
          numberOfLines={2}
          style={styles.pick}
          label={'Select Nationality'}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: mvs(20),
            paddingTop: mvs(10),
          }}>
          {items?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => onChangeText(item?.id, onClose())}
                style={styles.button}>
                <Medium
                  label={item?.title || item?.name || item?.type || item?.id}
                  style={{fontSize: mvs(16)}}
                  color={colors.black}
                />
                <Icon
                  name={
                    item?.id === value
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={mvs(20)}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ModalWrapper>
  );
};
export default DropdownModalNationality;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  container: {
    maxHeight: mvs(572),
    minHeight: mvs(200),
    backgroundColor: colors.white,
    paddingTop: mvs(15),
    borderTopRightRadius: mvs(20),
    borderTopLeftRadius: mvs(20),
  },
  header: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  pick: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: mvs(20),
    color: colors.black,
  },
  button: {
    paddingHorizontal: mvs(30),
    marginBottom: mvs(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.7,
  },
  cross: {
    paddingHorizontal: mvs(12),
    // marginTop: mvs(8),
    paddingVertical: mvs(5),
    alignSelf: 'flex-end',
    // position: 'absolute',
  },
});
