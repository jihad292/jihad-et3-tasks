import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../Common/colors';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE,
      }}>
      <FontAwesome5 name={'robot'} size={80} color={Colors.OLIVE_GREEN} />
      <Text
        style={{
          color: Colors.BLACK,
          fontWeight: 'bold',
          fontSize: 22,
          fontStyle: 'italic',
        }}>
        Welcome To your Prs Application{' '}
      </Text>
      <FontAwesome5
        name={'exclamation-triangle'}
        size={80}
        color={Colors.OLIVE_GREEN}
      />
    </View>
  );
};

export default HomeScreen;
