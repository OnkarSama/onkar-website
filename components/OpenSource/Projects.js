'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@heroui/react';

const Page = () => {
    const [projects, setProjects] = useState([]);
    const [languages, setLanguages] = useState({});

    useEffect(() => {
        // Fetch GitHub repositories
        axios.get('https://api.github.com/users/OnkarSama/repos')
            .then(response => {
                setProjects(response.data);
                fetchLanguages(response.data);
            })
            .catch(error => {
                console.error('Error fetching repositories:', error);
            });
    }, []);

    const fetchLanguages = (repos) => {
        repos.forEach(repo => {
            axios.get(repo.languages_url)
                .then(response => {
                    setLanguages(prevState => ({
                        ...prevState,
                        [repo.name]: Object.keys(response.data).join(', ')
                    }));
                })
                .catch(error => {
                    console.error(`Error fetching languages for ${repo.name}:`, error);
                });
        });
    };

    const openRepository = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="p-10 flex flex-col items-center">
    <h2 className="text-3xl font-bold mb-10 text-center">Here Are My Projects</h2>
    <div className="projects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {projects.map((project) => (
            <Card
                key={project.id}
                className="max-w-[400px] transition-colors hover:bg-hover cursor-pointer"
                isPressable 
                onPress={() => openRepository(project.html_url)}
            >
                <CardHeader className="flex gap-3">
                    <Image
                        alt="GitHub logo"
                        height={40}
                        radius="sm"
                        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md">{project.name}</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    {project.description && <p>{project.description}</p>}
                </CardBody>
                <Divider />
                <CardFooter className="flex justify-start">
                    <p className="italic">Languages: {languages[project.name] || 'Loading...'}</p>
                </CardFooter>
            </Card>
        ))}
    </div>
</div>
    );
};

export default Page;
