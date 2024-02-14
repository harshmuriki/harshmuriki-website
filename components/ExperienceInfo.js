import React from "react";
import ContainerBlock from "@components/ContainerBlock";

function ExperienceInfo({ project }) {
    // console.log("here", project);
    return (
        <ContainerBlock title="Projects - Harsh Muriki">
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                    <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                        {project.title}
                    </h1>
                </div>
                <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                        <div className="relative overflow-hidden">
                            <div className="h-72 object-cover">
                                <h3 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                                    {project.description}
                                </h3>
                            </div>
                            {/* <div className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl flex-col">
                                <div className="flex items-center">
                                    <h2 className="text-white-500 mr-2 bg-red-500 rounded-md px-2">
                                        Coding Languages:
                                    </h2>
                                    <h2 className="text-white-500">
                                        {project.tools ? project.tools : "N/A"}
                                    </h2>
                                </div>
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-white-500 hover:text-blue-900 underline bg-green-500 rounded-md px-2 mt-2">
                                    Visit Project
                                </a>
                            </div> */}


                        </div>
                        {/* <div className="relative overflow-hidden">
                            <div className="h-72 object-cover">
                                <img
                                    src={project.imgUrl}
                                    alt="portfolio"
                                    className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </ContainerBlock>
    );
}

export default ExperienceInfo;
