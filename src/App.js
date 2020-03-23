import React, { Suspense } from "react";
import Layout from "./hoc/AppLayout/AppLayout";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Landing from "./Components/Landing/Landing";

const About = React.lazy(() => {
  return import("./Components/About/About.js");
});
const GoodsNGear = React.lazy(() => {
  return import("./Components/GoodsNGear/GoodsNGear.js");
});
const Gallery = React.lazy(() => {
  return import("./Components/Gallery/Gallery.js");
});
const TurtleSpurs = React.lazy(() => {
  return import("./Components/TurtleSpurs/TurtleSpurs.js");
});
const Contact = React.lazy(() => {
  return import("./Components/Contact/Contact.js");
});

const App = () => {
  let routes = (
    <Switch>
      <Route path="/about" render={() => <About />} />
      <Route path="/gear" render={() => <GoodsNGear />} />
      <Route path="/gallery" render={() => <Gallery />} />
      <Route path="/turtlespurs" render={() => <TurtleSpurs />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/" exact component={Landing} />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default App;
