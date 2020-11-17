import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './galery';
import Tab2 from './detail';
import Tab3 from './komentar';
import { Actions } from 'react-native-router-flux';
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading="Tab1">
                        <Tab1 />
                    </Tab>
                    <Tab heading="Tab2">
                        <Tab2 />
                    </Tab>
                    <Tab heading="Tab3">
                        <Tab3 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
