import styled from "styled-components";
import { Button as ButtonMui } from "@mui/material";

import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";

export const Button = styled(ButtonMui)``;

export const Input = styled.input`
  margin: 4px 4px;
  height: 25px;
`;

export const InputName = styled(Field)`
  width: 80%;
`;

export const ContainerErrorMessage = styled(ErrorMessage)`
  color: red;
`;
export const customStyle = {
  fieldsetName: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0 10px 10px",
    padding: 0,
    border: "1px solid lightgrey",
    width: "calc(100%-20px)",
    borderRadius: "7px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
  fieldsetGeneric: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0 10px 10px",
    padding: 0,
    border: "1px solid lightgrey",
    borderRadius: "7px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
  fieldsetTextArea: {
    display: "flex",
    flexDirection: "column",
    margin: "5px 0 10px 10px",
    padding: 0,
    border: "1px solid lightgrey",
    borderRadius: "7px",
    width: "95%",
    minHeight: "302px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  },
  inputName: {
    margin: 0,
    padding: "0 10px",
    border: 0,
    borderBottom: "1px solid lightgrey",
    outline: "none",
    width: "calc(100%-20px)",
    height: "35px",
  },
  inputSelect: {
    margin: 0,
    padding: "0 10px",
    border: 0,
    borderBottom: "1px solid lightgrey",
    outline: "none",
    height: "35px",
  },
  inputText: {
    margin: 0,
    padding: "0 10px",
    border: 0,
    borderBottom: "1px solid lightgrey",
    outline: "none",
    height: "35px",
  },
  errorMessage: {
    color: "red",
  },
};
