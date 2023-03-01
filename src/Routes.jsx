import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Message = React.lazy(() => import("pages/Message"));
const Settings = React.lazy(() => import("pages/Settings"));
const HoverAccount = React.lazy(() => import("pages/HoverAccount"));
const ChangeNetwork = React.lazy(() => import("pages/ChangeNetwork"));
const Ownerpreview = React.lazy(() => import("pages/Ownerpreview"));
const CreatorOnclick = React.lazy(() => import("pages/CreatorOnclick"));
const LandingAlt = React.lazy(() => import("pages/LandingAlt"));
const Onlywebsite = React.lazy(() => import("pages/Onlywebsite"));
const DetailsMultiItemOne = React.lazy(() =>
  import("pages/DetailsMultiItemOne")
);
const DetailsItemsBid = React.lazy(() => import("pages/DetailsItemsBid"));
const DetailsSingleItem = React.lazy(() => import("pages/DetailsSingleItem"));
const ConnectWallet = React.lazy(() => import("pages/ConnectWallet"));
const ConnectWalletOne = React.lazy(() => import("pages/ConnectWalletOne"));
const CompanyDetail = React.lazy(() => import("pages/CompanyDetail"));
const MarketplaceMenu = React.lazy(() => import("pages/MarketplaceMenu"));
const DetailsItemsBidOne = React.lazy(() => import("pages/DetailsItemsBidOne"));
const DetailsMultiItem = React.lazy(() => import("pages/DetailsMultiItem"));
const Aktivitet = React.lazy(() => import("pages/Aktivitet"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aktivitet" element={<Aktivitet />} />
          <Route path="/detailsmultiitem" element={<DetailsMultiItem />} />
          <Route path="/detailsitemsbidone" element={<DetailsItemsBidOne />} />
          <Route path="/marketplacemenu" element={<MarketplaceMenu />} />
          <Route path="/companydetail" element={<CompanyDetail />} />
          <Route path="/connectwalletone" element={<ConnectWalletOne />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/detailssingleitem" element={<DetailsSingleItem />} />
          <Route path="/detailsitemsbid" element={<DetailsItemsBid />} />
          <Route
            path="/detailsmultiitemone"
            element={<DetailsMultiItemOne />}
          />
          <Route path="/onlywebsite" element={<Onlywebsite />} />
          <Route path="/landingalt" element={<LandingAlt />} />
          <Route path="/creatoronclick" element={<CreatorOnclick />} />
          <Route path="/ownerpreview" element={<Ownerpreview />} />
          <Route path="/changenetwork" element={<ChangeNetwork />} />
          <Route path="/hoveraccount" element={<HoverAccount />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
