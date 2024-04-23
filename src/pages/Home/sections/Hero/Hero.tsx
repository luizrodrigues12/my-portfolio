import { Box, Container, Grid, Typography, styled } from "@mui/material";
import avatar from "../../../../../public/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const Styledhero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <Styledhero>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width="150%" top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign={"center"}>
                  <StyledImage src={avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography
                color={"primary.contrastText"}
                variant="h1"
                textAlign={"center"}
              >
                Luiz Otávio
              </Typography>
              <Typography
                color={"primary.contrastText"}
                variant="h2"
                textAlign={"center"}
                pb={2}
              >
                I'm a FrontEnd Developer
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Styledhero>
    </>
  );
};

export default Hero;
