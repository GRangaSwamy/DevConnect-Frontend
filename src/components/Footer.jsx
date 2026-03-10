import { LOGO_IMG } from "../../consts/Images";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-5 flex flex-col sm:flex-row justify-between items-center">
      
      {/* Logo + Brand */}
      <div className="flex items-center gap-3">
        <aside className="flex items-center gap-3">
          <img src={LOGO_IMG} alt="DevConnect Logo" className="w-30  h-30 object-contain rounded-2xl"  />
          <p>
          </p>
        </aside>
        <div>
          <p className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600  bg-clip-text text-transparent" >DevConnect</p>
          <p className="text-lg">Connecting Developers. Building the Future.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-4 sm:mt-0 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} DevConnect. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;