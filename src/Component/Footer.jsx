import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  TextField,
  Button,
} from "@mui/material";
import { Email, ArrowForward } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box bgcolor="grey.900" color="common.white" py={{ xs: 6, md: 10 }}>
      <Container maxWidth="lg">
        {/* Brand */}
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Instalanes
        </Typography>
        <Typography variant="body2" mb={4}>
          Instalanes is a Transport management and visibility platform that helps
          businesses improve their supply chain visibility, collaboration, growth,
          and efficiency. The platform helps users manage and track their supply
          chain, and access performance insights for better decisions.
        </Typography>

        {/* Links */}
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Company
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">About</Link>
              <Link href="#" color="inherit" underline="hover">Careers</Link>
              <Link href="#" color="inherit" underline="hover">Terms</Link>
              <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
              <Link href="#" color="inherit" underline="hover">DSignal App Privacy</Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              TMS Capabilities
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Consulting</Link>
              <Link href="#" color="inherit" underline="hover">Data Analytics</Link>
              <Link href="#" color="inherit" underline="hover">Business Intelligence</Link>
              <Link href="#" color="inherit" underline="hover">Process Automation</Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">Blogs</Link>
              <Link href="#" color="inherit" underline="hover">Partnering</Link>
              <Link href="#" color="inherit" underline="hover">Pricing - Get Quote</Link>
              <Link href="#" color="inherit" underline="hover">Pay Here</Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Link href="mailto:contact@instalanes.com" color="inherit" underline="hover">
                  contact@instalanes.com
                </Link>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email fontSize="small" />
                <Link href="mailto:careers@instalanes.com" color="inherit" underline="hover">
                  careers@instalanes.com
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="caption" textAlign="center">
            Gravity44 / Copyright © 2024 Instalanes.com. All rights reserved.
          </Typography>

          <TextField
            placeholder="Enter your email "
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "grey.800",
              "& .MuiOutlinedInput-root": {
                bgcolor: "grey.800",
                "& fieldset": { borderColor: "grey.600" },
                "&:hover fieldset": { borderColor: "grey.500" },
                "&.Mui-focused fieldset": { borderColor: "grey.400" },
              },
              "& .MuiInputBase-input::placeholder": { color: "grey.400", opacity: 1 },
            }}
          />

          <Button
            variant="contained"
            color="inherit"
            startIcon={<ArrowForward />}
            sx={{
              bgcolor: "common.white",
              color: "grey.900",
              "&:hover": { bgcolor: "grey.300" },
            }}
          >
            Subscribe
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
