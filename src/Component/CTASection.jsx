import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

export default function CTASection() {
  return (
    <Box
      bgcolor="primary.main"       
      color="common.white"
      py={{ xs: 8, md: 12 }}
      textAlign="center"
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <Typography
            variant="h5"
            component="h3"
            fontWeight="bold"
            lineHeight={1.4}      
          >
            Streamline your transportation process and scale with ease — elevate
            your business performance with Instalanes TMS!
          </Typography>

          <Typography
            variant="body2"
            color="common.white"
            sx={{ opacity: 0.9, maxWidth: 800 }}
          >
            Instalanes is a transport management and visibility platform that helps
            businesses improve supply chain visibility, collaboration, growth, and efficiency.
            The platform enables users to manage and track their supply chain while accessing
            performance insights for better decision-making.
          </Typography>

          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            color="secondary"        
            size="large"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              bgcolor: "common.black",
              "&:hover": { bgcolor: "grey.900" },
            }}
          >
            Contact our expert
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
