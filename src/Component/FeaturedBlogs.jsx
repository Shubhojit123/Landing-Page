import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from "@mui/material";

import Img1 from "../assets/Uber-Freight-Quarterly-Market-Update-Report-2-944x500-1-300x159.jpg";
import Img2 from "../assets/UFTMSVideoCover-e1722632758987-1440x759-1-300x158.jpg";

const blogs = [
  {
    title: "Deliver 2024 fostering innovation and impact",
    date: "September 11, 2024",
    category: "FREIGHT",
    image: Img1,
  },
  {
    title: "Embracing efficiency with TMS implementation",
    date: "August 19, 2024",
    category: "FREIGHT",
    image: Img2,
  },
  {
    title: "Freight market update: Q3 – August 2024",
    date: "August 19, 2024",
    category: "FREIGHT",
    image: Img1,
  },
];

export default function FeaturedBlogs() {
  return (
    <Box sx={{ bgcolor: "grey.100", py: { xs: 6, sm: 10 } }}>
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Stack spacing={1} mb={4}>
          <Typography variant="h6" color="primary">
            Featured Blogs
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Industries
          </Typography>
        </Stack>

        {/* Blog Cards */}
        <Grid container spacing={3}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 2,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <Chip
                    label={blog.category}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      bgcolor: "grey.50",
                      fontWeight: "bold",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    component="a"
                    href="#"
                    sx={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      display: "block",
                      mb: 1,
                      color: "text.primary",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
