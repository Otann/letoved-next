"use client";

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import React from "react";
import { Switcher, Notification, UserAvatar } from "@carbon/icons-react";

import Link from "next/link";


/**
 * This is a workaround for NextJS Link
 * @see https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-functional-component
 */
const LogoButton = React.forwardRef(({ onClick, href }, ref) => {
  return <HeaderName href={href} onClick={ onClick } prefix="IBM">Carbon Tutorial</HeaderName>;
});
LogoButton.displayName = "LogoButton"

const AppHeader = () => (
  <HeaderContainer
    render={() => (
      <Header aria-label="Carbon Tutorial">
        <Link href="/" passHref legacyBehavior>
          <LogoButton />
        </Link>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <Link href="/protected" passHref legacyBehavior>
            <HeaderMenuItem>Protected</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center"
          >
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center"
          >
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default AppHeader;
