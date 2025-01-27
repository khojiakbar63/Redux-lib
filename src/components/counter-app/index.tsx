import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../redux/features/counter-slice";

interface PropsI {
  theme: any;
}

const CounterApp: FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const theme = useSelector((state: PropsI) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`h-[40vh] grid place-content-center ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
      <div className="border-[10px] rounded-xl border-orange-600 grid place-content-center w-[70vw] h-[25vh] mx-auto ">
        <h1 className="text-2xl font-bold text-violet-900 mb-4 -rotate-90 -translate-x-32 translate-y-16">
          Counter App
        </h1>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-slate-500 h-[80px] w-[200px] rounded-lg flex flex-col items-center justify-center font-bold text-[50px] text-white font-mono">
            {count > 0 ? (
              <span className="text-green-500">{count}</span>
            ) : (
              <span className="text-red-500">{count}</span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => dispatch(increment())}
              className="bg-blue-300 p-2 rounded-lg hover:bg-blue-400 active:bg-blue-500 hover:text-white font-mono font-bold"
            >
              PLUS
            </button>
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-300 p-2 rounded-lg hover:bg-red-400 active:bg-red-500 hover:text-white font-mono font-bold"
            >
              MINUS
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="bg-green-300 p-2 rounded-lg hover:bg-green-400 active:bg-green-500 hover:text-white font-mono font-bold"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
