import { Box, Stack, Typography, Container, Card, CardContent, CardActionArea, CardMedia } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EastIcon from '@mui/icons-material/East';
import images from "../assets/index"

    const tmsImage = images.tmsImage
function TMSSection2() {
    const tmsImage2 = images.tmsImage2
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
    ];

    const features3 = [
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
    ];


    return (
        <Box sx={{ bgcolor: "#fff", py: { xs: 8, sm: 12 } }}>
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 4, md: 6 }}
                    alignItems="center"
                    mb={6}
                >
                    <Stack spacing={2} flex={1} textAlign={{ xs: "center", md: "left" }} >
                        <Typography variant="h5" fontWeight="bold" color='primary'>
                            Capabilities enablers
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 400 }}>
                            Instalanes platform offers your team powerful capabilities to manage transportation logistics anytime, anywhere
                        </Typography>
                        <EastIcon sx={{ fontSize: "55px", fontWeight: "bold" }} />
                    </Stack>

                    <Box flex={1} sx={{ textAlign: "center" }}>
                        <Box
                            component="img"
                            src={tmsImage2}
                            alt="Challenge"
                            sx={{ width: "100%", maxWidth: 500 }}
                        />
                    </Box>
                </Stack>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={4}
                    justifyContent="space-between"
                    sx={{ flexWrap: "wrap" }}
                >
                    {features.map((feature) => (
                        <Card
                            key={feature.id}
                            sx={{
                                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(33.333% - 16px)" },
                                maxWidth: 345,
                                mb: 4,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={tmsImage}
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
                    sx={{ flexWrap: "wrap", mt: 4 }}
                >
                    {features2.map((feature) => (
                        <Card
                            key={feature.id}
                            sx={{
                                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(33.333% - 16px)" },
                                maxWidth: 345,
                                mb: 4,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={tmsImage}
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
                    gap={4}
                    sx={{ flexWrap: "wrap", mt: 4 }}
                >
                    {features3.map((feature) => (
                        <Card
                            key={feature.id}
                            sx={{
                                flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: "1 1 calc(33.333% - 16px)" },
                                maxWidth: 345,
                                mb: 4,
                            }}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={tmsImage}
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

            </Container>
        </Box>
    )
}

export default TMSSection2
