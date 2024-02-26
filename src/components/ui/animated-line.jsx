import { motion } from "framer-motion";
const draw = {
  hidden: { pathLength: 0, opacity: 0, fill: "none" },
  visible: () => {
    const delay = 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      fill: "#D6CBF9",
      transition: {
        pathLength: { delay, type: "spring", duration: 2.0, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        fill: { delay, duration: 0.01 },
      },
    };
  },
};

export default function AnimatedLine() {
  return (
    <motion.svg
      viewBox="0 0 172 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"h-8 w-80 "}
      strokeWidth={4}
    >
      <motion.path
        initial="hidden"
        whileInView="visible"
        variants={draw}
        custom={1}
        stroke={"#D6CBF9"}
        d="M111.538 21.1607C91.5015 26.0143 70.351 29.3017 53.5312 20.078C30.0739 7.21429 11.4006 14.885 5.41628 19.7295C3.91387 20.9457 1.70997 20.7137 0.493728 19.2113C-0.72251 17.7089 0.50948 11.505 2.01189 10.2888C10.0276 3.79986 30.7543 -0.396065 56.897 13.9403C71.0772 21.7165 89.6766 19.2539 109.89 14.3575C114.551 13.2284 119.229 11.9903 123.91 10.7514C124.239 10.6645 124.567 10.5776 124.895 10.4908C129.889 9.16951 134.884 6.85649 139.775 5.71075C149.519 3.42837 157.099 -0.253529 165.82 0.0107339C167.752 0.0692826 169.271 1.68303 171.212 6.61514C171.154 8.54725 169.54 10.0661 167.608 10.0075C159.829 9.77179 150.972 11.2774 141.372 13.5263C136.591 14.6461 131.687 15.9347 126.685 17.258C126.353 17.346 126.019 17.4342 125.685 17.5226C121.02 18.7574 116.274 20.0136 111.538 21.1607Z"
        fill="true"
      />
      {/* <defs>
        <linearGradient
          id="paint0_linear_90_449"
          x1="30"
          y1="2.30574e-05"
          x2="160"
          y2="7.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6CBF9" />
          <stop offset="1" stopColor="#D6CBF9" stopOpacity="0.6" />
        </linearGradient>
      </defs> */}
    </motion.svg>
  );
}
