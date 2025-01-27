import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/features/theme-slice";

interface PropsI {
  theme: any;
}
const ThemeApp: FC = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state: PropsI) => state.theme.theme);

  return (
    <div
      className={`h-[30vh] flex justify-center items-center mt-10`}
    >
      <div className={`flex justify-center items-center w-[80%] h-[20vh] `}>
        <button
          onClick={() => dispatch(changeTheme())}
          className={`p-3 ${theme === 'light' ? 'bg-black' : 'bg-slate-400'} border-2 border-white rounded-md hover:bg-amber-500 active:bg-amber-600 text-white font-bold duration-200`}
        >
          CHANGE THEME TO {theme === 'light' ? 'DARK' : 'LIGHT'}
        </button>
      </div>
    </div>
  );
};

export default ThemeApp;
