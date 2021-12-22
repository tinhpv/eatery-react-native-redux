import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderButton = props => {
  const isSelectedButton = props.title === props.selectedButton;
  const titleColor = isSelectedButton
    ? props.primaryTitleColor
    : props.secondaryTitleColor;
  return (
    <TouchableOpacity
      style={styles.button(props.backgroundColor, isSelectedButton)}
      onPress={() => props.setSelected(props.title)}>
      <Text style={styles.text(titleColor)}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (color, selected) => ({
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginHorizontal: 5,
    backgroundColor: selected ? color : null,
    borderRadius: 20,
  }),
  text: color => ({
    color: color,
    fontSize: 13,
    fontWeight: '500',
  }),
});

export default HeaderButton;
