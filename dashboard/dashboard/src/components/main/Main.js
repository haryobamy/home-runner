import React, { Component } from 'react';
import './Main.css';
import face from '../../assets/img/faces/face.jpg'
import ImageUploader from "react-images-upload";




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
      }
    
      onDrop(pictureFiles, pictureDataURLs) {
        this.setState(
          pictures: this.state.pictures.concat(pictureFiles)
        });
      }
    render() { 
        return ( 
  
    <main>
        <div className='main__container'>
            <div className='main__title'>
                <div className='img-profile rounded-circle'>
            <ImageUploader
              withIcon={false}
              withPreview={true}
              label=""
              buttonText="Upload Images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
              maxFileSize={1048576}
              fileSizeError=" file size is too big"
            />
            </div>
                <img src={face} alt='face' />
                <div className='main__greeting'>
                    <h1>hello from homerunner</h1>
                    <p>welcome to home runner</p>
                </div>
            </div>
            <div className='main__cards'>
                <i className='fa fa-user-o fa-2x text-lightblue'></i>
                <div className='card_inner'>
                    <p className='text-primary-p'> number of subscribers</p>
                    <span className='font-bold text-title'> 578 </span>
                </div>
            </div>

            <div className='card1'>
                <i className='fa fa-calander fa-2x text-red'></i>
                <div className='card_inner'>
                    <p className='text-primary-p'> times of watching</p>
                    <span className='font-bold text-title'>2457</span>
                </div>
            </div>
            
            <div className='card2'>
                <i className='fa fa-video-camera fa-2x text-yellow'></i>
                <div className='card_inner'>
                    <p className='text-primary-p'>number of video</p>
                    <span className="font-bold text-title">500</span>
                </div>
            </div>

            <div className='card3'>
                <i className='fa fa-thumb-up fa-2x text-green'></i>
                <div className='card_inner'>
                    <p className='text-primary-p'> number of likes</p>
                    <span className='font-bold text-title'>5748</span>
                </div>
            </div>
        </div>
    </main>
  );
}
}


export default Main;

