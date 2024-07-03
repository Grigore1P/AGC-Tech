import React from 'react';

const CourseContentComponent: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Welcome to the Course Content</h1>
            <p className="text-lg">Here you will find all the course materials and videos.</p>
            {/* You can add more detailed course content here */}
        </div>
    );
};

export default CourseContentComponent;
