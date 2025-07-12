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
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Your Videos</span>
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
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
      <span className="font-medium text-sm text-nowrap">Your Courses</span>
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

const Sidebar = ({ isSidebarOpen }: Props) => {
  return (
    isSidebarOpen && (
      <aside
        className={`fixed top-[60px] left-0 h-[calc(100vh-60px)] border-r border-neutral-900 bg-[rgba(0,0,0,0.1)] backdrop-blur-md px-3 overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-neutral-700 [&::-webkit-scrollbar-thumb]:rounded-full ${
          isSidebarOpen ? "w-[200px]" : "w-[80px]"
        }`}
      >
        <UserActions />
        <Subscriptions />
      </aside>
    )
  );
};

export default Sidebar;
