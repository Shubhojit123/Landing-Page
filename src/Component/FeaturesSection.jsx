
import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import {
  Smartphone,
  FileText,
  Bell,
  Eye,
  ArrowRight,
  Folder,
  Mail,
  Settings,
  BarChart3,
  Monitor,
  Users,
  Network,
  Zap,
  UserCheck,
  Globe,
} from "lucide-react"; 

const features = [
  { icon: Smartphone, title: "Mobile driven", description: "Run logistics anytime, anywhere effortlessly" },
  { icon: FileText, title: "Instant PoD & Invoicing", description: "Fast proof of delivery and billing" },
  { icon: Bell, title: "Smart notifications", description: "Stay ahead with timely updates and alerts" },
  { icon: Eye, title: "Control tower view", description: "Full operational visibility in one place" },
  { icon: ArrowRight, title: "Next action ready", description: "Your next action is visible and a click away" },
  { icon: Folder, title: "Centralized documentation", description: "Access all documents from one location" },
  { icon: Mail, title: "Auto status reporting", description: "Customized reports delivered automatically" },
  { icon: Settings, title: "API-Enabled", description: "Easily integrate with your existing systems" },
  { icon: BarChart3, title: "Data intelligence", description: "Boost revenue, reduce costs, improve KPIs" },
  { icon: Monitor, title: "Intuitive interface", description: "Easy-to-use design for all users" },
  { icon: Users, title: "Neutral SaaS platform", description: "Open collaboration across all stakeholders" },
  { icon: Network, title: "Networked & Collaborative", description: "Seamless teamwork within and across entities" },
  { icon: Zap, title: "Quick implementation", description: "Rapid setup in days, not months" },
  { icon: UserCheck, title: "Built for everyone", description: "Designed for all, including C-level executives" },
  { icon: Globe, title: "Global & Scalable", description: "Designed for global operations and growth" },
];

export default function FeaturesSection() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 6, sm: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="left" mb={6}>
          <Typography variant="h6" color="primary">
            Features
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            Instalanes platform makes you standout in front of your Customers by offering
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" },
            gap: 1,
          }}
        >
          {features.map((feature, index) => {
            const IconComp = feature.icon;
            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Stack spacing={2} alignItems="flex-start">
                  <IconComp size={28} sx={{color:"#000000ff"}} />
                  <Typography variant="subtitle1" fontWeight="bold">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Stack>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

