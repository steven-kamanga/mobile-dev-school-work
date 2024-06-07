import { Box } from "@/components/ui/box";
import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, ButtonText } from "@/components/ui/button";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import * as Speech from "expo-speech";

const validationSchema = Yup.object().shape({
  text: Yup.string().required("Text is required").label("text"),
});

const TextToSpeech = () => {
  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const speak = () => {
          const thingToSay = values.text;
          Speech.speak(thingToSay);
        };
        speak();
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
          <Box className=" w-72">
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={errors.text && touched.text ? true : false}
              isReadOnly={false}
              isRequired={false}
            >
              <FormControlLabel>
                <FormControlLabelText>Write with me</FormControlLabelText>
              </FormControlLabel>
              <Textarea>
                <TextareaInput
                  className="text-typography-0"
                  value={values.text}
                  onChangeText={handleChange("text")}
                  autoCorrect={false}
                  onBlur={handleBlur("text")}
                  placeholder="Type anything brooh.🔥🔥"
                  type="text"
                />
              </Textarea>
              <FormControlHelper>
                <FormControlHelperText>{errors.text}</FormControlHelperText>
              </FormControlHelper>
            </FormControl>
            <Button
              action="primary"
              variant="outline"
              className="bg-blue-500 mt-3 text-typography-950"
              onPress={() => handleSubmit()}
            >
              <ButtonText>Send Text</ButtonText>
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default TextToSpeech;
