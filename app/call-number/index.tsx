import { Box } from "@/components/ui/box";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Button, ButtonText } from "@/components/ui/button";
import * as Linking from "expo-linking";

const validationSchema = Yup.object().shape({
  number: Yup.string().required("Number is required").label("Number"),
});

const CallNUmber = () => {
  return (
    <Formik
      initialValues={{ number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        Linking.openURL(`tel:0${values.number}`);
        console.log(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <Box className="flex items-center">
          <Box className="h-32 w-72">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.number && touched.number ? true : false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel className="mb-1">
                <FormControlLabelText>Phone Number</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  className="text-typography-0"
                  value={values.number}
                  onChangeText={handleChange("number")}
                  autoCorrect={false}
                  onBlur={handleBlur("number")}
                  placeholder="Enter A Phone Number"
                  type="text"
                />
              </Input>
              <FormControlError>
                <FormControlErrorIcon size={"md"} as={AlertCircleIcon} />
                <FormControlErrorText>
                  Must be at least 10 characters.
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
            <Button
              action="primary"
              variant="outline"
              className="bg-blue-500 mt-3 text-typography-950"
              onPress={() => handleSubmit()}
            >
              <ButtonText>Call Number</ButtonText>
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default CallNUmber;
