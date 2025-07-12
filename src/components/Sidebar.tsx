import React from "react";

interface Props {
  isSidebarOpen: boolean;
}

const UserActions = () => (
  <div className="flex flex-col gap-1 py-3 border-b border-neutral-800">
    <h3 className="font-semibold my-2 mx-4">Your Space</h3>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>

      <span className="font-medium text-sm text-nowrap">History</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Subscriptions</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Playlists</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Watch Later</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Liked Videos</span>
    </button>
  </div>
);

const Subscriptions = () => (
  <div className="flex flex-col gap-1 py-3 border-b border-neutral-800">
    <h3 className="font-semibold my-2 mx-4">Subscriptions</h3>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/a9H7WKItDwvu0dBOdsriUGGXX0gGShPDYQbFLwRQzQgx4Vkre2b9QKKuqjBZYEFcqf_s6TLy74M=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">Beebom</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/pTVQZnWTnD80e1FvzEEg5dwEvSg_IB5NBRB3tPvJZIzhGNYWoJ9b1YibM77KOahob0ftDyq0=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">Bog</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">Fireship</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/ytc/AIdro_kwy8w3j_dAOK2bt7t6gdkFbUuh2jc8qE9EmxHscjnMpwQ=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">Goosiest</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/jEQW7cEjKOmcnvhkoLfMwqzlS1K048IY9TH04kHJ9O2RJBw9WWG1KCItOnBd-zbKRfM4Og086w=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">SAMTIME</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/ytc/AIdro_lgA3xMKNY0-d05dSmj3zt7CeTS1QSS5jVgOWqD03VsSm4=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">
        JerryRigEverything
      </span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/ek0JxMA0h1uXpnYKFL_dYo1ny3LWzAuLwGvaqQwb9Qh2oEQJIPNEPjDrY9yKsvMmIrq_Ooq_=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">
        JavaScript Mastery
      </span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <img
        src="https://yt3.ggpht.com/ytc/AIdro_k01-_GpvVZW8w4ULtaQaa55ls8aMf2a5dXhIe56pjMvG0=s88-c-k-c0x00ffffff-no-rj"
        className="size-6 rounded-full"
      />
      <span className="font-medium text-sm text-nowrap">NetworkChuck</span>
    </button>

    {/* Show All */}
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Show All</span>
    </button>
  </div>
);

const MoreActions = () => (
  <div className="flex flex-col gap-1 py-3">
    <h3 className="font-semibold my-2 mx-4">More</h3>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>

      <span className="font-medium text-sm text-nowrap">Help</span>
    </button>
    <button className="py-1.5 px-3 hover:bg-neutral-800 cursor-pointer duration-300 rounded-lg flex flex-row gap-4 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#fff"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>

      <span className="font-medium text-sm text-nowrap">Settings</span>
    </button>
  </div>
);

const Sidebar = ({ isSidebarOpen }: Props) => {
  return (
    isSidebarOpen && (
      <aside
        className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r border-neutral-900 bg-[rgba(0,0,0,0.1)] backdrop-blur-md px-3 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full ${
          isSidebarOpen ? "w-[240px]" : "w-0"
        }`}
      >
        <UserActions />
        <Subscriptions />
        <MoreActions />
      </aside>
    )
  );
};

export default Sidebar;
