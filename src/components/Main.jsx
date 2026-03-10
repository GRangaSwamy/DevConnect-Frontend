import { useNavigate } from "react-router-dom";
import FloatingSpher from './Animation'
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-base-200">
      <div className="hero min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <FloatingSpher/>
        <h1 className="text-5xl font-bold mb-4">Connect, Collaborate, Code Together</h1>
        <p className="py-4 max-w-xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-lg">
         Discover developers, build projects, and grow your network effortlessly.
        </p>
        <button className="btn btn-primary mt-4" onClick={() => navigate("/signup")} > Get Started </button>
      </div>
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Use DevConnect?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Find Developers</h2>
              <p>Discover developers with similar tech stacks and interests.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Build Projects</h2>
              <p>Collaborate on projects and improve your portfolio.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Grow Network</h2>
              <p>Expand your developer network and career opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <ul className="steps steps-vertical lg:steps-horizontal w-full justify-center">
          <li className="step step-primary">Create Profile</li>
          <li className="step step-primary">Discover Developers</li>
          <li className="step step-primary">Send Requests</li>
          <li className="step step-primary">Start Collaborating</li>
        </ul>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Connect With Developers?
        </h2>
        <p className="mb-6">
          Join DevConnect today and start building your developer network.
        </p>
        <button className="btn btn-secondary btn-lg" onClick={() => navigate("/signup")} > Join Now </button>
      </section>
    </div>
  );
};

export default LandingPage;