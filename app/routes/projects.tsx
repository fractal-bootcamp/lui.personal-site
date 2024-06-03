import { Header, Socials } from "./_index";

const ProjectPost = ( props : any ) => {
    const { projectName, projectDetail, imagePath, targetUrl } = props;
    return(
        <div>
            <div className = "relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className = "relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                    <a href={targetUrl}>
                        <img src = {imagePath} alt={projectName} />
                    </a>
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {projectName}
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                        {projectDetail}
                    </p>
                </div>
            </div>
        </div>
    )
}

// Inspiration for className parameters: https://www.material-tailwind.com/docs/html/card#profile-card
// Except...Do not include "text-transparent" unless you want it to be transparent



import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = ({ sliderRef } : any) => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 2
        // autoplay: true,
        // autoplaySpeed: 6000
    };
    console.log("is this failing")
    let allProjectDetails = [
        {
            projectName: "Spruce Plantation",
            projectDetail: "400 trees in South Wicklow",
            imagePath: "./images/spruce.png",
            targetUrl: "en.wikipedia.org/wiki/Lough_Dan" ,
        },
        {
            projectName: "Beautiful Decay",
            projectDetail: "Snapshots of post-soviet nostalgia",
            imagePath: "./images/decay.png",
            targetUrl: "en.wikipedia.org/wiki/Nostalgia_for_the_Soviet_Union",
        },
    ]
    console.log(allProjectDetails)

    return(
        <Slider ref={sliderRef} {...settings}>
            {allProjectDetails.map((project) => (
                <div>
                    <ProjectPost projectName = {project.projectName} projectDetail = {project.projectDetail} imagePath = {project.imagePath} targetUrl = {project.targetUrl} />
                </div>
            )
        )}
        </Slider>
    )
}



const SimpleCarousel = ({ sliderRef } : any) => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow:2,
        slidesToScroll: 2
        // autoplay: true,
        // autoplaySpeed: 6000
    };

    // const allProjectDetails = [
    //     {
    //         projectName: "Spruce Plantation",
    //         projectDetail: "400 trees in South Wicklow",
    //         imagePath: "./images/spruce.png",
    //         targetUrl: "en.wikipedia.org/wiki/Lough_Dan" ,
    //     },
    //     {
    //         projectName: "Beautiful Decay",
    //         projectDetail: "Snapshots of post-soviet nostalgia",
    //         imagePath: "./images/decay.png",
    //         targetUrl: "en.wikipedia.org/wiki/Nostalgia_for_the_Soviet_Union",
    //     },
    // ]
    // console.log(allProjectDetails)

    return(
        <Slider ref={sliderRef} {...settings}>
            <div>
                <img src="./images/elm.jpg" width="50" />
            </div>
            <div>
                <img src="./images/elm.jpg" width="50" />
            </div>
            <div>
                <img src="./images/elm.jpg" width="50" />
                <p>idoafjewoi</p>
            </div>
            <div>
                <img src="./images/elm.jpg" width="50" />
                <p>idoafjewoi</p>
            </div>
        </Slider>
    )
}



export default function Projects() {
    const sliderRef = useRef(null);
    return (
        <div>
        <Header />
        <h2>Projects</h2>
        <p>
            This is a page all about projects.
        </p>
        <ProjectPost projectName = "Spruce Plantation" projectDetail = "400 trees in South Wicklow" imagePath = "./images/spruce.png" targetUrl = "en.wikipedia.org/wiki/Lough_Dan" />
        <br />
        <ProjectPost projectName = "Beautiful Decay" projectDetail = "Snapshots of post-soviet nostalgia" imagePath = "./images/decay.png" targetUrl = "en.wikipedia.org/wiki/Nostalgia_for_the_Soviet_Union" />

        <SimpleCarousel sliderRef = {sliderRef} />

        {/* <ProjectCarousel sliderRef = {sliderRef} /> */}

        <Socials />
        </div>
    );
  }
  