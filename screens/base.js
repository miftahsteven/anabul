import React, { Component } from 'react';
import { Image } from 'react-native';
import {
    Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Icon, Left, Body, Title,
    Footer, FooterTab, Right, Item, Input, Badge, Toast
} from 'native-base';
import { SearchBar } from 'react-native-elements';
import { Actions, ActionConst } from 'react-native-router-flux';
import { StackActions } from "react-navigation";

export default class FooterTabsIconExample extends Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };
    render() {
        const { search } = this.state;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item style={{marginLeft: 20}}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Cari</Text>
                    </Button>
                </Header>
                <Content>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={{uri: 'https://previews.123rf.com/images/yanabear/yanabear1701/yanabear170100574/70475400-head-of-the-cat-with-heart-and-lettering-text-love-cats-vector.jpg'}} />
                                <Body>
                                    <Text>CatLovers Semarang</Text>
                                    <Text note style={{fontSize: 10}}>10 Oktober 2020 09:19</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered button onPress={() => {
                            Actions.detail({type:ActionConst.REPLACE});
                        }} title="go to detail">
                            <Body>
                                <Image source={{uri: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'}} style={{height: 200, width: '100%', flex: 1}}
                                       resizeMode={'cover'} />
                                <Text>
                                    Kucing ditemukan di pasar pucung dalam kondisi tidak berdaya. Pincang kaki kanan dan kurus. Harap bisa ada yang membantu
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent style={{}}>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={{uri: 'https://previews.123rf.com/images/yanabear/yanabear1701/yanabear170100574/70475400-head-of-the-cat-with-heart-and-lettering-text-love-cats-vector.jpg'}} />
                                <Body>
                                    <Text>CatLovers Jakarta</Text>
                                    <Text note style={{fontSize: 10}}>10 Oktober 2020 09:19</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered button onPress={() => {
                            Actions.detail({type:ActionConst.REPLACE});
                        }} title="go to detail">
                            <Body>
                                <Image source={{uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'}} style={{height: 200, width: '100%', flex: 1}} resizeMode={'cover'}/>
                                <Text>
                                    Telah Ditemukan Kucing cacat di pasar pucung dalam kondisi tidak berdaya. Pincang kaki kanan dan kurus. Harap bisa ada yang membantu
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent style={{}}>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Left>
                                <Thumbnail source={{uri: 'https://previews.123rf.com/images/yanabear/yanabear1701/yanabear170100574/70475400-head-of-the-cat-with-heart-and-lettering-text-love-cats-vector.jpg'}} />
                                <Body>
                                    <Text>CatLovers Jogja</Text>
                                    <Text note style={{fontSize: 10}}>10 Oktober 2020 09:19 </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered button onPress={() => {
                            Actions.detail({type:ActionConst.REPLACE});
                        }} title="go to detail">
                            <Body>
                                <Image source={{uri: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'}} style={{height: 200, width: '100%', flex: 1}} resizeMode={'cover'}/>
                                <Text>
                                    Kucing ditemukan di pasar pucung dalam kondisi tidak berdaya. Pincang kaki kanan dan kurus. Harap bisa ada yang membantu
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent style={{}}>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
