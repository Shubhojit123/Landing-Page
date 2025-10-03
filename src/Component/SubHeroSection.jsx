"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";

const steps = [
  { id: 1, title: "Dispatch planner" },
  { id: 2, title: "Transport order" },
  { id: 3, title: "Rates and Carrier" },
  { id: 4, title: "Shipments and tracking" },
  { id: 5, title: "PoD and Billing" },
  { id: 6, title: "Reporting Intelligence" },
];

export default function SubHeroSection() {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth < 790);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box bgcolor="grey.300" py={{ xs: 8, sm: 12 }}>
      <Container maxWidth="lg">
        {!isTab && (
          <Stack spacing={4} alignItems="flex-start" textAlign="left">
            <Typography variant="h5" color="primary">
              Instalanes TMS - the all-in-one unified platform for transportation logistics
            </Typography>

            <Typography variant="h4">
              Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments
              with a unified TMS for Shippers, Carriers, 3PLs, and LSPs
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
            >
              {steps.map((step, index) => (
                <Stack key={step.id} direction="row" alignItems="center">
                  <Paper elevation={3} square={false}>
                    <Stack
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      p={3}
                      minWidth={160}
                      bgcolor="black"
                      color="white"
                    >
                      <Typography variant="h6">{step.id}</Typography>
                      <Typography variant="body2">{step.title}</Typography>
                    </Stack>
                  </Paper>
                  {index < steps.length - 1 && (
                    <EastIcon fontSize="medium" />
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
        )}

        {isTab && (
          <Stack spacing={4} textAlign="left">
            <Typography variant="h5" color="primary">
              Instalanes TMS - the all-in-one unified platform for transportation logistics
            </Typography>

            <Typography variant="h4">
              Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments
              with a unified TMS for Shippers, Carriers, 3PLs, and LSPs
            </Typography>

            <Grid container spacing={3} alignItems="stretch" justifyContent="center">
              {steps.map((step) => (
                <Grid item key={step.id} xs={12} sm={6}>
                  <Paper elevation={3} square={false}>
                    <Stack
                      spacing={1}
                      alignItems="center"
                      justifyContent="center"
                      p={3}
                      bgcolor="black"
                      color="white"
                      height="100%"
                    >
                      <Typography variant="h6">{step.id}</Typography>
                      <Typography variant="body2">{step.title}</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
