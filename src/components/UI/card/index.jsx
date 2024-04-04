import "./style.scss";

const index = ({data:{name, age, id}, onDelate}) => {
    return (
        <>
            <div className="p-5 shadow-[0_4px_15px_5px_silver] rounded-md flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[18px]">Name: <span className="text-red-500">{name}</span></p>
                  <p className="font-semibold text-[18px]">Age: <span className="text-red-500">{age}</span></p>
                </div>
                <button onClick={()=> onDelate(id)} className="active:bg-[#00000018] px-2 py-1 rounded-md duration-200">
                  <i className="text-red-500 font-bold text-[20px] bi bi-trash-fill"></i>
                </button>
              </div>
        </>
    );
};

export default index;