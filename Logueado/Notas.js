import React, { Component } from 'react';
import { Container, Header, Text, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class Notas extends Component {
  render() {
    
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="calendar" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}