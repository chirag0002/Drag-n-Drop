import { useRecoilValue } from "recoil"
import DropRow from "./DropRow"
import { loadAtom, pathAtom, sourceAtom } from "../atoms/atom"

const DroppableArea = () => {

  const sourceData = useRecoilValue(sourceAtom)
  const pathData = useRecoilValue(pathAtom)
  const loadData = useRecoilValue(loadAtom)

  return <div className="grid grid-row-3 gap-4 w-10/12 m-auto">
    <DropRow name="Source" dropId="source" data={sourceData} />
    <DropRow name="Load" dropId="load" data={loadData} />
    <DropRow name="Path" dropId="path" data={pathData} />
  </div>
}

export default DroppableArea