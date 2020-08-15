import React from 'react'

import { Container, Header, Icon, List, Segment } from 'semantic-ui-react';

const style = {
    root: {
        margin: '50px',
    },
    container: {
        margin: "15px auto",
        padding: '50px',
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        borderRadius: "5px",
        color: "#FFF",
        boxShadow: "2px 2px 12px #1b1c1d"
    },
    itemContainer: {
        marginTop: "50px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        aligntItems: "center"

    },
    item: {
        textAlign: 'center',
    },
    heading: {
        color: "#FFF"
    },
    segment: {
        boxShadow: "2px 2px 12px #1b1c1d",
        fontSize: "1.5em",
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        color: "#FFF",
        borderRadius: "5px",
        padding: "10px",
        border: "none"
    },
    div: {
        background: "#1b1c1d",
        padding: "10px",
        borderRadius: "5px",
        fontSize: '44px',
        lineHeight: '40px',
    }
}
export default function About() {
    return (
        <Container style={style.root}>
            <Header as="h1" >
                About Us
            </Header>

            <List style={style.container}>
                <div style={style.item}>
                    <Header as="h2" style={style.heading}>
                        Web Development
                </Header>
                    <p> As a small team, we focus on building websites for Small Business's on a variety of devices and browsers.</p>
                </div>
                <div style={style.itemContainer}>
                    <div style={style.item}>
                        <Icon name='mobile alternate' size="massive" />
                        <Header as="h2" style={style.heading}> Mobile </Header>

                    </div>
                    <div style={style.item}>
                        <Icon name="desktop" size="massive" />
                        <Header as="h2" style={style.heading}> Desktop</Header>
                    </div>
                    <div style={style.item}>
                        <Icon name="tablet alternate" size="massive" />
                        <Header as="h2" style={style.heading}> Tablet</Header>
                    </div>
                </div>
            </List>

            <List style={style.container}>
                <div style={style.item}>
                    <Header as="h2" style={style.heading}>
                        We also help with
                </Header>
                    <p> Not every website needs a Database, but if you do, we will get one setup for you!</p>
                    <p> Getting your website hosted can be tricky, but we are here to help.</p>

                </div>
                <div style={style.itemContainer}>
                    <div style={style.item}>
                        <Icon name="database" size="massive" />
                        <Header as="h2" style={style.heading}> Database</Header>
                    </div>
                    <div style={style.item}>
                        <Icon name="server" size="massive" />
                        <Header as="h2" style={style.heading}> Hosting </Header>
                    </div>
                </div>
            </List>

            <Segment style={style.segment}>
                <div style={style.div}>
                    We're committed to meeting your needs and making your dreams come true! Using the latest technology, we are prepared to help with your next project.
                </div>
            </Segment>
        </Container>
    )
}
