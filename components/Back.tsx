import Link from "next/link";

const Back = () => {
  return (
    <Link
      href={"/"}
      className="flex items-center gap-2 text-blue-500 text-sm w-fit"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m7.875 1.625-6.75 6.75 6.75 6.75m9-6.75H1.125"
          stroke="#3b82f6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>{" "}
      Back
    </Link>
  );
};

export default Back;
