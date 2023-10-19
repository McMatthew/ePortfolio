import { DrawerProps, Flex, Drawer as MantineDrawer } from "@mantine/core";
import classes from "./Drawer.module.css";
import { useNavigation } from "@/app/context/navigationContext";

const Drawer = (
  props: Partial<DrawerProps> & { navigationTrigger: string },
) => {
  const { location, setLocation } = useNavigation();
  const { navigationTrigger, keepMounted = true, ...others } = props;

  return (
    <MantineDrawer.Root
      translate="yes"
      position="bottom"
      size={"calc(100vh - 76px)"}
      closeOnClickOutside={false}
      opened={location === navigationTrigger}
      onClose={() => setLocation("")}
      classNames={{ inner: classes.drawer_inner }}
      keepMounted
      {...others}
    >
      <MantineDrawer.Overlay />
      <MantineDrawer.Content className={classes.drawer_content}>
        <MantineDrawer.Header>
          <MantineDrawer.Title>
            <Flex w={"100%"} justify={"center"}>
              {props.title}
            </Flex>
          </MantineDrawer.Title>
          <MantineDrawer.CloseButton />
        </MantineDrawer.Header>
        <MantineDrawer.Body>{props.children}</MantineDrawer.Body>
      </MantineDrawer.Content>
    </MantineDrawer.Root>
  );
};
export default Drawer;

{
  /* <Drawer.Root opened={opened} onClose={close}>
  <Drawer.Overlay />
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Drawer title</Drawer.Title>
      <Drawer.CloseButton />
    </Drawer.Header>
    <Drawer.Body>Drawer content</Drawer.Body>
  </Drawer.Content>
</Drawer.Root>; */
}
