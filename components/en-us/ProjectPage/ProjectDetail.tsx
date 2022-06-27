import RecentBlogs from "@/components/en-us/IndexPage/RecentBlogs";

interface project {
  readonly id: string;
  readonly name: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly relatedBlogs: string[];
  readonly usingStacks: string[];
}

interface Props {
  readonly projectDetail: project;
}

const ProjectDetail = ({ projectDetail }: Props) => {
  return (
    <div className="grid grid-flow-col grid-cols-10">
      <div className="md:col-span-1 md:block sm:hidden sm:invisible"></div>
      <div className="flex-col mt-9 md:col-span-7 md:pr-8 sm:col-span-10">
        {projectDetail === undefined ? (
          "loading"
        ) : (
          <div className="p-4">
            <p className="font-mono font-bold sm:text-base md:text-2xl">
              {projectDetail.name}
            </p>
            <hr className="my-2" />

            <div className="mt-5 pl-4">
              <p className="font-mono font-bold sm:text-xl md:text-xl">
                Description
              </p>
              <hr />
              <div className="flex justify-left space-x-4 lg:py-5 lg:col-end-13 sm:text-sm md:text-base">
                {projectDetail.description}
              </div>
            </div>
            <div className="mt-8 pl-4">
              <p className="font-mono font-bold sm:text-xl md:text-2xl">
                Stacks
              </p>
              <hr />

              <ul className="lg:py-5 lg:col-end-13 sm:text-sm md:text-base">
                {projectDetail.usingStacks.map((stack) => {
                  return <li>{stack}</li>;
                })}
              </ul>
            </div>

            <div className="mt-8 pl-4">
              <p className="font-mono font-bold sm:text-base md:text-xl">
                Image
              </p>
              <hr />
              <div className="flex justify-left space-x-4 lg:py-10 lg:col-end-13">
                <img
                  key={projectDetail.imageUrl}
                  className="w-full"
                  src={projectDetail.imageUrl}
                  alt={projectDetail.name}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="md:pr-5 md:col-span-2 md:block sm:invisible sm:hidden">
        {/* TODO: change to related blogs */}
        <RecentBlogs />
      </div>
    </div>
  );
};

export default ProjectDetail;
