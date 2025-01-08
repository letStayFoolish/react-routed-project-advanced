import React from "react";
import { NavLink } from "react-router";
import classes from "./MainNavigation.module.css";

const MainNavigation: React.FC = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Events
            </NavLink>
          </li>
          {/*<li>*/}
          {/*  <NavLink*/}
          {/*    to="/events/1"*/}
          {/*    className={({ isActive }) =>*/}
          {/*      isActive ? classes.active : undefined*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Event Detail*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink*/}
          {/*    to="/events/new"*/}
          {/*    className={({ isActive }) =>*/}
          {/*      isActive ? classes.active : undefined*/}
          {/*    }*/}
          {/*  >*/}
          {/*    New Event*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <NavLink*/}
          {/*    to="/events/1/edit"*/}
          {/*    className={({ isActive }) =>*/}
          {/*      isActive ? classes.active : undefined*/}
          {/*    }*/}
          {/*  >*/}
          {/*    Edit Event*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
