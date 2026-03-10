import { LOGO_IMG } from "../../consts/Images";
const DevConnectLogo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <img src={LOGO_IMG} alt="DevConnect Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
      <h1 className="text-3xl md:text-3xl font-bold  bg-gradient-to-r from-blue-500 to-purple-600  bg-clip-text text-transparent" >
        DevConnect
      </h1>

    </div>
  );
};
export default DevConnectLogo;