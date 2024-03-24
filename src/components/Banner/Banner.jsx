import banner from '../../assets/user.png'


const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between items-center mb-16 lg:mb-32 mt-10">
     <div>
     <h2 className=" text-2xl lg:text-7xl font-semibold lg:font-extrabold text-[#1A1919] ">
        One Step <br /> Closer To Your <br /> <span className='text-[#9873FF]'>Dream Job</span>
      </h2>
     <p className='my-6 text-[#757575] font-medium text-sm lg:text-lg'> Explore thousands of job opportunities with all the information you need.
      Its your future. Come find it. Manage all your job application from start
      to finish.</p>
      <button className='text-white bg-[#7E90FE] px-4 lg:px-7 py-3 lg:py-5 rounded-2xl text-xl lg:text-2xl'>Get Started</button>
     </div>
     <div>
      <img src={banner} alt="" />
     </div>
    </div>
  );
};

export default Banner;
