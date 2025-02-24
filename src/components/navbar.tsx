import React, {useEffect, useState} from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography, Menu, MenuHandler, MenuList, MenuItem,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {ArrowDownIcon, FolderIcon} from "@heroicons/react/16/solid";
// import keycloak from "../config/keycloak.ts";
import {BiCaretDown, BiSortDown} from "react-icons/bi";
import {CgMoveDown} from "react-icons/cg";
import {useKeycloak} from "@react-keycloak/web";

const NAV_MENU = [
  {
    name: "Plans",
    icon: RectangleStackIcon,
    href: "/plans",
  },
  {
    name: "Fields",
    icon: FolderIcon,
    href: "/fields",
  },
  {
    name: "Subjects",
    icon: CommandLineIcon,
    href: "/subjects",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography color="blue-gray" className="flex items-center gap-2 font-medium text-gray-900">
        <Link to={href || "#"} className="flex items-center hover:text-gray-700 transition">
          {children}
        </Link>
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const { keycloak } = useKeycloak();
  const [isAuthenticated, setIsAuthenticated] = useState(keycloak.authenticated);

  useEffect(() => {
    const updateAuthState = () => setIsAuthenticated(keycloak.authenticated);

    keycloak.onAuthSuccess = updateAuthState;
    keycloak.onAuthLogout = updateAuthState;
    keycloak.onTokenExpired = () => keycloak.updateToken(30).then(updateAuthState);

    if (keycloak.authenticated !== isAuthenticated) {
      setIsAuthenticated(keycloak.authenticated);
    }
  }, [keycloak, isAuthenticated]);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="flex items-center justify-between">
            <Typography color="blue-gray" className="text-lg font-bold">
              <Link to="/" className="hover:text-gray-700 transition">
                E-Learning
              </Link>
            </Typography>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="hidden items-center gap-4 lg:flex">
              {isAuthenticated ? (
                  <Menu>
                    <MenuHandler>
                      <button className="text-black flex items-center">
                        {keycloak.tokenParsed?.preferred_username}  <BiCaretDown />
                      </button>
                    </MenuHandler>
                    <MenuList>
                      <MenuItem>
                        <Link to="/dashboard">My Dashboard</Link>
                      </MenuItem>
                      <MenuItem onClick={() => keycloak.logout()}>
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Menu>
              ) : (
                  <button
                      className="px-4 py-2 text-black"
                      onClick={() => keycloak.login()}
                  >
                    Login
                  </button>
              )}
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button variant="text">Log in</Button>
                <a
                  href="https://www.material-tailwind.com/blocks"
                  target="_blank"
                >
                  <Button color="gray">blocks</Button>
                </a>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
