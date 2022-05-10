import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import Weatherbar from '../components/Weatherbar';
import Donutchart from '../components/Donutchart';


export default function Screen1({ navigation, infos }) {

  return (
    <View style={styles.dashBoard}>
      <View style={styles.salut}>
        <Text style={styles.salutZack}>Salut {infos.displayName || "..."}</Text>
        <Text style={styles.salutMsg}>N'oubliez pas de passer du temps avec vos plantes...</Text>
        <Weatherbar style={styles.Weatherbar} />
        <View style={styles.sectionRond}>
          <Donutchart />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dashBoard: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  salut: {
    position: 'absolute',
    top: 72.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 310,

  },
  salutZack: {
    position: 'absolute',
    left: 5,
    top: 10,
    fontFamily: 'CircularStd-Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 27,
    color: '#07D779'
  },
  salutMsg: {
    position: 'absolute', width: 205,
    left: 5,
    top: 37,
    fontFamily: 'CircularStd-Medium',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 18,
    color: '#00000065'
  },
  Weatherbar: {
  },
  sectionRond: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 342,
    top: 195,
  }
});