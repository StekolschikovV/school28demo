import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class ClassmatesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                title_classmates: {
                    RU: 'Одноклассники',
                    UA: 'Однокласники',
                    EN: 'Classmates',
                },
            },
            user: '',
            data: '',
            classmates_in_class: []
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
                <TopBar text={this.state.languageTexts.title_classmates[`${this.state.language}`]} t={this} showBTN={true} />
                <View style={styles.el}>
                    <Image style={styles.photo} source={require('../img/teachet_photo.jpeg')}></Image>
                    <View style={styles.info}>
                        <Text style={styles.name}>Иванов Сергей</Text>
                        <Text style={styles.phone}>+380000000000</Text>
                        <Text style={styles.email}>ivanov@gmail.com</Text> 
                    </View>
                </View>
                <View style={styles.el}>
                    <Image style={styles.photo} source={require('../img/teachet_photo.jpeg')}></Image>
                    <View style={styles.info}>
                        <Text style={styles.name}>Иванов Сергей</Text>
                        <Text style={styles.phone}>+380000000000</Text>
                        <Text style={styles.email}>ivanov@gmail.com</Text>
                    </View>
                </View>
            </View>
        )
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
    },
    el: {
        width: width - (style.blockPadding * 2),
        marginLeft: style.blockPadding,
        marginTop: style.blockPadding,
        backgroundColor: style.color2,
        flexDirection: 'row',
    },
    photo: {
        width: width / 5,
        height: width / 5,
        marginRight: style.blockPadding,
    },
    info: {
        flex: 1,
    },
    name: {
        color: 'white',
        fontSize: style.h1Size
    },
    subject: {
        color: 'white',
        fontSize: style.h2Size
    },
    phone: {
        color: 'white',
        fontSize: style.h2Size
    },
    email: {
        color: 'white',
        fontSize: style.h2Size
    }
})
