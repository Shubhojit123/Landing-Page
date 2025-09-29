import React from "react";
import {
    Box,
    Container,
    Stack,
    Typography,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from "@mui/material";
import tmsImage from "../assets/Instalanes-TMS-Process.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import images from "../assets/index"

function TMSSection() {
    const tmsImage2 = images.tmsImage
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
            id: 6,
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
    ]

    return (
        <Box sx={{ bgcolor: "#f4f4f4", py: { xs: 6, sm: 12 } }}>
            <Container maxWidth="lg">
                <Stack spacing={3} mb={6} textAlign={{ xs: "center", md: "left" }}>
                    <Typography variant="h5" color="primary">
                        Digital TMS platform solutions
                    </Typography>
                    <Typography variant="h4">
                        Instalanes digitizes your entire transportation process, solving real
                        industry challenges
                    </Typography>
                    <Box>
                        <Box
                            component="img"
                            src={tmsImage}
                            alt="TMS Process"
                            sx={{ width: "100%",  mx: "auto" }}
                        />
                    </Box>
                </Stack>

               <Box spacing={4} mb={6}>
                 <Stack
                    spacing={4}
                    justifyContent="space-between"
                    sx={{ flexWrap: "wrap" }}
                    direction={{ xs: "column", sm: "row" }}
                >
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            sx={{
                                flex: "1 1 calc(33.333% - 16px)", 
                                maxWidth: 345,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
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
                                            gap: 1,
                                            fontWeight: "bold",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        {feature.title}
                                        <ArrowForwardIcon />
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
                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>
                 <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                    sx={{ flexWrap: "wrap", mt:4 }}
                >
                    {features2.map((feature) => (
                        <Card
                            key={feature.id}
                            sx={{
                                flex: "1 1 calc(33.333% - 16px)", 
                                maxWidth: 345,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
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
                                            gap: 1,
                                            fontWeight: "bold",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        {feature.title}
                                        <ArrowForwardIcon />
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
                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>
               </Box>

                

            </Container>
        </Box>
    );
}

export default TMSSection;
