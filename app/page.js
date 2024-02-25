import FAQ from "./container/faq/page";
import Refer from "./container/refer/page";
import Test from "./container/test/page";
import TeamComponent from "./container/team/page";
import PortfolioComponent from "./container/portfolio/page";
import Why from "./container/whyus/page";
import Logos from "./container/logos/page";
import Hero from "./container/hero/page";
import Navbar from "./container/navbar/page";
import Footer from "./container/footer/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logos />
      <Why />
      <PortfolioComponent />
      <TeamComponent />
      <Test />
      <FAQ />
      <Refer />
      <Footer />
      <Navbar />
    </div>
  );
}
