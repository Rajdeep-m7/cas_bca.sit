import * as yup from "yup";

export const addProjectSchema = yup.object().shape({
  studentName: yup
    .string()
    .min(2, "Name must be atleast 2 characters")
    .required("This is a Required Field"),
  year: yup.number().required("This is a Required Field"),
  section: yup.string().required("This is a Required Field"),
  projectName: yup.string().required("This is a Required Field"),
  liveUrl: yup.string().required("This is a Required Field"),
});
