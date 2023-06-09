import useTitle from "../../hooks/useTitle";

const About = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle('About')
    return (
        <div>
          <h2 className="text-3xl font-bold text-center">This is About</h2>
        </div>
    );
};

export default About;