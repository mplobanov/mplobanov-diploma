import React from "react";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

import { useField } from "formik";

export interface InputFormikProps {
  name: string;
  label: string;
  type: Parameters<typeof Input>[0]["type"];
}

export const InputFormik: React.FC<InputFormikProps> = ({
  name,
  label,
  type,
}) => {
  const [field] = useField(name);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} {...field} />
    </FormControl>
  );
};
