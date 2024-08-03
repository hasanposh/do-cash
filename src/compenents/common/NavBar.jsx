import LanguageToggle from "./languageToggle";

const NavBar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <div className="navbar bg-transparent h-32">
          <div className="flex-1 cursor-pointer ">
            <img className="w-48" src="/doCash..gif" alt="" />
          </div>
          <div className="flex-none ">
            <LanguageToggle />
            <label
              htmlFor="my-drawer"
              className="cursor-pointer bg-base-200 rounded-full hover:bg-neutral-400 size-14 ml-2 md:ml-4 mr-1 transition duration-200 ease-in-out"
            >
              <img src="/bell.svg" alt="" />
            </label>

            <div className="flex items-center">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost p-0 md:p-2 btn-block h-[75px] avatar"
                >
                  <div className="size-14 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                  <h2 className="md:ml-2 hidden md:block">Md Hasan Mahmud</h2>
                  {/* <img className="w-4 hidden" src="/down.svg" alt="" /> */}
                  {/* <img className="size-6" src="/up.svg" alt="" /> */}
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-custom-orange text-base-content min-h-full w-[300px] md:w-[550px] p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
