import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import logo from "../assets/templ.jpeg";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const drawerWidth = 240;

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        instalanes
      </Typography>
      <Divider />
      <List>
        {["TMS", "Resources", "Pricing", "Contact Us", "Get Demo"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed" 
        sx={{
          bgcolor: "black",
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box component="img" src={logo} alt="logo" sx={{ height: 30, mr: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: "normal" }}>
                instalanes
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
              <Button sx={{ color: "#fff", fontWeight: "normal", textTransform: "none" }}>
                TMS solution
              </Button>

              <Button
                sx={{ color: "#fff", fontWeight: "normal", textTransform: "none" }}
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleMenuOpen}
              >
                Resources
              </Button>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Blog</MenuItem>
                <MenuItem onClick={handleMenuClose}>Partners</MenuItem>
              </Menu>

              <Button sx={{ color: "#fff", fontWeight: "normal", textTransform: "none" }}>
                Pricing
              </Button>
              <Button sx={{ color: "#fff", fontWeight: "normal", textTransform: "none" }}>
                Contact Us
              </Button>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ fontWeight: "normal", gap: 1, textTransform: "none" }}
              >
                <LaptopChromebookIcon />
                Get Demo
              </Button>
            </Box>

            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default NavBar;
