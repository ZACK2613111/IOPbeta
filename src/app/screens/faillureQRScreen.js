import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function faillureQR({ navigation }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', height: '100%' }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#FF5454",
          width: '60%',
          margin: 10,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
          marginBottom: 130,
        }}
        onPress={() => { }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            padding: 10,
            color: "white",
          }}
        >
          Problem scanning?
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

});