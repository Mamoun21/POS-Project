import React from 'react';
import Header from "./header/Header";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CreditCardIcon from '@material-ui/icons/CreditCard'
import Button from "@material-ui/core/Button";
import BusinessCenterSharpIcon from '@material-ui/icons/BusinessCenterSharp';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import InputIcon from '@material-ui/icons/Input';
import CustomDropdown from './customDropdown/CustomDropDown';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AdminPhoto from '../../images/b.jpg';
import flagimg from '../../images/en.png';
import { Link } from 'react-router-dom';
import useStyles from './style';
const NavBar = () => {
  const classes = useStyles();
  return (
    <Header
      rightLinks={
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Link
              to="/home/pos"
              className={classes.navLink + " " + classes.link}

            >
              <CreditCardIcon className={classes.icons} />POS
              </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link
              to="/home/product"
              className={classes.navLink + " " + classes.link}
            >
              <BusinessCenterSharpIcon className={classes.icons} />Product
              </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="People"

              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={PeopleIcon}
              dropdownList={[
                <a href="##" className={classes.dropdownLink}>
                  <PeopleIcon />Customers
                         </a>,
                <a
                  href="##"
                  target="_blank"
                  className={classes.dropdownLink}
                >
                  <AirportShuttleIcon />Suppliers
                         </a>
              ]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}

            >
              <PeopleIcon className={classes.icons} />Sales
              </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}

            >
              <AttachMoneyIcon className={classes.icons} />Expense
              </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="Categories"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={BookmarkIcon}
              dropdownList={[

                <Link to="/home/categries" className={classes.dropdownLink}>
                  <BusinessCenterSharpIcon />
                           Product
                         </Link>,
                <a
                  href="##"
                  className={classes.dropdownLink}
                >
                  <AttachMoneyIcon /> Expense
                         </a>
              ]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}

            >
              <SettingsIcon className={classes.icons} />Settings
              </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="#pablo"
              className={classes.navLink}
              onClick={e => e.preventDefault()}

            >
              <TrendingUpIcon className={classes.icons} />Reports
              </Button>
          </ListItem>
          <ListItem className={classes.listItem + " " + classes.avatar} >
            <ListItemAvatar>
              <Avatar>
                <img src={AdminPhoto} alt="adminPictur" className={classes.adminImg} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Admin Doe"
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <img src={flagimg} alt="FlagImg" className={classes.flagImg} />
          </ListItem>
          <ListItem className={classes.listItem}>
          </ListItem>
          <ListItem className={classes.listItem} >
            <IconButton className={classes.signOutButton}>
              <InputIcon />
            </IconButton>
          </ListItem>
        </List>
      }
    />
  );

}
export default NavBar;