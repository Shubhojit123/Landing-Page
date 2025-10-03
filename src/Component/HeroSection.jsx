import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import images from "../assets/index";

function HeroSection() {
  const texts = ["Switch to Instalanes", "Switch to Better"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      square
      elevation={0}
      component={Box}
      display="flex"
      alignItems="center"
      minHeight="70vh"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="flex-start">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              {texts[index]}
            </Typography>
          </motion.div>

          <Typography variant="h2" gutterBottom>
            Transport Management System
          </Typography>

          <Typography variant="body1" paragraph>
            Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers,
            LSPs, Transporters, and Carriers, enabling end-to-end efficient
            transportation logistics operations and collaboration.
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Schedule Demo
          </Button>
        </Stack>
      </Container>
    </Paper>
  );
}

export default HeroSection;
