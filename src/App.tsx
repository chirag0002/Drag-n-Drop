import { DragDropContext } from "react-beautiful-dnd";
import DroppableArea from "./components/DroppableArea";
import DraggableArea from "./components/DraggableArea";
import ButtonsSection from "./components/ButtonsSection";
import { DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { cardsDataAtom, loadAtom, pathAtom, sourceAtom } from "./atoms/atom";


const App = () => {
  const [cardsData, setcardsData] = useRecoilState(cardsDataAtom)
  const [sourceData, setSourceData] = useRecoilState(sourceAtom)
  const [loadData, setLoadData] = useRecoilState(loadAtom)
  const [pathData, setPathData] = useRecoilState(pathAtom)


  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let cards = [...cardsData];
    let source_data = [...sourceData];
    let path = [...pathData];
    let load = [...loadData];

    if (source.droppableId === "DragArea" && destination.droppableId === "path") {
      add = cards[source.index];
      if (path.length < 3) {
        cards.splice(source.index, 1);
        path.push(add);
        setcardsData(cards);
        setPathData(path);
      }
    }

    if (source.droppableId === "DragArea" && destination.droppableId === "source") {
      add = cards[source.index];
      if (source_data.length < 3) {
        cards.splice(source.index, 1);
        source_data.push(add);
        setcardsData(cards);
        setSourceData(source_data);
      }
    }

    if (source.droppableId === "DragArea" && destination.droppableId === "load") {
      add = cards[source.index];
      if (load.length < 3) {
        cards.splice(source.index, 1);
        load.push(add);
        setcardsData(cards);
        setLoadData(load);
      }
    }

    if (destination.droppableId === "DragArea") {
      if (source.droppableId === "path") {
        add = path[source.index];
        path.splice(source.index, 1);
        cards.splice(destination.index, 0, add);
        setPathData(path);
      }

      if (source.droppableId === "source") {
        add = source_data[source.index];
        source_data.splice(source.index, 1);
        cards.splice(destination.index, 0, add);
        setSourceData(source_data);
      }

      if (source.droppableId === "load") {
        add = load[source.index];
        load.splice(source.index, 1);
        cards.splice(destination.index, 0, add);
        setLoadData(load);
      }

      setcardsData(cards);
    }
  }



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <div className="w-11/12 m-auto text-xl md:text-3xl font-bold text-gray-400 underline p-3 border-2 border-gray-200 rounded-xl shadow-2xl mt-3">
          Drag-n-Drop
        </div>
        <div className="grid md:grid-cols-2 gap-5 justify-evenly items-center my-12">
          <DroppableArea />
          <DraggableArea />
        </div>
        <ButtonsSection />
      </div>
    </DragDropContext>
  )
}

export default App