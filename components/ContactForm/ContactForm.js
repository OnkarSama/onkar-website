"use client";

import React, { useState } from "react";
import { Form, Input, Button, Card, CardHeader, CardBody, Divider, CardFooter } from "@heroui/react";

const ContactForm = () => {
    const [action, setAction] = useState(null);

    return (
        <Card className="max-w-lg mx-auto p-6 shadow-lg">
            <CardHeader>
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
            </CardHeader>
            <Divider/>
            <CardBody>
                <Form
                    className="w-full max-w-xs flex flex-col gap-4"
                    validationBehavior="native"
                    onReset={() => setAction("reset")}
                    onSubmit={(e) => {
                        e.preventDefault();
                        let data = Object.fromEntries(new FormData(e.currentTarget));
                        setAction(`submit ${JSON.stringify(data)}`);
                    }}
                >
                    <Input
                        isRequired
                        isClearable
                        errorMessage="Please enter a valid name"
                        label="Name"
                        labelPlacement="outside"
                        name="name"
                        placeholder="Enter your name"
                        type="text"
                    />

                    <Input
                        isRequired
                        isClearable
                        errorMessage="Please enter a valid email"
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                    />

                    <Input
                        isRequired
                        isClearable
                        errorMessage="Please enter a message"
                        label="Message"
                        labelPlacement="outside"
                        name="message"
                        placeholder="Enter your message"
                        type="text"
                    />

                    
                </Form>
            </CardBody>
            <Divider/>
            <CardFooter>
            <div className="flex gap-2">
                        <Button color="primary" type="submit">
                            Submit
                        </Button>
                        <Button type="reset" variant="flat">
                            Reset
                        </Button>
                    </div>
            </CardFooter>
        </Card>
    );
};

export default ContactForm;
