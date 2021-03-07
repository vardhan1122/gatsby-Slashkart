import React from 'react';
import { ArrowRight } from "@material-ui/icons";
import { BusinessCenterOutlined } from "@material-ui/icons";
import { CardGiftcardOutlined } from "@material-ui/icons";
import { ChevronLeftOutlined } from "@material-ui/icons";
import { ChevronRightOutlined } from "@material-ui/icons";
import { HelpOutlineOutlined } from "@material-ui/icons";
import { LiveHelpOutlined } from "@material-ui/icons";
import { NotificationsNoneOutlined } from "@material-ui/icons";
import { SaveAltOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { ShowChartOutlined } from "@material-ui/icons";
import { StarOutlined } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { MenuList } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function SlashkartMatUI(props) {
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Container>
          <AppBar style={{ backgroundColor: "#2874f0", height: "50px" }}>
            <Toolbar />
            <Container style={{ width: "100%", position: "fixed" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
              >
                <Grid zeroMinWidth item xs={2}>
                  <div>
                    <Avatar
                      alt="brand icon"
                      src="https://images.unsplash.com/photo-1599686100490-c386c444baf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    ></Avatar>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={4} style={{ marginTop: "3px" }}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      padding: "9px 2px",
                      paddingTop: "7px",
                      paddingBottom: "7px",
                      marginTop: "2px",
                    }}
                  >
                    <input
                      type="search"
                      size="28"
                      placeholder="Search products"
                      style={{
                        border: "none",
                        fontSize: "15px",
                        outline: "none",
                        background: "none",
                        paddingLeft: "5px",
                      }}
                    ></input>
                    <IconButton
                      style={{
                        paddingBottom: "0px",
                        paddingTop: "6px",
                        marginTop: "-30px",
                        float: "right",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <SearchOutlined />
                    </IconButton>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={1}>
                  <div>
                    <IconButton style={{ color: "#ffffff" }}>
                      <ShoppingCartOutlined />
                    </IconButton>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={2} style={{ marginLeft: "20px" }}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      style={{
                        borderRadius: "0px",
                        paddingTop: "0px",
                        textTransform: "none",
                        color: "#ffffff",
                        paddingLeft: "30px",
                        fontSize: "20px",
                        paddingBottom: "0px",
                        paddingRight: "30px",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                backgroundColor: "#ffffff",
                paddingTop: "20px",
                marginTop: "50px",
                position: "fixed",
              }}
            >
              <Grid container justify="space-between" direction="row">
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Electronics
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "55px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Mobiles
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Apple</MenuItem>
                              <MenuItem>Samsung</MenuItem>
                              <MenuItem>Sony</MenuItem>
                              <MenuItem>Oppo</MenuItem>
                              <MenuItem>Honor</MenuItem>
                              <MenuItem>Real me</MenuItem>
                              <MenuItem>Red me</MenuItem>
                              <MenuItem>Micromax</MenuItem>
                              <MenuItem>Nokia</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Mobiles Accessories
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Head Sets</MenuItem>
                              <MenuItem>Mobile Charger</MenuItem>
                              <MenuItem>Mobile Screen Card</MenuItem>
                              <MenuItem>Mobile Pouch</MenuItem>
                              <MenuItem>Power Cable</MenuItem>
                              <MenuItem>Power Bank</MenuItem>
                              <MenuItem>Mobile Batteries</MenuItem>
                              <MenuItem>Memory Cards</MenuItem>
                              <MenuItem>Charger Adapters</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        TV &amp; Appliances
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "90px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Refrigerators
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Single Door</MenuItem>
                              <MenuItem>Double Door</MenuItem>
                              <MenuItem>Triple Door</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Television
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Samsung</MenuItem>
                              <MenuItem>LG</MenuItem>
                              <MenuItem>Sony</MenuItem>
                              <MenuItem>MI</MenuItem>
                              <MenuItem>Motorola</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Men
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "5px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>
                                Top Wear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>T-Shirts</MenuItem>
                              <MenuItem>Formal Shirts</MenuItem>
                              <MenuItem>Causal Shirts</MenuItem>
                              <MenuItem>
                                Bottom Wear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Jeans</MenuItem>
                              <MenuItem>Causal Trousers</MenuItem>
                              <MenuItem>Formal Trousers</MenuItem>
                              <MenuItem>Tract Pants</MenuItem>
                              <MenuItem>Shorts</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Watches
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Fastrack</MenuItem>
                              <MenuItem>Casio</MenuItem>
                              <MenuItem>Ttitan</MenuItem>
                              <MenuItem>Fossil</MenuItem>
                              <MenuItem>Sonota</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Women
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "27px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Beauty &amp; Grooming
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Make Up</MenuItem>
                              <MenuItem>Skin Care</MenuItem>
                              <MenuItem>Hair Care</MenuItem>
                              <MenuItem>Bath &amp; Spa</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Jewellery
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Artificial Jewellery</MenuItem>
                              <MenuItem>Precious Jewellery</MenuItem>
                              <MenuItem>Coins &amp; Bars</MenuItem>
                              <MenuItem>Silver Jewellery</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Baby &amp; Kids
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "57px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Baby Care
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Baby Food</MenuItem>
                              <MenuItem>Baby Grooming</MenuItem>
                              <MenuItem>Baby Bathing Accessories</MenuItem>
                              <MenuItem>Nursing &amp; Breast Feeding</MenuItem>
                              <MenuItem>Baby Bedding</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Kid&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>
                                Boy&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>T-Shirts</MenuItem>
                              <MenuItem>Ethnic Wear</MenuItem>
                              <MenuItem>Shorts</MenuItem>
                              <MenuItem>Shirts</MenuItem>
                              <MenuItem>Innerwear</MenuItem>
                              <MenuItem>
                                Girl&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Dresses &amp; Skirts</MenuItem>
                              <MenuItem>Ethnic Wear</MenuItem>
                              <MenuItem>T-Shirts &amp; Stops</MenuItem>
                              <MenuItem>Innerwear</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Home &amp; Furniture
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "92px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Tablewear &amp; Dinnerwear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Coffee Mugs</MenuItem>
                              <MenuItem>Dinner Set</MenuItem>
                              <MenuItem>
                                Kitchen Storage
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Water Battles</MenuItem>
                              <MenuItem>Lunch Boxes</MenuItem>
                              <MenuItem>Flasks</MenuItem>
                              <MenuItem>Kitchen Containers</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Living Room Furniture
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Sofa</MenuItem>
                              <MenuItem>Sofa Beds</MenuItem>
                              <MenuItem>TV Units</MenuItem>
                              <MenuItem>Dinning Tables &amp; Chairs</MenuItem>
                              <MenuItem>Coffee Tables</MenuItem>
                              <MenuItem>Shoe Rocks</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px" }}>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Sports &amp; Books
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "78px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Sports
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Cricket</MenuItem>
                              <MenuItem>Badminton</MenuItem>
                              <MenuItem>Cycling</MenuItem>
                              <MenuItem>Football</MenuItem>
                              <MenuItem>Skating</MenuItem>
                              <MenuItem>Swimming</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Food Essentials
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Nuts &amp; Dry Fruits</MenuItem>
                              <MenuItem>Tea , Coffee &amp; Beverages</MenuItem>
                              <MenuItem>Snacks corner</MenuItem>
                              <MenuItem>Chocolates</MenuItem>
                              <MenuItem>
                                Books
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Entrence Exams</MenuItem>
                              <MenuItem>Academics</MenuItem>
                              <MenuItem>Young Readers</MenuItem>
                              <MenuItem>Self-Help</MenuItem>
                              <MenuItem>E-Learning</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px", marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Flights
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px", marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Offer Zone
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ paddingBottom: "10px", marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Grocery
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#f1f3f6",
            padding: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Paper style={{ marginTop: "120px" }}>
            <div style={{ backgroundColor: "#40a8b9", paddingTop: "-120px" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                wrap="wrap"
                justify="space-between"
                direction="row"
                style={{ paddingBottom: "10px" }}
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={12}
                  style={{ paddingBottom: "10px" }}
                >
                  <img
                    alt="weekend sale"
                    src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "150px" }}
                  ></img>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={4}
                  style={{ paddingBottom: "20px" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="mobile collection"
                        src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Mobiles
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={4}
                  style={{ paddingBottom: "20px" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="electronics collection"
                        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Electronics
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={4}
                  style={{ paddingBottom: "20px" }}
                >
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="fashion collection"
                        src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Fashion
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="furniture collection"
                        src="https://images.unsplash.com/photo-1588714306299-aca44edf20de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Furniture
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="beauty collection"
                        src="https://images.unsplash.com/photo-1531751519425-e1fa9110434b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Beauty
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={4}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="kitchen collection"
                        src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGtpdGNoZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Kitchen
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper style={{ marginTop: "10px" }}>
            <div>
              <Link>
                <img
                  alt="fashion sale image1"
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                  style={{ width: "50%", height: "150px" }}
                ></img>
                <img
                  alt="fashion sale image2"
                  src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  style={{ width: "50%", height: "150px" }}
                ></img>
              </Link>
            </div>
            <div style={{ marginTop: "-105px" }}>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#ffffff",
                  float: "left",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronLeftOutlined style={{ fontSize: "40px" }} />
              </IconButton>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#ffffff",
                  float: "right",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronRightOutlined style={{ fontSize: "40px" }} />
              </IconButton>
            </div>
          </Paper>
          <Paper
            variant="elevation"
            elevation={0}
            style={{ marginTop: "120px" }}
          >
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Grid container justify="space-between">
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Top Offers</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#2874f0",
                      fontSize: "12px",
                      padding: "10px 25px",
                    }}
                  >
                    view all
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div style={{ padding: "10px" }}>
              <Grid
                container
                spacing={5}
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="laptop"
                        src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Best Gaming Deals"
                          style={{
                            color: "#000000",
                            fontFamily: "sans-serif",
                            fontWeight: "900",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹51,990"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Acer ,Asus, HP & More" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="furniture"
                        src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Top 10 Furniture Deals"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Up to 75% Off"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Peps Kurlon & More" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="camera"
                        src="https://images.unsplash.com/flagged/photo-1550255120-9b2a9de58dfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhbWVyYXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Canon DSLR Camera"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="EMI From ₹2,333/m*"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText
                          primary="₹19,999"
                          style={{ marginLeft: "10px" }}
                        />
                        <ListItemSecondaryAction />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="furniture"
                        src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb20lMjAlMjBmdXJuaXR1cmV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Mattresses"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹2,490"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Perfect Homes" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper style={{ marginTop: "10px" }}>
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid container justify="space-between" direction="row">
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Paper elevation={0}>
                          <img
                            alt="diwali"
                            src="https://images.unsplash.com/photo-1594404708321-12d10ea5590f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGRpd2FsaSUyMGxpZ2h0fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            style={{
                              width: "100%",
                              paddingTop: "10px",
                              height: "70px",
                              paddingLeft: "10px",
                            }}
                          ></img>
                        </Paper>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Typography variant="h6" style={{ marginTop: "20px" }}>
                          Diwali Offers
                        </Typography>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#2874f0",
                            fontSize: "12px",
                            padding: "10px 25px",
                            marginTop: "20px",
                          }}
                        >
                          view all
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "20px" }}>
                  <div>
                    <Grid
                      container
                      alignContent="center"
                      spacing={5}
                      alignItems="center"
                      justify="space-around"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="mobile"
                              src="https://images.unsplash.com/photo-1592898741882-ff375ff0e692?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fDEwbW9iaWxlJTIwcGhvbmVzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Most Affordable Phones"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Get Up to 50% Off"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Samsung , Huawei & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="AC"
                              src="https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingRight: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="5-Star Triple Invertor AC"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹19,999"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Samsung , Whirlpool & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="refrigerator"
                              src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingLeft: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Double Door Refrigerator"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Start Onwards ₹21,990"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Samsung  & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="watch"
                              src="https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHdhdGNoZXMlMjBjb21ib3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Watches Combo"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Ultimate Saving Deal"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Starting ₹249 only" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper style={{ marginTop: "10px" }}>
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid container justify="space-between" direction="row">
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Paper elevation={0}>
                          <img
                            alt="70% off"
                            src="https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2NvdW50JTIwc2FsZXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                            style={{
                              width: "100%",
                              paddingTop: "10px",
                              height: "70px",
                              paddingLeft: "10px",
                            }}
                          ></img>
                        </Paper>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Typography variant="h6" style={{ marginTop: "20px" }}>
                          Today&#039;s Hot Deals
                        </Typography>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#2874f0",
                            fontSize: "12px",
                            padding: "10px 25px",
                            marginTop: "20px",
                          }}
                        >
                          view all
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "20px" }}>
                  <div>
                    <Grid container justify="space-around" direction="row">
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="pant"
                              src="https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNsaXBwZXJzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingRight: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Sparx , Bata ,Paragone & More"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Get Up to 60% Off"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Sandals & Splippers" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="women frock"
                              src="https://images.unsplash.com/photo-1583397758734-a524369cd4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                              style={{
                                width: "100%",
                                paddingRight: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Libas , Saara & More"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="60-70% + Extra10%"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Samsung , Whirlpool & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="trimmer"
                              src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingLeft: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="MI Trimmer for Men"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Starts ₹199"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Samsung  & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="women sweater"
                              src="https://images.unsplash.com/photo-1555819206-d6cc94c3aac6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwamFja2V0fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Jacket , Sweatshirts , Sweaters"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="50-80% Off"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Samsung  & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper style={{ marginTop: "10px" }}>
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid container justify="space-between" direction="row">
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Paper elevation={0}>
                          <img
                            alt="all electronics"
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                            style={{
                              width: "100%",
                              paddingTop: "10px",
                              height: "70px",
                              paddingLeft: "10px",
                            }}
                          ></img>
                        </Paper>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Typography variant="h6" style={{ marginTop: "20px" }}>
                          Best Of Electronics
                        </Typography>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item xs={4}>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          color="primary"
                          variant="contained"
                          style={{
                            borderRadius: "0px",
                            backgroundColor: "#2874f0",
                            fontSize: "12px",
                            padding: "10px 25px",
                            marginTop: "20px",
                          }}
                        >
                          view all
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingTop: "20px" }}>
                  <div>
                    <Grid container justify="space-around">
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="hair dryer"
                              src="https://images.unsplash.com/photo-1581837672885-533599e35674?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingRight: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Hair Dryers"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹399"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Philips , Havells & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="gaming console"
                              src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingRight: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Gaming Consoles"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹27,349"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Play Station & X-Box" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="monitor"
                              src="https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                paddingLeft: "10px",
                                height: "200px",
                              }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Best Sellimg Monitors"
                                style={{ color: "#000000", width: "100%" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Start Onwards ₹4,999"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Acer , HP & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="speakers"
                              src="https://images.unsplash.com/photo-1603144229867-797e6ceeb9c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c291bmQlMjBzcGVha2Vyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Audible Speakers"
                                style={{ color: "#000000", width: "100%" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Starts On ₹22,199"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="white , Gray" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper
            variant="elevation"
            elevation={0}
            style={{ marginTop: "10px" }}
          >
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Grid container justify="space-between">
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Fashion Brands</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#2874f0",
                      fontSize: "12px",
                      padding: "10px 25px",
                    }}
                  >
                    view all
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div style={{ padding: "10px" }}>
              <Grid
                container
                spacing={5}
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="women frock"
                        src="https://images.unsplash.com/photo-1583039949243-e4119fa27a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Floral Print Fashion"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹1,629"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light-Green , Red" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="men shirt"
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc2hpcnQlMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Carbon Cloth"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Up to 75% Off"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="women frock"
                        src="https://images.unsplash.com/photo-1602629339830-b7848e2ff629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Pepe Jeens"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Women Maxi Yellow Dress"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText
                          primary="₹2,149"
                          style={{ marginLeft: "10px" }}
                        />
                        <ListItemSecondaryAction />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={6}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="men shirt"
                        src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtZW4lMjBzaGlydHxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Start On ₹1999"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Dark Navy Blue" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Paper>
        <Paper
          elevation={0}
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            marginRight: "20px",
          }}
        >
          <div style={{ padding: "10px" }}>
            <Grid container>
              <Grid zeroMinWidth item>
                <span
                  style={{
                    color: "rgba(0,0,0,0.72)",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Top Stories :{" "}
                </span>
                <span style={{ fontSize: "17px", fontWeight: "600" }}>
                  Brand Directory
                </span>
                <Typography variant="subtitle1"></Typography>
                <span
                  style={{
                    color: "rgba(74,74,74,0.8)",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                  }}
                >
                  MOST SEARCHED FOR ON SLASHKART :
                </span>
                <span
                  style={{
                    color: "#000000",
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                  }}
                >
                  <Link>
                    TV and Home Appliances Big Billion Days 2020{" "}
                    <span> | </span>
                  </Link>
                  <Link>
                    Slashkart COVID-19 Insurance<span> | </span>
                  </Link>
                  <Link>
                    Slashkart Help Centre<span> | </span>
                  </Link>
                  <Link>
                    Track Orders<span> | </span>
                  </Link>
                  <Link>
                    Manage Orders<span> | </span>
                  </Link>
                  <Link>
                    Return Orders<span> | </span>
                  </Link>
                  <Link>
                    Made In India Toys<span> | </span>
                  </Link>
                  <Link>
                    Slashkart Gift Cards Store<span> | </span>
                  </Link>
                  <Link>
                    Slashkart Axis Bank Credit Card<span> | </span>
                  </Link>
                  <Link>
                    Vivo<span> | </span>
                  </Link>
                  <Link>
                    Huawei<span> | </span>
                  </Link>
                  <Link>
                    Samsung<span> | </span>
                  </Link>
                  <Link>
                    Apple<span> | </span>
                  </Link>
                  <Link>
                    Honor<span> | </span>
                  </Link>
                  <Link>
                    Oppo<span> | </span>
                  </Link>
                  <Link>
                    MI<span> | </span>
                  </Link>
                  <Link>
                    Real Me<span> | </span>
                  </Link>
                  <Link>
                    Sarees<span> | </span>
                  </Link>
                  <Link>
                    T-Shirts<span> | </span>
                  </Link>
                  <Link>
                    Party Wear<span> | </span>
                  </Link>
                  <Link>
                    Shirts<span> | </span>
                  </Link>
                  <Link>
                    Shoes<span> | </span>
                  </Link>
                  <Link>
                    Slippers<span> | </span>
                  </Link>
                  <Link>
                    AC<span> | </span>
                  </Link>
                  <Link>
                    Refrigirator<span> | </span>
                  </Link>
                  <Link>
                    Washion Mission<span> | </span>
                  </Link>
                </span>
              </Grid>
            </Grid>
          </div>
          <div style={{ padding: "10px" }}>
            <Grid container>
              <Grid zeroMinWidth item>
                <Typography
                  variant="h6"
                  style={{
                    color: "rgba(74,74,74,0.82)",
                    fontSize: "17px",
                    fontWeight: "600",
                  }}
                >
                  Slashkart : <span>The One-stop Shopping Destination</span>
                </Typography>
                <Typography variant="h6" style={{ fontSize: "11px" }}>
                  E-commerce is revolutionizing the way we all shop in India.
                  Why do you want to hop from one store to another in search of
                  the latest phone when you can find it on the Internet in a
                  single click? Not only mobiles. Slashkart houses everything
                  you can possibly imagine, from trending electronics like
                  laptops, tablets, smartphones, and mobile accessories to
                  in-vogue fashion staples like shoes, clothing and lifestyle
                  accessories; from modern furniture like sofa sets, dining
                  tables, and wardrobes to appliances that make your life easy
                  like washing machines, TVs, ACs, mixer grinder juicers and
                  other time-saving kitchen and small appliances; from home
                  furnishings like cushion covers, mattresses and bedsheets to
                  toys and musical instruments, we got them all covered. You
                  name it, and you can stay assured about finding them all here.
                  For those of you with erratic working hours, Slashkart is your
                  best bet. Shop in your PJs, at night or in the wee hours of
                  the morning. This e-commerce never shuts down.
                </Typography>
                <Typography variant="h6" style={{ fontSize: "12px" }}>
                  What&#039;s more, with our year-round shopping festivals and
                  events, our prices are irresistible. We&#039;re sure
                  you&#039;ll find yourself picking up more than what you had in
                  mind. If you are wondering why you should shop from Slashkart
                  when there are multiple options available to you, well, the
                  below will answer your question.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper square style={{ backgroundColor: "#172337" }}>
          <div style={{ paddingTop: "10px" }}>
            <Grid container justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={3}>
                <div style={{ paddingLeft: "5px" }}>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    ABOUT
                  </Typography>
                  <MenuList style={{ fontSize: "12px" }}>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Contact Us
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      About Us
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Slashkart Stories
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Press
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Slashkart Wholesale
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    HELP
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Payments
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Shipping
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Cancellation &amp; Returns
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      FAQ
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Report Infrigment
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    POLICY
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Return Policy
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Terms Of Use
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Security
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Privacy
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Sitemap
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      EPR Complaince
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    SOCIAL
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Facebook
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Twitter
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      YouTube
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div style={{ paddingLeft: "15px" }}>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "5px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    Mail Us :
                  </Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Slashdiv Technologies Private Limited,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Flat 15,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      PS Sivaswamy Salai,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Mylapore,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Chennai-600004,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Tamilnadu, India.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "5px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    Registered Office Address :
                  </Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Slashdiv Technologies Private Limited,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Flat 15,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      PS Sivaswamy Salai,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Mylapore,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Chennai-600004,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Tamilnadu, India.
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Telephone :{" "}
                      <Link style={{ color: "#2874f0" }}> 9876543210</Link>
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            style={{ backgroundColor: "#4a4a4a", marginTop: "10px" }}
          />
          <div style={{ padding: "10px" }}>
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <ShoppingBasketOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Sell On Slashkart
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <StarOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Advertise
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <CardGiftcardOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Gift Cards
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <HelpOutlineOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Help Center
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={12}>
                <div style={{ paddingTop: "14px", paddingBottom: "14px" }}>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ color: "#ffffff", fontSize: "14px" }}
                  >
                    © 2019-2020 Slashkart.com
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Hidden>
      <Hidden
        smDown
        implementation="css"
        style={{ backgroundColor: "#7ed321", width: "100%" }}
      >
        <Container
          maxWidth="xl"
          style={{ marginBottom: "110px", width: "100%" }}
        >
          <AppBar style={{ width: "100%", background: "#2874f0" }}>
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
                  <div>
                    <Avatar
                      alt="brand icon"
                      src="https://images.unsplash.com/photo-1599686100490-c386c444baf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    ></Avatar>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  style={{ marginBottom: "5px", marginTop: "-5px" }}
                >
                  <div style={{ paddingTop: "1px" }}>
                    <Grid container>
                      <Grid zeroMinWidth item>
                        <Button
                          style={{
                            fontSize: "20px",
                            textTransform: "none",
                            fontFamily: "Noto Sans JP",
                            outline: "none",
                            color: "#ffffff",
                            textDecoration: "None !important",
                          }}
                        >
                          Slashkart
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      style={{ marginLeft: "10px", marginTop: "-15px" }}
                    >
                      <Grid zeroMinWidth item>
                        <Link
                          style={{ fontSize: "13px", fontFamily: "Kite One" }}
                        >
                          Techies
                          <span
                            style={{
                              fontSize: "13px",
                              fontFamily: "Kite One",
                              color: "#f8e71c",
                              fontWeight: "600",
                              paddingLeft: "2px",
                              letterSpacing: "1px",
                            }}
                          >
                            SlashDiv
                          </span>
                        </Link>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={4} style={{ marginTop: "3px" }}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      padding: "9px 10px",
                    }}
                  >
                    <input
                      type="search"
                      size="28"
                      placeholder="Search products , brands and more"
                      style={{
                        border: "none",
                        width: "90%",
                        fontSize: "12px",
                        outline: "none",
                        color: "rgba(0,0,0,0.91)",
                        background: "none",
                      }}
                    ></input>
                    <IconButton
                      style={{
                        paddingBottom: "7px",
                        marginTop: "-10px",
                        float: "right",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                      }}
                    >
                      <SearchOutlined />
                    </IconButton>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ marginLeft: "20px" }}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "5px",
                        fontSize: "15px",
                        padding: "6px 40px",
                        textTransform: "none",
                        color: "#2874f0",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "15px",
                          marginTop: "-17px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.97)",
                          fontWeight: "600",
                        }}
                      >
                        More
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{
                          color: "#4a4a4a",
                          marginLeft: "18px",
                          marginTop: "-0px",
                        }}
                      >
                        <MenuItem>
                          <ListItemIcon>
                            <NotificationsNoneOutlined
                              style={{ color: "#2874f0", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h6"
                            style={{
                              marginLeft: "-25px",
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            Notifications Preferences
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon>
                            <BusinessCenterOutlined
                              style={{ color: "#2874f0", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h6"
                            style={{
                              marginLeft: "-25px",
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            Sell on Slashkart
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon>
                            <LiveHelpOutlined
                              style={{ color: "#2874f0", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h6"
                            style={{
                              marginLeft: "-25px",
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            24x7 Customer Care
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon>
                            <ShowChartOutlined
                              style={{ color: "#2874f0", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h6"
                            style={{
                              marginLeft: "-25px",
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            Advertise
                          </Typography>
                        </MenuItem>
                        <MenuItem>
                          <ListItemIcon>
                            <SaveAltOutlined
                              style={{ color: "#2874f0", fontSize: "20px" }}
                            />
                          </ListItemIcon>
                          <Typography
                            variant="h6"
                            style={{
                              marginLeft: "-25px",
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                            }}
                          >
                            Download App
                          </Typography>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ textAlign: "right" }}>
                    <IconButton
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                      Cart
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
                paddingTop: "20px",
                marginTop: "64px",
                position: "fixed",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Electronics
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "55px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Mobiles
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Apple</MenuItem>
                              <MenuItem>Samsung</MenuItem>
                              <MenuItem>Sony</MenuItem>
                              <MenuItem>Oppo</MenuItem>
                              <MenuItem>Honor</MenuItem>
                              <MenuItem>Real me</MenuItem>
                              <MenuItem>Red me</MenuItem>
                              <MenuItem>Micromax</MenuItem>
                              <MenuItem>Nokia</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Mobiles Accessories
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Head Sets</MenuItem>
                              <MenuItem>Mobile Charger</MenuItem>
                              <MenuItem>Mobile Screen Card</MenuItem>
                              <MenuItem>Mobile Pouch</MenuItem>
                              <MenuItem>Power Cable</MenuItem>
                              <MenuItem>Power Bank</MenuItem>
                              <MenuItem>Mobile Batteries</MenuItem>
                              <MenuItem>Memory Cards</MenuItem>
                              <MenuItem>Charger Adapters</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        TVs &amp; Appliances
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "90px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Refrigerators
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Single Door</MenuItem>
                              <MenuItem>Double Door</MenuItem>
                              <MenuItem>Triple Door</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Television
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Samsung</MenuItem>
                              <MenuItem>LG</MenuItem>
                              <MenuItem>Sony</MenuItem>
                              <MenuItem>MI</MenuItem>
                              <MenuItem>Motorola</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Men
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "5px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>
                                Top Wear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>T-Shirts</MenuItem>
                              <MenuItem>Formal Shirts</MenuItem>
                              <MenuItem>Causal Shirts</MenuItem>
                              <MenuItem>
                                Bottom Wear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Jeans</MenuItem>
                              <MenuItem>Causal Trousers</MenuItem>
                              <MenuItem>Formal Trousers</MenuItem>
                              <MenuItem>Tract Pants</MenuItem>
                              <MenuItem>Shorts</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Watches
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Fastrack</MenuItem>
                              <MenuItem>Casio</MenuItem>
                              <MenuItem>Ttitan</MenuItem>
                              <MenuItem>Fossil</MenuItem>
                              <MenuItem>Sonota</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Women
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "27px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Beauty &amp; Grooming
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Make Up</MenuItem>
                              <MenuItem>Skin Care</MenuItem>
                              <MenuItem>Hair Care</MenuItem>
                              <MenuItem>Bath &amp; Spa</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Jewellery
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Artificial Jewellery</MenuItem>
                              <MenuItem>Precious Jewellery</MenuItem>
                              <MenuItem>Coins &amp; Bars</MenuItem>
                              <MenuItem>Silver Jewellery</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Baby &amp; Kids
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "57px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Baby Care
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Baby Food</MenuItem>
                              <MenuItem>Baby Grooming</MenuItem>
                              <MenuItem>Baby Bathing Accessories</MenuItem>
                              <MenuItem>Nursing &amp; Breast Feeding</MenuItem>
                              <MenuItem>Baby Bedding</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Kid&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>
                                Boy&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>T-Shirts</MenuItem>
                              <MenuItem>Ethnic Wear</MenuItem>
                              <MenuItem>Shorts</MenuItem>
                              <MenuItem>Shirts</MenuItem>
                              <MenuItem>Innerwear</MenuItem>
                              <MenuItem>
                                Girl&#039;s Clothing
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Dresses &amp; Skirts</MenuItem>
                              <MenuItem>Ethnic Wear</MenuItem>
                              <MenuItem>T-Shirts &amp; Stops</MenuItem>
                              <MenuItem>Innerwear</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Home &amp; Furniture
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "92px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Tablewear &amp; Dinnerwear
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Coffee Mugs</MenuItem>
                              <MenuItem>Dinner Set</MenuItem>
                              <MenuItem>
                                Kitchen Storage
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Water Battles</MenuItem>
                              <MenuItem>Lunch Boxes</MenuItem>
                              <MenuItem>Flasks</MenuItem>
                              <MenuItem>Kitchen Containers</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Living Room Furniture
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Sofa</MenuItem>
                              <MenuItem>Sofa Beds</MenuItem>
                              <MenuItem>TV Units</MenuItem>
                              <MenuItem>Dinning Tables &amp; Chairs</MenuItem>
                              <MenuItem>Coffee Tables</MenuItem>
                              <MenuItem>Shoe Rocks</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "13px",
                          marginTop: "-25px",
                          fontFamily: "sans-serif",
                          color: "rgba(0,0,0,0.87)",
                          fontWeight: "700",
                        }}
                      >
                        Sports, Books &amp; More{" "}
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{ marginLeft: "118px", marginTop: "-10px" }}
                      >
                        <Grid container justify="space-around" direction="row">
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Sports
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Cricket</MenuItem>
                              <MenuItem>Badminton</MenuItem>
                              <MenuItem>Cycling</MenuItem>
                              <MenuItem>Football</MenuItem>
                              <MenuItem>Skating</MenuItem>
                              <MenuItem>Swimming</MenuItem>
                            </MenuList>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <MenuList>
                              <MenuItem>
                                Food Essentials
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Nuts &amp; Dry Fruits</MenuItem>
                              <MenuItem>Tea , Coffee &amp; Beverages</MenuItem>
                              <MenuItem>Snacks corner</MenuItem>
                              <MenuItem>Chocolates</MenuItem>
                              <MenuItem>
                                Books
                                <ListItemIcon>
                                  <ArrowRight />
                                </ListItemIcon>
                              </MenuItem>
                              <MenuItem>Entrence Exams</MenuItem>
                              <MenuItem>Academics</MenuItem>
                              <MenuItem>Young Readers</MenuItem>
                              <MenuItem>Self-Help</MenuItem>
                              <MenuItem>E-Learning</MenuItem>
                            </MenuList>
                          </Grid>
                        </Grid>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Flights
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Offer Zone
                    </Link>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ marginTop: "-8px" }}>
                    <Link
                      style={{
                        fontSize: "13px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.87)",
                        fontWeight: "700",
                      }}
                    >
                      Grocery
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Paper
          elevation={0}
          variant="elevation"
          square
          style={{
            backgroundColor: "#f1f3f6",
            padding: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Paper>
            <div style={{ backgroundColor: "#40a8b9" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
                style={{ height: "150px" }}
              >
                <Grid zeroMinWidth item xs={4}>
                  <img
                    alt="weekend sale"
                    src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "150px" }}
                  ></img>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="mobile collection"
                        src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Mobiles
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="electronic collection"
                        src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Electronics
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="fashion collection"
                        src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Fashion
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="furniture collection"
                        src="https://images.unsplash.com/photo-1588714306299-aca44edf20de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlc3xlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Furniture
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="beauty collection"
                        src="https://images.unsplash.com/photo-1531751519425-e1fa9110434b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Beauty
                    </Typography>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ paddingRight: "10px" }}>
                  <div style={{ textAlign: "center" }}>
                    <Link
                      align="center"
                      underline="none"
                      display="block"
                      style={{ marginBottom: "10px" }}
                    >
                      <img
                        alt="kitchen collection"
                        src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGtpdGNoZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "70px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                      ></img>
                    </Link>
                    <Typography
                      variant="h6"
                      style={{
                        color: "rgba(255,255,255,0.91)",
                        fontSize: "15px",
                      }}
                    >
                      Kitchen
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper style={{ width: "100%", marginTop: "10px" }}>
            <div style={{ width: "100%" }}>
              <Link>
                <img
                  alt="fashion sale image1"
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                  style={{ width: "50%", height: "250px" }}
                ></img>
                <img
                  alt="fashion sale image2"
                  src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  style={{ width: "50%", height: "250px" }}
                ></img>
              </Link>
            </div>
            <div style={{ width: "100%", marginTop: "-175px" }}>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#ffffff",
                  paddingTop: "30px",
                  paddingLeft: "2px",
                  paddingBottom: "30px",
                  float: "left",
                  paddingRight: "2px",
                }}
              >
                <ChevronLeftOutlined style={{ fontSize: "40px" }} />
              </IconButton>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "#ffffff",
                  paddingTop: "30px",
                  paddingLeft: "2px",
                  paddingBottom: "30px",
                  float: "right",
                  paddingRight: "2px",
                }}
              >
                <ChevronRightOutlined style={{ fontSize: "40px" }} />
              </IconButton>
            </div>
          </Paper>
          <Paper
            variant="elevation"
            elevation={1}
            square
            style={{ marginTop: "190px" }}
          >
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Grid container justify="space-between">
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Top Offers</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#2874f0",
                      fontSize: "12px",
                      padding: "10px 25px",
                    }}
                  >
                    view all
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div style={{ padding: "10px" }}>
              <Grid
                container
                spacing={4}
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="laptop"
                        src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Best Gaming Deals"
                          style={{
                            color: "#000000",
                            fontFamily: "sans-serif",
                            fontWeight: "900",
                          }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹51,990"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Acer ,Asus, HP & More" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="furniture"
                        src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Top 10 Furniture Deals"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Up to 75% Off"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Peps Kurlon & More" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="camera"
                        src="https://images.unsplash.com/flagged/photo-1550255120-9b2a9de58dfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhbWVyYXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Canon DSLR Camera"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="EMI From ₹2,333/m*"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText
                          primary="₹19,999"
                          style={{ marginLeft: "10px" }}
                        />
                        <ListItemSecondaryAction />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="furniture"
                        src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb20lMjAlMjBmdXJuaXR1cmV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Mattresses"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹2,490"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Perfect Homes" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
          <Paper
            variant="elevation"
            elevation={1}
            square
            style={{ marginTop: "30px" }}
          >
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                spacing={4}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item xs={2} md={3}>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h6">Diwali Offers</Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{
                        borderRadius: "0px",
                        backgroundColor: "#2874f0",
                        fontSize: "12px",
                        padding: "10px 25px",
                        marginTop: "20px",
                      }}
                    >
                      view all
                    </Button>
                    <Paper elevation={0} style={{ marginTop: "30px" }}>
                      <img
                        alt="diwali"
                        src="https://images.unsplash.com/photo-1594404708321-12d10ea5590f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGRpd2FsaSUyMGxpZ2h0fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "100%",
                          height: "100px",
                          paddingLeft: "10px",
                        }}
                      ></img>
                    </Paper>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={10}
                  md={9}
                  style={{ paddingTop: "20px" }}
                >
                  <div>
                    <Grid
                      container
                      spacing={4}
                      justify="space-around"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="mobile"
                              src="https://images.unsplash.com/photo-1592898741882-ff375ff0e692?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fDEwbW9iaWxlJTIwcGhvbmVzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Most Affordable Phones"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Get Up to 50% Off"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Samsung , Huawei & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="AC"
                              src="https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="5-Star Triple Invertor AC"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹19,999"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Samsung , Whirlpool & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="refrigerator"
                              src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Double Door Refrigerator"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Start Onwards ₹21,990"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Samsung  & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper
            variant="elevation"
            elevation={1}
            square
            style={{ marginTop: "30px" }}
          >
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={10}
                  md={9}
                  style={{ paddingTop: "20px" }}
                >
                  <div>
                    <Grid
                      container
                      spacing={4}
                      justify="space-around"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="pant"
                              src="https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNsaXBwZXJzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Sparx , Bata ,Paragone & More"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Get Up to 60% Off"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Sandals & Splippers" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="women frock"
                              src="https://images.unsplash.com/photo-1583397758734-a524369cd4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Women Long Frock"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="60-70% + Extra10%"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Women Fit & Flare Blue Dress" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="trimmer"
                              src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="MI Trimmer for Men"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Starts ₹199"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Samsung  & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={2} md={3}>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h6">Today&#039;s Hot Deals</Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{
                        borderRadius: "0px",
                        backgroundColor: "#2874f0",
                        fontSize: "12px",
                        padding: "10px 25px",
                        marginTop: "20px",
                      }}
                    >
                      view all
                    </Button>
                    <Paper
                      elevation={0}
                      style={{ marginTop: "30px", paddingRight: "10px" }}
                    >
                      <img
                        alt="70% off"
                        src="https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2NvdW50JTIwc2FsZXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "100%",
                          height: "100px",
                          paddingLeft: "10px",
                        }}
                      ></img>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper
            variant="elevation"
            elevation={1}
            square
            style={{ marginTop: "30px" }}
          >
            <Paper elevation={0}>
              <Grid
                container
                alignContent="center"
                spacing={4}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item xs={2} md={3}>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h6">Best Of Electronics</Typography>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{
                        borderRadius: "0px",
                        backgroundColor: "#2874f0",
                        fontSize: "12px",
                        padding: "10px 25px",
                        marginTop: "20px",
                      }}
                    >
                      view all
                    </Button>
                    <Paper elevation={0} style={{ marginTop: "30px" }}>
                      <img
                        alt="all electronics"
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                        style={{
                          width: "100%",
                          height: "100px",
                          paddingLeft: "10px",
                        }}
                      ></img>
                    </Paper>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={10}
                  md={9}
                  style={{ paddingTop: "20px" }}
                >
                  <div>
                    <Grid
                      container
                      spacing={4}
                      justify="space-around"
                      direction="row"
                    >
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingLeft: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="hair dryers"
                              src="https://images.unsplash.com/photo-1581837672885-533599e35674?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Hair Dryers"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹399"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Philips , Havells & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div style={{ textAlign: "center" }}>
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="gaming console"
                              src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Gaming Consoles"
                                style={{ color: "#000000" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="From ₹27,349"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="Play Station & X-Box" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid zeroMinWidth item xs={4}>
                        <div
                          style={{ textAlign: "center", paddingRight: "10px" }}
                        >
                          <Link
                            color="initial"
                            underline="none"
                            display="block"
                            align="inherit"
                            style={{ width: "100%" }}
                          >
                            <img
                              alt="monitor"
                              src="https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "100%", height: "200px" }}
                            ></img>
                          </Link>
                          <List>
                            <ListItem style={{ textAlign: "center" }}>
                              <ListItemText
                                primary="Best Sellimg Monitors"
                                style={{ color: "#000000", width: "100%" }}
                              />
                            </ListItem>
                            <ListItem
                              alignItems="center"
                              style={{ marginTop: "-20px" }}
                            >
                              <ListItemText
                                primary="Start Onwards ₹4,999"
                                style={{
                                  color: "#389068",
                                  textAlign: "center",
                                }}
                              />
                            </ListItem>
                            <ListItem
                              style={{
                                marginTop: "-20px",
                                textAlign: "center",
                              }}
                            >
                              <ListItemText secondary="LG , Acer , HP & More" />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Paper>
          <Paper
            variant="elevation"
            elevation={1}
            square
            style={{ marginBottom: "40px", marginTop: "30px" }}
          >
            <div style={{ padding: "10px", textAlign: "center" }}>
              <Grid container justify="space-between">
                <Grid zeroMinWidth item>
                  <Typography variant="h6">Fashion Brands</Typography>
                </Grid>
                <Grid zeroMinWidth item>
                  <Button
                    color="primary"
                    variant="contained"
                    style={{
                      borderRadius: "0px",
                      backgroundColor: "#2874f0",
                      fontSize: "12px",
                      padding: "10px 25px",
                    }}
                  >
                    view all
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div style={{ padding: "10px" }}>
              <Grid
                container
                spacing={5}
                justify="space-around"
                direction="row"
              >
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="women frock"
                        src="https://images.unsplash.com/photo-1583039949243-e4119fa27a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Floral Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From ₹1,629"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="White and Pink" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="men shirt"
                        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc2hpcnQlMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Regular Fit Carbon Cloth"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Up to 75% Off"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Light Blue" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="women frock"
                        src="https://images.unsplash.com/photo-1602629339830-b7848e2ff629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Women Maxi Frock"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="From Onwards ₹2,149"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText
                          secondary="Gray & Yellow"
                          style={{ marginLeft: "10px" }}
                        />
                        <ListItemSecondaryAction />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div style={{ marginBottom: "-15px", textAlign: "center" }}>
                    <Link
                      color="initial"
                      underline="none"
                      display="block"
                      align="inherit"
                      style={{ width: "100%" }}
                    >
                      <img
                        alt="men shirt"
                        src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtZW4lMjBzaGlydHxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                    <List>
                      <ListItem style={{ textAlign: "center" }}>
                        <ListItemText
                          primary="Woodland  Slim Fit"
                          style={{ color: "#000000" }}
                        />
                      </ListItem>
                      <ListItem
                        alignItems="center"
                        style={{ marginTop: "-20px" }}
                      >
                        <ListItemText
                          primary="Start On ₹1999"
                          style={{ color: "#389068", textAlign: "center" }}
                        />
                      </ListItem>
                      <ListItem
                        style={{ marginTop: "-20px", textAlign: "center" }}
                      >
                        <ListItemText secondary="Dark Navy Blue" />
                      </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Paper>
        <Paper
          elevation={0}
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "20px",
            marginRight: "20px",
          }}
        >
          <div style={{ padding: "10px" }}>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <div>
                    <span
                      style={{
                        color: "rgba(0,0,0,0.72)",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      Top Stories :{" "}
                    </span>
                    <span style={{ fontSize: "17px", fontWeight: "600" }}>
                      Brand Directory
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }}>
                    <span
                      style={{
                        color: "rgba(74,74,74,0.8)",
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      MOST SEARCHED FOR ON SLASHKART :
                    </span>
                    <span
                      style={{
                        color: "#000000",
                        fontSize: "12px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      <Link>
                        TV and Home Appliances Big Billion Days 2020{" "}
                        <span> | </span>
                      </Link>
                      <Link>
                        Slashkart COVID-19 Insurance<span> | </span>
                      </Link>
                      <Link>
                        Slashkart Help Centre<span> | </span>
                      </Link>
                      <Link>
                        Track Orders<span> | </span>
                      </Link>
                      <Link>
                        Manage Orders<span> | </span>
                      </Link>
                      <Link>
                        Return Orders<span> | </span>
                      </Link>
                      <Link>
                        Made In India Toys<span> | </span>
                      </Link>
                      <Link>
                        Slashkart Gift Cards Store<span> | </span>
                      </Link>
                      <Link>
                        Slashkart Axis Bank Credit Card<span> | </span>
                      </Link>
                      <Link>
                        Vivo<span> | </span>
                      </Link>
                      <Link>
                        Huawei<span> | </span>
                      </Link>
                      <Link>
                        Samsung<span> | </span>
                      </Link>
                      <Link>
                        Apple<span> | </span>
                      </Link>
                      <Link>
                        Honor<span> | </span>
                      </Link>
                      <Link>
                        Oppo<span> | </span>
                      </Link>
                      <Link>
                        MI<span> | </span>
                      </Link>
                      <Link>
                        Real Me<span> | </span>
                      </Link>
                      <Link>
                        Sarees<span> | </span>
                      </Link>
                      <Link>
                        T-Shirts<span> | </span>
                      </Link>
                      <Link>
                        Party Wear<span> | </span>
                      </Link>
                      <Link>
                        Shirts<span> | </span>
                      </Link>
                      <Link>
                        Shoes<span> | </span>
                      </Link>
                      <Link>
                        Slippers<span> | </span>
                      </Link>
                      <Link>
                        AC<span> | </span>
                      </Link>
                      <Link>
                        Refrigirator<span> | </span>
                      </Link>
                      <Link>
                        Washion Mission<span> | </span>
                      </Link>
                    </span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{ padding: "10px", marginTop: "10px" }}>
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(74,74,74,0.82)",
                      fontSize: "17px",
                      fontWeight: "600",
                    }}
                  >
                    Slashkart : <span>The One-stop Shopping Destination</span>
                  </Typography>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Typography variant="h6" style={{ fontSize: "11px" }}>
                    E-commerce is revolutionizing the way we all shop in India.
                    Why do you want to hop from one store to another in search
                    of the latest phone when you can find it on the Internet in
                    a single click? Not only mobiles. Slashkart houses
                    everything you can possibly imagine, from trending
                    electronics like laptops, tablets, smartphones, and mobile
                    accessories to in-vogue fashion staples like shoes, clothing
                    and lifestyle accessories; from modern furniture like sofa
                    sets, dining tables, and wardrobes to appliances that make
                    your life easy like washing machines, TVs, ACs, mixer
                    grinder juicers and other time-saving kitchen and small
                    appliances; from home furnishings like cushion covers,
                    mattresses and bedsheets to toys and musical instruments, we
                    got them all covered. You name it, and you can stay assured
                    about finding them all here. For those of you with erratic
                    working hours, Slashkart is your best bet. Shop in your PJs,
                    at night or in the wee hours of the morning. This e-commerce
                    never shuts down.
                  </Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Typography variant="h6" style={{ fontSize: "12px" }}>
                    What&#039;s more, with our year-round shopping festivals and
                    events, our prices are irresistible. We&#039;re sure
                    you&#039;ll find yourself picking up more than what you had
                    in mind. If you are wondering why you should shop from
                    Slashkart when there are multiple options available to you,
                    well, the below will answer your question.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
        <Paper square style={{ backgroundColor: "#172337" }}>
          <div style={{ padding: "20px" }}>
            <Grid
              container
              alignContent="flex-start"
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    ABOUT
                  </Typography>
                  <MenuList style={{ fontSize: "12px" }}>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Contact Us
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      About Us
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Slashkart Stories
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Press
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Slashkart Wholesale
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    HELP
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Payments
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Shipping
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Cancellation &amp; Returns
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      FAQ
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Report Infrigment
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    POLICY
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Return Policy
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Terms Of Use
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Security
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Privacy
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Sitemap
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      EPR Complaince
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "15px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    SOCIAL
                  </Typography>
                  <MenuList>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Facebook
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      Twitter
                    </MenuItem>
                    <MenuItem style={{ color: "#ffffff", fontSize: "12px" }}>
                      YouTube
                    </MenuItem>
                  </MenuList>
                </div>
              </Grid>
              <Divider
                variant="fullWidth"
                orientation="vertical"
                flexItem
                style={{
                  backgroundColor: "#4a4a4a",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              />
              <Grid zeroMinWidth item style={{ paddingLeft: "10px" }}>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "5px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    Mail Us :
                  </Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Slashdiv Technologies Private Limited,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Flat No.15,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      PS Sivaswamy Salai,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Mylapore,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Chennai-600004,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Tamilnadu, India.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{
                      marginLeft: "5px",
                      fontSize: "14px",
                      paddingBottom: "5px",
                      color: "rgba(255,255,255,0.23)",
                    }}
                  >
                    Registered Office Address :
                  </Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Slashdiv Technologies Private Limited,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Flat No.15,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      PS Sivaswamy Salai,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Mylapore,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Chennai-600004,
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Tamilnadu, India.
                    </Typography>
                    <Typography
                      variant="h6"
                      align="left"
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      Telephone :{" "}
                      <Link style={{ color: "#2874f0" }}> 9876543210</Link>
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <Divider
            variant="fullWidth"
            orientation="horizontal"
            style={{ backgroundColor: "#4a4a4a" }}
          />
          <div
            style={{
              paddingTop: "5px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <ShoppingBasketOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Sell On Slashkart
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <StarOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Advertise
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <CardGiftcardOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Gift Cards
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <IconButton style={{ color: "#ffffff", fontSize: "14px" }}>
                    <HelpOutlineOutlined
                      style={{ color: "#f8e71c", marginRight: "5px" }}
                    />
                    Help Center
                  </IconButton>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    align="center"
                    style={{ color: "#ffffff", fontSize: "14px" }}
                  >
                    © 2019-2020 Slashkart.com
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Hidden>
    </div>
  );
}
export default SlashkartMatUI;