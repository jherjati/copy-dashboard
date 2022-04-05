import { classNames } from "../../utils";
import { navigation } from "../../static";

const DesktopSidebar = () => {
  return (
    <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
        <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
          <div className='flex items-center flex-shrink-0 px-4'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
              alt='Workflow'
            />
          </div>
          <nav className='mt-5 flex-1 px-2 space-y-1'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-300"
                      : "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden='true'
                />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className='flex-shrink-0 flex bg-gray-700 p-4'>
          <a href='#' className='flex-shrink-0 w-full group block'>
            <div className='flex items-center'>
              <div>
                <img
                  className='inline-block h-9 w-9 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-white'>Tom Cook</p>
                <p className='text-xs font-medium text-gray-300 group-hover:text-gray-200'>
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
