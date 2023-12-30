import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero> </Hero>
      <Analytics></Analytics>
      <Newsletter />
    </div>
  );
}
