import React from "react";
import logo from "../../assets/images/larger_logo.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import discord from "../../assets/images/discord.png";

import FooterLink from "./FooterLink";
import SocialMediaImage from "./SocialMediaImage";
export default function Footer() {
  return (
    <footer className="bg-[#0B081C] text-start mt-40 pt-24 pb-20 font-Montserrat">
      <div className=" md:p-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 justify-between lg:items-center mx-10 md:mx-20">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6 flex sm:flex-col">
              <a href="#">
                <img
                  className="w-auto h-40 sm:h-28 md:h-40"
                  src={logo}
                  alt=""
                ></img>
              </a>
              <div>
                <p className="max-w-sm  text-white font-light leading-8">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>

                <div className="grid grid-cols-2 sm:w-fit sm:grid-cols-4 gap-y-4 mt-6 -mx-2">
                  <SocialMediaImage image={instagram} url="#"></SocialMediaImage>
                  <SocialMediaImage image={twitter} url="#"></SocialMediaImage>
                  <SocialMediaImage image={facebook} url="#"></SocialMediaImage>
                  <SocialMediaImage image={discord} url="#"></SocialMediaImage>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="flex justify-around">
              <div>
                <h3 className="text-white lg:text-2xl font-bold">Company</h3>
                <FooterLink text={"About Us"} url={"#"}></FooterLink>
                <FooterLink text={"Career"} url={"#"}></FooterLink>
                <FooterLink text={"Contact Us"} url={"#"}></FooterLink>
                <FooterLink text={"Legal and Privacy"} url={"#"}></FooterLink>
                <FooterLink
                  text={"Terms and Conditions"}
                  url={"#"}
                ></FooterLink>
              </div>

              <div>
                <h3 className="text-white lg:text-2xl font-bold">Accounts</h3>
                <FooterLink text={"Social Account"} url={"#"}></FooterLink>
                <FooterLink
                  text={"Professional Account"}
                  url={"#"}
                ></FooterLink>
                <FooterLink text={"Business Account"} url={"#"}></FooterLink>
              </div>

              <div>
                <h3 className="text-white lg:text-2xl font-bold">Explorer</h3>
                <FooterLink text={"The Smart Designer"} url={"#"}></FooterLink>
                <FooterLink text={"Job Connector"} url={"#"}></FooterLink>
                <FooterLink text={"Digital Magazine"} url={"#"}></FooterLink>
                <FooterLink text={"Blog"} url={"#"}></FooterLink>
                <FooterLink text={"Pricing"} url={"#"}></FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
