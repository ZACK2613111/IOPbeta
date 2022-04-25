import { StyleSheet, Image, Text, View } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const Donut = ({
    percentage = 75,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = '#00F',
    delay = 0,
    textColor,
    max = 100,
}) => {
    const completeRadius = radius + strokeWidth;
    return (
        <View>
            <Svg
                width={completeRadius * 2}
                height={completeRadius * 2}
                viewBox={'0 0 ${completeRadius * 2} ${completeRadius * 2}'}
            >
                <G>
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.2}
                    />
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        fill="transparent"
                    />
                </G>
            </Svg>
        </View>
    )
}
const Donutchart = () => {
    return (
        <View style={DonutStyle.container}>
            <Donut />

        </View>
    )
}

const DonutStyle = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        width: 155,
        height: 155,
        shadowColor: '#000000',
        elevation: 5,
        borderRadius: 20,
    }
})
export default Donutchart