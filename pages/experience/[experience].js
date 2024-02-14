import { useRouter } from 'next/router';
import React from 'react';
import userData from '@constants/data';
import ExperienceInfo from '@components/ExperienceInfo';

const ExperiencePage = () => {
    const router = useRouter();
    const { experience } = router.query;
    if (!experience) {
        return <div>Loading...</div>;
    }
    const experienceData = userData['experience'].find(project => project.siteLink.toLowerCase() === experience.toLowerCase());
    return (
        <div>
            <ExperienceInfo project={experienceData} />
        </div>
    );
};

export default ExperiencePage;