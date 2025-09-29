import { Box, Container, Grid, Stack, Typography, Link, TextField, Button } from '@mui/material'
import React from 'react'
import { Email } from '@mui/icons-material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Footer() {
    return (
        <Box sx={{ bgcolor: '#000', color: 'white', py: 6, width: '100%' }}>
            <Container maxWidth="lg">
                <Typography variant="h5" fontWeight="500" gutterBottom>
                    Instalanes
                </Typography>
                <Typography variant="body2" sx={{ mb: 4 }}>
                    Instalanes is a Transport management and visibility platform that helps businesses
                    improve their supply chain visibility, collaboration, growth, and efficiency.
                    The platform helps users to manage and track their supply chain, as well as to
                    access performance insights that help teams make better decisions.
                </Typography>

                <Box sx={{ flexGrow: 1, mb: 4, justifyContent: "space-between" }} container spacing={2} component={Grid}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Company
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" underline="hover">About</Link>
                            <Link href="#" color="inherit" underline="hover">Careers</Link>
                            <Link href="#" color="inherit" underline="hover">Terms</Link>
                            <Link href="#" color="inherit" underline="hover">Privacy policy</Link>
                            <Link href="#" color="inherit" underline="hover">Privacy policy for DSignal App</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            TMS Capabilities
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" underline="hover">Consulting</Link>
                            <Link href="#" color="inherit" underline="hover">Data analytics</Link>
                            <Link href="#" color="inherit" underline="hover">Business intelligence</Link>
                            <Link href="#" color="inherit" underline="hover">Process automation</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Resources
                        </Typography>
                        <Stack spacing={1}>
                            <Link href="#" color="inherit" underline="hover">Blogs</Link>
                            <Link href="#" color="inherit" underline="hover">Partnering</Link>
                            <Link href="#" color="inherit" underline="hover">Pricing - Get Quote</Link>
                            <Link href="#" color="inherit" underline="hover">Pay here</Link>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                            Contact us
                        </Typography>
                        <Stack spacing={1}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Email fontSize="small" />
                                <Link href="mailto:contact@instalanes.com" color="inherit" underline="hover">
                                    contact@instalanes.com
                                </Link>
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Email fontSize="small" />
                                <Link href="mailto:careers@instalanes.com" color="inherit" underline="hover">
                                    careers@instalanes.com
                                </Link>
                            </Stack>
                        </Stack>
                    </Grid>
                </Box>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 3, alignItems: 'center' }}
                >
                    <Typography variant="caption" display="block" sx={{ mt: 2 }}>
                        Gravity44 / Copyright © 2024 Instalanes.com. All rights reserved.
                    </Typography>

                    <TextField
                        placeholder="Enter your email for updates"
                        variant="outlined"
                        size="small"
                        sx={{
                            flex: 1,
                            bgcolor: 'transparent',
                            '& .MuiOutlinedInput-root': {
                                bgcolor: 'transparent',
                                '& fieldset': {
                                    borderColor: '#ccc',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#888',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#555',
                                },
                            },
                            '& .MuiInputBase-input::placeholder': {
                                color: 'gray',
                                opacity: 1,
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: 'white',
                            color: 'black',
                            px: 3,
                            '&:hover': { bgcolor: '#ddd' },
                        }}
                    >
                        <ArrowForwardIcon/>
                        Subscribe

                    </Button>
                </Stack>

            </Container>
        </Box>
    )
}

export default Footer
