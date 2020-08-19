import React, { useEffect, useState } from 'react'

import { Card, Icon, Transition, Modal, Header } from 'semantic-ui-react'

const style = {
    card: {
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        boxShadow: "1px 1px 7px 0px black",
        margin: "20px",
        cursor: "pointer"
    },
    header: {
        background: 'rgba(255,255,255,.1)',
        padding: "5px",
        borderRadius: "5px",
        color: "white",
        textAlign: "center",
        fontSize: "2.0em"

    },
    meta: {
        textAlign: "left",
        color: "white"
    },
    extra: {
        color: "white",
        fontSize: "1.3em",
        margin: "5px 0"
    },
    li: {
        width: "90%",
        background: 'rgba(255,255,255,.3)',
        margin: "5px auto",
        padding: "5px",
        borderRadius: "5px",
        fontSize: "1.2em"
    }
}

export default function Package(props) {
    const { bundle, price, meta } = props
    const [visible, setVisible] = useState(false)
    const [open, setOpen] = useState(false)

    const renderModalContent = () => {
        switch (bundle) {
            case "BASIC":
                return (
                    <><h3>The basic package is great for small websites.</h3>
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="address book" size="large" />
                        <div style={{ width: "70%", margin: "10px auto" }}>
                            <p>You get 3 fully custom pages and a contact form.</p>
                            <p>You will also get 3 months of updates starting the day after launch! This can be changes to content/images or moving an element to the other side... </p>
                        </div>
                    </>)
            case "WORDPRESS":
                return (
                    <><h3>The wordpress package is great for small to medium websites.</h3>
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="file" size="large" />
                        <Icon name="address book" size="large" />
                        <div style={{ width: "70%", margin: "10px auto" }}>
                            <p>You get 3 - 6 pages pages and a contact form built in wordpress.</p>
                            <p>Wordpress is a Content Management System and is a way for you to make updates on your own!</p>
                            <p>In addition to having access to the CMS, you get 6 months of updates and training so you can take full control when your ready!  </p>
                        </div>
                    </>)
            case "CUSTOM":
                return (
                    <><h3>The custom package is great for small, medium or large websites.</h3>
                        <Icon name="folder open" size="large" />
                        <Icon name="address book" size="large" />
                        <div style={{ width: "70%", margin: "10px auto" }}>
                            <p>You get unlimited pages, built to suit your needs with wordpress.</p>
                            <p>Again, we will use wordpress so you can have full control and freedom to make changes whenever you want!</p>
                            <p>Wordpress is a Content Management System and is a way for you to make updates on your own!</p>
                            <p>In addition to having access to the CMS, you get 1 year of updates and training so you can take full control when your ready! </p>
                            <p> Price will vary and depends on the complexity and needs of the site.</p>
                        </div>

                    </>)


        }
    }
    useEffect(() => setVisible(true), [])
    return (
        <>
            {
                open ?
                    <Modal
                        basic
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                    >
                        <div style={{ background: "rgba(0,0,0,.7", textAlign: "center", padding: "20px" }}>
                            <Header icon style={{ color: "white" }} >
                                <Icon name='info' />
                                {bundle}
                            </Header>

                            <Modal.Content>

                                {
                                    renderModalContent()
                                }

                            </Modal.Content>
                        </div>
                    </Modal>
                    :
                    null
            }
            <Transition visible={visible} animation="fade" duration={500}>

                <Card style={style.card} onClick={() => setOpen(!open)}>

                    <Card.Content>
                        <Card.Header style={style.header}>{bundle}</Card.Header>

                        <Card.Content extra style={style.extra} >
                            <Icon name='dollar sign' size="large" />
                            {price}
                        </Card.Content>
                        <Card.Meta style={style.meta}>
                            <ul>
                                {
                                    meta.map(item => <li key={Math.random()} style={style.li} ><span className='date'>{item}</span></li>)
                                }
                            </ul>
                        </Card.Meta>
                        <Card.Description>

                        </Card.Description>
                    </Card.Content>

                </Card>
            </Transition>
        </>
    )
}
