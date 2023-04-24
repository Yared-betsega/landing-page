import React from 'react'
import Button from '../navbar/Button'
import FeatureCard from './FeatureCard'
import smartDesigner from '../../assets/images/smart_designer.png'
import jobConnector from '../../assets/images/job_connector.png'
import businessAccount from '../../assets/images/business_account.png'
import digitalMagazine from '../../assets/images/digital_magazine.png'
import Mission from './Mission'
export default function Features() {
    return (
        <div className="">
            <Mission></Mission>

            <div className="items-center lg:flex bg-[#24768C] rounded-3xl px-6 py-10">

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-auto">
                    <FeatureCard imageUrl={smartDesigner} text="The Smart Designer" link="#" bgColor="#DA1622"></FeatureCard>
                    <FeatureCard imageUrl={jobConnector} text="Job Connector" link="#" bgColor="#F2BA2C"></FeatureCard>
                    <FeatureCard imageUrl={businessAccount} text="Business Account" link="#" bgColor="#F2BA2C"></FeatureCard>
                    <FeatureCard imageUrl={digitalMagazine} text="Digital Magazine" link="#" bgColor="#DA1622"></FeatureCard>
                </div>

            </div>
        </div>

    )
}
