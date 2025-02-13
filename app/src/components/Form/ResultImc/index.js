import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';
export default function ResultImc(props) {
    return (
        <View style={styles.resultImc}>
        <Text style={styles.information}>{props.messageResultImc}</Text>
        <Text style={styles.numberImc}>{props.imc}</Text>
        <Text style={styles.message}>{props.messageResult}</Text>
        </View>
    );
}