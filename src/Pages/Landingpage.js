import React from "react";
import { Link } from "react-router-dom";

import "./Landingpage.css";

import mediaPic from "../Assets/mediaHub.png";
import musicPic from "../Assets/musicBar.png";
import media from "../Assets/media.png";
import curate from "../Assets/curate.png";
import undraw_Analytics from "../Assets/undrawAnalytics.png";
import undraw_Online from "../Assets/undrawOnline.png";
import undraw_Playlist from "../Assets/undrawPlaylist.png";
import vector from "../Assets/VectorOne.png";
import x from "../Assets/x.png";
import facebookIcon from "../Assets/facebookIcon.png";
import discord from "../Assets/discord.png";

const LandingPage = () => {
  return (
    <div className="all">
      <div className="container">
        <nav className="nav-bar">
          <div className="nav-logo">
            <img className="adjust" src={musicPic} alt="volume bar" />
            <img
              className="adjust img-adjust"
              src={mediaPic}
              alt="Media name"
            />
          </div>

          <ul className="nav-link">
            <li className="hover">
              <Link to="/Login" className="Login">
                Login
              </Link>
            </li>
            <li className="hover">
              <Link to="/Signup" className="Sign-Up">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
        <section className="steps">
          <div className="step-one-content reducedOne">
            <div className="step-one_left up">
              <h1 className="step-one_h1">
                Unlocking Data-backed{" "}
                <span className="col">Entertainment </span>
                for wholesome experiences
              </h1>
              <p className="step-one_about">
                Welcome to the pleasure hub where your interest in music,
                movies, TV shows, podcasts, or audiobooks is packaged under one
                seamless entertainment world.
              </p>
              <div className="step-one_btn">
                <button className="btn-one">Add Playlist</button>
                <button className="btn-two">Free trial</button>
              </div>
            </div>
            <img
              src={media}
              alt="animation picture of people listening to music"
              className=" increaseOne"
            />
          </div>
        </section>
      </div>
      <section className="about index">
        <div className="about-content">
          <header className="about-h2">OUR STORY</header>
          <p className="about-p">
            Our journey begins with a simple yet deep understanding that people
            need a compass to navigate this maze-like digital media world.
          </p>
        </div>
      </section>
      <section className="step coverOne ">
        <header className="step-two_h1">
          Discover the Benefits of Media Hub
        </header>
        <div className="step-one-content reducedTwo">
          <div className="step-one_left">
            <span className="one">01</span>
            <p className="step-two_about">Unlock Seamless Media Management</p>
            <p className="step-two_text">
              Effortlessly organize, discover, and enjoy your favorite movies,
              TV shows, and music in one unified platform.
            </p>
          </div>
          <img
            src={undraw_Online}
            alt="animation picture of people listening to music"
            className="step-one_right "
          />
        </div>
      </section>
      <section className="step coverTwo">
        <div className="step-one-content">
          <img
            src={undraw_Playlist}
            alt="animation picture of people listening to music"
            className="step-one_right"
          />
          <div className="step-one_left">
            <span className="one">02</span>
            <p className="step-two_about">Tailored Just for You</p>
            <p className="step-two_text">
              Receive personalized recommendations based on your unique tastes
              and preferences and never miss out on your next binge worthy show
              or must-listen album.
            </p>
          </div>
        </div>
      </section>
      <section className="step-third">
        <div className=" step-3">
          <div className="step-one_left">
            <span className="one">03</span>
            <p className="step-two_about">Create Your Perfect Playlist</p>
            <p className="step-two_text">
              Whether it is a movie marathon, a workout playlist or a relaxing
              evening of music, Media Hub empowers you to create the perfect
              lineup for every occasion.
            </p>
          </div>
          <img
            src={curate}
            alt="animation picture of people listening to music"
            className=" bigNow"
          />
        </div>
      </section>
      <section className="step-fourth">
        <div className="step-one-content">
          <img
            src={undraw_Analytics}
            alt="animation picture of people listening to music"
            className="step-one_right"
          />
          <div className="step-one_left interchanged">
            <span className="one">04</span>
            <p className="step-two_about">Gain Deeper Insights</p>
            <p className="step-two_text">
              Learn more about your listening and viewing preferences, discover
              new gems and make informed discussions about your entertainment
              choices.
            </p>
          </div>
        </div>
      </section>
      <footer className="page-footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-p">
              <header className="footer-header">
                Start 30 day Free trial NOW
              </header>
              <p className="footer-text">
                Join 1000+ startups already growing with Media Hub
              </p>
            </div>
            <div className="footer-text">
              <div className="footer-first-p">
                <p className="footer-head">Product </p>
                <span className="footer-about">Overview</span>
                <span className="footer-about">Features </span>
                <span className="footer-about">Solutions</span>
                <span className="footer-about">Pricing</span>
                <span className="footer-about">Releases</span>
              </div>
              <div className="footer-second-p">
                <p className="footer-head">Company </p>
                <span className="footer-about">About Us</span>
                <span className="footer-about">Careers</span>
                <span className="footer-about">Press </span>
                <span className="footer-about">Media Kit</span>
                <span className="footer-about">Contact</span>
              </div>
              <div className="footer-third-p">
                <p className="footer-head">Resources </p>
                <span className="footer-about">Blog</span>
                <span className="footer-about">Newsletter </span>
                <span className="footer-about">Solutions</span>
              </div>
              <div className="footer-fourth-p">
                <p className="footer-head">Legal </p>
                <span className="footer-about">Terms</span>
                <span className="footer-about">Privacy</span>
                <span className="footer-about">Liscenses</span>
                <span className="footer-about">Cookies</span>
                <span className="footer-about">Contact</span>
              </div>
            </div>
          </div>
          <div className="footer-follow">
            <p className="footer-follot_t">
              @ Media Hub. All rights researved.
            </p>
            <div className="footer-div">
              <img className="footer-icon" src={discord} alt="Discord lcon" />
              <img
                className="footer-icon"
                src={facebookIcon}
                alt="facebook lcon"
              />
              <img className="footer-icon" src={x} alt="X lcon" />
              <img className="footer-icon" src={vector} alt="An lcon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
