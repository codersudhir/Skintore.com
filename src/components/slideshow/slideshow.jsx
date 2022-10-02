import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/08/0905-STDCRE-40981-SS-EF-Sept-Batch-Priority-Shot05-1180x450-023008.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/31/0916-41217-SS-AH-SkinStore-Sept-Batch-THG0035127-Shot04-1180x450-030331.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/10/original-New_Project_%283%29-085610.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/08/0905-STDCRE-40981-SS-EF-Sept-Batch-Priority-Shot05-1180x450-023008.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'https://static.thcdn.com/images/xlarge/webp/widgets/121-us/54/0830-STDCRE-40753-WC-SS-Fragrance-GWP-Assets-1180x450-053654.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container" >
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div><img style={{marginLeft:"80px",marginTop:"30px" ,height:"400px",width:"1200px"}}  src={slideImage.url}  alt="" />
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow