import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

import "./index.scss";

const Login = () => {
  const [isHide, setHide] = useState(true);

  return (
    <div className=" min-w-full min-h-screen bg-back text-white xl:px-40 py-2 items-center relative">
      <div className="left-texture absolute top-[21px] left-[0px]">
        <svg
          width="105"
          height="100%"
          viewBox="0 0 105 852"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8_1073)">
            <path
              d="M85.0629 305.057L66.1927 286.224L-285.707 637.465L-140.379 782.54L-49.9957 692.334L-5.15397 737.121L-56.797 788.663L30.1526 875.442L49.0229 856.608L-19.0899 788.663L32.5864 737.121L-49.9957 654.668L-140.379 744.874L-248 637.465L85.0629 305.057Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M91.7308 230.49L72.8606 211.657L-68.5326 352.772L-176.953 244.531L-214.66 282.164L-282.173 214.818L-85.8025 18.8331L-104.639 -9.40845e-06L-319.88 214.818L-214.66 319.797L-176.953 282.198L-68.5326 390.405L91.7308 230.49Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M85.2629 187.533L-31.2589 71.2065L-116.308 156.089L-25.5912 249.955L-69.4327 293.71L-196.823 163.243L-253.234 219.542L-220.628 252.085L-201.758 233.251L-215.527 219.542L-197.057 201.142L-69.6995 331.576L11.7825 250.288L-78.9345 156.421L-31.2589 108.873L66.4261 206.366L85.2629 187.533Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M-49.9595 156.609L-31.0998 137.786L38.2332 206.983L19.3735 225.806L-49.9595 156.609Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M85.0629 125.909L20.5842 61.557L48.9561 33.2408L30.0859 14.4409L-17.1562 61.557L66.1927 144.742L85.0629 125.909Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M105 840.903L52.9569 788.929L101.166 740.814L-110.274 529.823L-217.127 636.467L-137.445 715.959L-62.198 640.859L-81.0682 622.026L-137.445 678.326L-179.387 636.467L-110.274 567.456L63.4255 740.814L15.2165 788.929L86.1298 859.703L105 840.903Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M92.8977 558.805L74.0275 539.972L22.8179 591.114L-54.1965 514.251L88.4969 371.871L69.6267 353.038L-91.9036 514.251L22.8179 628.747L92.8977 558.805Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M30.8361 641.346L49.6958 622.523L87.816 660.568L68.9563 679.391L30.8361 641.346Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M87.8301 497.281L68.9932 478.448L20.2507 527.128L8.11511 514.983L83.7626 439.484L64.8924 420.651L-29.6253 514.983L20.2507 564.761L87.8301 497.281Z"
              fill="white"
              fill-opacity="0.03"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_1073">
              <rect
                width="880"
                height="533"
                fill="white"
                transform="matrix(4.37114e-08 1 1 -4.37114e-08 -428 0)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="right-texture absolute top=[21px] right-0">
        <svg
          width="87"
          height="328"
          viewBox="0 0 87 328"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_10_31)">
            <path
              d="M75.2512 145.048L108.65 111.712L115.943 118.989L89.8246 145.048L178.85 233.856L93.1748 319.335L85.8817 312.059L164.264 233.856L75.2512 145.048Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.70558 105.863L14.9988 98.5864L151.005 234.293L94.8371 290.345L59.9046 255.493L42.5736 272.797L62.5332 292.711L28.9279 326.239L21.6348 318.962L47.9598 292.711L27.9873 272.797L59.9046 240.94L94.8371 275.792L136.431 234.293L7.70558 105.863Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M5.1284 77.0528L12.4216 69.7764L67.0688 124.298L108.972 82.478L123.546 97.018L149.639 70.9977L73.7435 -4.72356L81.0238 -12L164.212 70.9977L123.546 111.558L108.972 97.0309L67.0688 138.838L5.1284 77.0528Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.62819 60.4558L52.6629 15.5116L85.5337 48.307L50.4724 84.5735L67.4168 101.479L116.652 51.071L138.454 72.8232L125.852 85.3963L118.559 78.1198L123.881 72.8232L116.742 65.7139L67.5198 116.109L36.0278 84.702L71.0891 48.4356L52.6629 30.0645L14.9085 67.7323L7.62819 60.4558Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M59.8904 48.5079L52.6013 41.2355L25.8047 67.9707L33.0938 75.243L59.8904 48.5079Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M46.0139 -4.14507L53.3071 -11.4215L112.219 47.3557L67.4682 91.9914L60.188 84.7149L97.6331 47.3557L46.0139 -4.14507Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.70556 36.6467L32.6261 11.7834L21.6605 0.84305L28.9537 -6.42053L47.2124 11.7834L14.9987 43.9232L7.70556 36.6467Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M0.000109187 312.894L20.1143 292.813L1.48193 274.224L83.2016 192.704L124.5 233.908L93.7032 264.62L64.6207 235.605L71.9139 228.328L93.7032 250.08L109.913 233.908L83.2016 207.244L16.0683 274.224L34.7007 292.813L7.29327 320.158L0.000109187 312.894Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M49.0936 320.724L74.2203 295.655L52.2377 273.71L59.518 266.433L88.8066 295.655L56.3739 328L49.0936 320.724Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M4.6774 203.902L11.9706 196.626L31.7627 216.385L61.5281 186.688L6.37829 131.678L13.6715 124.401L76.1016 186.688L31.7627 230.925L4.6774 203.902Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M28.6636 235.793L21.3745 228.52L6.64139 243.22L13.9305 250.492L28.6636 235.793Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M6.63598 180.131L13.9163 172.855L32.7548 191.663L37.4451 186.971L8.20801 157.801L15.5012 150.524L52.0315 186.971L32.7548 206.203L6.63598 180.131Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M101.365 233.071L84.1262 215.872L76.8371 223.144L94.0759 240.343L101.365 233.071Z"
              fill="white"
              fill-opacity="0.03"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_31">
              <rect
                width="340"
                height="206"
                fill="white"
                transform="translate(206 -12) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="80"
          height="340"
          viewBox="0 0 80 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_10_85)">
            <path
              d="M130.749 157.048L97.3497 123.712L90.0565 130.989L116.175 157.048L27.1497 245.856L112.825 331.335L120.118 324.059L41.736 245.856L130.749 157.048Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M198.294 117.863L191.001 110.586L54.9951 246.293L111.163 302.345L146.095 267.493L163.426 284.797L143.467 304.711L177.072 338.239L184.365 330.962L158.04 304.711L178.013 284.797L146.095 252.94L111.163 287.792L69.5686 246.293L198.294 117.863Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M103.586 157.755L59.8788 114.148L52.5856 121.424L88.9999 157.755L24.3535 222.253L31.6467 229.516L103.586 157.755Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M200.872 89.0528L193.578 81.7764L138.931 136.298L97.0276 94.478L82.4541 109.018L56.3611 82.9977L132.256 7.27644L124.976 -3.63629e-06L41.7876 82.9977L82.4541 123.558L97.0276 109.031L138.931 150.838L200.872 89.0528Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M97.0406 14.8743L89.7474 7.61071L14.187 82.9849L45.4343 114.16L52.7275 106.884L28.7734 82.9849L97.0406 14.8743Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M198.372 72.4558L153.337 27.5116L120.466 60.307L155.528 96.5735L138.583 113.479L89.3479 63.071L67.5457 84.8232L80.1476 97.3963L87.4408 90.1198L82.1191 84.8232L89.2577 77.7139L138.48 128.109L169.972 96.702L134.911 60.4356L153.337 42.0645L191.092 79.7323L198.372 72.4558Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M24.1118 268.418L31.4009 261.145L95.7456 325.342L88.4565 332.615L24.1118 268.418Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M25.2298 256.552L14.6379 245.985L24.869 235.777L17.5887 228.501L0.0644539 245.985L17.9495 263.829L25.2298 256.552Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M17.9373 53.2101L64.4419 6.81226L71.731 14.0847L25.2264 60.4825L17.9373 53.2101Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M10.8242 283.129L18.1133 275.857L68.4356 326.063L61.1464 333.336L10.8242 283.129Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M18.873 115.022L26.1621 107.75L76.8397 158.311L69.5506 165.584L18.873 115.022Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M60.7421 170.379L20.694 130.423L13.4008 137.7L46.1686 170.379L9.78003 206.684L17.0603 213.961L60.7421 170.379Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M0.00262694 95.3034L7.29175 88.031L18.1161 98.8305L10.827 106.103L0.00262694 95.3034Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M10.832 176.121L24.1802 162.804L31.4693 170.076L18.1211 183.394L10.832 176.121Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M14.9213 312.846L22.2104 305.573L38.6292 321.954L31.3401 329.227L14.9213 312.846Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M10.8361 32.6346L35.9424 7.59467L43.2302 14.8683L18.1239 39.9083L10.8361 32.6346Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M1.28668 69.9311L10.8081 60.4315L18.0972 67.7039L8.5758 77.2035L1.28668 69.9311Z"
              fill="white"
              fill-opacity="0.03"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_85">
              <rect
                width="340"
                height="206"
                fill="white"
                transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="87"
          height="221"
          viewBox="0 0 87 221"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_10_58)">
            <path
              d="M75.2512 157.048L108.65 123.712L115.943 130.989L89.8246 157.048L178.85 245.856L93.1748 331.335L85.8817 324.059L164.264 245.856L75.2512 157.048Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.70558 117.863L14.9988 110.586L151.005 246.293L94.8371 302.345L59.9046 267.493L42.5736 284.797L62.5332 304.711L28.9279 338.239L21.6348 330.962L47.9598 304.711L27.9873 284.797L59.9046 252.94L94.8371 287.792L136.431 246.293L7.70558 117.863Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M5.1284 89.0528L12.4216 81.7764L67.0688 136.298L108.972 94.478L123.546 109.018L149.639 82.9977L73.7435 7.27644L81.0238 -3.63629e-06L164.212 82.9977L123.546 123.558L108.972 109.031L67.0688 150.838L5.1284 89.0528Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.62819 72.4558L52.6629 27.5116L85.5337 60.307L50.4724 96.5735L67.4168 113.479L116.652 63.071L138.454 84.8232L125.852 97.3963L118.559 90.1199L123.881 84.8232L116.742 77.7139L67.5198 128.109L36.0278 96.7021L71.0891 60.4356L52.6629 42.0645L14.9085 79.7323L7.62819 72.4558Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M59.8904 60.5079L52.6013 53.2355L25.8047 79.9707L33.0938 87.2431L59.8904 60.5079Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M46.0139 7.85494L53.3071 0.578504L112.219 59.3557L67.4682 103.991L60.188 96.7149L97.6331 59.3557L46.0139 7.85494Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M7.70556 48.6467L32.6261 23.7834L21.6605 12.843L28.9537 5.57945L47.2124 23.7834L14.9987 55.9232L7.70556 48.6467Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M0.000109187 324.894L20.1143 304.813L1.48193 286.224L83.2016 204.704L124.5 245.908L93.7032 276.62L64.6207 247.605L71.9139 240.328L93.7032 262.08L109.913 245.908L83.2016 219.245L16.0683 286.224L34.7007 304.813L7.29327 332.158L0.000109187 324.894Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M4.6774 215.902L11.9706 208.626L31.7627 228.385L61.5281 198.688L6.37829 143.678L13.6715 136.401L76.1016 198.688L31.7627 242.925L4.6774 215.902Z"
              fill="white"
              fill-opacity="0.03"
            />
            <path
              d="M6.63598 192.131L13.9163 184.855L32.7548 203.663L37.4451 198.971L8.20801 169.801L15.5012 162.524L52.0315 198.971L32.7548 218.203L6.63598 192.131Z"
              fill="white"
              fill-opacity="0.03"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_58">
              <rect
                width="340"
                height="206"
                fill="white"
                transform="translate(206) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="filter absolute top-[-41px] left-[38px] w-[454px] h-[454px] bg-[#38ae0099] blur-[302px]"></div>
      <div className="flex flex-row justify-between">
        <div className="basis-1/2 text-left pt-48 max-w-[678px]">
          <div className="title flex items-center">
            <img src="/assets/images/currency.png" alt="" />
            <p className=" ml-[15px] text-[34px] leading-[51px] font-normal ">
              Digital Wallet
            </p>
          </div>
          <div className="description mt-[22px] text-[57px] leading-[86px] font-bold not-italic">
            Easiest way to manage your wallet.
          </div>
          <div className="text-[20px] leading-[30px] font-normal text-whiteWithOpacity max-w-xl">
            Quia veritatis qui aut magnam rerum animi omnis exercitationem.
            Minus sapiente suscipit quaerat sint. Possimus omnis vel ullam
            officiis. Itaque maxime asperiores omnis qui odio sunt hic. Et ea
            tenetur pariatur dolorum est corrupti nostrum.
          </div>
        </div>
        <div className="basis-1/2 mt-[77px] max-w-[733px]">
          <div className="login px-24 py-12 bg-[#474747] rounded-[44px]">
            <div className="title text-[57px] leading-[86px] font-bold w-100">
              Hi, Welcome Back!
            </div>
            <div className="description text-[23px] leading-[34px] text-whiteWithOpacity">
              Enter your details to log into your account
            </div>
            <div className="username mt-[41px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Username
                </label>
              </div>
              <div className=" mt-[7px]">
                <input
                  placeholder="username"
                  type="text"
                  className=" placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
              </div>
            </div>

            <div className="password mt-[20px] ">
              <div className="title text-[23px] leading-[34px] text-whiteWithOpacity text-left">
                <label htmlFor="" className="">
                  Password
                </label>
              </div>
              <div className=" mt-[7px] relative">
                <input
                  placeholder="Enter password here"
                  type={isHide ? "password" : "text"}
                  className="placeholder:font-normal placeholder-[#ffffff43] w-100 py-4 text-[23px] leading-[34px] font-semibold text-white pl-5 bg-[#47474780] border-[3px] border-[#ffffff43] focus:border-[#009600]  rounded-[45px]"
                />
                <div
                  className="absolute right-9 top-5 z-100"
                  onClick={(e) => setHide(!isHide)}
                >
                  {isHide ? (
                    <BiHide size={45} color={"#ffffff33"} />
                  ) : (
                    <BiShow size={45} color={"#ffffff33"} />
                  )}{" "}
                </div>
              </div>
            </div>
            <div className="btn-login mt-[77px]">
              <button className="text-white bg-[#38ae00] px-[72px] py-[11px] text-[27px] leading-[40px] font-semibold rounded-[31.5px]">
                Login
              </button>
            </div>
            <div className="register-now mt-[77px]">
              <p className="text-[#ffffff80] text-[23px] leading-[34px]">
                Still not registered?
                <a
                  href="register"
                  className="font-bold ml-3 text-[#ffffff] text-[23px] leading-[34px] "
                >
                  Register Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
