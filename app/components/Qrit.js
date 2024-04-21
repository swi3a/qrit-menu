'use client';
import Plats, {Plats1, Plats2} from "@/app/components/items/Items";
import Popup from "@/app/components/items/Popup";
import Categories from "@/app/components/items/Categories";


const Qrit = () => {
    return (
        <div className="w-full relative bg-white h-[1000px] overflow-y-auto text-left text-lg text-black font-inter">
            <div
                className="absolute top-[46px] left-[calc(50%_-_157px)] w-[313px] h-[85px] text-center text-mid text-gray-300 font-droid-sans">
                <div className="absolute top-[54px] left-[calc(50%_-_156.5px)] inline-block w-[313px] h-[31px]">
                    Explorez des saveurs qui vous raviront.
                </div>
                <b className="absolute top-[0px] left-[calc(50%_-_148.5px)] text-xl inline-block text-gray-200 w-[298px] h-[50px]">
                    Pas sûr de votre choix ? Votre compagnon IA est là !
                </b>
            </div>
            <Popup />
            <Categories />
            <div className="absolute top-[282px] rounded-[10px] bg-white w-[397px] overflow-x-auto flex flex-row items-start justify-start py-[11px] pl-[10px] box-border gap-[21px] ml-4">
                <Plats />
            </div>

            <div className="absolute top-[572px] left-[0px] rounded-[10px] bg-white w-[397px] overflow-x-auto flex flex-row items-start justify-start py-[11px] pl-[10px] box-border gap-[21px] ml-4">
                <Plats1 />
            </div>

            <div
                className="absolute top-[856px] left-[0px] rounded-[10px] bg-white w-[397px] overflow-x-auto flex flex-row items-start justify-start py-[11px] px-[10px] box-border gap-[21px] ml-4">
                <Plats2 />
            </div>
        </div>
    );
};


export default Qrit;
