import { Droppable } from "react-beautiful-dnd";
import SignleCard from "./SingleCard";
import { Rowcard } from "../atoms/atom";

const DropRow = ({ name, dropId, data }: { name: string, dropId: string, data: Rowcard[] }) => {
    return (
        <div className="flex flex-col md:flex-row gap-2 shadow-2xl border-2 border-gray-200 min-h-64 md:min-h-40 items-center rounded-xl">
            <div className="bg-blue-600 text-sm md:text-base w-8/12 md:w-2/12 text-white text-center md:py-2 ml-2 mt-2 rounded-lg">{name}</div>
            <Droppable droppableId={dropId}>
                {(provided) => (
                    <div
                        className="w-full"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {data.length === 0 ? (
                            <div className="text-center text-2xl md:text-4xl font-bold text-gray-200">
                                Drag items here
                            </div>
                        ) : (
                            <div className="md:grid md:grid-cols-3 gap-2 px-2">
                                {data.map((rowData, index) => (
                                    <SignleCard data={rowData} index={index} key={rowData.id} place="Row" isValid={rowData.isValid} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default DropRow;
