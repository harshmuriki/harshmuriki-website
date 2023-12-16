import userData from "@constants/data";
import { React, useState } from "react";
import Modal from 'react-modal';

export default function Experience() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

// const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
//   return (
//     <a href={companyLink} target="_blank" rel="noopener noreferrer" className="block relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 z-10 mx-4">
//       <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
//         {year}
//       </h1>
//       <h1 className="font-semibold text-xl">{title}</h1>
//       <p className="text-gray-500">
//         {company}
//       </p>
//       <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
//     </a>
//   );
// };

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div onClick={openModal} className="block relative experience-card border p-4 rounded-md shadow-xl bg-grey-500 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-gray-500">
        {company}
      </p>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Experience Details"
        style={{
          content: {
            background: '#505f77',
            width: '50%',
            height: '60%',
            margin: 'auto',
          },
          overlay: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '50',
          }
        }}
      >
        <h2>{title}</h2>
        <p>{desc}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};