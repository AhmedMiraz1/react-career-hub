import image from "../../assets/social.png";

const Footer = () => {
  return (
    <footer className="p-10 bg-[#1A1919] text-[#FFFFFF] mb-0">
      <div className="container mx-auto px-8  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-between ">
        <nav className="flex flex-col">
          <h6 className=" text-[#FFFFFF] font-extrabold text-3xl">CareerHub</h6>
          <a className="link link-hover my-5">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </a>
          <img className="w-36" src={image} alt="" />
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
       
      
      </div>
     <div className="container mx-auto px-8">
     <hr className="my-12" />
     <div className="flex flex-col lg:flex-row gap-6 justify-between ">
          <p className="link link-hover">@2023 CareerHub. All Rights Reserved</p>
          <p className="link link-hover">Powered by CareerHub</p>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
