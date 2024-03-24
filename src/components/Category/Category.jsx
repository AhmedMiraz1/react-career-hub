

const Category = ({category}) => {

    const {logo,category_name,availability}= category
    return (
        <div>

            <div className="bg-[#7E90FE0D] p-10 rounded-xl">
                <img className="mb-12" src={logo} alt="" />
                <h3 className="text-[#474747] text-xl font-extrabold">{category_name}</h3>
                <p className="text-[#A3A3A3] font-extrabold ">{availability}</p>
            </div>
            
        </div>
    );
};

export default Category;