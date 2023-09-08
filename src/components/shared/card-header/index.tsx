import React, {ReactPropTypes} from "react";
interface CardHeaderComponentProps {
    title: string;
    iconClass: string;
    subTitle?:string;
}
const CardHeader: React.FC<CardHeaderComponentProps> = ({ title, iconClass,subTitle }) => {
    return (
        <div className="flex flex-col gap-2 pb-4 border-b">
            <h2 className="flex flex-row gap-2 items-center text-2xl font-semibold">
                <div className="flex items-center w-[35px] h-[35px] justify-center bg-[#E4F8EB] rounded-full"><i className={`fa text-lg  text-[#06BA34] ${iconClass}`}></i></div>
                <span className="first-letter:capitalize">{title}</span>
            </h2>
            <h3 className="text-sm text-gray-400">
                {subTitle}
            </h3>
        </div>
    )
}

export default CardHeader;