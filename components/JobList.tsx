"use client";

import { FC, Ref, useCallback, useEffect, useRef } from "react";
import Job from "./Job";
import { JobType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { getAllJobs, getAllJobsNext } from "@/features/jobs/slice";
import { useInView } from "react-intersection-observer";

const JobList = () => {
  const dispatch = useAppDispatch();
  const { inView, ref } = useInView();
  const { data, isLoading, params } = useAppSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getAllJobs({ page: "1" }));
  }, [dispatch]);

  useEffect(() => {
    if (!inView) return;

    dispatch(
      getAllJobsNext({
        page: JSON.stringify(params.page + 1),
        description: params.description,
        location: params.location,
        full_time: params.full_time
      })
    );
  }, [
    dispatch,
    inView,
    params.description,
    params.full_time,
    params.location,
    params.page
  ]);

  return (
    <div className="grid gap-5 mb-14">
      {data.map((job: JobType, i) => {
        if (job) {
          if (data.length == i + 1) {
            return <Job reff={ref} key={job.id} job={job} />;
          } else {
            return <Job key={job.id} job={job} />;
          }
        }
      })}
      {isLoading ? "Loading..." : ""}
    </div>
  );
};

export default JobList;
