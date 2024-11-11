import { Project } from "@/app/configs/projects";
import { Carousel } from "@mantine/carousel";
import { Box, Flex, Text, Title } from "@mantine/core";

const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
  return (
    <Carousel
      bg={"#010b17"}
      containScroll={"keepSnaps"}
      withControls
      controlSize={"xs"}
      styles={{
        root: {
          borderRadius: 12,
        },
      }}
    >
      {projects.map((project) => (
        <Carousel.Slide p={8} key={project.title}>
          <Flex c="white">
            <Box>
              <Title order={2}>{project.title}</Title>
              <Text ta={"left"}>{project.description}</Text>
            </Box>
          </Flex>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
export default ProjectCarousel;
