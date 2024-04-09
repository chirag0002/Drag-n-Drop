import { Draggable } from "react-beautiful-dnd"
import { Card, triggerClickAtom } from "../atoms/atom"
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const SignleCard = ({ data, index, place, isValid }: { isValid?:boolean, data: Card, index: number, place?: string }) => {
    const [borderColor, setBorderColor] = useState<string>("border-gray-200");
    const triggerclick = useRecoilValue(triggerClickAtom)


    useEffect(() => {
        if (place !== "Row") return

        if (isValid === true) setBorderColor("border-green-500")
        if (isValid === false) setBorderColor("border-red-500")


        setTimeout(() => {
            setBorderColor("border-gray-200");
        }, 2000);


    }, [triggerclick]);

    return (
        <Draggable draggableId={data.name} index={index}>
            {(provided) => (
                <div
                    className={`shadow-xl my-2 border-2 hover:scale-110 hover:bg-gray-200 cursor-grab rounded-xl ${borderColor}`}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="m-auto flex flex-col justify-between items-center w-fit h-24 md:h-36">
                        <img src={data.image} alt="" className="w-4/12 md:w-7/12 m-auto" />
                        <div className="text-sm md:text-base">{data.name}</div>
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default SignleCard