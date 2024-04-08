import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";



interface stepperInterface {
  steps: string[];
  activeStep: number;
  setActiveStep: any;
}

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  flex: "1 1 auto",
  position: "absolute",
  top: "28px",
  left: "calc(-50% + 20px)",
  right: "calc(50% + 20px)",
  "& .MuiStepConnector-line": {
    borderColor: "#F5F5F5", // Default line color
    borderStyle: "dashed",
    borderWidth: "1px", // Adjust this value to increase the width of the dashed border
    // Apply active line style
    [`&.${theme.palette.mode === "dark" ? "Mui-active" : ""}`]: {
      borderColor: "#42C53F", // Green color for the active line
    },
  },
}));

// Update CustomStepIcon to include bold text
const CustomStepIcon = (props) => {
  const { active, completed, icon, next } = props;

  return (
    <Box
      sx={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: next
          ? "#FFFBF2"
          : active || completed
          ? "#F2FFF4"
          : "#F5F5F5",
        color: next ? "#DCAB2E" : active || completed ? "#42C53F" : "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold", // Make the number bold
        zIndex: "10",
      }}
    >
      {icon}
    </Box>
  );
};

function StepperRace({ activeStep, setActiveStep, steps }: stepperInterface) {
  const [connectorColor, setConnectorColor] = React.useState("#F5F5F5"); // Default line color

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextActiveStep = prevActiveStep + 1;
      setConnectorColor(nextActiveStep < steps.length ? "#FF0000" : "#F5F5F5"); // Red color for the line before the next step
      return nextActiveStep;
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<CustomConnector color={connectorColor} />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={(stepProps) => (
                <CustomStepIcon
                  {...stepProps}
                  completed={index < activeStep}
                  next={index === activeStep + 1}
                />
              )}
              sx={{
                "& .MuiStepLabel-label": {
                  fontWeight: "bold", // Make the title text bold
                  color: index === activeStep + 1 ? "#DCAB2E" : "inherit", // Specific color for the next step title
                  "&.Mui-active, &.Mui-completed": {
                    color: "#42C53F", // Active and completed steps
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      {/* <Button onClick={handleNext}>Next</Button> */}
    </Box>
  );
}

export default StepperRace;
