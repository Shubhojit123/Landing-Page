import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import images from "../assets/index";

export default function ChallengeSection() {
  const challengeImage = images.challengeImage;
  const challengeImage2 = images.challengeImage2;

  return (
    <Box bgcolor="white" py={{ xs: 8, sm: 12 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
        >
          {/* Left content block */}
          <Stack spacing={3} flex={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h5" color="primary">
              Solving the big challenge
            </Typography>

            <Typography variant="h4">
              Simplifying the complex manual chaos, digitally
            </Typography>

            <Typography variant="h4" fontWeight="bold">
              What Supply Chain leaders want .. ?
            </Typography>

            <Typography variant="body1">
              Efficient and visible supply chain management is the goal of every
              business leader. Having a clear understanding of the supply chain
              and being able to track it in real time is critical for running a
              successful operation and expanding the business.
            </Typography>

            {/* Challenge block */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
            >
              <Stack
                spacing={2}
                flex={1}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography variant="h4" fontWeight="bold">
                  The Challenge
                </Typography>
                <Typography variant="body1">
                  However, managing the supply chain and maintaining visibility
                  across all teams, systems, documents, and process handoffs is
                  extremely complex. Organizations are still relying on emails
                  and phone calls to manage and track.
                </Typography>
                <Typography variant="body1">
                  This leads to a complex way of working, additional logistics
                  costs, poor experience, and low operational control.
                </Typography>
              </Stack>

              <Box flex={1} textAlign="center">
                <Box
                  component="img"
                  src={challengeImage}
                  alt="Challenge"
                  width="100%"
                  maxWidth={500}
                />
              </Box>
            </Stack>

            {/* Solution block */}
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
            >
              <Box flex={1} textAlign="center">
                <Box
                  component="img"
                  src={challengeImage2}
                  alt="Solution"
                  width="100%"
                  maxWidth={500}
                />
              </Box>

              <Stack
                spacing={2}
                flex={1}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography variant="h4" fontWeight="bold">
                  The Digital Solution
                </Typography>
                <Typography variant="body1">
                  However, managing the supply chain and maintaining visibility
                  across all teams, systems, documents, and process handoffs is
                  extremely complex. Organizations are still relying on emails
                  and phone calls to manage and track.
                </Typography>
                <Typography variant="body1">
                  This leads to a complex way of working, additional logistics
                  costs, poor experience, and low operational control.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
