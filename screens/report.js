import React, { Component } from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Text,
    View,
    Button,
    Icon,
    Toast,
    Left,
    Right,
    Thumbnail,
    Footer,
    Root,
    Title, Header, Badge, Form, Item, Label, Textarea, Picker, List, ListItem
} from 'native-base';
import {ActionConst, Actions} from 'react-native-router-flux';
import {Image,  StyleSheet, ScrollView, Dimensions, Modal, Alert, TouchableHighlight} from "react-native";
import {useFonts} from "expo-font";
import MapView, {Marker} from 'react-native-maps';
import {Input} from "react-native-elements";


export default class Report extends Component {


    constructor(props) {
        super(props);
        this.state={
            selected: undefined,
            buttonDisabled: true,
        }
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    render() {
        const iconTitle = () => (
            <Icon style={{color:'#67688f', fontSize:20}} name='edit' type="FontAwesome5"/>
        )

        return (
            <Root>
                <Container>
                    <Header>
                        <Left></Left>
                        <Body>
                            <Title>Buat Posting</Title>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Content padder>
                        <Form>
                            <Input placeholder="Judul" leftIcon={iconTitle} />
                            <Card>
                                <CardItem>
                                    <Text>Silahkan Pilih</Text>
                                </CardItem>
                                <CardItem>
                                    <Picker
                                        renderHeader={backAction =>
                                            <Header style={{ backgroundColor: "#67688f" }}>
                                                <Left>
                                                    <Button transparent onPress={backAction}>
                                                        <Icon name="arrow-back" style={{ color: "#fff" }} />
                                                    </Button>
                                                </Left>
                                                <Body style={{ flex: 3 }}>
                                                    <Title style={{ color: "#fff" }}>Pilih Kategori Laporanmu</Title>
                                                </Body>
                                                <Right />
                                            </Header>}
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        placeholder="Pilih Jenis Laporan"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        style={{ width: undefined }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}>
                                        <Picker.Item label="Adopsi : Anabul Open Adopt" value="0" />
                                        <Picker.Item label="Hilang : Anabul Hilang" value="1" />
                                        <Picker.Item label="Urgent : Anabul Butuh Pertolongan" value="2" />
                                    </Picker>
                                </CardItem>
                            </Card>
                            <Textarea rowSpan={5} bordered placeholder="Ceritakan " />
                            <Item bordered>
                                <Text>Upload Gambar</Text>
                                <Card transparent>
                                    <CardItem>
                                        <Button info rounded onPress={() => {
                                            Actions.camera({type:ActionConst.REPLACE});
                                        }}>
                                            <Icon name="camera" type="AntDesign" />
                                        </Button>
                                    </CardItem>
                                </Card>
                            </Item>
                            <Item>
                                <Content>
                                    <List>
                                        <ListItem thumbnail noBorder>
                                            <Thumbnail square style={{marginRight: 10}} source={{ uri: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/17/Photos/catindelhi-kkND--621x414@LiveMint.jpg' }} />
                                            <Thumbnail square style={{marginRight: 10}} source={{ uri: 'https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg' }} />
                                            <Thumbnail square style={{marginRight: 10}} source={{ uri: 'https://www.albugle.com/wp-content/uploads/2019/02/cat.jpg' }} />
                                            <Thumbnail square style={{marginRight: 10}} source={{ uri: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period1/2015/01/17/Photos/catindelhi-kkND--621x414@LiveMint.jpg' }} />
                                            <Thumbnail square source={{uri: `data:image/jpeg;base64,${this.props.imageBase64}`}} />

                                        </ListItem>
                                    </List>
                                </Content>
                            </Item>
                            <Button full style={{marginTop: 50, borderRadius: 10}} disabled={this.state.disabledButton}>
                                <Icon name="send" type="Ionicons" />
                                <Text>Send</Text>
                            </Button>
                        </Form>
                    </Content>
                </Container>
            </Root>
        );
    }
}

