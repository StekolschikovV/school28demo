import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class MenuScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                timetable: {
                    RU: 'Расписание',
                    UA: 'Розклад',
                    EN: 'Timetable',
                },
            },
            dateNow: new Date().setHours(0, 0, 0, 0),
            data: '',
            user: '',
            class: '',
            l1: '',
            l2: '',
            l3: '',
            l4: '',
            l5: '',
            l6: '',
            l7: '',
            l8: '',
            l9: '',
            l10: '',
            l11: '',
            l12: '',

        }
    }

    componentDidMount() {
        AsyncStorage.getItem('language')
        .then(res => {
            if (res == null) {
                AsyncStorage.setItem('language', 'RU')
                this.setState({
                    language: 'RU'
                })
            } else {
                this.setState({
                    language: res
                })
            }
        })

    }

    render() {

        return (
            <View style={styles.root}>



                {/* <TopBar text={this.state.language} t={this} showBTN={true} /> */}
                <TopBar text={this.state.languageTexts.timetable[`${this.state.language}`]} t={this} showBTN={true} />

                <View style={styles.topDataControls}>

                    <TouchableOpacity style={styles.topDataControlsContainerLeft} onPress={this.clickLeft.bind(this)}>
                        <Text style={styles.topDataControlsContainerText}>&lt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerCenter}>
                        <Text style={styles.topDataControlsContainerText}>
                            {this.getTime()}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerRight} onPress={this.clickRight.bind(this)}>
                        <Text style={styles.topDataControlsContainerText}>&gt;</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView style={styles.container}>

                    <View>
                        <Text style={styles.el}>1. Русский язык</Text>
                        <Text style={styles.el}>2. Русская литература</Text>
                        <Text style={styles.el}>3. Математика</Text>
                        <Text style={styles.el}>4. Физика</Text>
                        <Text style={styles.el}>5. Физкультура</Text>
                        <Text style={styles.el}>6. </Text>
                        <Text style={styles.el}>7. </Text>
                        <Text style={styles.el}>8. </Text>
                        <Text style={styles.el}>9. </Text>
                        <Text style={styles.el}>10. </Text>
                        <Text style={styles.el}>11. </Text>
                        <Text style={styles.el}>12. </Text>
                    </View>

                </ScrollView>

            </View>
        )
    }

    clickLeft() {
        this.setState({
            dateNow: this.state.dateNow - 86400000
        })



    }

    clickRight() {
        this.setState({
            dateNow: this.state.dateNow + 86400000
        })

    }

    getTime() {
        return `${new Date(this.state.dateNow).getDate()}/${new Date(this.state.dateNow).getMonth()}/${new Date(this.state.dateNow).getFullYear()}`
    }



}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#2196f5',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    container: {
        flex: 1,
        padding: style.blockPadding
    },
    topDataControls: {
        flexDirection: 'row',
        backgroundColor: style.color3
    },
    topDataControlsContainer: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
    },
    topDataControlsContainerLeft: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerRight: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerCenter: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color3,
    },
    topDataControlsContainerText: {
        color: 'white',
        fontSize: style.h2Size
    },
    el: {
        fontSize: style.h1Size,
        color: 'white'
    }
});