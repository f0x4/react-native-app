import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Post() {
    return (

        <View style={styles.body}>
            <View style={styles.img}></View>
            <View style={styles.text}>
                <Text style={styles.heading}>ЦБ резко ограничит размер и ставку займов «до зарплаты»</Text>
                <Text style={styles.excerpt}>О том, что Банк России разрабатывает комплекс мер, направленных на снижение интереса микрофинансовых организаций </Text>
                <Text style={styles.readMore}>Читать далее...</Text>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "row",
        padding: 13,
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 36,
    },
    img: {
        width: 91,
        height: 91,
        backgroundColor: "#3F5498",
        borderRadius: 5,
        opacity: 0.7,
    },
    text: {
        flex: 1,
        paddingLeft: 23,
    },
    heading: {
        fontFamily: "Actor",

        fontSize: 13,
        lineHeight: 13,
        color: "#252525",
    },
    excerpt: {
        fontFamily: "Actor",
        textAlign: "left",
        fontSize: 10,
        lineHeight: 15,
        paddingTop: 4,
        color: "#4A4A4A",
    },
    readMore: {
        fontSize: 10,
        lineHeight: 15,
        paddingTop: 4,
        color: "#4A4A4A",
    },
    after: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        width: 300,
        height: 3,
        backgroundColor: "#F5F5F5",
    },
});