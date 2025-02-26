'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Divider } from '@heroui/react';

export default function AboutMe() {
    return (
        <div className="p-10">
            {/* Main Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-heading">About Me</h2>
            </div>

            {/* Profile Section */}
            <div className="flex justify-center mb-10 p-2">
                <Card className="w-full max-w-[400px] h-full flex flex-col justify-center transition-colors hover:bg-hover cursor-pointer" isPressable onPress={() => window.location.href = "https://www.linkedin.com/in/0nkardhillon/"}>
                    <CardHeader className="flex flex-col items-center">
                        <Image
                            alt="Your Profile Picture"
                            src="/7e980718-578a-4d20-a342-675c02248325.jpeg"
                            height={200}
                            width={300}
                            radius="sm"
                            mb="6"
                        />
                    </CardHeader>
                    <Divider/>
                    <h3 className="text-xl font-semibold text-center text-subheading p-5">Hello, I'm Onkar Dhillon</h3>
                        <p className="text-md text-text mt-2 text-center">I'm a Computer Science Student specializing in SWE and Cybersecurity. I also minor in Math.</p>
                </Card>
            </div>

            {/* Background and Skills Section */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                {/* Background Card */}
                <Card className="w-full max-w-[400px] h-full flex flex-col justify-center transition-colors hover:bg-hover cursor-pointer">
                    <CardHeader>
                        <h4 className="font-bold text-lg text-center text-subheading">Background</h4>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex-grow flex items-center justify-center">
                        <p className="text-text text-center">
                            I have a background in Computer Science. I’ve worked on various projects over the years,
                            gaining experience in both front-end and back-end technologies, Robotics, Machine Learning, Data Science, etc.
                        </p>
                    </CardBody>
                </Card>

                {/* Skills Card */}
                <Card className="w-full max-w-[400px] h-full flex flex-col justify-center transition-colors hover:bg-hover cursor-pointer" isPressable>
                    <CardHeader>
                        <h4 className="font-bold text-lg text-center text-subheading">Skills</h4>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex-grow flex items-center justify-center">
                        <ul className="text-text text-center">
                            <li>- HTML, CSS, JavaScript, PHP</li>
                            <li>- React, Node.js, Next.js</li>
                            <li>- Java, Python, C++, C</li>
                            <li>- Arduino Development</li>
                            <li>- Machine Learning</li>
                            <li>- Jupyter Notebooks</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
