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
                    RU: 'Оценки',
                    UA: 'Oцінки',
                    EN: 'Estimates',
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
            rus: true,
            mat: false,
            fiz: false
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

                <TopBar text={this.state.languageTexts.timetable[`${this.state.language}`]} t={this} showBTN={true} />


                <ScrollView style={styles.container}>

                    <TouchableOpacity style={styles.el} onPress={this.pressRus.bind(this)}>
                        <Text style={styles.elText}>Русский язык</Text>
                    </TouchableOpacity>
                    {this.state.rus ? (
                        <View >
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>12</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за котрольную работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>29/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>9</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за домашнюю работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>26/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>8</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за диктант</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>25/09/17</Text>
                                </View>
                            </View>
                        </View >
                    ) : (
                            <Text style={styles.subText}></Text>
                        )}

                    <Text style={style.marg}></Text>
                    <TouchableOpacity style={styles.el} onPress={this.pressMat.bind(this)}>
                        <Text style={styles.elText}>Математика</Text>
                    </TouchableOpacity>
                    {this.state.mat ? (
                        <View >
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>12</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за котрольную работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>29/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>9</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за домашнюю работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>26/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>8</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за диктант</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>25/09/17</Text>
                                </View>
                            </View>
                        </View >
                    ) : (
                            <Text style={styles.subText}></Text>
                        )}

                    <Text style={style.marg}></Text>
                    <TouchableOpacity style={styles.el} onPress={this.pressFiz.bind(this)}>
                        <Text style={styles.elText}>Физика</Text>
                    </TouchableOpacity>
                    {this.state.fiz ? (
                        <View >
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>12</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за котрольную работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>29/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>9</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за домашнюю работу</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>26/09/17</Text>
                                </View>
                            </View>
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockLeft}>
                                    <Text style={styles.subTextBig}>8</Text>
                                    <Text style={styles.subText}>Баллов</Text>
                                </View>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Оценка за диктант</Text>
                                </View>
                                <View style={styles.subBlockRight}>
                                    <Text style={styles.subText}>25/09/17</Text>
                                </View>
                            </View>
                        </View >
                    ) : (
                            <Text style={styles.subText}></Text>
                        )}

                </ScrollView>

            </View>
        )
    }
    pressRus() {
        this.setState({
            rus: !this.state.rus
        })
    }
    pressMat() {
        this.setState({
            mat: !this.state.mat
        })
    }


    pressFiz() {
        this.setState({
            fiz: !this.state.fiz
        })
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
        backgroundColor: style.color2,
        width: width,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    elText: {
        color: 'white'
    },
    subBlock: {
        backgroundColor: style.color3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    subBlockLeft: {
        width: 60,
        alignItems: 'center',
        padding: 5
    },
    subBlockCenter: {},
    subBlockRight: {
        padding: 5
    },
    subTextBig: {
        fontSize: 28,
        color: 'white',
    },
    subText: {
        color: 'white'
    },
    marg: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        margin: 20,
    }
});