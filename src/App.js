import React from "react";
import ContactCard from "./ContactCard";

const App = () => {
  return (
    <div>
      <ContactCard
        name="Mr Jude"
        imgUrl="http://placekitten.com/300/200"
        phone="08027444796"
        email="jjchinoso@gmail.com"
      />
      <ContactCard
        name="Mr Okuwanyi"
        imgUrl="http://placekitten.com/400/200"
        phone="08027444796"
        email="jjchinoso@gmail.com"
      />
      <ContactCard
        name="Mrs Jude"
        imgUrl="http://placekitten.com/300/400"
        phone="08027444796"
        email="jjchinoso@gmail.com"
      />
      <ContactCard
        name="Mr Chidima"
        imgUrl="http://placekitten.com/300/250"
        phone="08027444796"
        email="jjchinoso@gmail.com"
      />
    </div>
  );
};

export default App;
