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
    Title, Header
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import {Image,  StyleSheet, ScrollView, Dimensions, Modal, Alert, TouchableHighlight} from "react-native";
import {useFonts} from "expo-font";
import MapView, {Marker} from 'react-native-maps';


export default class Story extends Component {

    render() {
        return (
            <Root>
                <Container>
                    <Content>
                        <Card>
                            <CardItem>
                                <Text>Story</Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            </Root>
        );
    }
}

