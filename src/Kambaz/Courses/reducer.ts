import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
    const initialState = {
    courses: courses,
    currentCourse: {
        _id: "",
        name: "New Courses",
        number: "New Number",
        startDate: "2025-09-10",
        endDate: "2025-12-15",
        department: "New Department",
        credits: 4,
        description: "New Description",
    },
    };
    const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, { payload: course }) => {
            const newCourse: any = {
                _id: new Date().getTime().toString(),
                name: course.name,
                number: course.number || "New Number",
                startDate: course.startDate || 2025-9-10,
                endDate: course.endDate || 2025-12-15,
                department: course.department || "New Department",
                credits: course.credits || 4,
                description: course.description,
             };
            state.courses = [...state.courses, newCourse] as any;
        },
        deleteCourse: (state, { payload: courseId }) =>{
            state.courses = state.courses.filter(    (c: any) => c._id !== courseId);
        },

        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((c: any) =>
            c._id === course._id ? course : c) as any;
        },
        editCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.map((c: any) =>
            c._id === courseId ? { ...c, editing: true } 
                            : c ) as any;
        },
        setCourse: (state, { payload: course}) => {
            state.currentCourse = course;
        },},
});

export const { addCourse, deleteCourse, updateCourse, editCourse, setCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;