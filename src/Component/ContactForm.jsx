import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Stack,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import img1 from "../assets/Alex-Smith.jpeg";
import img2 from "../assets/1657555872396.jpg";

export default function ContactForm() {
  return (
    <Box
      sx={{
        bgcolor: "grey.100",
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "grey.100",
            borderRadius: 2,
          }}
        >
          {/* Heading */}
          <Typography
            variant="body1"
            color="primary"
            gutterBottom
            textAlign="center"
          >
            We'd love to talk about how we can work together.
          </Typography>

          <Grid container spacing={4}>
            {/* Left Side - Team Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Talk to us
              </Typography>

              <Stack spacing={2}>
                <Card variant="outlined" sx={{ width: "100%" }}>
                  <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={img2} alt="Priyanka S" />
                    <Box>
                      <Typography variant="body2" fontWeight="bold" color="primary">
                        Sales Manager
                      </Typography>
                      <Typography variant="body2">Priyanka S</Typography>
                    </Box>
                  </CardContent>
                </Card>

                <Card variant="outlined" sx={{ width: "100%" }}>
                  <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={img1} alt="Lucky S" />
                    <Box>
                      <Typography variant="body2" fontWeight="bold" color="primary">
                        Sales Manager
                      </Typography>
                      <Typography variant="body2">Lucky S</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>

            {/* Right Side - Form */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Submit your details
              </Typography>

              <Stack spacing={2}>
                <TextField label="Full name" variant="outlined" fullWidth />
                <TextField label="Email" variant="outlined" fullWidth />

                <Grid container spacing={2}>
                  <Grid item xs={4} sm={3}>
                    <TextField label="Code" variant="outlined" value="+91" fullWidth disabled />
                  </Grid>
                  <Grid item xs={8} sm={9}>
                    <TextField label="Mobile number" variant="outlined" fullWidth />
                  </Grid>
                </Grid>

                <FormControl fullWidth>
                  <InputLabel>Purpose</InputLabel>
                  <Select defaultValue="demo" label="Purpose">
                    <MenuItem value="demo">Platform demo</MenuItem>
                    <MenuItem value="support">Support</MenuItem>
                    <MenuItem value="sales">Sales Inquiry</MenuItem>
                  </Select>
                </FormControl>

                <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />

                <FormControlLabel control={<Checkbox />} label="I'm not a robot" />

                <Box textAlign="right">
                  <Button variant="contained" startIcon={<CallIcon />} sx={{ bgcolor: "black", color: "white" }}>
                    Get call back
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
