import { useRouter } from 'next/router';
import React from 'react';
import ProjectInfo from '@components/ProjectInfo';
import userData from '@constants/data';

const ProjectPage = () => {
    const router = useRouter();
    const { projects } = router.query;
    if (!projects) {
        return <div>Loading...</div>;
    }
    // console.log("here0", projects);
    const projectData = userData['projects'].find(project => project.siteLink.toLowerCase() === projects.toLowerCase());
    return (
        <div>
            <ProjectInfo project={projectData} />
        </div>
    );
};

export default ProjectPage;