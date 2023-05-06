import React from "react";
import FeatureCard from "./FeatureCard";
import smartDesigner from "../../assets/images/smart_designer.png";
import jobConnector from "../../assets/images/job_connector.png";
import businessAccount from "../../assets/images/business_account.png";
import digitalMagazine from "../../assets/images/digital_magazine.png";
import Intro from "../common/Intro";
import FeatureCardWithTooltip from "./FeatureCardWithTooltip";
export default function Features() {
  return (
    <div className="mb-40">
      <Intro
        headerText={"Features"}
        descriptionText={
          "ready to take your career or business to the next level with our amazing features"
        }
      ></Intro>

      <div className="items-center lg:flex  rounded-3xl px-6 py-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-40 sm:gap-x-10 xl:gap-x-60 gap-y-10 sm:gap-y-28 mx-auto items-center">
          <FeatureCardWithTooltip
            child={
              <FeatureCard
                imageUrl={smartDesigner}
                headerText="Smart Designer"
                descriptionText={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
                }
              ></FeatureCard>
            }
            tooltip={
              "Revolutionize the way you design with our intelligent customization feature, giving you the power to effortlessly create personalized CVs, posters, brochures, banners, Research documents and more in just a few clicks."
            }
          ></FeatureCardWithTooltip>
          <FeatureCardWithTooltip
            child={
              <FeatureCard
                imageUrl={jobConnector}
                headerText="Job Connector"
                descriptionText={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
                }
              ></FeatureCard>
            }
            tooltip={
              "Find your dream job with ease through our innovative job connector feature, designed to match job seekers with top hirers based on their unique skills and experience."
            }
          ></FeatureCardWithTooltip>
          <FeatureCardWithTooltip
            child={
              <FeatureCard
                imageUrl={businessAccount}
                headerText="Business Account"
                descriptionText={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
                }
              ></FeatureCard>
            }
            tooltip={
              "Discover the power of our all-in-one app, providing users with the flexibility to choose between social, professional, and business accounts - connecting them with a wide range of individuals and organizations to grow their network and achieve their goals."
            }
          ></FeatureCardWithTooltip>

          <FeatureCardWithTooltip
            child={
              <FeatureCard
                imageUrl={digitalMagazine}
                headerText="Digital Magazine"
                descriptionText={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
                }
              ></FeatureCard>
            }
            tooltip={
              "Stay ahead of the game and explore the latest in entrepreneurship, leadership, innovation, and lifestyle with our cutting-edge digital magazine featuring the hottest topics and trends in the world of business."
            }
          ></FeatureCardWithTooltip>
        </div>
      </div>
    </div>
  );
}
