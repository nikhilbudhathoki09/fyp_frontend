export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2.0, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
