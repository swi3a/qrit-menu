const Items = ({ vegPizza, rs750, propWidth, propAlignSelf }) => {
    return (
        <div className="w-[152px] relative rounded-lg bg-white shadow-[0px_52px_14px_rgba(0,_0,_0,_0),_0px_33px_13px_rgba(0,_0,_0,_0.01),_0px_19px_11px_rgba(0,_0,_0,_0.02),_0px_8px_8px_rgba(0,_0,_0,_0.03),_0px_2px_5px_rgba(0,_0,_0,_0.04),_0px_0px_0px_rgba(0,_0,_0,_0.04)] h-[220px] overflow-hidden shrink-0 text-left text-lg text-black font-inter">
            <img
                className="absolute top-[0.2px] left-[0.3px] w-[151.7px] h-[132px] object-cover"
                alt=""
                src="/rectangle-100@2x.png"
            />
            <div className="absolute top-[143.9px] left-[19.9px] font-semibold">
                {vegPizza}
            </div>
            <div className="absolute top-[176.9px] left-[19.9px] text-base font-medium text-gray-400">
                {rs750}
            </div>
        </div>
    );
};

export default Items;