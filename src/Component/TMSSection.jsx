import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import tmsImage from "../assets/Instalanes-TMS-Process.svg";
import images from "../assets/index";

function TMSSection() {
  const tmsImage2 = images.tmsImage;

  const features = [
    {
      id: 1,
      title: "Load dispatch planner",
      description:
        "Optimize resource allocation and maximize load efficiency with intelligent dispatch planning.",
      points: [
        "Automated load consolidation to minimize empty miles.",
        "Real-time capacity matching for quick assignments.",
        "Dynamic routing for optimal delivery times and costs.",
        "Centralized visibility into fleet and load status.",
      ],
    },
    {
      id: 2,
      title: "Transport Order",
      description:
        "Simplify order management with automated, accurate, and connected processes.",
      points: [
        "Seamless integration with customer systems for streamlined order creation.",
        "Automated validation and error-free order entry.",
        "Configurable workflows to adapt to unique operational needs.",
        "Instant notifications and updates to stakeholders.",
      ],
    },
    {
      id: 3,
      title: "Rates and Carrier Selection",
      description:
        "Choose the best carriers and pricing options with data-driven insights.",
      points: [
        "Carrier comparison based on cost, performance, and capacity.",
        "AI-powered recommendations for cost-effective decisions.",
        "Instant rate negotiation and contract management.",
        "Configurable rules for automated carrier selection.",
      ],
    },
  ];

  const features2 = [
    {
      id: 4,
      title: "Shipments and tracking",
      description:
        "Gain end-to-end shipment visibility with real-time tracking and updates.",
      points: [
        "Carrier comparison based on cost, performance, and capacity.",
        "AI-powered recommendations for cost-effective decisions.",
        "Instant rate negotiation and contract management.",
        "Configurable rules for automated carrier selection.",
      ],
    },
    {
      id: 5,
      title: "Freight Audit",
      description:
        "Ensure accurate freight billing and eliminate payment discrepancies.",
      points: [
        "Automated invoice matching.",
        "Error detection and dispute management.",
        "Detailed audit reporting.",
        "Integrated financial workflows.",
      ],
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      description:
        "Make smarter decisions with actionable insights from your TMS data.",
      points: [
        "Real-time dashboards for KPIs.",
        "Customizable reporting templates.",
        "Predictive analytics for forecasting.",
        "Drill-down insights for cost control.",
      ],
    },
  ];

  const renderFeatures = (list) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
      {list.map((feature) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={feature.id}
          display="flex"
          justifyContent="center"
        >
          <Card variant="outlined" sx={{ width: "100%", maxWidth: 320, height: "100%" }}>
            <CardMedia
              component="img"
              height="160"
              image={tmsImage2}
              alt={feature.title}
            />
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h6" fontWeight="bold">
                  {feature.title}
                </Typography>
                <ArrowForwardIcon fontSize="small" />
              </Stack>
              <Typography variant="body2" paragraph>
                {feature.description}
              </Typography>
              <Box component="ul" pl={2} m={0}>
                {feature.points.map((point, idx) => (
                  <Typography key={idx} component="li" variant="caption">
                    {point}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box bgcolor="grey.100" py={{ xs: 6, sm: 12 }}>
      <Container maxWidth="lg">
        <Stack spacing={3} mb={6} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h5" color="primary">
            Digital TMS platform solutions
          </Typography>
          <Typography variant="h4">
            Instalanes digitizes your entire transportation process, solving
            real industry challenges
          </Typography>
          <Box textAlign="center">
            <Box
              component="img"
              src={tmsImage}
              alt="TMS Process"
              width="100%"
              maxWidth={900}
            />
          </Box>
        </Stack>

        {/* Render both rows */}
        {renderFeatures(features)}
        {renderFeatures(features2)}
      </Container>
    </Box>
  );
}

export default TMSSection;
