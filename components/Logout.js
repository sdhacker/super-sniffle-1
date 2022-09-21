import React from "react";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Hero() {
  const address = useAddress();
  const disconnectWallet = useDisconnect();
  const styles = {
    UCCPrimeCTABtn: `bg-[#05cc47] hover:bg-sky-300 w-fit`,
    UCCBtnDefaults: `max-w-[350px] font-bold  px-20 w-full text-sm px-3 h-[50px] border-none capitalize text-center flex-1 inline-flex items-center text-white text-sm rounded-md `,
  };
  return (
    <>
      {address ? (
        <>
          <div className="flow-root max-w-[168px]  rounded-md border-2  border-slate-800 ">
            <a
              onClick={disconnectWallet}
              className="flex items-center py-2 px-3  hover:bg-gray-100 text-white"
            >
              <svg
                width="40px"
                height="29px"
                viewBox="0 0 246 330"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns-xlink="http://www.w3.org/1999/xlink"
              >
                <title>Disconnect Wallet</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="logout-svgrepo-com"
                    transform="translate(123.000000, 165.000000) scale(-1, 1) rotate(90.000000) translate(-123.000000, -165.000000) translate(-42.000000, 42.000000)"
                    fill="#AE13E3"
                    fillRule="nonzero"
                  >
                    <path
                      d="M51.213,138 L224.998,138 C233.282,138 239.998,131.284 239.998,123 C239.998,114.716 233.282,108 224.998,108 L51.213,108 L70.607,88.607 C76.465,82.75 76.465,73.252 70.607,67.394 C64.751,61.536 55.253,61.536 49.394,67.394 L4.397,112.391 C4.049,112.738 3.721,113.101 3.409,113.481 C3.333,113.574 3.268,113.674 3.194,113.769 C2.965,114.06 2.74,114.352 2.534,114.66 C2.474,114.75 2.425,114.845 2.366,114.936 C2.16,115.258 1.958,115.583 1.776,115.922 C1.741,115.989 1.712,116.06 1.677,116.127 C1.488,116.494 1.306,116.866 1.147,117.25 C1.127,117.297 1.113,117.347 1.094,117.395 C0.931,117.799 0.78,118.208 0.652,118.629 C0.635,118.682 0.626,118.737 0.611,118.791 C0.49,119.204 0.379,119.621 0.294,120.048 C0.269,120.175 0.258,120.306 0.235,120.434 C0.173,120.788 0.111,121.142 0.076,121.503 C0.025,121.998 0,122.498 0,123 C0,123.502 0.025,124.002 0.076,124.498 C0.111,124.864 0.175,125.221 0.236,125.578 C0.258,125.702 0.269,125.829 0.294,125.952 C0.38,126.383 0.49,126.804 0.612,127.221 C0.627,127.27 0.636,127.322 0.651,127.371 C0.78,127.794 0.931,128.207 1.096,128.615 C1.114,128.659 1.127,128.706 1.146,128.75 C1.306,129.137 1.489,129.511 1.68,129.88 C1.713,129.945 1.741,130.013 1.775,130.078 C1.959,130.419 2.162,130.747 2.371,131.072 C2.427,131.16 2.475,131.253 2.533,131.339 C2.74,131.648 2.967,131.942 3.195,132.234 C3.268,132.328 3.333,132.427 3.408,132.519 C3.721,132.898 4.049,133.262 4.396,133.609 L49.393,178.606 C52.322,181.536 56.161,183 60,183 C63.839,183 67.678,181.536 70.606,178.606 C76.464,172.748 76.464,163.251 70.606,157.393 L51.213,138 Z"
                      id="XMLID_4_"
                    ></path>
                    <path
                      d="M207.299,0.299 C166.355,0.299 128.261,20.611 105.396,54.632 C100.776,61.507 102.604,70.827 109.479,75.448 C116.355,80.068 125.674,78.242 130.296,71.365 C147.577,45.65 176.363,30.298 207.299,30.298 C258.414,30.299 300,71.884 300,123 C300,174.116 258.414,215.701 207.299,215.701 C176.454,215.701 147.715,200.418 130.421,174.82 C125.782,167.955 116.46,166.151 109.594,170.788 C102.73,175.426 100.924,184.75 105.562,191.614 C128.443,225.482 166.475,245.701 207.299,245.701 C274.956,245.701 330,190.658 330,123 C330,55.342 274.956,0.299 207.299,0.299 Z"
                      id="XMLID_5_"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Hero;
