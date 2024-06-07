import { Box } from "@/components/ui/box";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
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
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import * as SMS from "expo-sms";

const validationSchema = Yup.object().shape({
  number: Yup.string().required("Number is required").label("Number"),
  sms: Yup.string().required("Sms is required").label("Sms"),
});

const SendSms = () => {
  return (
    <Formik
      initialValues={{ number: "", sms: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const postThatSMS = async () => {
          const isAvailable = await SMS.isAvailableAsync();

          if (isAvailable) {
            // Assuming you want to use the form values here
            const { result } = await SMS.sendSMSAsync(
              [values.number], // Use the number from the form values
              values.sms // Use the sms message from the form values
            );

            if (result === "sent") {
              console.log("SMS sent successfully!");
            } else {
              console.log("SMS failed to send.");
            }
          } else {
            console.log("SMS is not available on this device.");
          }
        };
        postThatSMS();
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
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.sms && touched.sms ? true : false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel>
                <FormControlLabelText>Write with me</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput
                  className="text-typography-0"
                  value={values.sms}
                  onChangeText={handleChange("sms")}
                  autoCorrect={false}
                  onBlur={handleBlur("sms")}
                  placeholder="Send A text bruh."
                  type="text"
                />
              </Textarea>
              <FormControlHelper>
                <FormControlHelperText>
                  Error sending the message.
                </FormControlHelperText>
              </FormControlHelper>
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

export default SendSms;
