import { StyleSheet, Image, Text, View } from 'react-native';


const Weatherbar = () => {
  return (
    <View style={wstyle.wb}>

      <View style={wstyle.wbelem}>
        <Image source={require('../../assets/images/sun.png')} />
        <Text style={wstyle.wbtxt}>Day</Text>
      </View>

      <View style={wstyle.wbelem}>
        <Image source={require('../../assets/images/sun.png')} />
        <Text style={wstyle.wbtxt}>Day</Text>
      </View>
      <View style={wstyle.wbelem}>
        <Image source={require('../../assets/images/sun.png')} />
        <Text style={wstyle.wbtxt}>Day</Text>
      </View>
      <View style={wstyle.wbelem}>
        <Image source={require('../../assets/images/sun.png')} />
        <Text style={wstyle.wbtxt}>Day</Text>
      </View>
    </View>
  )
}
const wstyle = StyleSheet.create({
  wb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
    position: 'absolute',
    width: 290,
    height: 50,
    top: 107,

    /*INSIDE*/
    alignSelf: 'stretch',
    marginVertical: 15,
  },
  wbelem: {
    display: 'flex',
    width: 29,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  wbtxt: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#00000090',


  }
})

export default Weatherbar