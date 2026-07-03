import { Transition } from "framer-motion";

/**
 * Shared transition for every `layoutId` morph (icon <-> open page/folder).
 * Both sides of a morph must use this so opening and closing are symmetric.
 * A short tween keeps it snappy with no overshoot: springs with `bounce: 0` are
 * overdamped and crawl into the final position (slow snap-back), while a positive
 * bounce reads as an unwanted wobble on the way in.
 */
export const morphTransition: Transition = { duration: 0.3, ease: "easeOut" };
