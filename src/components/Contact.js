import React, { useState, useEffect } from 'react'

import { Container, Header, Form, TextArea, Input, Segment, Icon, Dimmer, Loader } from 'semantic-ui-react';

const style = {
    root: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    form: {
        boxShadow: "2px 2px 12px #1b1c1d",
        background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        padding: "5px",
        borderRadius: "5px"
    },
    submit: {
        width: "50%",
        padding: "15px",
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px auto",
    },
    text: {
        fontSize: "24px",
    }
}
export default function Contact() {
    const [active, setActive] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    const handleSubmit = e => {
        e.preventDefault()
        setActive(true)
        const URL = "https://protected-temple-13795.herokuapp.com/api/v1/contacts"
        const dev = "http://localhost:3001/api/v1/contacts"
        const [first_name, last_name, email, phone, site_package, more_info] = e.target
        fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name.value,
                last_name: last_name.value,
                email: email.value,
                phone: phone.value,
                package: site_package.value,
                more_info: more_info.value
            })
        })
            .then(res => res.json())
            .then(json => {
                setTimeout(() => {

                    setActive(false)

                    if (json.message) {
                        const message = document.getElementsByClassName("success")[0]
                        message.classList.add("show")
                        setTimeout(() => message.classList.remove("show"), 5000)
                    } else {
                        const message = document.getElementsByClassName("error")[0]
                        message.classList.add("show")
                        setTimeout(() => message.classList.remove("show"), 5000)
                    }


                }, 1000)

            })
    }
    return (
        <Container style={style.root}>
            {active ?
                <Dimmer active>
                    <Loader />
                </Dimmer>
                :
                null
            }

            <div className="success">
                <h3> Thank you for reaching out! We will be in touch soon. </h3>
            </div>
            <div className="error">
                <h3> Oops! Something went wrong. Please try again later. </h3>
            </div>

            <Header as="h1">
                Contact Us Today
            </Header>
            <Form onSubmit={handleSubmit} style={style.form} className="custom-form">
                <Form.Group widths='equal'>
                    <Form.Input size="big" fluid label='First name' name="first_name" placeholder='First name (required)' required />
                    <Form.Input size="big" fluid label='Last name' name="last_name" placeholder='Last name (not required)' />
                </Form.Group>
                <Form.Field
                    id='form-input-control-error-email'
                    control={Input}
                    label='Email'
                    placeholder='joe@schmoe.com (required)'
                    type="email"
                    width={12}
                    required
                    size="big"
                />
                <Form.Group widths="equal">
                    <Form.Input size="big" label='Phone Number' name="phone" placeholder='Phone (not required)' width={6} />
                    <Form.Field style={{ height: "47px" }} name="package" label='Preferred Package' required control='select' width={6}>
                        <option value='basic'>BASIC $699</option>
                        <option value='wordpress'>WORDPRESS $1299</option>
                        <option value='custom'>CUSTOM $?</option>
                    </Form.Field>
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='More Info'
                    placeholder='Tell us more about your project... (required)'
                    required
                    size="big"
                    name="more_info"
                />

                <Form.Button style={style.submit}><span style={style.text}>Send It</span><Icon name="reply" color="yellow" size="large" /></Form.Button>

            </Form>

            <Segment style={{ boxShadow: "1px 1px 5px #1b1c1d", marginTop: "35px" }}>*Usually responds within 1-3 business days.</Segment>
        </Container>
    )
}
