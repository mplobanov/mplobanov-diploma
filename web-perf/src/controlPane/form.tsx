import Button from "@mui/joy/Button";

import { Formik } from "formik";
import { InputFormik } from "../form/input";

import styles from "./styles.module.css";
import { multiplyOptions } from "../multiply/types";
import { SelectFormik } from "../form/select";
import { initialExpValue } from "../experiment/types";
import { useExperiment } from "../experiment/start";

export const Form = () => {
  const { startExperiment } = useExperiment();

  return (
    <div>
      <Formik
        initialValues={initialExpValue}
        onSubmit={(values, actions) => {
          startExperiment({
            expProps: values,
            onFinish: () => actions.setSubmitting(false),
          });
        }}
      >
        {(props) => (
          <div className={styles.form}>
            <InputFormik name="N" label="N dimension (int)" type="number" />
            <InputFormik name="M" label="M dimension (int)" type="number" />
            <InputFormik name="K" label="K dimension (int)" type="number" />
            <SelectFormik
              name="type"
              options={multiplyOptions}
              label="Multiply engine"
            />
            <InputFormik
              name="trials"
              label="Trial count (int)"
              type="number"
            />
            <Button
              type="submit"
              onClick={props.submitForm}
              loading={props.isSubmitting}
            >
              Measure
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};
