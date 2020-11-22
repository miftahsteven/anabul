import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Footer, FooterTab, Icon, Button, Text} from 'native-base';

import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component {
    constructor() {
        super();
        this.state = {
            activeTabName: 'base'
        };
    }

    tabAction(tab) {
        this.setState({activeTabName: tab});
        if (tab === 'base') {
            Actions.base();
        } else if (tab === 'post') {
            Actions.post();
        } else if (tab === 'story') {
            Actions.story();
        } else if (tab === 'profile') {
            Actions.profile();
        } else {
            Actions.base();
        }
    }


    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button vertical active={(this.state.activeTabName === "base") ? true: ""} disabled={(this.state.activeTabName === "base") ? true: ""}  onPress={() => {this.tabAction('base')}}>
                        <Icon active name="home" />
                        <Text>Beranda</Text>
                    </Button>
                    <Button vertical active={(this.state.activeTabName === "post") ? true: ""} disabled={(this.state.activeTabName === "post") ? true: ""} onPress={() => {this.tabAction('post')}}>
                        <Icon name="camera" />
                        <Text>Post</Text>
                    </Button>
                    <Button vertical active={(this.state.activeTabName === "story") ? true: ""} disabled={(this.state.activeTabName === "story") ? true: ""} onPress={() => {this.tabAction('story')}}>
                        <Icon name="heart" />
                        <Text>Story</Text>
                    </Button>
                    <Button vertical active={(this.state.activeTabName === "profile") ? true: ""} disabled={(this.state.activeTabName === "profile") ? true: ""} onPress={() => {this.tabAction('profile')}}>
                        <Icon name="person" />
                        <Text>Profil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }

}

module.export = AppFooter;
