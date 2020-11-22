import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {Body, Container, Header, Left, Right, Title, Icon} from "native-base";
import Base from './screens/base';
import Report from './screens/report';
import Detail from "./screens/detail";
import Story from "./screens/story";
import Profile from "./screens/profile";
import AppFooter from "./screens/appFooter";
import detail from "./screens/detail";
export default class App extends Component {
  render() {
  const iconProfile = () => (
      <Icon style={{color:'#67688f', fontSize:20}} name='user-alt' type="FontAwesome5"/>
  )
  const iconReport = () => (
      <Icon style={{color:'#67688f', fontSize:20}} name='shield-alt' type="FontAwesome5"/>
  )
  const iconBase = () => (
      <Icon style={{color:'#67688f', fontSize:20}} name='home' type="FontAwesome5"/>
  )
  const iconStory = () => (
      <Icon style={{color:'#67688f', fontSize:20}} name='medal' type="FontAwesome5"/>
  )
    return (
        <Container>
            <Header style={{backgroundColor:'#67688f'}}>
                <Left>
                    <Title style={{fontSize: 30}}>{String.fromCodePoint(parseInt ("1F408", 16))}</Title>
                </Left>
                <Body>
                    <Title style={{color:'#fff'}}>Anabul Squad</Title>
                </Body>
                <Right></Right>
            </Header>
            <Router>
              <Scene key="root" hideNavBar={true}>
                  <Scene key="main" navigationBarStyle={{ backgroundColor: '#67688f'}}
                         titleStyle={{color: '#ffffff', fontWeight: 'bold'}} tabs={true}
                         activeBackgroundColor='#ccc' activeTintColor='#67688f' tabBarPosition="bottom" initial={true}>
                      <Scene key="base" icon={iconBase} component={Base} title="Home" initial={true} tabs={false} hideNavBar={true} renderLeftButton={() => null} panHandlers={null} init={true} />
                      <Scene key="post" icon={iconReport} component={Report} title="Report" hideNavBar={true} renderLeftButton={() => null} panHandlers={null} />
                      <Scene key="story" icon={iconStory} component={Story} title="Story" hideNavBar={true} renderLeftButton={() => null} panHandlers={null} />
                      <Scene key="profile" icon={iconProfile} component={Profile} title="Profile" hideNavBar={true} renderLeftButton={() => null} panHandlers={null}/>
                  </Scene>
                  <Scene hideNavBar={true}>
                      <Scene key="detail" component={detail} hideTabBar={true}/>
                  </Scene>
              </Scene>
            </Router>
        </Container>
    )
  }
}
