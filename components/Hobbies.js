import { useState } from 'react';

const Hobbies = () => {
    const [loading, setLoading] = useState(true);

    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Hobbies
                </h1>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                <div className="grid grid-rows-3 gap-4 w-full mx-auto max-w-6xl">
                    <div>
                        <h3 className="text-3xl font-bold text-center pt-10">Photography</h3>
                        <div style={{ height: "600px", marginTop: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {loading && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{
                                        border: '5px solid #f3f3f3',
                                        borderRadius: '50%',
                                        borderTop: '5px solid #F1F1F1',
                                        width: '40px',
                                        height: '40px',
                                        animation: 'spin 2s linear infinite'
                                    }} />
                                </div>
                            )}
                            <iframe
                                onLoad={() => setLoading(false)}
                                src="https://www.playbook.com/e/blurredreality/nf45EXgbvNhMvXzx41VuA56D?theme=gallery"
                                title="Photography - Playbook.com"
                                sandbox="allow-same-origin allow-scripts"
                                frameBorder="0"
                                width="140%"
                                height="100%"
                                style={{ display: loading ? 'none' : 'block' }}
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-center">Skating</h3>
                        <div style={{ height: "600px", marginTop: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {loading && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{
                                        border: '5px solid #f3f3f3',
                                        borderRadius: '50%',
                                        borderTop: '5px solid #F1F1F1',
                                        width: '40px',
                                        height: '40px',
                                        animation: 'spin 2s linear infinite'
                                    }} />
                                </div>
                            )}
                            <iframe
                                onLoad={() => setLoading(false)}
                                src="https://www.playbook.com/e/blurredreality/vmU2fysEEyvAVsA7wrPYKLop?theme=carousel&rows=1&slidesPerRow=3"
                                title="Photography - Playbook.com"
                                sandbox="allow-same-origin allow-scripts"
                                frameBorder="0"
                                width="140%"
                                height="100%"
                                style={{ display: loading ? 'none' : 'block', backgroundColor: '#F1F1F1' }}
                            ></iframe>
                        </div>
                    </div>
                    <div className='-mb-1'>
                        <h3 className="text-3xl font-bold text-center -mt-6">Art</h3>
                        <div style={{ height: "600px", marginTop: "20px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {loading && (
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{
                                        border: '5px solid #f3f3f3',
                                        borderRadius: '50%',
                                        borderTop: '5px solid #F1F1F1',
                                        width: '40px',
                                        height: '40px',
                                        animation: 'spin 2s linear infinite'
                                    }} />
                                </div>
                            )}
                            <iframe
                                onLoad={() => setLoading(false)}
                                src="https://www.playbook.com/e/blurredreality/n5VnHrxXBTBGWz5UMEFfiqpi?theme=carousel&rows=1&slidesPerRow=3"
                                title="Photography - Playbook.com"
                                sandbox="allow-same-origin allow-scripts"
                                frameBorder="0"
                                width="140%"
                                height="100%"
                                style={{ display: loading ? 'none' : 'block', backgroundColor: '#F1F1F1' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hobbies;