import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import avatar from "../../../../assets/images/avatar.jpg";
import { Container, Grid, styled } from "@mui/material";

const Projects = () => {
  // Styled Projects Container
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "40px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {},
    [theme.breakpoints.up("md")]: {},
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Grid
          container
          display={"flex"}
          gap={"40px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Grid item xs={12} md={5}>
            <ProjectCard
              src={avatar}
              technologies="Javascript, React, Node and Express"
              projectLink=""
              codeLink=""
              projectName="To-do List"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
              molestias aliquid, officiis, quibusdam non incidunt animi nulla
              dolor sequi consequuntur quidem quia corporis! Eveniet obcaecati
              accusantium dolore exercitationem nemo.
            </ProjectCard>
          </Grid>
          <Grid item xs={12} md={5}>
            <ProjectCard
              src={avatar}
              technologies="Javascript, React, Node and Express"
              projectLink=""
              codeLink=""
              projectName="Undefined"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum
              molestias aliquid, officiis, quibusdam non incidunt animi nulla
              dolor sequi consequuntur quidem quia corporis! Eveniet obcaecati
              accusantium dolore exercitationem nemo.
            </ProjectCard>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
