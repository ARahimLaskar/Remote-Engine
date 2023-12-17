// import React, { useState } from "react";
// import {
//   Stepper,
//   Step,
//   StepLabel,
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Textarea,
// } from "@chakra-ui/react";

// const steps = [
//   { title: "First", description: "Contact Info" },
//   { title: "Second", description: "Date & Time" },
//   { title: "Third", description: "Select Rooms" },
// ];

// const FormStep = ({ step }) => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Perform form submission logic here, e.g., API calls, etc.
//     console.log("Form data:", formData);
//   };

//   return (
//     <Step>
//       <StepLabel>{steps.title}</StepLabel>
//       <Box>
//         <FormControl id="name">
//           <FormLabel>{step.description}</FormLabel>
//           {/* Add form fields relevant to the step */}
//           {step.title === "First" && (
//             <Input
//               type="text"
//               name="name"
//               value={formData.name || ""}
//               onChange={handleChange}
//             />
//           )}
//           {step.title === "Second" && (
//             <Textarea
//               name="notes"
//               value={formData.notes || ""}
//               onChange={handleChange}
//             />
//           )}
//           {/* Add more form fields for each step */}
//         </FormControl>
//         <Button onClick={handleSubmit} mt={4}>
//           {step.title === "Third" ? "Submit" : "Next"}
//         </Button>
//       </Box>
//     </Step>
//   );
// };

// const MultiStepForm = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   return (
//     <Stepper activeStep={activeStep} orientation="vertical">
//       {steps.map((step, index) => (
//         <FormStep key={index} step={step} />
//       ))}
//     </Stepper>
//   );
// };

// export default MultiStepForm;
