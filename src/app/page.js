
import BlogSection from "./components/BlogSection";
import ContactAndPortfolio from "./components/ContactAndPortfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <div>
     <Header />
     <WhatWeDo />
     <ContactAndPortfolio />
     <BlogSection />
     <Footer />
    </div>
  );
}
