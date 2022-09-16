import React from "react";
import Link from "next/link";
import Logout from "./Logout";
import { useAddress,useBalance } from "@thirdweb-dev/react";
import { Polygon } from "@thirdweb-dev/chain-icons";
import { motion } from "framer-motion";
function NavBar() {
  const address = useAddress();
  const styles = {
    headerLink: `text-base font-medium text-white hover:text-KeenIcyBlue-80 mr-4`,
  };
  const balance= useBalance();

  return (
    <>
      <div className="flex flex-wrap border-b-4 border-b-slate-900/40">
        <div className="w-full">
          {address ? (
            <>
              <nav className="relative flex flex-wrap items-center justify-between py-3">
                <div className="w-full mx-auto flex flex-wrap items-center justify-between px-7">
                  <div className=" relative flex justify-between w-auto px-4 lg:static lg:block lg:justify-start">
                    <img
                      src="/assets/Logo.jpg"
                      className="float-left w-11 h-11 rounded-full"
                      alt="Urban Uprise Crew"
                    />
                  </div>
                  <ul className="flex flex-row list-none ml-auto ">
                    <li className="  nav-item   ">
                      <div className="grid-rows-3 mr-3 py-0.25 px-2 text-xs flex items-center  relative  text-left rounded-md border-2  border-slate-800">
                        <div>
                         <h3 className="text-center  font-bold  text-green-400/80 tracking-widest text-LightGreen-100">
                          Network:
                        </h3>
                        <Polygon className="w-5 h-5 ml-5"/>
                        
                        </div>
                        <div>
                         <h3 className="text-center  font-bold  text-green-400/80 tracking-widest text-LightGreen-100">
                          Balance:
                        </h3>
                        <h3 className="mt-1 ml-1   text-ellipsis w-[80px] overflow-hidden  whitespace-nowrap">
                          {balance.isLoading ? ("Loading...") : (
                    <>
                      {balance.data?.displayValue.slice(0, 5)}{" "} {balance.data?.symbol}
                    </> 
                    )}
                        </h3>
                        </div>
                        <div>
                        <h3 className="text-center  font-bold  text-green-400/80 tracking-widest text-LightGreen-100">
                          Address:
                        </h3>
                        <h3 className="mt-1 ml-1   text-ellipsis w-[80px] overflow-hidden  whitespace-nowrap">
                          {address}
                        </h3>
                        </div>
                      </div>
                    </li>

                    <AuthenticatedHeader />
                  </ul>
                </div>
              </nav>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.33 }}
              >
                <div className=" relative  h-16 w-full  py-3 px-4 ">
                  <img
                    src="/assets/Logo.jpg"
                    className="absolute m-auto left-0 right-0 top-0 bottom-0 w-11 h-11 rounded-full"
                    alt="Urban Uprise Crew"
                  />
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const AuthenticatedHeader = () => (
  <>
    <li>
      <Logout />
    </li>
  </>
);
export default NavBar;
