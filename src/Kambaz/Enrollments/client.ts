import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER || "";
const USERS_API     = `${REMOTE_SERVER}/api/users`;

export const findEnrollmentsByUser = async (userId: string) => {
  const { data } = await axios.get(`${USERS_API}/${userId}/enrollments`);
  return data; // [{_id, user, course}, ...]
};
export const enrollCourse = async (userId: string, courseId: string) => {
  const { data } = await axios.post(
    `${USERS_API}/${userId}/enrollments/${courseId}`
  );
  return data;
};
export const unenrollCourse = async (userId: string, courseId: string) => {
  await axios.delete(`${USERS_API}/${userId}/enrollments/${courseId}`);
};