import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatRupiah} from '../helper/format';
import {horizontalScale, moderateScale, verticalScale} from '../helper/scale';
import {cardStyle, color, typeExpense} from './const';

const ExpenseList = ({expenses, onEdit, onDelete}: any) => {
  const cardType = (item: any) => (
    <View
      style={[
        styles.cardTypeWrap,
        {
          backgroundColor:
            item.type == typeExpense[0] ? color.bgsuccess : color.bgerror,
        },
      ]}>
      <Text
        style={{
          color: item.type == typeExpense[0] ? color.positive : color.negative,
          fontSize: 18,
        }}>
        {item.type == typeExpense[0] ? '+' : '-'}
      </Text>
    </View>
  );

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => onEdit(item)}>
      <View
        style={[
          cardStyle,
          {
            padding: 10,
            borderRadius: moderateScale(6),
            backgroundColor: '#fff',
            marginVertical: verticalScale(8),
          },
        ]}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {cardType(item)}
          <View
            style={{
              flex: 7,
              paddingHorizontal: horizontalScale(6),
              justifyContent: 'center',
            }}>
            <Text>{item.description}</Text>
            <Text>{formatRupiah(item.amount)}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => onDelete(item.id)}
              style={{
                marginTop: 5,
                flex: 1,
                // backgroundColor: color.positive,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: moderateScale(12),
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardTypeWrap: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExpenseList;
