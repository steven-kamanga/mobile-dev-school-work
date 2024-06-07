import React from "react";
import { ScrollView, Text } from "react-native";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Table,
  TableBody,
  TableCaption,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import RadioFormSection from "@/components/RadioFormSelection";
import { Box } from "@/components/ui/box";

const validationSchema = Yup.object().shape({
  restaurants: Yup.array().of(
    Yup.object().shape({
      halaal: Yup.string().required("Selection is required").label("Halaal"),
    })
  ),
});

const RestaurantForm = () => {
  const initialValues = {
    restaurants: [{ halaal: "" }, { halaal: "" }],
  };

  const handleSubmit = (values: any) => {
    const formattedValues = values.restaurants.map(
      (restaurant: any, index: number) => ({
        [`Restaurant ${index + 1}`]: restaurant.halaal,
      })
    );
    console.log(formattedValues);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 w-full"
        >
          <Box className="flex items-center">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Text className="text-2xl">Name</Text>
                  </TableHead>
                  <TableHead>
                    <Text className="text-2xl">Type</Text>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <FieldArray
                  name="restaurants"
                  render={() => (
                    <>
                      {values.restaurants.map((restaurant, index) => (
                        <TableRow key={index}>
                          <TableData>Restaurant {index + 1}</TableData>
                          <TableData>
                            <RadioFormSection
                              value={restaurant.halaal}
                              onChange={(value: any) =>
                                setFieldValue(
                                  `restaurants[${index}].halaal`,
                                  value
                                )
                              }
                            />
                          </TableData>
                        </TableRow>
                      ))}
                    </>
                  )}
                />
              </TableBody>
              <TableCaption>
                <Text className="font-light text-sm">Restaurants & Types</Text>
              </TableCaption>
            </Table>
            <Button
              action="primary"
              variant="outline"
              onPress={() => handleSubmit()}
              className="bg-blue-500 rounded-md"
            >
              <Text>Submit</Text>
            </Button>
          </Box>
        </ScrollView>
      )}
    </Formik>
  );
};

export default RestaurantForm;
