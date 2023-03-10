import React from "react";
import { useNavigate } from "react-router";
import useScreen from "../../hooks/useScreen";

const Modal = ({
  title,
  description,
  status,
  buttonCaption,
  show,
  setModalShow,
  to,
}) => {
  const navigate = useNavigate();
  const screen = useScreen();
  return (
    <div
      id="overlay"
      className={
        !show
          ? "hidden fixed  z-40 w-screen h-screen inset-0 bg-[#000000cc] backdrop-blur-[4px]"
          : "fixed  z-40 w-screen h-screen inset-0 bg-[#000000cc] backdrop-blur-[4px] px-[40px]"
      }
    >
      <div
        id="dialog"
        className={
          " fixed justify-center flex flex-col items-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto bg-white rounded-[34px] px-[10px] py-[51px] sm:px-[65px] sm:py-[59px] space-y-5 drop-shadow-lg max-w-[724px] min-w-[300px]"
        }
      >
        <div
          className={`flex justify-center items-center ${
            status === "success" ? "bg-[#38ae00]" : "bg-[#ff0707]"
          } sm:w-[172px] sm:h-[172px] w-[77px] h-[77px] rounded-[38px] sm:rounded-[86px]`}
        >
          <div>
            {status === "success" ? (
              screen.dynamicWidth > 678 ? (
                <svg
                  width="100"
                  height="77"
                  viewBox="0 0 100 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M84.5478 3.32194L83.8679 2.58488L83.1327 3.26689L36.9869 46.0767L17.8434 25.6473L17.1596 24.9176L16.4299 25.6014L3.31623 37.8896L2.58653 38.5734L3.2703 39.3031L35.2968 73.4809L35.9768 74.2066L36.7063 73.5306L96.6798 17.944L97.4115 17.2658L96.735 16.5325L84.5478 3.32194Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M37.9577 48.5861L83.7303 6.12268L93.8828 17.1277L36.101 70.6829L6.1202 38.6882L17.0448 28.4513L35.843 48.5121L36.8636 49.6012L37.9577 48.5861Z"
                    fill="white"
                    stroke="#38AE00"
                    strokeWidth="3"
                  />
                </svg>
              ) : (
                <svg
                  width="46"
                  height="35"
                  viewBox="0 0 46 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_688_840)">
                    <path
                      d="M38.4709 1.53473L38.1664 1.20467L37.8372 1.51008L17.1725 20.6808L8.59986 11.5323L8.29366 11.2055L7.96689 11.5117L2.09444 17.0145L1.76767 17.3207L2.07387 17.6475L16.4157 32.9527L16.7202 33.2777L17.0469 32.975L43.9037 8.08264L44.2314 7.77894L43.9284 7.45057L38.4709 1.53473Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.895623"
                    />
                    <path
                      d="M16.6603 21.7714L17.1173 22.2591L17.6073 21.8046L38.1048 2.78894L42.6512 7.71711L16.7758 31.6997L3.35009 17.3722L8.24224 12.7879L16.6603 21.7714Z"
                      fill="white"
                      stroke="#38AE00"
                      strokeWidth="1.34343"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_688_840">
                      <rect
                        width="44.7811"
                        height="34.4815"
                        fill="white"
                        transform="translate(0.609375 0.0471191)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )
            ) : screen.dynamicWidth > 678 ? (
              <svg
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_64_318" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5564 91.5563L45.7782 61.3345L76 91.5564L91.5564 76L61.3345 45.7782L91.5564 15.5563L76 -6.67572e-06L45.7782 30.2218L15.5564 5.72205e-06L8.58307e-06 15.5564L30.2218 45.7782L2.28882e-05 76L15.5564 91.5563Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5564 91.5563L45.7782 61.3345L76 91.5564L91.5564 76L61.3345 45.7782L91.5564 15.5563L76 -6.67572e-06L45.7782 30.2218L15.5564 5.72205e-06L8.58307e-06 15.5564L30.2218 45.7782L2.28882e-05 76L15.5564 91.5563Z"
                  fill="#FF0707"
                />
                <path
                  d="M45.7782 61.3345L48.6066 58.5061L45.7782 55.6777L42.9498 58.5061L45.7782 61.3345ZM15.5564 91.5563L12.7279 94.3848L15.5564 97.2132L18.3848 94.3848L15.5564 91.5563ZM76 91.5564L73.1716 94.3848L76 97.2132L78.8284 94.3848L76 91.5564ZM91.5564 76L94.3848 78.8284L97.2132 76L94.3848 73.1716L91.5564 76ZM61.3345 45.7782L58.5061 42.9498L55.6777 45.7782L58.5061 48.6066L61.3345 45.7782ZM91.5564 15.5563L94.3848 18.3848L97.2132 15.5563L94.3848 12.7279L91.5564 15.5563ZM76 -6.67572e-06L78.8285 -2.82843L76 -5.65686L73.1716 -2.82843L76 -6.67572e-06ZM45.7782 30.2218L42.9498 33.0503L45.7782 35.8787L48.6066 33.0503L45.7782 30.2218ZM15.5564 5.72205e-06L18.3848 -2.82842L15.5564 -5.65685L12.7279 -2.82842L15.5564 5.72205e-06ZM8.58307e-06 15.5564L-2.82842 12.7279L-5.65685 15.5564L-2.82842 18.3848L8.58307e-06 15.5564ZM30.2218 45.7782L33.0503 48.6066L35.8787 45.7782L33.0503 42.9498L30.2218 45.7782ZM2.28882e-05 76L-2.8284 73.1716L-5.65683 76L-2.8284 78.8284L2.28882e-05 76ZM42.9498 58.5061L12.7279 88.7279L18.3848 94.3848L48.6066 64.163L42.9498 58.5061ZM78.8284 88.7279L48.6066 58.5061L42.9498 64.163L73.1716 94.3848L78.8284 88.7279ZM88.7279 73.1716L73.1716 88.7279L78.8284 94.3848L94.3848 78.8284L88.7279 73.1716ZM58.5061 48.6066L88.7279 78.8284L94.3848 73.1716L64.163 42.9498L58.5061 48.6066ZM88.7279 12.7279L58.5061 42.9498L64.163 48.6066L94.3848 18.3848L88.7279 12.7279ZM73.1716 2.82842L88.7279 18.3848L94.3848 12.7279L78.8285 -2.82843L73.1716 2.82842ZM48.6066 33.0503L78.8285 2.82842L73.1716 -2.82843L42.9498 27.3934L48.6066 33.0503ZM12.7279 2.82843L42.9498 33.0503L48.6066 27.3934L18.3848 -2.82842L12.7279 2.82843ZM2.82844 18.3848L18.3848 2.82843L12.7279 -2.82842L-2.82842 12.7279L2.82844 18.3848ZM33.0503 42.9498L2.82844 12.7279L-2.82842 18.3848L27.3934 48.6066L33.0503 42.9498ZM2.82845 78.8284L33.0503 48.6066L27.3934 42.9498L-2.8284 73.1716L2.82845 78.8284ZM18.3848 88.7279L2.82845 73.1716L-2.8284 78.8284L12.7279 94.3848L18.3848 88.7279Z"
                  fill="white"
                  mask="url(#path-1-inside-1_64_318)"
                />
              </svg>
            ) : (
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_688_625" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.19427 41.6593L20.8996 27.9539L34.605 41.6593L41.6596 34.6047L27.9542 20.8993L41.6594 7.19415L34.6048 0.139526L20.8996 13.8447L7.19449 0.139583L0.139867 7.19421L13.845 20.8993L0.139648 34.6046L7.19427 41.6593Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.19427 41.6593L20.8996 27.9539L34.605 41.6593L41.6596 34.6047L27.9542 20.8993L41.6594 7.19415L34.6048 0.139526L20.8996 13.8447L7.19449 0.139583L0.139867 7.19421L13.845 20.8993L0.139648 34.6046L7.19427 41.6593Z"
                  fill="#FF0707"
                />
                <path
                  d="M20.8996 27.9539L22.1823 26.6713L20.8996 25.3886L19.6169 26.6713L20.8996 27.9539ZM7.19427 41.6593L5.91161 42.9419L7.19427 44.2246L8.47693 42.9419L7.19427 41.6593ZM34.605 41.6593L33.3223 42.942L34.605 44.2246L35.8876 42.942L34.605 41.6593ZM41.6596 34.6047L42.9423 35.8874L44.2249 34.6047L42.9423 33.322L41.6596 34.6047ZM27.9542 20.8993L26.6716 19.6167L25.3889 20.8993L26.6716 22.182L27.9542 20.8993ZM41.6594 7.19415L42.942 8.47681L44.2247 7.19415L42.942 5.91149L41.6594 7.19415ZM34.6048 0.139526L35.8874 -1.14313L34.6048 -2.42579L33.3221 -1.14313L34.6048 0.139526ZM20.8996 13.8447L19.6169 15.1273L20.8996 16.41L22.1823 15.1273L20.8996 13.8447ZM7.19449 0.139583L8.47715 -1.14308L7.19449 -2.42573L5.91183 -1.14308L7.19449 0.139583ZM0.139867 7.19421L-1.14279 5.91155L-2.42545 7.19421L-1.14279 8.47686L0.139867 7.19421ZM13.845 20.8993L15.1276 22.182L16.4103 20.8993L15.1276 19.6167L13.845 20.8993ZM0.139648 34.6046L-1.14301 33.322L-2.42567 34.6046L-1.14301 35.8873L0.139648 34.6046ZM19.6169 26.6713L5.91161 40.3766L8.47693 42.9419L22.1823 29.2366L19.6169 26.6713ZM35.8876 40.3767L22.1823 26.6713L19.6169 29.2366L33.3223 42.942L35.8876 40.3767ZM40.3769 33.322L33.3223 40.3767L35.8876 42.942L42.9423 35.8874L40.3769 33.322ZM26.6716 22.182L40.3769 35.8874L42.9423 33.322L29.2369 19.6167L26.6716 22.182ZM40.3767 5.91149L26.6716 19.6167L29.2369 22.182L42.942 8.47681L40.3767 5.91149ZM33.3221 1.42219L40.3767 8.47681L42.942 5.91149L35.8874 -1.14313L33.3221 1.42219ZM22.1823 15.1273L35.8874 1.42219L33.3221 -1.14313L19.6169 12.562L22.1823 15.1273ZM5.91183 1.42224L19.6169 15.1273L22.1823 12.562L8.47715 -1.14308L5.91183 1.42224ZM1.42253 8.47686L8.47715 1.42224L5.91183 -1.14308L-1.14279 5.91155L1.42253 8.47686ZM15.1276 19.6167L1.42253 5.91155L-1.14279 8.47686L12.5623 22.182L15.1276 19.6167ZM1.42231 35.8873L15.1276 22.182L12.5623 19.6167L-1.14301 33.322L1.42231 35.8873ZM8.47693 40.3766L1.42231 33.322L-1.14301 35.8873L5.91161 42.9419L8.47693 40.3766Z"
                  fill="white"
                  mask="url(#path-1-inside-1_688_625)"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="title mt-[13px] sm:mt-30px text-[#353536] text-[21px] leading-[32px] sm:text-[47px] sm:leading-[70px] font-bold">
          {title}
        </div>
        <div className="description  text-[#353536] text-[16px] leading-[24px] sm:text-[36px] sm:leading-[54px] font-normal px-[33px]">
          {description}
        </div>
        <div className="thanks mt-[20px]">
          <button
            className="text-white bg-[#38ae00] py-[6px] px-[31px] sm:px-[48px] sm:py-[11px] sm:text-[20px] text-[13.5px] leading-[20px] sm:leading-[30px] font-semibold rounded-[25.3px]"
            onClick={(e) => {
              setModalShow(false);
              if (to !== undefined) navigate(`${to}`);
            }}
          >
            {buttonCaption}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
