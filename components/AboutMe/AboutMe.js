'use client';

import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Divider, Button, Link } from '@heroui/react';

export default function AboutMe() {
    return (
        <div className="p-10">
            {/* Main Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">About Me</h2>
            </div>

            {/* Profile Section */}
            <div className="section mb-10 flex justify-center">
                <Card className="max-w-[400px] transition-colors hover:bg-hover cursor-pointer" isPressable onPress={() => window.location.href = "https://www.linkedin.com/in/0nkardhillon/"}>
                    <CardHeader className="flex flex-col items-center">
                        <Image
                            alt="Your Profile Picture"
                            src="/MyPhoto.JPEG" 
                            height={150}
                            width={150}
                            radius="full"
                            mb="6"
                        />
                        <h3 className="text-xl font-semibold">Hello, I'm Onkar Dhillon</h3>
                        <p className="text-md text-gray-600 mt-2">I'm a Computer Science Student with specializations in SWE and Cybersecurity. I also minor in Math</p>
                    </CardHeader>
                </Card>
            </div>

            {/* Background and Skills Section */}
            <div className="section mb-10 flex justify-center space-x-10">
                {/* Background Card */}
                <Card className="max-w-[400px] transition-colors hover:bg-hover cursor-pointer">
                    <CardHeader>
                        <h4 className="font-bold text-lg text-gray-800">Background</h4>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-gray-600 text-center" >
                            I have a background in Computer Science. I’ve worked on various projects over the years,
                            gaining experience in both front-end and back-end technologies, Robotics, Machine Learning, Data Science, etc.
                        </p>
                    </CardBody>
                </Card>

                {/* Skills Card */}
                <Card className="max-w-[400px] transition-colors hover:bg-hover cursor-pointer" isPressable>
                    <CardHeader>
                        <h4 className="font-bold text-lg text-gray-800">Skills</h4>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <ul className="text-gray-600">
                            <li>- HTML, CSS, JavaScript</li>
                            <li>- React, Node.js, Next.js</li>
                            <li>- UI/UX Design</li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
