import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";


import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {ActionCreators} from "../actions/index";
import ColorCircle from "../components/ColorCircle";

class CounterScreen extends Component {

    props: {
        list: [],
        listSize: number,
        addRandomItem: () => {},
    };

    constructor() {
        super();

    }


    render() {

        const color = this.props.list.length > 0 ? this.props.list[this.props.list.length - 1].color : "#000000";

        return (
            <View style={styles.container}>
                <ColorCircle color={color}>
                    <Text style={styles.countText}>
                        {this.props.listSize}
                    </Text>
                </ColorCircle>
                <View style={{alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity style={styles.button} onPress={this.props.addRandomItem}>
                        <Text style={styles.buttonText}>ADD RANDOM COLOR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    static navigationOptions = {
        header: null
    }
}


const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },

    listSize: {
        color: "grey",

    },

    countText: {
        color: "grey",
        fontSize: 40,
        fontWeight: "bold"
    },

    button: {
        height: 50,
        paddingHorizontal: 30,
        backgroundColor: "red",
        borderRadius: 25,
        elevation: 3,
        margin: 15,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    buttonText: {
        color: "white",
        fontWeight: "bold"
    }
});

function mapStateToProps(state) {
    return {
        list: state.list,
        listSize: state.listSize,
    }
}
function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToPros)(CounterScreen);
