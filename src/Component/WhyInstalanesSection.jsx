import React from "react";
import { Box, Container, Stack, Typography, Paper } from "@mui/material";

const features = [
  {
    value: "9x",
    title: "Visibility",
    desc: "Nine-layered visibility gives you unmatched control and understanding of what’s happening on your network. See everything at a glance",
  },
  {
    value: "100%",
    title: "Collaboration",
    desc: "Boost your teams productivity and experience. Empower your team, enhance effectiveness of your teams",
  },
  {
    value: "~30%",
    title: "Optimization",
    desc: "By digitizing your processes, you can eliminate manual tasks and standardize your operations to lower costs.",
  },
  {
    value: "~2x",
    title: "Growth",
    desc: "The network provides opportunities for businesses to expand quickly and help businesses grow rapidly in new geographic areas",
  },
];

export default function WhyInstalanesSection() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: { xs: 8, sm: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign="left">
          <Typography variant="h6" color="primary" fontWeight="none">
            Why Instalanes platform
          </Typography>
          <Typography variant="h5" fontWeight="normal">
            Instalanes is a Collaborative TMS platform that helps Business leaders generate real business outcomes, they care for!
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {features.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(25% - 18px)" },
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  mb: { xs: 3, sm: 0 },
                }}
              >
                <Typography variant="h4" fontWeight="bold">
                  {item.value}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
