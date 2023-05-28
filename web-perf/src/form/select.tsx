import React from "react";

import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import { useField } from "formik";

export interface SelectProps {
  name: string;
  options: string[];
  label: string;
}

export const SelectFormik: React.FC<SelectProps> = ({
  name,
  options,
  label,
}) => {
  const [field, , helpers] = useField(name);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select {...field}>
        {options.map((option, i) => (
          <Option
            value={option}
            key={i}
            onClick={() => helpers.setValue(option)}
          >
            {option}
          </Option>
        ))}
      </Select>
    </FormControl>
  );
};
