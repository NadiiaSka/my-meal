import main from "../assets/images/main.svg";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <p>
            I'm baby raclette PBR&B lyft quinoa keytar helvetica next level
            leggings. Gochujang locavore neutra, tofu tousled jianbing everyday
            carry.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="easy walk" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
