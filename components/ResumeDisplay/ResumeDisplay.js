'use client';

import { Card, CardHeader, CardBody, Divider } from "@heroui/react";

export default function Resume() {
  return (
    <div className="w-full mx-auto p-6 bg-background shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-heading">Onkar Dhillon</h1>
        <p className="text-text text-subheading">onkardhillon73@gmail.com | (718) 223-3637</p>
      </div>

      <Divider className="my-4" />

      {/* Skills Section */}
      <Card className="mb-6 w-full">
        <CardHeader className="text-lg font-semibold text-heading">Skills</CardHeader>
        <Divider />
        <CardBody>
          <ul className="list-disc list-inside text-text">
            <li>Java, C++, Python, Web Development</li>
            <li>Google Suite, Excel, PowerPoint</li>
            <li>PHP, Computer-Aided Design, C, MySQL</li>
            <li>Autodesk Fusion 360, Adobe Creative Cloud, Pandas</li>
          </ul>
        </CardBody>
      </Card>

      {/* Education Section */}
      <Card className="mb-6 w-full">
        <CardHeader className="text-lg font-semibold text-heading">Education</CardHeader>
        <Divider />
        <CardBody>
          <div className="mb-4">
            <h3 className="font-semibold text-subheading">Adelphi University, Garden City, NY</h3>
            <p>Candidate for B.S. in Computer Science (Cybersecurity & Software Engineering) and Math Minor</p>
            <p>August 2022 - May 2026</p>
          </div>
          <div>
            <h3 className="font-semibold text-subheading">High School for Construction Trades, Architecture, and Engineering</h3>
            <p>Advanced Regents Diploma, 4.0 GPA</p>
            <p>September 2018 - June 2022</p>
          </div>
        </CardBody>
      </Card>

      {/* Experience Section */}
      <Card className="mb-6 w-full">
        <CardHeader className="text-lg font-semibold text-heading">Experience</CardHeader>
        <Divider />
        <CardBody>
          <div className="mb-4">
            <h3 className="font-semibold text-subheading">IT Help Desk, Adelphi University</h3>
            <p className="text-text">IT Technician (September 2024 - Present)</p>
            <ul className="list-disc list-inside text-text">
              <li>Resolve issues for students and staff.</li>
              <li>Assist with AV setup and troubleshooting.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-subheading">ASIME, Adelphi University</h3>
            <p className="text-text">Research Assistant (July 2024 - August 2024)</p>
            <ul className="list-disc list-inside text-text">
              <li>Taught high school students Pandas for data analysis.</li>
              <li>Guided students in machine learning model development.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-subheading">NYC FIRST, Stem Center at Cornell Tech</h3>
            <p className="text-text">Program Coordinator & STEM Instructor (July 2022 - July 2024)</p>
            <ul className="list-disc list-inside text-text">
              <li>Designed and built robots using CAD and 3D fabrication.</li>
              <li>Trained teachers and students in robotics programming (Java).</li>
              <li>Developed custom organizers for robotics materials.</li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
