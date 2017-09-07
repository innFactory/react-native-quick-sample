import React, {Component} from "react";
import {Dimensions, StyleSheet} from "react-native";

import * as Animatable from "react-native-animatable";

export default class ColorCircle extends Component {

    props: {
        color: string
    };

    static defaultProps = {};

    constructor() {
        super();

        this.state = {};
    }


    componentDidUpdate(prevProps, prevState) {

        this.refs.circle.rubberBand(400)
    }

    render() {

        const {height, width} = Dimensions.get('window');

        let ratio;
        if (height>width) {
            ratio = width * 1.1;
        } else {
            ratio = height * 1.1;
        }

        return (
            <Animatable.View
                ref="circle"
                style={[styles.circle, {borderColor: this.props.color, height: ratio, width: ratio, borderRadius: ratio/2}]}>
                {this.props.children}
            </Animatable.View>
        );
    }
}


const styles = StyleSheet.create({

    circle: {
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e8e8e8"
    },
});
