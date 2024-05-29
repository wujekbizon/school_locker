export default function CreateTestsSkeleton() {
  return (
    <div className="flex h-full w-full animate-pulse flex-col items-center justify-between">
      <div className="h-156 flex w-2/3 flex-col gap-3">
        <div className="h-10 max-w-[140px] self-end rounded-full dark:bg-gray-900"></div>

        <div className="flex w-full items-center ">
          <div className="h-3 w-28 rounded-full  dark:bg-gray-800"></div>
          <div className="ms-2 h-3 w-full rounded-full dark:bg-gray-900"></div>
        </div>
        <div className="flex w-full items-center pt-2">
          <div className="h-2.5 w-32 rounded-full dark:bg-gray-900"></div>
          <div className="ms-2 h-2.5 w-24 rounded-full  dark:bg-gray-800"></div>
          <div className="ms-2 h-2.5 w-full rounded-full  dark:bg-gray-800"></div>
        </div>
        <div className="flex w-full items-center ">
          <div className="h-4 w-24 rounded-full  dark:bg-gray-800"></div>
          <div className="ms-2 h-4 w-full rounded-full  dark:bg-gray-800"></div>
          <div className="ms-2 h-4 w-32 rounded-full dark:bg-gray-900"></div>
        </div>
        <div className="flex w-full items-center">
          <div className="h-2.5 w-full rounded-full  dark:bg-gray-900"></div>
          <div className="ms-2 h-2.5 w-32 rounded-full dark:bg-gray-900"></div>
          <div className="ms-2 h-2.5 w-24 rounded-full  dark:bg-gray-800"></div>
        </div>
        <div className="h-2.5 w-full rounded-full  dark:bg-gray-900"></div>
        <div className="flex flex-col gap-4 pt-32">
          <div className="ms-2 h-2.5 w-24 rounded-full  dark:bg-gray-800"></div>
          <div className="mb-4 h-20 w-full rounded-xl  dark:bg-gray-900"></div>
          <div className="flex w-full justify-end ">
            <div className="h-8 w-24 rounded-xl  dark:bg-gray-800"></div>
          </div>
        </div>
      </div>
      <div className="flex h-64 w-2/3 items-center justify-center rounded-xl dark:bg-gray-900">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
}
