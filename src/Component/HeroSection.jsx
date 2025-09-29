import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import images from "../assets/index"

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
        <Box
            sx={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                py: { xs: 8, sm: 12 },

            }}
        >
            <Container maxWidth="lg">
                <Stack
                    spacing={3}
                    alignItems="flex-start"
                    textAlign="left"
                    sx={{ maxWidth: "100%" }}
                >



                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 1 }}
                    >
                        <Typography variant="h4" fontWeight="normal" sx={{ color: "#5977fdff" }}>
                            {texts[index]}
                        </Typography>
                    </motion.div>

                    <Typography variant="h2" fontWeight="normal">
                        Transport Management System
                    </Typography>

                    <Typography variant="body1" sx={{ opacity: 0.9, fontWeight: "normal" }}>
                        Cloud-based SaaS TMS and visibility platform for 3PLs, Shippers,
                        LSPs, Transporters, and Carriers, enabling end-to-end efficient
                        transportation logistics operations and collaboration.
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        sx={{ fontWeight: 600, textTransform: "none", gap: 1 }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Schedule Demo
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default HeroSection;
