import React from 'react';
import './Home.css';
import Card from './Card';

const Home = () => {
  return (
    <div className="Card">

      <div className="Row">
        <div className="c1">
          <Card
            imgSrc="/hand-holding-dollar-solid.svg"
            imgAlt="Funds"
            title="Funds"
            description="Like a mighty river that sustains life, monetary support to NGOs flows as the vital force that fuels their relentless pursuit of compassion, empowering them to reach farther, touch more hearts, and bring forth a world brimming with possibilities for those whose lives they touch."
            path="Funds"
          />
        </div>
        <div className="c2">
          <Card
            imgSrc="/jar-solid.svg"
            imgAlt="Food & Grocery"
            title="Food & Grocery"
            description="Nourishing more than just bodies, your support in providing food and groceries to NGOs becomes a feast of compassion, filling hearts with sustenance and empowering communities to flourish with strength and resilience."
            path=""
          />
        </div>
        <div className="c3">
          <Card
            imgSrc="/heart-pulse-solid.svg"
            imgAlt="Health & Medicines"
            title="Health & Medicines"
            description="Your donations for health and medicines breathe life into the wings of healing, allowing NGOs to be the guardians of wellness, the champions of hope, and the architects of a healthier world where compassion and care embrace every heartbeat."
            path=""
          />
        </div>
      </div>

      <div className="Row">
        <div className="c4">
          <Card
            imgSrc="/book-open-reader-solid.svg"
            imgAlt="Education"
            title="Education"
            description="Education is the beacon that illuminates the path from adversity to opportunity, and with your support, NGOs can provide the guiding light that empowers minds, transforms lives, and kindles a brighter future for generations to come."
            path=""
          />
        </div>
        <div className="c5">
          <Card
            imgSrc="/pen-fancy-solid.svg"
            imgAlt="Stationary"
            title="Stationary"
            description="Stationery donations to NGOs become the wings that lift eager minds to new heights, where the blank pages transform into canvases of imagination and hope, inspiring a world of endless possibilities and boundless creativity."
            path=""
          />
        </div>
        <div className="c6">
          <Card
            imgSrc="/shirt-solid.svg"
            imgAlt="Clothes"
            title="Clothes"
            description="Through the simple act of donating clothes, you become a weaver of warmth and dignity, wrapping those in need with the threads of hope and reminding them they are never alone on their journey to a better tomorrow."
            path=""
          />
        </div>
      </div>

      <div className="Row">
        <div className="c7">
          <Card
            imgSrc="/lightbulb-solid.svg"
            imgAlt="Electronic Appliances"
            title="Electronic Appliances"
            description="Embrace the power of technology's gift by donating electronic appliances and gadgets to NGOs, sparking a digital revolution that ignites possibilities, bridges gaps, and empowers individuals to create a brighter, connected future for all."
            path=""
          />
        </div>
        <div className="c8">
          <Card
            imgSrc="/list-check-solid.svg"
            imgAlt="Daily Essentials"
            title="Daily Essentials"
            description="Through your donations of daily essentials, you become the guardian angels of sustenance, restoring dignity and strength to those in need, and casting ripples of compassion that nurture communities and inspire a brighter tomorrow."
            path=""
          />
        </div>
        <div className="c9">
          <Card
            imgSrc="/sports.png"
            imgAlt="Sports Equipments"
            title="Sports Equipments"
            description="Fuel the spirit of champions by donating sports equipment to NGOs, where every ball, racket, and goal becomes a catalyst for empowerment, teamwork, and dreams that soar beyond the playing field, shaping a world where resilience and camaraderie reign supreme."
            path=""
          />
        </div>
      </div>

      <div className="Row">
        <div className="c10">
          <Card
            imgSrc="/paw-solid.svg"
            imgAlt="Veterniary Help"
            title="Veterniary Help"
            description="By extending a helping hand to veterinary donations, you heal not just the animals in need, but also the hearts of their human companions, forging a bond of compassion that speaks to the interconnectedness of all living beings and the immense power of love to make a difference."
            path=""
          />
        </div>
        <div className="c11">
          <Card
            imgSrc="/handshake-angle-solid.svg"
            imgAlt="Volunteers"
            title="Volunteers"
            description="Volunteers are the heartbeat of change, infusing the work of NGOs with the magic of selfless dedication, and together, we weave a tapestry of transformation that leaves an indelible mark on the lives we touch and the world we shape."
            path=""
          />
        </div>
        <div className="c12">
          <Card
            imgSrc="/miscellaneous.png"
            imgAlt="Miscellaneous"
            title="Miscellaneous"
            description="See which NGOs need miscellaneous help"
            path=""
          />
        </div>
      </div>

    </div>
  );
};

export default Home;