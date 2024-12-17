import YellowCard from "./components/card-light/YellowCard";
import NeonCard from "./components/NeonCard";
import Slider from "./components/Slider";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="">
      <YellowCard />
      <NeonCard />
      <Slider />
      <SocialLinks />
    </div>
  );
}
