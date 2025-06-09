import { createSlice } from "@reduxjs/toolkit";

const initialState = { enrollments: [] as any[] };
const slice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload; 
    },
    addEnrollment: (state, { payload }) => {
      state.enrollments.push(payload);
    },
    removeEnrollment: (state, { payload: courseId }) => {
      state.enrollments = state.enrollments.filter(
        (e) => e.course !== courseId
      );
    },
  },
});
export const { setEnrollments, addEnrollment, removeEnrollment } =
  slice.actions;
export default slice.reducer;