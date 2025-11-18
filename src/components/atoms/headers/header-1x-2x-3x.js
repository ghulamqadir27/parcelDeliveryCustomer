import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';

const Header1x2x3x = () => {
  return (
    <View style={styles.container}>
      
      {/* Top Row */}
      <View style={styles.topRow}>
        <View style={styles.locationRow}>
          <View style={styles.locationIconWrapper}>
            <Ionicons name="location" size={16} color="#fff" />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.userName}>Jhon Wick</Text>
          </View>
        </View>

        <View style={styles.bellWrapper}>
          <Ionicons name="notifications-outline" size={20} color="#fff" />
        </View>
      </View>

      {/* Search Row */}
     

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8683C',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },

  userName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },

  bellWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default Header1x2x3x;
