import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    padding: "60px 0px 80px 0px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "0px",
    },
  }));

  const StyledCard = styled(Card)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    gap: "5px",
    textAlign: "center",
    padding: "10px",
    boxShadow: "0px 0px 3px rgb(0,0,0,0.5)",
    "&:hover": {
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "0px 0px 5px rgb(0,0,0,0.5)",
    },
  }));

  const StyledSkillCard = styled("div")(({ theme }) => ({
    width: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    boxShadow: "0px 0px 3px rgb(0,0,0,0.5)",
    fontSize: "1.5em",
    paddingBottom: "5px",
    height: "40px",
    [theme.breakpoints.up("md")]: {
      width: "200px",
    },
    "&:hover": {
      backgroundColor: "rgb(240,240,240)",
    },
  }));
  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Grid
            container
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Grid item xs={12} md={12}>
              <Typography variant="h2" marginBottom={5} textAlign={"center"}>
                About Me
              </Typography>
              <StyledCard>
                <SchoolIcon fontSize="large" />
                <Typography variant="h5">Education</Typography>
                <Typography variant="subtitle2" fontSize={"1em"}>
                  Studying Software Engineering
                </Typography>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                textAlign={"justify"}
                variant="subtitle1"
                marginTop={"35px"}
                maxWidth={"900px"}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                necessitatibus esse laudantium dicta aliquid ut sequi harum
                natus nostrum quae reprehenderit provident, architecto magni
                eaque mollitia, doloremque ipsam, eveniet distinctio.
              </Typography>
              <hr
                style={{
                  height: "2px",
                  border: "none",
                  backgroundColor: "black",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography variant="h2" mb={5} mt={2} textAlign={"center"}>
                Skills
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"15px"}
                flexWrap={"wrap"}
                maxWidth={"950px"}
              >
                <StyledSkillCard>Javascript</StyledSkillCard>
                <StyledSkillCard>Typescript</StyledSkillCard>
                <StyledSkillCard>React</StyledSkillCard>
                <StyledSkillCard>Next</StyledSkillCard>
                <StyledSkillCard>Git</StyledSkillCard>
                <StyledSkillCard>HTML</StyledSkillCard>
                <StyledSkillCard>CSS</StyledSkillCard>
                <StyledSkillCard>Node</StyledSkillCard>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
