import React from 'react';

const BottomVideoComponent = () => {
    return (
        <div
            className="w-full h-[262px] motivation relative z-1 ">
            <div className="video-wrapper absolute inset-0 overflow-hidden rounded">
                <video autoPlay loop muted className="object-cover w-full h-full">
                    <source
                        src="https://videos.pexels.com/video-files/6963743/6963743-hd_1920_1080_25fps.mp4"
                        type="video/mp4"
                    />
                    <source
                        src="https://videos.pexels.com/video-files/7534244/7534244-hd_1920_1080_25fps.webm"
                        type="video/webm"
                    />
                    <source
                        src="https://videos.pexels.com/video-files/7534244/7534244-hd_1920_1080_25fps.ogv"
                        type="video/ogv"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default BottomVideoComponent;