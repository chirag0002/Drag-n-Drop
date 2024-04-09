import { Droppable } from 'react-beautiful-dnd'
import SignleCard from './SingleCard'
import { useRecoilValue } from 'recoil'
import { cardsDataAtom } from '../atoms/atom'

const DraggableArea = () => {

  const cardData = useRecoilValue(cardsDataAtom)

  return (
    <Droppable droppableId='DragArea'>
      {(provided) => (
        <div
          className='grid md:grid-cols-3 gap-3 shadow-lg border-2 border-gray-200 w-10/12 m-auto p-4 rounded-xl'
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {cardData.map((data, index) => (
            <SignleCard data={data} index={index} key={data.id} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default DraggableArea