import React from "react";
import NavBar from "./Navbar";
import CardSection from "./Cardsection";
import Jumbo from "./Jumbo";
import AppSection from "./Appsection";
import Footer from "./Footer";




const App = ()=>{
    return(
        <div>
           <NavBar />
           <AppSection/>
           <Jumbo />
           <CardSection />
           <Footer />
        </div>
    )
};
export default App;
 