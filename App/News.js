import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class News extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                timetable: {
                    RU: 'Новости',
                    UA: 'Новини',
                    EN: 'News',
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
                        <Text style={styles.elText}>Новость название 1</Text>
                    </TouchableOpacity>
                    {this.state.rus ? (
                        <View >

                            <View style={styles.subBlock}>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</Text>
                                </View>
                            </View>
                        </View >
                    ) : (
                            <Text ></Text>
                        )}

                    <Text style={style.marg}></Text>
                    <TouchableOpacity style={styles.el} onPress={this.pressMat.bind(this)}>
                        <Text style={styles.elText}>Новость название 2</Text>
                    </TouchableOpacity>
                    {this.state.mat ? (
                        <View >

                            <View style={styles.subBlock}>

                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</Text>
                                </View>

                            </View>

                        </View >
                    ) : (
                            <Text></Text>
                        )}

                    <Text style={style.marg}></Text>
                    <TouchableOpacity style={styles.el} onPress={this.pressFiz.bind(this)}>
                        <Text style={styles.elText}>Новость название 3</Text>
                    </TouchableOpacity>
                    {this.state.fiz ? (
                        <View >
                            <View style={styles.subBlock}>
                                <View style={styles.subBlockCenter}>
                                    <Text style={styles.subText}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</Text>
                                </View>
                            </View>
                        </View >
                    ) : (
                            <Text></Text>
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
        setTimeout(() => {
            this.showTimetable()
        }, 50)
    }

    clickRight() {
        this.setState({
            dateNow: this.state.dateNow + 86400000
        })
        setTimeout(() => {
            this.showTimetable()
        }, 50)
    }

    getTime() {
        return `${new Date(this.state.dateNow).getDate()}/${new Date(this.state.dateNow).getMonth()}/${new Date(this.state.dateNow).getFullYear()}`
    }

    showTimetable() {

        let l1 = ''
        let l2 = ''
        let l3 = ''
        let l4 = ''
        let l5 = ''
        let l6 = ''
        let l7 = ''
        let l8 = ''
        let l9 = ''
        let l10 = ''
        let l11 = ''
        let l12 = ''

        if (this.state.class[this.state.dateNow]) {
            l1 = this.state.class[this.state.dateNow].lesson[1]
            l2 = this.state.class[this.state.dateNow].lesson[2]
            l3 = this.state.class[this.state.dateNow].lesson[3]
            l4 = this.state.class[this.state.dateNow].lesson[4]
            l5 = this.state.class[this.state.dateNow].lesson[5]
            l6 = this.state.class[this.state.dateNow].lesson[6]
            l7 = this.state.class[this.state.dateNow].lesson[7]
            l8 = this.state.class[this.state.dateNow].lesson[8]
            l9 = this.state.class[this.state.dateNow].lesson[9]
            l10 = this.state.class[this.state.dateNow].lesson[10]
            l11 = this.state.class[this.state.dateNow].lesson[11]
            l12 = this.state.class[this.state.dateNow].lesson[12]
        }

        this.setState({
            l1: l1,
            l2: l2,
            l3: l3,
            l4: l4,
            l5: l5,
            l6: l6,
            l7: l7,
            l8: l8,
            l9: l9,
            l10: l10,
            l11: l11,
            l12: l12
        })
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
        padding: 20
    },
    subText: {
        color: 'white',
        padding: 10
    },
    marg: {
        backgroundColor: 'red',
        width: 20,
        height: 20,
        margin: 20,
    }
});