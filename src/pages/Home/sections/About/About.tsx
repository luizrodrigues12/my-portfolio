import { Card, Container, Grid, Typography, styled } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    height: "60vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "0px",
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
    boxShadow: "0px 0px 6px rgb(0,0,0,0.2)",
    "&:hover": {
      boxShadow: "0px 0px 6px rgb(0,0,0,0.4)",
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
            padding={0}
          >
            <Typography variant="h2" marginBottom={5} textAlign={"center"}>
              About Me
            </Typography>
            <Grid item xs={12} md={12}>
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
          </Grid>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
