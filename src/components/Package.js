import React, { useEffect, useState } from 'react'

import { Card, Icon, Transition } from 'semantic-ui-react'

const style = {
    card: {
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        boxShadow: "1px 1px 7px 0px black",
        margin: "20px"
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
    useEffect(() => setVisible(true), [])
    return (
        <Transition visible={visible} animation="fade" duration={500}>
            <Card style={style.card}>
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
    )
}
