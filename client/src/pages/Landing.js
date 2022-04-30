import main from "../assets/images/main.svg";
import styled from "styled-components";
import Logo from "../components/Logo";

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

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    margin-top: 5rem;
  }
  h1 {
    font-weight: 700;
  }
  p {
    color: var(--grey-600);
  }
`;

export default Landing;
