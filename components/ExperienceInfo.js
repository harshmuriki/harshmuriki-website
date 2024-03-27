import React from "react";
import ContainerBlock from "@components/ContainerBlock";

function ExperienceInfo({ project }) {
    // console.log("here", project);
    return (
        <ContainerBlock title="Projects - Harsh Muriki">
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                    <h1 className="text-xl md:text-9xl font-bold py-20 text-center md:text-left">
                        {project.company}
                    </h1>

                </div>
                <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                        <div className="relative overflow-hidden">
                            <h2 className="text-3xl font-bold text-center md:text-left pb-5">
                                Role: {project.title}
                            </h2>
                            {project.detail_desc && project.detail_desc.length > 0 && (
                                <ul className="top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                                    {project.detail_desc.map((bullet, index) => (
                                        <li key={index} className="mb-2"> • {bullet}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="pt-10 flex items-center">
                                <h2 className="font-bold text-white-500 text-xl mr-2 bg-red-500 rounded-md px-2">
                                    Coding Languages:
                                </h2>
                                <h2 className="text-white-500 text-xl">
                                    {project.tools ? project.tools : "N/A"}
                                </h2>
                                {/* <h2 className="font-bold text-xl text-white-500 mr-2 bg-red-500 rounded-md px-2">
                                    Tools
                                </h2>
                                <h2 className="text-white-500">
                                    {project.tools && project.tools.length > 0 && (
                                        <ul className="text-gray-600 dark:text-gray-400 text-xl list-disc ml-5">
                                            {project.tools.map((bullet, index) => (
                                                <li key={index}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </h2> */}
                            </div>
                            {project.other && project.other.length > 0 && (
                                <div className="mt-10 flex items-center">
                                    <h2 className="font-bold text-xl text-white-500 mr-2 bg-red-500 rounded-md px-2">
                                        Other
                                    </h2>
                                    <h2 className="text-white-500 text-xl text-gray-600 dark:text-gray-400">
                                        {project.other.map((bullet, index) => (
                                            <li key={index}>
                                                {bullet.startsWith("http://") || bullet.startsWith("https://") ? (
                                                    <a href={bullet} target="_blank" rel="noopener noreferrer" className="text-blue-500">{bullet}</a>
                                                ) : (
                                                    bullet
                                                )}
                                            </li>
                                        ))}
                                    </h2>
                                </div>
                            )}
                        </div>
                        <div>
                            {/* <div className="flex overflow-x-scroll space-x-4 py-2">
                                {project.photos && project.photos.map((photo, index) => (
                                    <img key={index} src={photo} alt={`Project image ${index + 1}`} className="w-60 h-auto" />
                                ))}
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </ContainerBlock>
    );
}

export default ExperienceInfo;
