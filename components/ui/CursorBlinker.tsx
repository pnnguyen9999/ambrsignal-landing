import { useEffect, useRef } from "react";
import { animate } from "animejs";

export default function CursorBlinker() {

    const cursorRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!cursorRef.current) return;
        const animation = animate(cursorRef.current, {
            opacity: [1, 0],
            duration: 500,
            ease: "linear",
            alternate: true,
            loop: true,
        });
        return () => {
            animation.pause();
        };
    }, []);

    return (
        <span
            ref={cursorRef}
            className="inline-block h-[90px] max-sm:h-[35px] w-[3px] translate-y-1 bg-black"
        />
    );
}
