import { Platform, StyleSheet } from 'react-native';
import { colors } from 'config/colors';
import { mvs, width } from 'config/metrices';
import { login } from 'services/api/auth-api-actions';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.primary },
  scrollcontentContainerStyle: { backgroundColor: colors.white, paddingVertical: mvs(20), marginTop: mvs(10),
    flexGrow: 1,
    borderTopLeftRadius: mvs(30),
    borderTopRightRadius: mvs(30),
    paddingHorizontal: mvs(15),

   },
  trackingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: mvs(12),
  },
  trackingNumber: { fontSize: mvs(14), color: colors.subteXTcOLOR, flex: 1 ,fontWeight:'400'},
  bold: { fontWeight: 'bold',fontSize: mvs(15),color: colors.grey },

  badge: {
    backgroundColor: colors.barbg,
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(4),
    borderRadius: mvs(10),
    marginLeft: mvs(10),
  },
  badgeText: { color: colors.primary, fontSize: mvs(14), fontWeight: '500',letterSpacing:1, },
  infoRow: {
    paddingHorizontal: mvs(6),
    paddingVertical: mvs(5),
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: mvs(8),
    justifyContent: 'flex-start',
  },
  sectionTitle: {
    marginTop: mvs(10),
    marginBottom: mvs(8),
    color: colors.grey,
  },
  
  infoIcon: {height: mvs(30), width: mvs(30), marginRight: mvs(8)},
  separatorLine: {width: mvs(20), height: mvs(24)},
  box: {
    backgroundColor: '#fff',
    padding: mvs(15),
    borderRadius: mvs(12),
    marginBottom: mvs(12),
    borderWidth: mvs(1),
    borderColor: '#eee',
  },

  timingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timingBox: {
    width: '31%',
    backgroundColor: colors.starbg,
    padding: mvs(12),
    borderRadius: mvs(12),
    marginBottom: mvs(10),
  },
  timingLabel: { fontSize: 12, color: '#666', marginBottom: 4 },
  timingValue: { fontSize: 14, color: '#000', fontWeight: '600' },

  cancelText: { fontSize: 13, color: '#777', marginTop: 5 },

  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
  },

  timelineContent: { marginLeft: 10 },
  timelineTitle: { fontSize: 14, color: '#333', fontWeight: '600' },
  timelineCancelled: { fontSize: 14, color: '#D9534F', fontWeight: '600' },
  timelineTime: { fontSize: 12, color: '#777', marginTop: 2 },

  supportButton: {
    borderWidth: 1,
    borderColor: '#FB6A45',
    backgroundColor:colors.white,
    borderRadius: 30,
    paddingVertical: 12,
    // marginTop: 30,
    // marginBottom: 40,
    // alignItems: 'center',
  },
  supportText: {
    fontSize: 15,
    color: '#FB6A45',
    fontWeight: '600',
  },
});
export default styles;
