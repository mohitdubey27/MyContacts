import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 12,
  },
  wrapper: {
    height: 42,
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    width: '100%',
  },
  errorText: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
