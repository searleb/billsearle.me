import { ColorContext } from "context/color";
import { useRouter } from "next/router";
import { useContext } from "react";

export const ColorBar = () => {
  const { time, color } = useContext(ColorContext);
  const sharedClasses = "transition-colors duration-700 z-50 fixed";
  const router = useRouter();
  const hide = router.pathname === "/happy-birthday";

  return hide ? null : (
    <>
      <div
        style={{ backgroundColor: color }}
        className={`${sharedClasses} h-4 w-screen inset-x-0 top-0`}
      />
      <div
        style={{ backgroundColor: color }}
        className={`${sharedClasses} w-4 h-screen inset-y-0 left-0`}
      />
      <span className="fixed top-0 right-0 z-50 w-32 pr-2 text-xs text-black opacity-50">
        {time} / {color}
      </span>
    </>
  );
};
