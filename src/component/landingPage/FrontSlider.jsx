import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos, Maximize } from "@mui/icons-material";
import { Box} from "@mui/material";
import aaj from '../../images/Aaaj jaane ki.webp'
import seven from '../../images/hqdefault.webp'
import diary from '../../images/Diary.webp'
import boroda from '../../images/borodaCp.jpg'
import kolomer from '../../images/Kolomer.webp'
import upolobdhi from '../../images/Upolobdhi.webp'



const posters =[
    {
        img:aaj,
        name:'Aaaj Jaane ki zid na karo'
    },
    {
        img:seven,
        name:'Aaaj Jaane ki zid na karo'
    },
    {
        img:diary,
        name:'Aaaj Jaane ki zid na karo'
    },
    {
        img:kolomer,
        name:'Aaaj Jaane ki zid na karo'
    },
    {
        img:boroda,
        name:'Aaaj Jaane ki zid na karo'
    },
    {
        img:upolobdhi,
        name:'Aaaj Jaane ki zid na karo'
    }
]

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "black", fontSize: "40px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "black", fontSize: "40px" }} />
        </div>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    // centerPadding: "170px",

    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
            },
        },
    ],
};

const FrontSlider = () => {
    return (
        <Box  sx={{display:'flex',flexDirection:'column',margin:'50px 0',alignItems:'center'}} >
                <Slider style={{width:'85%',margin:'40px 30px'}} {...carouselProperties} >
                    {
                        posters.map((item)=>{
                            return(
                                <Box sx={{height:'60vh',display:'fit-content'}}>

                                <img  src={item.img} style={{height:'60vh' ,width:'auto'}}  />
                                </Box>
                            )
                        })
                    }
                </Slider>
            
        </Box>
    );
};


export default FrontSlider;