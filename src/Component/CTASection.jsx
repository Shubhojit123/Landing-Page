

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CTASection() {
  return (
    <Box
      sx={{
        bgcolor: "#4169e1", 
        color: "common.white",
        py: { xs: 8, md: 12 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h5"
            component="h3"
            fontWeight="bold"
            sx={{ lineHeight: 1.4 }}
          >
            Streamline your transportation process and scale with ease — elevate
            your business performance with Instalanes TMS !
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: "common.white", opacity: 0.9, maxWidth: 800 }}
          >
            Instalanes is a Transport management and visibility platform that helps
            businesses improve their supply chain visibility, collaboration, growth,
            and efficiency. The platform helps users to manage and track their supply
            chain, as well as to access performance insights that help teams make
            better decisions.
          </Typography>

          <Button
            variant="contained"
            color="inherit"
            size="large"
            startIcon={<PhoneIcon />}
            sx={{
              bgcolor: "common.black",
              color: "common.white",
              "&:hover": {
                bgcolor: "grey.900",
              },
            }}
          >
            Contact our expert
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

