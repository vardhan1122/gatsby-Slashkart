import React from 'react';

import { ArrowForwardOutlined } from "@material-ui/icons";
import { CloseOutlined } from "@material-ui/icons";
import { OpenInNewOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function ThroughApp(props) {
  return (
    <div>
      <Hidden only={["md", "lg", "xl"]} implementation="css">
        <Container
          maxWidth="xl"
          style={{ marginBottom: "110px", width: "100%" }}
        >
          <AppBar
            elevation={0}
            square
            style={{ width: "100%", backgroundColor: "#ffffff" }}
          >
            <Toolbar />
            <Container
              maxWidth="xl"
              style={{ width: "100%", position: "fixed" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="row"
                    style={{ marginTop: "-5px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="h3"
                        align="center"
                        style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                      >
                        app
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div
                        style={{
                          backgroundColor: "#009bff",
                          width: "10px",
                          borderRadius: "5px",
                          marginLeft: "3px",
                          marginTop: "20px",
                          height: "10px",
                        }}
                      ></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#303030",
                width: "100%",
                paddingTop: "8px",
                paddingBottom: "8px",
                marginTop: "64px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <FormControl
                        variant="standard"
                        margin="none"
                        size="small"
                        color="secondary"
                        style={{ color: "#ffffff", borderColor: "#ffffff" }}
                      >
                        <Select
                          variant="outlined"
                          labelWidth={0}
                          style={{
                            width: "40px",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            height: "20px",
                          }}
                        >
                          <Grid
                            container
                            spacing={1}
                            justify="space-around"
                            direction="column"
                            style={{
                              backgroundColor: "#4a4a4a",
                              paddingBottom: "10px",
                              paddingTop: "10px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                News
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Sports
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Monmouth
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Ocean
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Data Universe
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Nation / World
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Obituaries
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                E-Edition
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                Legals
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textSecondary"
                                variant="body1"
                                style={{ fontWeight: "600" }}
                              >
                                33°F
                              </Link>
                            </Grid>
                          </Grid>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <FormControl
                        variant="standard"
                        margin="none"
                        size="small"
                        color="secondary"
                        style={{ color: "#ffffff", borderColor: "#ffffff" }}
                      >
                        <Select
                          variant="outlined"
                          labelWidth={0}
                          style={{
                            width: "40px",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            height: "20px",
                          }}
                        >
                          <Grid
                            container
                            spacing={4}
                            justify="space-around"
                            direction="column"
                            style={{
                              backgroundColor: "#4a4a4a",
                              paddingBottom: "10px",
                              paddingTop: "10px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ONLY AT APP :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Data Universe
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Investigations
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Watchdog
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Crosswords
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Comics
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Archives
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Weather
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Contests
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Obituaries
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    MARKETPLACE :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Jobs
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Cars
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Homes
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Business Directory
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Apartments
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Classifieds
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Shopping
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Advertise Your Business
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ACCOUNT :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Manage Account
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pay Bill
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Report Delivery Issues
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pause Delivery
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Subscriber Guide
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Help Center
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item />
                          </Grid>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        color="inherit"
                        style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      >
                        <SearchOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={3}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{
                          backgroundColor: "#4a90e2",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          fontWeight: "600",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        Subscribe
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Sign In
                        <FormControl
                          color="primary"
                          variant="standard"
                          style={{ color: "#ffffff", borderColor: "#ffffff" }}
                        >
                          <Select
                            variant="outlined"
                            labelWidth={0}
                            style={{
                              width: "30px",
                              backgroundColor: "#ffffff",
                              borderColor: "#ffffff",
                              color: "#ffffff",
                              height: "20px",
                            }}
                          >
                            <Grid
                              container
                              alignContent="center"
                              alignItems="center"
                              justify="space-around"
                              direction="column"
                              style={{
                                backgroundColor: "#4a4a4a",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <Grid zeroMinWidth item>
                                <Grid container spacing={2} direction="row">
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      direction="column"
                                      spacing={1}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Manage Account
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          E-Edition
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Newsletters
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pay Bills
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Report Delivery Issues
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pause Delivery
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Subscriber Guide
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Help Center
                                        </Link>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    flexItem
                                    orientation="vertical"
                                    style={{
                                      backgroundColor: "#9b9b9b",
                                      marginBottom: "10px",
                                      marginTop: "10px",
                                    }}
                                  />
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Have an Existing Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          backgroundColor: "#4a90e2",
                                          width: "100%",
                                          marginTop: "10px",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Sign In
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Already have a Subscriptions?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Activate Accout
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Don&#039;t have an Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            textTransform: "none",
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            background: "none",
                                          }}
                                        >
                                          Create Account
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Select>
                        </FormControl>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Container>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid zeroMinWidth item style={{ paddingRight: "5px" }}>
              <Grid container>
                <Grid zeroMinWidth item xs={12}>
                  <img
                    src="https://www.gannett-cdn.com/-mm-/eec6fd4cafba6c9b20fad3b0475b2dc4dc63a0e1/c=0-50-534-350/local/-/media/AsburyPark/2014/12/09/B9315436946Z.1_20141209173240_000_G9D9C820U.1-0.jpg?width=534&amp;height=299&amp;fit=crop&amp;format=pjpg&amp;auto=webp"
                    style={{ width: "100%" }}
                  ></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="h4" style={{ fontWeight: "900" }}>
                    NJ AG &#039;disgusted&#039; over Trump commuting Weinstein
                    sentence
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                        direction="row"
                      >
                        <Grid zeroMinWidth item>
                          <i
                            className="fas fa-square"
                            style={{ color: "#4a90e2", fontSize: "12px" }}
                          ></i>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{ fontSize: "12px", fontWeight: "700" }}
                          >
                            FOR SUBSCRIBERS
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        COURTS
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        5:00 a.m. ET Jan. 21
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justify="space-between"
                direction="column"
                style={{ paddingTop: "50px" }}
              >
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/presto/2021/01/20/PNJM/ad65bb08-aa38-4cff-abe3-f5fda55b20fa-DOH120model.jpg?crop=1035,583,x0,y0&width=660&height=370&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        New models: How NJ COVID cases change with vaccines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            CORONA VIRUS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            5:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row">
                    <Grid zeroMinWidth item style={{ width: "100%" }}>
                      <img
                        src="https://www.gannett-cdn.com/presto/2020/12/17/PAPP/7f61646c-f1f3-43e1-8b72-77d214b67253-CENTRASTATEVACCINE1217E.jpg?crop=2399,1349,x0,y40&width=210&height=118&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Here&#039;s how COVID vaccine scams work and what you
                        should do
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            PRESS ON YOUR SIDE
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            6:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row">
                    <Grid zeroMinWidth item style={{ width: "100%" }}>
                      <img
                        src="https://www.gannett-cdn.com/-mm-/50cf5bbf732a4dc596a6cd2b25c2d55faffc0cbe/c=0-198-3888-2395/local/-/media/2018/08/01/NJGroup/AsburyPark/636687298588624867-5-ASB-0321-Freehold-Schools-Address.jpg?width=210&height=118&fit=crop&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Freehold Regional superintendent signs five year, $1.2
                        million contract
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            IN OUR SCHOOLS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            8:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{ paddingTop: "50px", paddingLeft: "5px" }}
            >
              <Grid container spacing={1} direction="row">
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={7}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Top Headlines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={5}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    NJ worried JCP&amp;amp;L credit downgrade will cost you more
                    money
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Who will be NJ&#039;s next US attorney? 5 possibilities
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Howell ex-mayor Sue Veitengruber dies of COVID-19
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Here&#039;s how COVID vaccine scams work and what you should
                    do
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="row"
                style={{
                  borderRadius: "5px",
                  paddingTop: "30px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ width: "100%" }}>
                  <img
                    src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-rday-7501-2021-307x170.png"
                    style={{ width: "100%" }}
                  ></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6" align="center">
                    Starting at ₹ 36,489.98
                  </Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid zeroMinWidth item style={{ paddingTop: "30px" }}>
              <Grid container direction="row" spacing={2}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={4}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        More Stories
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row" spacing={2}>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/08/PNJM/476ad690-4a87-47c1-a187-3d9eabfad85a-010821-Paterson_-StJoe-CopVaccine-002.JPG?crop=2536,2536,x759,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Here&#039;s where to get a COVID vaccine in NJ
                                if they have…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                CORONA VIRUS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/12/PAPP/d2d3ab32-d577-462a-aa22-78bac1aba441-holm011221b.jpg?crop=3291,3291,x721,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Holmdel boys basketball seeking Shore
                                Conference…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                BASKETBALL
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/fff6e139-1229-4876-aac6-e5f2d1073b55-silver_bay_elementary_school.jpg?crop=400,400,x440,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Toms River&#039;s Silver Bay Elementary closed
                                due to COVID…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                IN OUR SCHOOLS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/608e84cc-f828-486b-933d-c97e455768bb-140633689_10158848445444906_4555772150584176623_o.jpg?crop=1141,1141,x0,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Scojo&#039;s restaurant fire under investigation
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://polarcdn-terrax.com/image/v1.0.0/bin/5fe3a0fb0ce74a0ca090e51b?v=2a19b&h=120&w=120&autocrop=1"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Why a Georgian Court degree is worth it{" "}
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                Story from Georgian Court University
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={12}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/-mm-/af3786c9aaff64decbefb2f7251a8989ca624a61/c=24-0-357-333/local/-/media/2015/02/17/NJGroup/AsburyPark/635597655599060774-Untitled.jpg?width=75&height=75&fit=crop&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                DataUniverse: Start searching millions of public
                                records
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                DATA
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              xs={12}
              style={{ width: "33%", paddingTop: "30px" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXlgU0jcjGB0eDkmrhy3R0c2v4jXc8ibBYEDYoS48GelkXx4vrlHcgHhpDILuCIUT_eyGjCohEOqs&usqp=CAc"></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron Desktop
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6">Starting at ₹ 54,489.98</Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid zeroMinWidth item style={{ paddingTop: "30px" }}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item style={{ width: "15%" }}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        News
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item style={{ width: "85%" }}>
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container direction="row">
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/20/NPPP/1b1dc62c-ea22-4ec3-92e4-f41350ee2bac-US-NEWS-INAUGURATION-GLOBAL-REACT-GET.jpg?crop=4796,2698,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Man who left threats for NJ congressman to stay in
                            jail
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2020/01/24/PPHX/665cb306-40c7-48a3-8245-7bd48a956e32-AP20023678936599.jpg?crop=2397,1348,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Former exec paying $5M to settle opioid lawsuit,
                            Grewal says
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:30 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/da045695-787c-402d-b6cf-7ed4d70d60a0-fire012121e.jpg?crop=5183,2916,x0,y263&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Berkeley blaze destroys house in Holiday City
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                8:45 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={12} style={{ paddingTop: "30px" }}>
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,0.84)",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    style={{ color: "#ffffff", fontWeight: "600" }}
                  >
                    Daily Briefing, in your inbox!
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="body2" style={{ color: "#ffffff" }}>
                    Start your day with the morning&#039;s top news
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Grid container alignContent="center" alignItems="center">
                    <Grid zeroMinWidth item>
                      <TextField
                        variant="filled"
                        placeholder="Email Address"
                        size="small"
                        color="primary"
                        style={{
                          border: "none",
                          borderRadius: "0px",
                          backgroundColor: "#ffffff",
                          outline: "none",
                        }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{
                          backgroundColor: "#4a4a4a",
                          borderRadius: "0px",
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          color: "#ffffff",
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined style={{ color: "#ffffff" }} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid zeroMinWidth item style={{ paddingTop: "30px" }}>
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item style={{ width: "25%" }}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Sports
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item style={{ width: "75%" }}>
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/NBCC/839cb28e-d197-4557-8a61-c60e1e737440-voracek_ice_bruins_012121.jpg?crop=2963,1667,x0,y150&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Flyers let one slip away
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                PRO
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2019/04/06/PAPP/2367281d-dc68-4cd2-a7f5-2cdfb0f381b7-bsbjxjl190406p.jpg?crop=3695,2116,x0,y53&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Frank Malta hired as East Brunswick High School AD
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                HIGH SCHOOL
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                9:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/PNJM/61ab8791-886e-4082-aa15-1269f145cd41-islesdevs2.jpg?crop=3143,1768,x0,y159&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Devils, without Blackwood, fall to Islanders
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                DEVILS
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                10:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ paddingTop: "30px" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  backgroundColor: "#ffffff",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  marginTop: "30px",
                  borderWidth: "8px",
                  borderColor: "#1665cf",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Link
                  style={{
                    paddingTop: "20px",
                    color: "#000000",
                    fontWeight: "600",
                    paddingLeft: "10px",
                    fontSize: "15px",
                    paddingBottom: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Notice our new look? As you get used to things, please let us
                  know what you think!
                </Link>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container style={{ paddingTop: "100px", paddingBottom: "100px" }}>
          <Grid
            container
            alignContent="center"
            spacing={1}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid zeroMinWidth item>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="row"
                style={{ marginTop: "-5px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                  >
                    app
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      backgroundColor: "#009bff",
                      width: "10px",
                      borderRadius: "5px",
                      marginLeft: "3px",
                      marginTop: "20px",
                      height: "10px",
                    }}
                  ></div>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item>
              <Typography variant="body2">
                PART OF THE USA TODAY NETWORK
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            spacing={5}
            style={{ paddingTop: "50px" }}
          >
            <Grid zeroMinWidth item xs={6} style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    About
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Staff Directory
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Careers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Accessibility Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Site Map
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Legals
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Our Ethical Principles
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Terms of Service
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Privacy Policy
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cookie Settings
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={6} style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Contact Us
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Support Local Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Advertise Your Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Adertising Terms &amp; Conditions
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Buy and Sell
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Licensing &amp; Reprints
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Help Center
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscriber Guide
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    My Account
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Give Feedback
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={6} style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Stay Connected
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscribe Today
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Newsletters
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Mobile Apps
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Facebook
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Twitter
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    E-Edition
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Storytellers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Archives
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    RSS Feeds
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item xs={6} style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Our Partners
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Jobs
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cars
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Homes
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Classifieds
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Education
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Moonlighting
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reviewed
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    10Best
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reach Local
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "100px" }}
          >
            <Grid zeroMinWidth item>
              <Typography variant="h6">
                © 2021 www.app.com. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden implementation="css" only={["xs", "sm", "lg", "xl"]}>
        <Container
          maxWidth="xl"
          style={{ marginBottom: "110px", width: "100%" }}
        >
          <AppBar
            elevation={0}
            square
            style={{ width: "100%", backgroundColor: "#ffffff" }}
          >
            <Toolbar />
            <Container
              maxWidth="xl"
              style={{ width: "100%", position: "fixed" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="row"
                    style={{ marginTop: "-5px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="h3"
                        align="center"
                        style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                      >
                        app
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div
                        style={{
                          backgroundColor: "#009bff",
                          width: "10px",
                          borderRadius: "5px",
                          marginLeft: "3px",
                          marginTop: "20px",
                          height: "10px",
                        }}
                      ></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#303030",
                width: "100%",
                paddingTop: "8px",
                paddingBottom: "8px",
                marginTop: "64px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        News
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Sports
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Monmouth
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Ocean
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Data Universe
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Nation / World
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Obituaries
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        E-Edition
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Legals
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <FormControl
                        variant="standard"
                        margin="none"
                        size="small"
                        color="secondary"
                        style={{ color: "#ffffff", borderColor: "#ffffff" }}
                      >
                        <Select
                          variant="outlined"
                          labelWidth={0}
                          style={{
                            width: "40px",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            height: "20px",
                          }}
                        >
                          <Grid
                            container
                            spacing={4}
                            justify="space-around"
                            direction="column"
                            style={{
                              backgroundColor: "#4a4a4a",
                              paddingBottom: "10px",
                              paddingTop: "10px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ONLY AT APP :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Data Universe
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Investigations
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Watchdog
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Crosswords
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Comics
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Archives
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Weather
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Contests
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Obituaries
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    MARKETPLACE :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Jobs
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Cars
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Homes
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Business Directory
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Apartments
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Classifieds
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Shopping
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Advertise Your Business
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ACCOUNT :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Manage Account
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pay Bill
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Report Delivery Issues
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pause Delivery
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Subscriber Guide
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Help Center
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item />
                          </Grid>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        color="inherit"
                        style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      >
                        <SearchOutlined />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        33°F
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={3}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{
                          backgroundColor: "#4a90e2",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          fontWeight: "600",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        Subscribe
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Sign In
                        <FormControl
                          color="primary"
                          variant="standard"
                          style={{ color: "#ffffff", borderColor: "#ffffff" }}
                        >
                          <Select
                            variant="outlined"
                            labelWidth={0}
                            style={{
                              width: "30px",
                              backgroundColor: "#ffffff",
                              borderColor: "#ffffff",
                              color: "#ffffff",
                              height: "20px",
                            }}
                          >
                            <Grid
                              container
                              alignContent="center"
                              alignItems="center"
                              justify="space-around"
                              direction="column"
                              style={{
                                backgroundColor: "#4a4a4a",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <Grid zeroMinWidth item>
                                <Grid container>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "#9b9b9b",
                                        fontWeight: "700",
                                      }}
                                    >
                                      ONLY AT APP :{" "}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid container spacing={2} direction="row">
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      direction="column"
                                      spacing={1}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Manage Account
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          E-Edition
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Newsletters
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pay Bills
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Report Delivery Issues
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pause Delivery
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Subscriber Guide
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Help Center
                                        </Link>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    flexItem
                                    orientation="vertical"
                                    style={{
                                      backgroundColor: "#9b9b9b",
                                      marginBottom: "10px",
                                      marginTop: "10px",
                                    }}
                                  />
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Have an Existing Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          backgroundColor: "#4a90e2",
                                          width: "100%",
                                          marginTop: "10px",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Sign In
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Already have a Subscriptions?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Activate Accout
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Don&#039;t have an Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            textTransform: "none",
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            background: "none",
                                          }}
                                        >
                                          Create Account
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Select>
                        </FormControl>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Container>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{ width: "66%", paddingRight: "10px" }}
            >
              <Grid container>
                <Grid zeroMinWidth item xs={12}>
                  <img
                    src="https://www.gannett-cdn.com/-mm-/eec6fd4cafba6c9b20fad3b0475b2dc4dc63a0e1/c=0-50-534-350/local/-/media/AsburyPark/2014/12/09/B9315436946Z.1_20141209173240_000_G9D9C820U.1-0.jpg?width=534&amp;height=299&amp;fit=crop&amp;format=pjpg&amp;auto=webp"
                    style={{ width: "100%" }}
                  ></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="h4" style={{ fontWeight: "900" }}>
                    NJ AG &#039;disgusted&#039; over Trump commuting Weinstein
                    sentence
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                        direction="row"
                      >
                        <Grid zeroMinWidth item>
                          <i
                            className="fas fa-square"
                            style={{ color: "#4a90e2", fontSize: "12px" }}
                          ></i>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{ fontSize: "12px", fontWeight: "700" }}
                          >
                            FOR SUBSCRIBERS
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        COURTS
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        5:00 a.m. ET Jan. 21
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justify="space-between"
                direction="row"
                style={{ paddingTop: "50px" }}
              >
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/presto/2021/01/20/PNJM/ad65bb08-aa38-4cff-abe3-f5fda55b20fa-DOH120model.jpg?crop=1035,583,x0,y0&width=660&height=370&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        New models: How NJ COVID cases change with vaccines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            CORONA VIRUS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            5:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/presto/2020/12/17/PAPP/7f61646c-f1f3-43e1-8b72-77d214b67253-CENTRASTATEVACCINE1217E.jpg?crop=2399,1349,x0,y40&width=210&height=118&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Here&#039;s how COVID vaccine scams work and what you
                        should do
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            PRESS ON YOUR SIDE
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            6:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/-mm-/50cf5bbf732a4dc596a6cd2b25c2d55faffc0cbe/c=0-198-3888-2395/local/-/media/2018/08/01/NJGroup/AsburyPark/636687298588624867-5-ASB-0321-Freehold-Schools-Address.jpg?width=210&height=118&fit=crop&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Freehold Regional superintendent signs five year, $1.2
                        million contract
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            IN OUR SCHOOLS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            8:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              zeroMinWidth
              item
              style={{ width: "33%", paddingLeft: "10px" }}
            >
              <Grid container spacing={1} direction="row">
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={7}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Top Headlines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={5}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    NJ worried JCP&amp;amp;L credit downgrade will cost you more
                    money
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Who will be NJ&#039;s next US attorney? 5 possibilities
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Howell ex-mayor Sue Veitengruber dies of COVID-19
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Here&#039;s how COVID vaccine scams work and what you should
                    do
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-rday-7501-2021-307x170.png"></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6">Starting at ₹ 36,489.98</Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{ width: "66%", paddingTop: "30px", paddingRight: "10px" }}
            >
              <Grid container direction="row" spacing={2}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={3}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        More Stories
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row" spacing={2}>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/08/PNJM/476ad690-4a87-47c1-a187-3d9eabfad85a-010821-Paterson_-StJoe-CopVaccine-002.JPG?crop=2536,2536,x759,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Here&#039;s where to get a COVID vaccine in NJ
                                if they have…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                CORONA VIRUS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/12/PAPP/d2d3ab32-d577-462a-aa22-78bac1aba441-holm011221b.jpg?crop=3291,3291,x721,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Holmdel boys basketball seeking Shore
                                Conference…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                BASKETBALL
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/fff6e139-1229-4876-aac6-e5f2d1073b55-silver_bay_elementary_school.jpg?crop=400,400,x440,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Toms River&#039;s Silver Bay Elementary closed
                                due to COVID…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                IN OUR SCHOOLS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/608e84cc-f828-486b-933d-c97e455768bb-140633689_10158848445444906_4555772150584176623_o.jpg?crop=1141,1141,x0,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Scojo&#039;s restaurant fire under investigation
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://polarcdn-terrax.com/image/v1.0.0/bin/5fe3a0fb0ce74a0ca090e51b?v=2a19b&h=120&w=120&autocrop=1"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Why a Georgian Court degree is worth it{" "}
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                Story from Georgian Court University
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/-mm-/af3786c9aaff64decbefb2f7251a8989ca624a61/c=24-0-357-333/local/-/media/2015/02/17/NJGroup/AsburyPark/635597655599060774-Untitled.jpg?width=75&height=75&fit=crop&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                DataUniverse: Start searching millions of public
                                records
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                DATA
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{ width: "33%", paddingTop: "30px", paddingLeft: "10px" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXlgU0jcjGB0eDkmrhy3R0c2v4jXc8ibBYEDYoS48GelkXx4vrlHcgHhpDILuCIUT_eyGjCohEOqs&usqp=CAc"></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron Desktop
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6">Starting at ₹ 54,489.98</Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{ width: "66%", paddingTop: "30px", paddingRight: "10px" }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid
                      zeroMinWidth
                      item
                      style={{ width: "15%", paddingLeft: "10px" }}
                    >
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        News
                      </Typography>
                    </Grid>
                    <Grid
                      zeroMinWidth
                      item
                      style={{ width: "85%", paddingRight: "10px" }}
                    >
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/20/NPPP/1b1dc62c-ea22-4ec3-92e4-f41350ee2bac-US-NEWS-INAUGURATION-GLOBAL-REACT-GET.jpg?crop=4796,2698,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Man who left threats for NJ congressman to stay in
                            jail
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2020/01/24/PPHX/665cb306-40c7-48a3-8245-7bd48a956e32-AP20023678936599.jpg?crop=2397,1348,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Former exec paying $5M to settle opioid lawsuit,
                            Grewal says
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:30 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/da045695-787c-402d-b6cf-7ed4d70d60a0-fire012121e.jpg?crop=5183,2916,x0,y263&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Berkeley blaze destroys house in Holiday City
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                8:45 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{ width: "33%", paddingTop: "30px", paddingLeft: "10px" }}
            >
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,0.84)",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    style={{ color: "#ffffff", fontWeight: "600" }}
                  >
                    Daily Briefing, in your inbox!
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="body2" style={{ color: "#ffffff" }}>
                    Start your day with the morning&#039;s top news
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Grid container alignContent="center" alignItems="center">
                    <Grid zeroMinWidth item>
                      <TextField
                        variant="filled"
                        placeholder="Email Address"
                        size="small"
                        color="primary"
                        style={{
                          border: "none",
                          borderRadius: "0px",
                          backgroundColor: "#ffffff",
                          outline: "none",
                        }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{
                          backgroundColor: "#4a4a4a",
                          borderRadius: "0px",
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          color: "#ffffff",
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined style={{ color: "#ffffff" }} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{ width: "66%", paddingTop: "30px", paddingRight: "10px" }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item style={{ width: "16%" }}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Sports
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item style={{ width: "84%" }}>
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/NBCC/839cb28e-d197-4557-8a61-c60e1e737440-voracek_ice_bruins_012121.jpg?crop=2963,1667,x0,y150&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Flyers let one slip away
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                PRO
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2019/04/06/PAPP/2367281d-dc68-4cd2-a7f5-2cdfb0f381b7-bsbjxjl190406p.jpg?crop=3695,2116,x0,y53&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Frank Malta hired as East Brunswick High School AD
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                HIGH SCHOOL
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                9:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={4}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/PNJM/61ab8791-886e-4082-aa15-1269f145cd41-islesdevs2.jpg?crop=3143,1768,x0,y159&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={8}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Devils, without Blackwood, fall to Islanders
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                DEVILS
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                10:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{ width: "33%", paddingTop: "30px", paddingLeft: "10px" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  backgroundColor: "#ffffff",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  marginTop: "30px",
                  borderWidth: "8px",
                  borderColor: "#1665cf",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Link
                  style={{
                    paddingTop: "20px",
                    color: "#000000",
                    fontWeight: "600",
                    paddingLeft: "10px",
                    fontSize: "15px",
                    paddingBottom: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Notice our new look? As you get used to things, please let us
                  know what you think!
                </Link>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingLeft: "120px",
            paddingRight: "120px",
          }}
        >
          <Grid
            container
            alignContent="center"
            spacing={1}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid zeroMinWidth item>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="row"
                style={{ marginTop: "-5px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                  >
                    app
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      backgroundColor: "#009bff",
                      width: "10px",
                      borderRadius: "5px",
                      marginLeft: "3px",
                      marginTop: "20px",
                      height: "10px",
                    }}
                  ></div>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item>
              <Typography variant="body2">
                PART OF THE USA TODAY NETWORK
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            style={{ paddingTop: "50px" }}
          >
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    About
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Staff Directory
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Careers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Accessibility Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Site Map
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Legals
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Our Ethical Principles
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Terms of Service
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Privacy Policy
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cookie Settings
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Contact Us
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Support Local Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Advertise Your Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Adertising Terms &amp; Conditions
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Buy and Sell
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Licensing &amp; Reprints
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Help Center
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscriber Guide
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    My Account
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Give Feedback
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Stay Connected
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscribe Today
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Newsletters
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Mobile Apps
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Facebook
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Twitter
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    E-Edition
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Storytellers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Archives
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    RSS Feeds
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Our Partners
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Jobs
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cars
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Homes
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Classifieds
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Education
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Moonlighting
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reviewed
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    10Best
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reach Local
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "100px" }}
          >
            <Grid zeroMinWidth item>
              <Typography variant="h6">
                © 2021 www.app.com. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden only={[]} mdDown implementation="css">
        <Container
          maxWidth="xl"
          style={{ marginBottom: "110px", width: "100%" }}
        >
          <AppBar
            elevation={0}
            square
            style={{ width: "100%", backgroundColor: "#ffffff" }}
          >
            <Toolbar />
            <Container
              maxWidth="xl"
              style={{ width: "100%", position: "fixed" }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
                style={{ paddingLeft: "40px", paddingRight: "40px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="row"
                    style={{ marginTop: "-5px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="h3"
                        align="center"
                        style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                      >
                        app
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div
                        style={{
                          backgroundColor: "#009bff",
                          width: "10px",
                          borderRadius: "5px",
                          marginLeft: "3px",
                          marginTop: "20px",
                          height: "10px",
                        }}
                      ></div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "10px" }}
                  >
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="body1"
                        style={{ color: "#1665cf", fontWeight: "900" }}
                      >
                        SUBSCRIBE NOW
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography
                        variant="subtitle2"
                        style={{ color: "rgba(0,0,0,0.8)", fontWeight: "600" }}
                      >
                        $1 for 3 months. Save 97%.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#303030",
                width: "100%",
                paddingTop: "8px",
                paddingBottom: "8px",
                marginTop: "64px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        News
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Sports
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Monmouth
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Ocean
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Data Universe
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Nation / World
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Obituaries
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        E-Edition
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Legals
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <FormControl
                        variant="standard"
                        margin="none"
                        size="small"
                        color="secondary"
                        style={{ color: "#ffffff", borderColor: "#ffffff" }}
                      >
                        <Select
                          variant="outlined"
                          labelWidth={0}
                          style={{
                            width: "40px",
                            borderRadius: "10px",
                            backgroundColor: "#ffffff",
                            borderColor: "#ffffff",
                            color: "#ffffff",
                            height: "20px",
                          }}
                        >
                          <Grid
                            container
                            spacing={4}
                            justify="space-around"
                            direction="column"
                            style={{
                              backgroundColor: "#4a4a4a",
                              paddingBottom: "10px",
                              paddingTop: "10px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                            }}
                          >
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ONLY AT APP :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Data Universe
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Investigations
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Watchdog
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Crosswords
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Comics
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Archives
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Weather
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Contests
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Obituaries
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    MARKETPLACE :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Jobs
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Cars
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Homes
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Business Directory
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Apartments
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Classifieds
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Shopping
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Advertise Your Business
                                      </Link>
                                      <IconButton
                                        style={{
                                          paddingBottom: "0px",
                                          paddingTop: "0px",
                                          paddingLeft: "2px",
                                        }}
                                      >
                                        <OpenInNewOutlined
                                          style={{
                                            color: "#ffffff",
                                            fontSize: "14px",
                                            fontWeight: "900",
                                          }}
                                        />
                                      </IconButton>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Typography
                                    variant="body2"
                                    color="textPrimary"
                                    style={{
                                      color: "#9b9b9b",
                                      fontWeight: "700",
                                    }}
                                  >
                                    ACCOUNT :{" "}
                                  </Typography>
                                </Grid>
                              </Grid>
                              <Grid
                                container
                                justify="space-between"
                                spacing={2}
                                style={{ paddingTop: "10px" }}
                              >
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Manage Account
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        E-Edition
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Newsletters
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pay Bill
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <Grid zeroMinWidth item xs={6}>
                                  <Grid
                                    container
                                    direction="column"
                                    spacing={1}
                                  >
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Report Delivery Issues
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Pause Delivery
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Subscriber Guide
                                      </Link>
                                    </Grid>
                                    <Grid zeroMinWidth item>
                                      <Link
                                        color="textSecondary"
                                        underline="none"
                                        style={{ fontWeight: "600" }}
                                      >
                                        Help Center
                                      </Link>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item />
                          </Grid>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        color="inherit"
                        style={{ paddingTop: "0px", paddingBottom: "0px" }}
                      >
                        <SearchOutlined />
                      </IconButton>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        33°F
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={3}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{
                          backgroundColor: "#4a90e2",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          fontWeight: "600",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                        }}
                      >
                        Subscribe
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        color="textSecondary"
                        variant="body1"
                        style={{ fontWeight: "600" }}
                      >
                        Sign In
                        <FormControl
                          color="primary"
                          variant="standard"
                          style={{ color: "#ffffff", borderColor: "#ffffff" }}
                        >
                          <Select
                            variant="outlined"
                            labelWidth={0}
                            style={{
                              width: "30px",
                              backgroundColor: "#ffffff",
                              borderColor: "#ffffff",
                              color: "#ffffff",
                              height: "20px",
                            }}
                          >
                            <Grid
                              container
                              alignContent="center"
                              alignItems="center"
                              justify="space-around"
                              direction="column"
                              style={{
                                backgroundColor: "#4a4a4a",
                                paddingBottom: "10px",
                                paddingTop: "10px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                              }}
                            >
                              <Grid zeroMinWidth item>
                                <Grid container>
                                  <Grid zeroMinWidth item>
                                    <Typography
                                      variant="body2"
                                      color="textPrimary"
                                      style={{
                                        color: "#9b9b9b",
                                        fontWeight: "700",
                                      }}
                                    >
                                      ONLY AT APP :{" "}
                                    </Typography>
                                  </Grid>
                                </Grid>
                                <Grid container spacing={2} direction="row">
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      direction="column"
                                      spacing={1}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Manage Account
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          E-Edition
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Newsletters
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pay Bills
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Report Delivery Issues
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Pause Delivery
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Subscriber Guide
                                        </Link>
                                      </Grid>
                                      <Grid zeroMinWidth item>
                                        <Link
                                          color="textSecondary"
                                          underline="none"
                                          style={{ fontWeight: "600" }}
                                        >
                                          Help Center
                                        </Link>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Divider
                                    flexItem
                                    orientation="vertical"
                                    style={{
                                      backgroundColor: "#9b9b9b",
                                      marginBottom: "10px",
                                      marginTop: "10px",
                                    }}
                                  />
                                  <Grid
                                    zeroMinWidth
                                    item
                                    style={{ width: "49%" }}
                                  >
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Have an Existing Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          backgroundColor: "#4a90e2",
                                          width: "100%",
                                          marginTop: "10px",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Sign In
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Already have a Subscriptions?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            color: "#ffffff",
                                            textTransform: "none",
                                            background: "none",
                                          }}
                                        >
                                          Activate Accout
                                        </Button>
                                      </Grid>
                                    </Grid>
                                    <Grid
                                      container
                                      alignContent="center"
                                      alignItems="center"
                                      direction="row"
                                      style={{ paddingTop: "20px" }}
                                    >
                                      <Grid zeroMinWidth item>
                                        <Typography
                                          variant="body2"
                                          style={{ color: "#ffffff" }}
                                        >
                                          Don&#039;t have an Account?
                                        </Typography>
                                      </Grid>
                                      <Grid
                                        zeroMinWidth
                                        item
                                        style={{
                                          width: "100%",
                                          marginTop: "10px",
                                          borderColor: "#4a90e2",
                                          borderStyle: "solid",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Button
                                          style={{
                                            textTransform: "none",
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            background: "none",
                                          }}
                                        >
                                          Create Account
                                        </Button>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Select>
                        </FormControl>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Container style={{ paddingLeft: "100px", paddingRight: "100px" }}>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{
                width: "66%",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid container>
                <Grid zeroMinWidth item xs={12}>
                  <img
                    src="https://www.gannett-cdn.com/-mm-/eec6fd4cafba6c9b20fad3b0475b2dc4dc63a0e1/c=0-50-534-350/local/-/media/AsburyPark/2014/12/09/B9315436946Z.1_20141209173240_000_G9D9C820U.1-0.jpg?width=534&amp;height=299&amp;fit=crop&amp;format=pjpg&amp;auto=webp"
                    style={{ width: "100%" }}
                  ></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="h4" style={{ fontWeight: "900" }}>
                    NJ AG &#039;disgusted&#039; over Trump commuting Weinstein
                    sentence
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                  >
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                        direction="row"
                      >
                        <Grid zeroMinWidth item>
                          <i
                            className="fas fa-square"
                            style={{ color: "#4a90e2", fontSize: "12px" }}
                          ></i>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{ fontSize: "12px", fontWeight: "700" }}
                          >
                            FOR SUBSCRIBERS
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        COURTS
                      </Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{
                          color: "#000000",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        5:00 a.m. ET Jan. 21
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                spacing={2}
                justify="space-between"
                direction="row"
                style={{ paddingTop: "50px" }}
              >
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/presto/2021/01/20/PNJM/ad65bb08-aa38-4cff-abe3-f5fda55b20fa-DOH120model.jpg?crop=1035,583,x0,y0&width=660&height=370&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        New models: How NJ COVID cases change with vaccines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            CORONA VIRUS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            5:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/presto/2020/12/17/PAPP/7f61646c-f1f3-43e1-8b72-77d214b67253-CENTRASTATEVACCINE1217E.jpg?crop=2399,1349,x0,y40&width=210&height=118&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Here&#039;s how COVID vaccine scams work and what you
                        should do
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            PRESS ON YOUR SIDE
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            6:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <Grid container direction="column">
                    <Grid zeroMinWidth item>
                      <img
                        src="https://www.gannett-cdn.com/-mm-/50cf5bbf732a4dc596a6cd2b25c2d55faffc0cbe/c=0-198-3888-2395/local/-/media/2018/08/01/NJGroup/AsburyPark/636687298588624867-5-ASB-0321-Freehold-Schools-Address.jpg?width=210&height=118&fit=crop&format=pjpg&auto=webp"
                        style={{ width: "100%" }}
                      ></img>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Typography variant="h6">
                        Freehold Regional superintendent signs five year, $1.2
                        million contract
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Grid
                        container
                        alignContent="center"
                        spacing={1}
                        alignItems="center"
                      >
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <i
                                className="fas fa-square"
                                style={{ color: "#4a90e2", fontSize: "12px" }}
                              ></i>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{ fontSize: "12px", fontWeight: "700" }}
                              >
                                FOR SUBSCRIBERS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "700",
                            }}
                          >
                            IN OUR SCHOOLS
                          </Link>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Link
                            underline="none"
                            style={{
                              color: "#000000",
                              fontSize: "12px",
                              fontWeight: "600",
                            }}
                          >
                            8:00 a.m. ET Jan. 21
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid
              zeroMinWidth
              item
              style={{
                width: "33%",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid container spacing={1} direction="row">
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={7}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Top Headlines
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={5}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    NJ worried JCP&amp;amp;L credit downgrade will cost you more
                    money
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Who will be NJ&#039;s next US attorney? 5 possibilities
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Howell ex-mayor Sue Veitengruber dies of COVID-19
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <i
                        className="fas fa-square"
                        style={{ color: "#4a90e2", fontSize: "12px" }}
                      ></i>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <Link
                        underline="none"
                        style={{ fontSize: "12px", fontWeight: "700" }}
                      >
                        FOR SUBSCRIBERS
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Link color="textPrimary" style={{ fontWeight: "600" }}>
                    Here&#039;s how COVID vaccine scams work and what you should
                    do
                  </Link>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Divider style={{ height: "2px" }} />
                </Grid>
              </Grid>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <img src="https://i.dell.com/sites/csimages/Banner_Imagery/all/in-dhs-rday-7501-2021-307x170.png"></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6">Starting at ₹ 36,489.98</Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{
                width: "66%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid container direction="row" spacing={2}>
                <Grid zeroMinWidth item xs={12}>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item xs={3}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        More Stories
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Divider
                        orientation="horizontal"
                        style={{ marginTop: "5px", height: "5px" }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item xs={12}>
                  <Grid container direction="row" spacing={2}>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/08/PNJM/476ad690-4a87-47c1-a187-3d9eabfad85a-010821-Paterson_-StJoe-CopVaccine-002.JPG?crop=2536,2536,x759,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Here&#039;s where to get a COVID vaccine in NJ
                                if they have…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                CORONA VIRUS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/12/PAPP/d2d3ab32-d577-462a-aa22-78bac1aba441-holm011221b.jpg?crop=3291,3291,x721,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Holmdel boys basketball seeking Shore
                                Conference…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                BASKETBALL
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/fff6e139-1229-4876-aac6-e5f2d1073b55-silver_bay_elementary_school.jpg?crop=400,400,x440,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Toms River&#039;s Silver Bay Elementary closed
                                due to COVID…
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                IN OUR SCHOOLS
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/608e84cc-f828-486b-933d-c97e455768bb-140633689_10158848445444906_4555772150584176623_o.jpg?crop=1141,1141,x0,y0&width=75&height=75&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Scojo&#039;s restaurant fire under investigation
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://polarcdn-terrax.com/image/v1.0.0/bin/5fe3a0fb0ce74a0ca090e51b?v=2a19b&h=120&w=120&autocrop=1"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                Why a Georgian Court degree is worth it{" "}
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                Story from Georgian Court University
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid zeroMinWidth item xs={6}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item xs={3}>
                          <img
                            src="https://www.gannett-cdn.com/-mm-/af3786c9aaff64decbefb2f7251a8989ca624a61/c=24-0-357-333/local/-/media/2015/02/17/NJGroup/AsburyPark/635597655599060774-Untitled.jpg?width=75&height=75&fit=crop&format=pjpg&auto=webp"
                            style={{ width: "100%" }}
                          ></img>
                        </Grid>
                        <Grid
                          zeroMinWidth
                          item
                          xs={9}
                          style={{ paddingLeft: "5px" }}
                        >
                          <Grid container direction="column">
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ fontWeight: "600" }}
                              >
                                DataUniverse: Start searching millions of public
                                records
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                color="textPrimary"
                                style={{ color: "#4a4a4a", fontWeight: "900" }}
                              >
                                DATA
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{
                width: "33%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXlgU0jcjGB0eDkmrhy3R0c2v4jXc8ibBYEDYoS48GelkXx4vrlHcgHhpDILuCIUT_eyGjCohEOqs&usqp=CAc"></img>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ fontSize: "25px", fontWeight: "600" }}>
                    Dell Inspiron Desktop
                  </Link>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Typography variant="h6">Starting at ₹ 54,489.98</Typography>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{
                width: "66%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item style={{ width: "12%" }}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        News
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item style={{ width: "88%" }}>
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/20/NPPP/1b1dc62c-ea22-4ec3-92e4-f41350ee2bac-US-NEWS-INAUGURATION-GLOBAL-REACT-GET.jpg?crop=4796,2698,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Man who left threats for NJ congressman to stay in
                            jail
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2020/01/24/PPHX/665cb306-40c7-48a3-8245-7bd48a956e32-AP20023678936599.jpg?crop=2397,1348,x0,y0&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Former exec paying $5M to settle opioid lawsuit,
                            Grewal says
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                NEW JERSEY
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:30 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/21/PAPP/da045695-787c-402d-b6cf-7ed4d70d60a0-fire012121e.jpg?crop=5183,2916,x0,y263&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="row">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Berkeley blaze destroys house in Holiday City
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                EMERGENCIES
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                8:45 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{
                width: "33%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  borderRadius: "5px",
                  backgroundColor: "rgba(0,0,0,0.84)",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  borderWidth: "1px",
                  marginTop: "30px",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Advertisement</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h6"
                    style={{ color: "#ffffff", fontWeight: "600" }}
                  >
                    Daily Briefing, in your inbox!
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Typography variant="body2" style={{ color: "#ffffff" }}>
                    Start your day with the morning&#039;s top news
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "10px" }}>
                  <Grid container alignContent="center" alignItems="center">
                    <Grid zeroMinWidth item>
                      <TextField
                        variant="filled"
                        placeholder="Email Address"
                        size="small"
                        color="primary"
                        style={{
                          border: "none",
                          borderRadius: "0px",
                          backgroundColor: "#ffffff",
                          outline: "none",
                        }}
                      />
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton
                        style={{
                          backgroundColor: "#4a4a4a",
                          borderRadius: "0px",
                          paddingTop: "12px",
                          paddingBottom: "12px",
                          color: "#ffffff",
                        }}
                      >
                        <ArrowForwardOutlined />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined style={{ color: "#ffffff" }} />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            direction="row"
            style={{ paddingTop: "20px" }}
          >
            <Grid
              zeroMinWidth
              item
              style={{
                width: "66%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                direction="column"
                spacing={2}
                style={{ paddingTop: "30px" }}
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    spacing={1}
                    alignItems="center"
                    direction="row"
                  >
                    <Grid zeroMinWidth item style={{ width: "14%" }}>
                      <Typography
                        variant="h5"
                        style={{
                          width: "100%",
                          fontSize: "22px",
                          fontWeight: "900",
                        }}
                      >
                        Sports
                      </Typography>
                    </Grid>
                    <Grid zeroMinWidth item style={{ width: "86%" }}>
                      <Divider
                        orientation="horizontal"
                        style={{
                          backgroundColor: "#1665cf",
                          marginTop: "5px",
                          height: "5px",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/NBCC/839cb28e-d197-4557-8a61-c60e1e737440-voracek_ice_bruins_012121.jpg?crop=2963,1667,x0,y150&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Flyers let one slip away
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                PRO
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                7:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2019/04/06/PAPP/2367281d-dc68-4cd2-a7f5-2cdfb0f381b7-bsbjxjl190406p.jpg?crop=3695,2116,x0,y53&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Frank Malta hired as East Brunswick High School AD
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                HIGH SCHOOL
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                9:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid container>
                    <Grid zeroMinWidth item xs={3}>
                      <img src="https://www.gannett-cdn.com/presto/2021/01/22/PNJM/61ab8791-886e-4082-aa15-1269f145cd41-islesdevs2.jpg?crop=3143,1768,x0,y159&width=160&height=90&format=pjpg&auto=webp"></img>
                    </Grid>
                    <Grid zeroMinWidth item xs={9}>
                      <Grid container direction="column">
                        <Grid zeroMinWidth item>
                          <Typography variant="h6">
                            Devils, without Blackwood, fall to Islanders
                          </Typography>
                        </Grid>
                        <Grid zeroMinWidth item>
                          <Grid
                            container
                            alignContent="center"
                            spacing={1}
                            alignItems="center"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <Grid
                                container
                                alignContent="center"
                                spacing={1}
                                alignItems="center"
                                direction="row"
                              >
                                <Grid zeroMinWidth item>
                                  <i
                                    className="fas fa-square"
                                    style={{
                                      color: "#4a90e2",
                                      fontSize: "12px",
                                    }}
                                  ></i>
                                </Grid>
                                <Grid zeroMinWidth item>
                                  <Link
                                    underline="none"
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "700",
                                    }}
                                  >
                                    FOR SUBSCRIBERS
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "700",
                                }}
                              >
                                DEVILS
                              </Link>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <Link
                                underline="none"
                                style={{
                                  color: "#000000",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                }}
                              >
                                10:00 a.m. ET Jan. 21
                              </Link>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    alignContent="center"
                    alignItems="center"
                    justify="flex-end"
                  >
                    <Grid zeroMinWidth item>
                      <Link style={{ fontWeight: "600" }}>More in News</Link>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <IconButton>
                        <ArrowForwardOutlined style={{ color: "#1665cf" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              zeroMinWidth
              item
              style={{
                width: "33%",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="column"
                style={{
                  backgroundColor: "#ffffff",
                  paddingTop: "20px",
                  paddingBottom: "10px",
                  marginTop: "30px",
                  borderWidth: "8px",
                  borderColor: "#1665cf",
                  position: "relative",
                  borderStyle: "solid",
                }}
              >
                <Link
                  style={{
                    paddingTop: "20px",
                    color: "#000000",
                    fontWeight: "600",
                    paddingLeft: "10px",
                    fontSize: "15px",
                    paddingBottom: "10px",
                    paddingRight: "10px",
                  }}
                >
                  Notice our new look? As you get used to things, please let us
                  know what you think!
                </Link>
                <div style={{ top: "0px", position: "absolute", right: "0px" }}>
                  <IconButton>
                    <CloseOutlined />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            paddingLeft: "120px",
            paddingRight: "120px",
          }}
        >
          <Grid
            container
            alignContent="center"
            spacing={1}
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Grid zeroMinWidth item>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="center"
                direction="row"
                style={{ marginTop: "-5px" }}
              >
                <Grid zeroMinWidth item>
                  <Typography
                    variant="h3"
                    align="center"
                    style={{ color: "rgba(0,0,0,0.81)", fontWeight: "900" }}
                  >
                    app
                  </Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      backgroundColor: "#009bff",
                      width: "10px",
                      borderRadius: "5px",
                      marginLeft: "3px",
                      marginTop: "20px",
                      height: "10px",
                    }}
                  ></div>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item>
              <Typography variant="body2">
                PART OF THE USA TODAY NETWORK
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            justify="space-between"
            style={{ paddingTop: "50px" }}
          >
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    About
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Staff Directory
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Careers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Accessibility Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Site Map
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Legals
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Our Ethical Principles
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Terms of Service
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Privacy Policy
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cookie Settings
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Support
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Contact Us
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Support Local Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Advertise Your Business
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Adertising Terms &amp; Conditions
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Buy and Sell
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Licensing &amp; Reprints
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Help Center
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscriber Guide
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    My Account
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Give Feedback
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Stay Connected
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Subscribe Today
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Newsletters
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Mobile Apps
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Facebook
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Twitter
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    E-Edition
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Storytellers
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Archives
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    RSS Feeds
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid zeroMinWidth item style={{ display: "block" }}>
              <Grid container direction="column" spacing={2}>
                <Grid zeroMinWidth item>
                  <Link
                    style={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Our Partners
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Jobs
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Cars
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Homes
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Classifieds
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Education
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Moonlighting
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reviewed
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    10Best
                  </Link>
                </Grid>
                <Grid zeroMinWidth item>
                  <Link style={{ color: "#000000", fontWeight: "400" }}>
                    Reach Local
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="center"
            style={{ paddingTop: "100px" }}
          >
            <Grid zeroMinWidth item>
              <Typography variant="h6">
                © 2021 www.app.com. All rights reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Hidden>
    </div>
  );
}

export default ThroughApp