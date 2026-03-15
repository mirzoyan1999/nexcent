import "./App.css";
import FirstBlock from "./components/Carousel";
import Client from "./components/Client";
import Community from "./components/Community";
import Membership from "./components/Membership";
import PixelGrid from "./components/PixelGrid";
import Achievements from "./components/Achievements";
import Calendar from "./components/Calendar";
import Customers from "./components/Customers";
import Blog from "./components/Blog";
import SectionText from "./components/SectionText";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return (
    <MainLayout>
      <FirstBlock />
      <Client />
      <Community />
      <Membership />
      <PixelGrid />
      <Achievements />
      <Calendar />
      <Customers />
      <Blog />
      <SectionText />
    </MainLayout>
  );
}

export default App;
