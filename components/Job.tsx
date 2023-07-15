import formatDistance from "date-fns/formatDistance";
import Image from "next/image";
import Link from "next/link";
import { JobType } from "@/types";
import { Ref } from "react";

const Job = ({ job, reff }: { job: JobType; reff?: Ref<HTMLAnchorElement> }) => {
  return (
    <Link ref={reff} href={"/detail/" + job.id}>
      <div className="flex items-center hover:bg-gray-100 px-3 py-2 rounded-lg hover:cursor-pointer">
        <Image
          src={"/../public/dummy-company.webp"}
          alt={`${job.company} logo`}
          width={40}
          height={40}
          placeholder="blur"
          blurDataURL="/../public/dummy-company.webp"
        />

        <div className="ml-5 w-[500px] mr-auto">
          <h3 className="font-bold truncate">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>

        <p className="px-2 py-1 bg-slate-100 rounded text-xs mr-5">
          {job.type}
        </p>

        <p className="px-2 py-1 bg-slate-100 rounded text-xs mr-5">
          {job.location}
        </p>

        <p className="text-xs text-gray-500">
          {formatDistance(new Date(job.created_at as string), new Date(), {
            addSuffix: true
          })}
        </p>
      </div>
    </Link>
  );
};

export default Job;
