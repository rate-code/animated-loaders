import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
import HalfRingSpinner from "./components/HalfRingSpinner";
import DualToneSpinner from "./components/DualToneSpinner";
import SwirlMaskSpinner from "./components/SwirlMaskSpinner";
import NeonFlareSpinner from "./components/NeonFlareSpinner";
import AquaPulseSpinner from "./components/AquaPulseSpinner";
import MoonRippleSpinner from "./components/MoonRippleSpinner";
import SunPearlSpinner from "./components/SunPearlSpinner";
import AquaCornerSpinner from "./components/AquaCornerSpinner";
import RosePulseSpinner from "./components/RosePulseSpinner";
import RotateDotSpinner from "./components/RotateDotSpinner";
import CircularDotSpinner from "./components/CircularDotSpinner";
import StylizedOrbitSpinner from "./components/StylizedOrbitSpinner";
import TripleRingSpinner from "./components/TripleRingSpinner";
import LayeredRotatingSpinner from "./components/LayeredRotatingSpinner";
import OrbitalDotSpinner from "./components/OrbitalDotSpinner";
import RotatingCrosshairSpinner from "./components/RotatingCrosshairSpinner";

const loaders = [
  { name: "Orbital Dot Spinner", component: <OrbitalDotSpinner /> },
  { name: "Half Ring Spinner", component: <HalfRingSpinner /> },
  { name: "Dual Tone Spinner", component: <DualToneSpinner /> },
  { name: "Swirl Mask Spinner", component: <SwirlMaskSpinner /> },
  { name: "Neon Flare Spinner", component: <NeonFlareSpinner /> },
  { name: "Rotate Dot Spinner", component: <RotateDotSpinner /> },
  { name: "Aqua Pulse Spinner", component: <AquaPulseSpinner /> },
  { name: "Sun Pearl Spinner", component: <SunPearlSpinner /> },
  { name: "Aqua Corner Spinner", component: <AquaCornerSpinner /> },
  { name: "Rose Pulse Spinner", component: <RosePulseSpinner /> },
  { name: "Moon Ripple Spinner", component: <MoonRippleSpinner /> },
  { name: "Circular Dot Spinner", component: <CircularDotSpinner /> },
  { name: "Stylized Orbit Spinner", component: <StylizedOrbitSpinner /> },
  { name: "Triple Ring Spinner", component: <TripleRingSpinner /> },
  { name: "Layered Rotating Spinner", component: <LayeredRotatingSpinner /> },
  {
    name: "Rotating Crosshair Spinner",
    component: <RotatingCrosshairSpinner />,
  },
];

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  height: "40vh",
  color: (theme.vars ?? theme).palette.text.secondary,
  boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "column",
  justifyContent: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: "30px",
        }}
      >
        Pre Loaders
      </Typography>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        mb={"50px"}
        className="card"
      >
        {loaders.map((loader, index) => (
          <Grid size={{ xs: 2, sm: 4, md: 4 }} key={index}>
            <Item>
              <Box
                sx={{
                  height: "90%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {loader?.component}
              </Box>
              <Typography align="center" width={"100%"} fontWeight={"bold"}>
                {loader?.name}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
