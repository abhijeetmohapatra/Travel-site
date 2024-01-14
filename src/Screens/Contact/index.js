import React from "react";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import { Grid } from "@mui/material";
import style from "./style.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Img1 from "../../Assets/Image/1.jpg";
import Img2 from "../../Assets/Image/2.jpg";
import Img3 from "../../Assets/Image/3.jpg";

function Contact() {
    return (
        <Grid container direction="row" lg={12} className={style.bpg}>
            <Grid item lg={12}>
                <Header />
            </Grid>
            <Grid item lg={12}>
                <Grid className={style.bpg1}>
                    <Grid>
                        <h1>Contact</h1>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item={12}>
                <Grid container direction="row" lg={12} style={{margin:"2%"}}>
                    <Grid item lg={6}>
                        <Grid style={{}}>
                            <h1>Contact us</h1>

                            <Carousel>
                                <div>
                                    <img src={Img1} alt="" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>
                                    <img src={Img1} alt="" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>
                                    <img src={Img1} alt="" />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>


                        </Grid>
                    </Grid>
                    <Grid item lg={6} style={{ paddingBottom: "1%", width: "100%" }}>
                        <Grid >
                            <form className={style.bpg2}>
                                <h1>Send a message to us</h1>
                                <input type="text" name="name" id="" placeholder="Enter name" />
                                <input type="email" name="email" id="" placeholder="example@gmail.com" />
                                <input type="phone" name="phone" id="" placeholder="+91" />
                                <textarea name="message" id="" cols="30" rows="10" placeholder="Type here..." />
                                <button type="submit">send</button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12}>
                    <Footer />
                </Grid>
            </Grid>




        </Grid>
    );
}

export default Contact;