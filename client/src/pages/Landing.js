import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav></nav>
      <div className="container page">
        <div className="info">
          <h1>
            My <span>meal</span> app
          </h1>
          <p>
            I'm baby raclette PBR&B lyft quinoa keytar helvetica next level
            leggings. Gochujang locavore neutra, tofu tousled jianbing everyday
            carry. Try-hard shaman echo park leggings, fingerstache humblebrag
            bushwick. Vape gluten-free hammock, hell of biodiesel mustache
            kinfolk chillwave lo-fi tofu wolf.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="easy walk" className="img" />
      </div>
    </main>
  );
};

export default Landing;
