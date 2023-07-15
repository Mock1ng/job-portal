"use client";

import { useAppDispatch, useAppSelector } from "@/features/hooks";
import {
  getAllJobs,
  setDesc,
  setFulltime,
  setLocation
} from "@/features/jobs/slice";
import Image from "next/image";
import { MouseEvent, useState } from "react";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { location, description, full_time } = useAppSelector(
    (state) => state.jobs.params
  );
  // const [desc, setDesc] = useState("");
  // const [location, setLocation] = useState("");
  // const [isFulltime, setIsFulltime] = useState(false);

  const searchHandler = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    dispatch(
      getAllJobs({
        page: "1",
        description,
        location,
        full_time
      })
    );
  };

  return (
    <div className="layout mb-5">
      <form className="border-2 h-20 rounded-full flex items-center p-3">
        <div className="h-8 flex items-center ml-5">
          <Image
            src={"/../public/magnify.png"}
            alt="magnify icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Job Description"
            className="ml-3 focus:ring-0 border-transparent focus:border-transparent outline-none"
            onChange={(e) => dispatch(setDesc(e.target.value))}
          />
        </div>
        <div className="h-8 flex items-center ml-5">
          <Image
            src={"/../public/location.png"}
            alt="magnify icon"
            width={20}
            height={20}
          />
          <input
            type="text"
            placeholder="Job Location"
            className="ml-3 focus:ring-0 border-transparent focus:border-transparent outline-none"
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </div>
        <div className="mr-auto ml-5 flex items-center">
          <input
            type="checkbox"
            id="job_type"
            name="job_type"
            value="fulltime"
            checked={full_time === "true"}
            onChange={(e) =>
              dispatch(setFulltime(e.target.checked ? "true" : "false"))
            }
          />
          <label htmlFor="job_type" className="ml-2">
            Fulltime
          </label>
        </div>
        <button
          onClick={(e) => searchHandler(e)}
          className="px-12 h-full text-white rounded-full text-sm bg-[#2624D2]"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
