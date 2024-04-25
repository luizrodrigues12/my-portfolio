import { Box, Container, Grid, Typography, styled } from "@mui/material";
import avatar from "../../../../assets/images/avatar.jpg";
import Curriculo from "../../../../assets/files/curriculo-luiz.pdf";
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
    [theme.breakpoints.up(375)]: {},
    [theme.breakpoints.up(413)]: {
      marginTop: "0",
    },
    [theme.breakpoints.up(768)]: {
      marginTop: "0",
    },
    [theme.breakpoints.up("md")]: {},
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    filter: "saturate(80%)",
    [theme.breakpoints.up("xs")]: {
      width: "65%",
    },
    [theme.breakpoints.up(413)]: {
      width: "75%",
    },
    [theme.breakpoints.up(520)]: {
      width: "50%",
    },
    [theme.breakpoints.up(700)]: {
      width: "40%",
    },

    [theme.breakpoints.up("md")]: {
      width: "80%",
    },
  }));

  return (
    <>
      <Styledhero>
        <Container maxWidth={"lg"}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width="150%" top={-150} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign={"center"}>
                  <StyledImage src={avatar} />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
            >
              <Typography
                color={"primary.contrastText"}
                variant="h1"
                textAlign={"center"}
                className="principal-name"
              >
                Luiz Otávio
                <hr className="hr-hero" />
              </Typography>
              <Typography
                color={"primary.contrastText"}
                variant="h2"
                pb={2}
                className="writing"
              >
                FrontEnd Developer
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
                  <StyledButton
                    onClick={() => console.log("download")}
                    href={Curriculo}
                    width="100%"
                  >
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
                  <StyledButton
                    onClick={() => console.log("Contact")}
                    href="mailto:luizrodrigues2021@icloud.com"
                    width="100%"
                  >
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
