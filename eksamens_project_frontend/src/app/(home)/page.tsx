"use client";
import SpaceSlideshow from "@/components/SpaceSlideshow";
import Container from "@/components/Container";
import VoresTureSection from "@/components/VoresTureSection";
import OmOsSection from "@/components/OmOsSection";
import VoresTeamSection from "@/components/VoresTeamSection";
import NyhedsbrevSection from "@/components/NyhedsbrevSection";

const Home = () => {
  return (
    <main className="">
      <SpaceSlideshow />
      <Container>
        <VoresTureSection />
        <OmOsSection />
        <VoresTeamSection />
      </Container>
      <NyhedsbrevSection />
    </main>
  );
};

export default Home;
