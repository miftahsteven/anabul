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
    Title, Header, Badge, Form, Item, Label, Textarea, Picker
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Image,  StyleSheet, ScrollView, Dimensions, Modal, Alert, TouchableHighlight} from "react-native";
import {useFonts} from "expo-font";
import MapView, {Marker} from 'react-native-maps';
import {Input} from "react-native-elements";


export default class Report extends Component {

    constructor(props) {
        super(props);
        this.state={
            selected: undefined,
            buttonDisabled: true
        }
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }

    render() {
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
                            <Input placeholder="Judul" />
                            <Textarea rowSpan={5} bordered placeholder="Deskripsi" />
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
                            <Item bordered>
                                <Text>Upload Gambar</Text>
                                <CardItem>
                                    <Card>
                                        <Button info style={{borderRadius: 10}}>
                                            <Icon name="camera" type="AntDesign" />
                                        </Button>
                                    </Card>
                                </CardItem>
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

