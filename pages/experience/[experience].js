import { useRouter } from 'next/router';
import React from 'react';
import userData from '@constants/data';

const ExperiencePage = () => {
    const router = useRouter();
    const { experience } = router.query;
    if (!experience) {
        return <div>Loading...</div>;
    }
    const experienceData = userData['experience'].find(project => project.siteLink.toLowerCase() === experience.toLowerCase());
    console.log(experienceData);
    return (
        <div>
            {experienceData.title}
        </div>
    );
};

export default ExperiencePage;