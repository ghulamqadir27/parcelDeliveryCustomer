import {CrossModal, CrossModalRed} from 'assets/icons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {colors} from 'config/colors';
import {ORDER_ITEMS} from 'config/constants';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React, {useState, useEffect} from 'react';
import {
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  View, 
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';

const DropdownModalNationality = ({
  style = {},
  value,
  visible = false,
  onClose = item => {},
  onChangeText,
  items = [],
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(item => {
        const itemText = (item?.title || item?.name || item?.type || item?.id || '')
          .toString()
          .toLowerCase();
        return itemText.includes(searchQuery.toLowerCase());
      });
      setFilteredItems(filtered);
    }
  }, [searchQuery, items]);

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  const handleItemSelect = (itemId) => {
    setSearchQuery('');
    onChangeText(itemId);
    onClose();
  };

  return (
    <ModalWrapper
      onBackdropPress={handleClose}
      onBackButtonPress={handleClose}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleClose} style={styles.cross}>
          <Entypo name={'circle-with-cross'} size={30} color={colors.red} />
        </TouchableOpacity>
        
        <Medium
          numberOfLines={2}
          style={styles.pick}
          label={'Select Nationality'}
        />

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Feather 
            name="search" 
            size={mvs(20)} 
            color={colors.titleTextColor} 
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search nationality..."
            placeholderTextColor={colors.placeholder}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={true}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity 
              onPress={() => setSearchQuery('')}
              style={styles.clearButton}
            >
              <Feather name="x" size={mvs(18)} color={colors.gray} />
            </TouchableOpacity>
          )}
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: mvs(20),
            paddingTop: mvs(10),
          }}>
          
          {filteredItems.length === 0 ? (
            <View style={styles.noResults}>
              <Regular
                label="No nationalities found"
                color={colors.gray}
                style={styles.noResultsText}
              />
            </View>
          ) : (
            filteredItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleItemSelect(item?.id)}
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
            })
          )}
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
    marginBottom: mvs(10),
  },
  button: {
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(12),
    marginBottom: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: colors.lightGray,
  },
  cross: {
    paddingHorizontal: mvs(12),
    paddingVertical: mvs(5),
    alignSelf: 'flex-end',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: mvs(20),
    marginBottom: mvs(10),
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: mvs(15),
    paddingHorizontal: mvs(10),
    backgroundColor: colors.inputBackground,
  },
  searchIcon: {
    marginRight: mvs(8),
  },
  searchInput: {
    flex: 1,
    fontSize: mvs(16),
    color: colors.black,
    paddingVertical: mvs(10),
  },
  clearButton: {
    padding: mvs(4),
  },
  noResults: {
    padding: mvs(20),
    alignItems: 'center',
  },
  noResultsText: {
    fontSize: mvs(16),
    color: colors.gray,
  },
});