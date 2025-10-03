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

function TMSSection2() {
  const tmsImage2 = images.tmsImage;

  const features1 = [
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
    {
      id: 7,
      title: "Extra Feature 1",
      description:
        "Another capability to enhance efficiency in your transport process.",
      points: [
        "Point 1 for extra feature.",
        "Point 2 for extra feature.",
        "Point 3 for extra feature.",
        "Point 4 for extra feature.",
      ],
    },
    {
      id: 8,
      title: "Extra Feature 2",
      description: "Additional functionality for better optimization.",
      points: [
        "Custom logic for scaling.",
        "Integrations with ERP systems.",
        "Cost management automation.",
        "Performance monitoring.",
      ],
    },
  ];

  const renderFeatures = (list) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
      {list.map((feature) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={feature.id}
          display="flex"
          justifyContent="center"
        >
          {/* ✅ Outlined, non-clickable Card */}
          <Card variant="outlined" sx={{ width: "100%", maxWidth: 280, height: "100%" }}>
            <CardMedia
              component="img"
              height="160"
              image={tmsImage2}
              alt={feature.title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                {feature.title}
                <ArrowForwardIcon fontSize="small" />
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {feature.description}
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                {feature.points.map((point, idx) => (
                  <Typography
                    key={idx}
                    component="li"
                    variant="caption"
                    sx={{ listStyleType: "disc" }}
                  >
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
    <Box sx={{  py: { xs: 6, sm: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3} mb={6} textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h5" color="primary">
            Digital TMS platform solutions
          </Typography>
          <Typography variant="h4">
            Instalanes digitizes your entire transportation process, solving
            real industry challenges
          </Typography>
          <Box>
            <Box
              component="img"
              src={tmsImage}
              alt="TMS Process"
              sx={{ width: "100%", mx: "auto" }}
            />
          </Box>
        </Stack>

        {renderFeatures(features1)}
        {renderFeatures(features2)}
      </Container>
    </Box>
  );
}

export default TMSSection2;
