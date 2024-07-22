import React from 'react';

const logoUrls = [
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/RJ.png",
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/PC.png",
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/TK.png",
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/FZ.png",
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/MS.png", // Repeat or add more logos if needed
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/R5.png", // Repeat or add more logos if needed
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/EK.png",
    "https://assets.wego.com/image/upload/h_64,c_fit,f_auto,fl_lossy,q_auto:low/v20240722/flights/airlines_rectangular/G9.png", // Repeat or add more logos if needed
];

const Sponsors = () => {
    return (
        <section style={{ padding: '3rem 0', backgroundColor: 'white', overflow: 'hidden', textAlign: 'center' , marginTop:'200px' , marginBottom:"200px"}}>
            <h2 style={{ marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'semibold', color:'black' }}>Popular Airlines in Middle East </h2>
            <div style={{ position: 'relative', width: '100%', height: '7rem' }}>
                <div style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    gap: '2rem',
                    animation: 'scroll 20s linear infinite',
                }}>
                    {logoUrls.concat(logoUrls).map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={'Sponsor logo ${index + 1'}
                            style={{
                                height: '4rem',
                                flexShrink: 0,
                                marginRight: '2rem',
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Sponsors;