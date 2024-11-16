import React from "react";
import Image from "next/image"; // Corrected import for next/image
import '../app/styles/Card.css';

interface PropsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}


const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
    // Use a conditional class based on window width
    const isSmallScreen = typeof window !== "undefined" && window.innerWidth >= 640;

    return (
        <div className={`card ${isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
            <div>
                <Image
                    className={`card-image ${isSmallScreen ? 'card-image-sm' : ''}`}
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div>{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className="tags" key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
