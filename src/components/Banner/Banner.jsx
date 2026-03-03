import vectorBg from "../../assets/vector1.png";
import vectorBg2 from "../../assets/vector2.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mx-4">
      <div
        className="bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `
      linear-gradient(to right, #632EE3, #9F62F2),
      url(${vectorBg2}),
      url(${vectorBg})
    `,
        }}
      >
        <div className="space-y-4 text-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl mt-10">
            In-Progress
          </h1>

          <p className="text-white text-7xl mb-10">0</p>
        </div>
      </div>
      <div
        className="bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `
      linear-gradient(to right, #54CF68, #00827A),
      url(${vectorBg2}),
      url(${vectorBg})
    `,
        }}
      >
        <div className="space-y-4 text-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl mt-10">
            Resolved
          </h1>

          <p className="text-white text-7xl mb-10">0</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
