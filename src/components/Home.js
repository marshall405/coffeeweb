import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import '../assets/styles/home.css'
import { Segment, Header, Grid, Button, Icon } from 'semantic-ui-react'

import Jumbo from './Jumbo'
export default function Home(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return (
        <>
            <Segment className="home-container">
                <Jumbo setActiveItem={props.setActiveItem} />
            </Segment>
            <Segment style={{ padding: '8em 0em' }} vertical className="home-about">
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Focus on Small Business
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                If you're a small business, you should have a website and here's why:
                            </p>
                            <ul>
                                <li> <span>Everyone's doing it!</span></li>
                                <li> <span>Customers want to be able to find information about you from your website.</span></li>
                                <li> <span>A website makes you look more reputable and trustworthy.</span></li>
                                <li> <span>Websites cost less than traditional advertising.</span></li>
                                <li> <span>and many more...</span></li>
                            </ul>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                What we do
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                We want to make your life easier and give you the best experience possible.
                            </p>
                            <ul>
                                <li><span>We focus on making each website responsive so it looks great on mobile, desktop and tablets.</span></li>
                                <li><span>Develop clean and consise websites that are easy to navigate.</span></li>
                                <li><span>Stick with you even after your website goes LIVE!</span></li>
                            </ul>

                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Icon size="massive" name='desktop' color="red" style={{ margin: "10px" }} />
                            <Icon size="massive" name='mobile' color="yellow" style={{ margin: "10px" }} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button as={Link} to="/contact" size='huge'>
                                Let's Get In Touch &nbsp; &nbsp;<Icon name='paper plane' color="purple" />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment>
                <Header as="h4"><Icon name="map marker" />Georgetown, Texas</Header>
                <iframe title="map" width="100%" height="450" style={{ border: 0 }} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3_vaVP3VRIYRCTrAlN407GE&key=AIzaSyDRylg8Zj4mYutiGXLhkY6L5grdflpvCOE"></iframe>
            </Segment>
        </>
    )
}
