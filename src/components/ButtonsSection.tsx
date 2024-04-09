import { FaCheck } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cardsDataAtom, loadAtom, pathAtom, sourceAtom, triggerClickAtom } from "../atoms/atom";
import cardData from '../data/data.json'


const ButtonsSection = () => {
    const setcardsData = useSetRecoilState(cardsDataAtom)
    const [triggerClick, setTriggerClick] = useRecoilState(triggerClickAtom)
    const [sourceData, setSourceData] = useRecoilState(sourceAtom)
    const [loadData, setLoadData] = useRecoilState(loadAtom)
    const [pathData, setPathData] = useRecoilState(pathAtom)


    const check = () => {
        const correctSource = new Set(["5", "8", "9"]);
        const correctLoad = new Set(['3', "1", "6"]);
        const correctPath = new Set(["2", "4", "7"]);

        const user_input_source = sourceData.map((data) => data.id);
        const user_input_path = pathData.map((data) => data.id);
        const user_input_load = loadData.map((data) => data.id);

        const sourceValidity = user_input_source.map(id => correctSource.has(id));
        const pathValidity = user_input_path.map(id => correctPath.has(id));
        const loadValidity = user_input_load.map(id => correctLoad.has(id));

        const updatedSourceData = sourceData.map((item, index) => ({
            ...item,
            isValid: sourceValidity[index]
        }));
        const updatedPathData = pathData.map((item, index) => ({
            ...item,
            isValid: pathValidity[index]
        }));
        const updatedLoadData = loadData.map((item, index) => ({
            ...item,
            isValid: loadValidity[index]
        }));

        setSourceData(updatedSourceData);
        setPathData(updatedPathData);
        setLoadData(updatedLoadData);
        setTriggerClick(!triggerClick);
    };

    const reset = () => {
        setcardsData(cardData);
        setSourceData([]);
        setPathData([]);
        setLoadData([]);
    }

    return (
        <div className="flex gap-6 items-center justify-center mb-5">
            <div
                className="cursor-pointer text-sm md:text-base w-5/12 md:w-1/12 bg-green-400 text-white font-bold py-2 rounded-lg shadow-xl flex gap-2 justify-center items-center"
                onClick={check}
            >
                <div>
                    Check
                </div>
                <FaCheck />
            </div>

            <div
                className="cursor-pointer w-5/12 md:w-1/12 text-sm md:text-base bg-yellow-400 text-white font-bold py-2 rounded-lg shadow-xl flex gap-2  justify-center items-center"
                onClick={reset}
            >
                <div>
                    Reset
                </div>
                <GrPowerReset />
            </div>
        </div>
    )
}

export default ButtonsSection