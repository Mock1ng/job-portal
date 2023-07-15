import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import formatDistance from "date-fns/formatDistance";
import Back from "@/components/Back";
import { JobType } from "@/types";

const Page = async ({ params }: { params: { jobId: string } }) => {
  const res = await fetch(
    `http://dev3.dansmultipro.co.id/api/recruitment/positions/${params.jobId}`
  );
  const data = (await res.json()) as JobType;

  return (
    <>
      <Navbar />

      <div className="layout">
        <Back />
        <div className="flex gap-8 mb-16 mt-5">
          <Image
            src={"/../public/dummy-company.webp"}
            alt={`${data.company} logo`}
            width={80}
            height={80}
            style={{ height: "80px" }}
          />
          <div>
            <h1 className="font-bold text-3xl mb-1">{data.title}</h1>
            <div className="flex gap-4 items-end mb-4">
              <Link
                href={data.company_url ? data.company_url : "#"}
                className={`text-blue-500 block leading-5 ${
                  data.company_url ? "" : "cursor-default"
                }`}
              >
                {data.company}
              </Link>
              <p className="text-gray-400 text-xs">
                {formatDistance(new Date(data.created_at), new Date(), {
                  addSuffix: true
                })}
              </p>
            </div>
            <div className="flex gap-3 items-center mb-2">
              <Image
                src={"/../public/contract.png"}
                alt="contract icon"
                width={20}
                height={20}
              />
              <span className="">{data.type}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Image
                src={"/../public/building.png"}
                alt="building icon"
                width={20}
                height={20}
              />
              <span className="">{data.location}</span>
            </div>
          </div>
        </div>

        <h4 className="font-bold text-xl mb-2">About the job</h4>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="mb-10"
        />

        <h4 className="font-bold text-xl mb-2">How to apply</h4>
        <div
          dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
          className="max-w-xl mb-5"
        />
      </div>
    </>
  );
};

export default Page;
