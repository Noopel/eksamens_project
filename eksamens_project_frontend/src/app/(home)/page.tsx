"use client";
import ReactQueryExample from "@/components/query/ReactQueryExample";
import Container from "@/components/ui/Container";
import ExampleSlideshow from "@/components/ui/slideshow/ExampleSlideshow";
import ExampleSlideshowInfinite from "@/components/ui/slideshow/ExampleSlideshowInfinite";

const Home = () => {
  return (
    <main>
      <Container>
        <ExampleSlideshow />
        <ExampleSlideshowInfinite />
      </Container>
      <ReactQueryExample />
    </main>
  );
};

export default Home;
