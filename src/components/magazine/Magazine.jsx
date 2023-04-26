import React from "react";
import Mission from "../features/Mission";
import Account from "../explore/Account";
import ubuntu_magazine from "../../assets/images/ubuntu_magazine.png";
export default function Magazine() {
  return (
    <div className="mb-40">
      <Mission
        headerText={"The Hotplatform Magazine"}
        descriptionText={
          "Explore our selection of digital magazines that cover a range of topics, from business to lifestyle."
        }
      ></Mission>
      <Account
        swap={true}
        image={ubuntu_magazine}
        title={"The Hot Platform: Ubuntu edition"}
        description={
          "Discover the latest trends and insights on the future of social media in our special edition magazine. Explore expert opinions, case studies, and success stories on how businesses can leverage social media to grow and expand their reach."
        }
        url={"#"}
      ></Account>
      <Account
        swap={false}
        image={ubuntu_magazine}
        title={"The Hot Platform: First edition"}
        description={
          "Our inaugural issue features exclusive interviews with industry experts, in-depth guides on maximizing your social media presence, and insider tips on using the Hot Platform to take your brand to the next level."
        }
        url={"#"}
      ></Account>
    </div>
  );
}
