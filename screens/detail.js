import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem, Badge, Body, Text, View, Button, Icon, Toast, Left, Right, Thumbnail, Footer, Root} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Image,  StyleSheet, ScrollView, Dimensions, Modal, Alert, TouchableHighlight} from "react-native";
import {useFonts} from "expo-font";
import MapView, {Marker} from 'react-native-maps';

const { width } = Dimensions.get('window');

export default class Detail extends Component {

    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    }
    constructor(props) {
        super(props);
        this.state = {
            showToast: false,
            modalVisible: false
        };
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center" ,
                backgroundColor: "#A9DAD6" }}>
                <Text style={{ fontWeight: "600" }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18 }} name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <Text
                style={{
                    backgroundColor: "#e3f1f1",
                    padding: 10,
                    fontStyle: "italic",
                }}
            >
                {item.content}
            </Text>
        );
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <Root>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => Actions.pop()}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Detail Laporan</Title>
                        </Body>
                        <Right>
                            <Button badge transparent>
                                <Badge primary><Text>12</Text></Badge>
                                <Icon name='heart' onPress={() => Toast.show({
                                    text: 'Terima kasih atas likenya '+String.fromCodePoint(parseInt ("1F63E", 16)),
                                    buttonText: 'Close',
                                    position: "top",
                                    duration: 3000
                                })} type="SimpleLineIcons" />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <ScrollView
                            ref={(scrollView) => { this.scrollView = scrollView; }}
                            style={styles.container}
                            //pagingEnabled={true}
                            horizontal= {true}
                            decelerationRate={0}
                            snapToInterval={width - 60}
                            snapToAlignment={"center"}
                            contentInset={{
                                top: 0,
                                left: 30,
                                bottom: 0,
                                right: 30,
                            }}>
                            <Image source={{uri: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/17/Photos/catindelhi-kkND--621x414@LiveMint.jpg'}} style={styles.view} />
                            <Image source={{uri: 'https://i.ytimg.com/vi/t7OXJ-EUl7w/maxresdefault.jpg'}} style={styles.view} />
                            <Image source={{uri: 'https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg'}} style={styles.view} />
                            <Image source={{uri: 'https://www.albugle.com/wp-content/uploads/2019/02/cat.jpg'}} style={styles.view} />
                            <Image source={{uri: 'https://www.thesprucepets.com/thmb/pX7WXhwesITgR69XfOH06VhehPQ=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1015612954-05c4e57546a8492a80bc0fae74681114.jpg'}} style={styles.view} />
                        </ScrollView>
                        <Card padder transparent>
                            <CardItem>
                                <Body>
                                    <Text style={{fontSize: 20, fontWeight: "bold", paddingTop: 15}}>
                                        Kucing Liar Kondisi Cacat
                                    </Text>
                                </Body>
                                <Button danger onPress={() => {
                                    this.setModalVisible(true);
                                }}>
                                    <Text>Urgent</Text>
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Thumbnail square source={{uri: 'https://previews.123rf.com/images/yanabear/yanabear1701/yanabear170100574/70475400-head-of-the-cat-with-heart-and-lettering-text-love-cats-vector.jpg'}} />
                                    <Body>
                                        <Text>CatLovers Semarang</Text>
                                        <Text note style={{fontSize: 15}}>10 Oktober 2020 09:19</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Content>
                                    <Text style={{fontWeight: '100', fontFamily:"Arial"}}>
                                        Telah Ditemukan Kucing cacat di pasar pucung dalam kondisi tidak berdaya. Pincang kaki kanan dan kurus. Harap bisa ada yang membantu.
                                        Sekilas melihat dan membaca namanya, kucing emas memang masuk ke dalam keluarga kucing. Diketahui, kucing emas merupakan satu dari 9 jenis kucing hutan.
                                        Dari sisi ukuran, kucing emas sedikit lebih kecil dibanding macan dahan dan lebih besar dibanding kucing kampung
                                    </Text>
                                </Content>
                            </CardItem>
                        </Card>
                        <Card padder transparent>
                            <CardItem>
                                <Text style={{fontWeight: "Bolder"}}>Lokasi</Text>
                            </CardItem>
                        </Card>
                        <MapView initialRegion={{
                            latitude: -6.445430,
                            longitude: 106.828383,
                            latitudeDelta: 0.004,
                            longitudeDelta: 0.004,
                        }} style={styles.mapStyle} >
                            <Marker
                                key={1}
                                coordinate={{ latitude: -6.445430, longitude: 106.828383 }}
                                title='Area Pasar Pucung'
                                description='Kucing ditemukan di area ini'
                            />
                        </MapView>

                    </Content>
                    <Modal animationType="slide" transparent={true} visible={modalVisible}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>SAYA INGIN MENOLONG</Text>
                                <Card padder transparent>
                                    <CardItem>
                                        <Button danger style={{marginRight: 10}}>
                                            <Icon active name="logo-whatsapp" />
                                        </Button>
                                        <Button type="Entypo" style={{marginRight: 10}}>
                                            <Icon active name="call" />
                                        </Button>
                                        <Button warning>
                                            <Icon type="FontAwesome" active name="share" />
                                        </Button>
                                    </CardItem>
                                    <CardItem style={{alignContent: 'center', marginTop: 20}}>
                                        <Text style={{textAlign: "center", flex: 1}} onPress={() => {
                                            this.setModalVisible(!modalVisible);
                                        }}>Close</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </Modal>
                </Container>
            </Root>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    view: {
        marginTop: 20,
        backgroundColor: 'blue',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
    view2: {
        marginTop: 20,
        backgroundColor: 'red',
        width: width - 80,
        margin: 10,
        height: 200,
        borderRadius: 10,
        //paddingHorizontal : 30
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#de073a",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    mapStyle: {
        width: Dimensions.get('window').width - 40,
        height: 200,
        marginLeft: 15,
        paddingRight: 20
    },
});
