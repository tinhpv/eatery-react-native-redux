import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import HeaderButton from './HeaderButton';

const HeaderTab = () => {
  const [selected, setSelected] = useState('Delivery');

  return (
    <View style={styles.container}>
      <HeaderButton
        title="Delivery"
        backgroundColor="black"
        primaryTitleColor="white"
        secondaryTitleColor="black"
        selectedButton={selected}
        setSelected={setSelected}
      />
      <HeaderButton
        title="Pickup"
        backgroundColor="black"
        titleColor="white"
        primaryTitleColor="white"
        secondaryTitleColor="black"
        selectedButton={selected}
        setSelected={setSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default HeaderTab;
