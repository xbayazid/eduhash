import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Category = () => {
    const CategoryCourse = useLoaderData();
    return (
        <div>
            {
                CategoryCourse.map(course => <CourseCard
                key={course._id}
                course={course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Category;