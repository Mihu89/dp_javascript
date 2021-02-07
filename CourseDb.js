const CourseDb = () => {
    return  {
        dbInfo: (course) => {
            console.log(`Course Id ${course.id} Title: ${course.title} Author ${course.author}`);
        }
    }
}

module.exports = CourseDb(); 