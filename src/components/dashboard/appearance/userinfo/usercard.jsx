import React, { useRef } from "react";
import { uploadSvg } from "../../utilities/htmltocanvas";
import font from "./fonts/LeagueSpartan-Bold.otf";

const UserCard = ({ rank, username, level, xp, bg, mainColor }) => {
  const card = useRef(null);
  const gradientOpacity = 0;
  return (
    <svg
      ref={card}
      onClick={() => uploadSvg(card.current)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      version="1.1"
      viewBox="0 0 479.807 245.279"
      style={{
        borderRadius: "35px",
        boxShadow:
          "3px 4px 6px rgba(0, 0, 0, 0.24), -2px -2px 6px rgba(255, 255, 255, 0.35)",
      }}
    >
      <style type="text/css">
        {`@font-face {
    font-family: 'leaspartan';
    src: url(${font});
        }

`}
      </style>
      <defs>
        <linearGradient id="linearGradient3370">
          <stop offset="0" stopColor="#1fc274" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#0026dd" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient id="linearGradient913">
          <stop offset="0" stopColor="#1fc274" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#0026dd" stopOpacity="0.863"></stop>
        </linearGradient>
        <clipPath clipPathUnits="userSpaceOnUse">
          <circle
            cx="76.772"
            cy="317.853"
            r="48.487"
            fill="#fff"
            fillOpacity="0.221"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
          ></circle>
        </clipPath>
        <linearGradient
          x1="-6.566"
          x2="402.041"
          y1="317.348"
          y2="315.833"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient913"
        ></linearGradient>
        <filter
          width="1.093"
          height="1.885"
          x="-0.046"
          y="-0.442"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="4.375"></feGaussianBlur>
        </filter>
        <filter
          id="filter2625"
          width="1.065"
          height="1.619"
          x="-0.032"
          y="-0.31"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.063"></feGaussianBlur>
        </filter>
        <filter
          id="filter3085"
          width="1.052"
          height="1.163"
          x="-0.026"
          y="-0.082"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="1.055"></feGaussianBlur>
        </filter>
        <filter
          id="filter3203"
          width="1.122"
          height="1.113"
          x="-0.061"
          y="-0.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="0.658"></feGaussianBlur>
        </filter>
        <clipPath clipPathUnits="userSpaceOnUse">
          <circle
            cx="76.772"
            cy="317.853"
            r="48.487"
            fill="#fff"
            fillOpacity="0.221"
            fillRule="nonzero"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
          ></circle>
        </clipPath>
        <filter
          id="filter3256"
          width="1.11"
          height="1.11"
          x="-0.055"
          y="-0.055"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="2.225"></feGaussianBlur>
        </filter>
        <clipPath id="clipPath3286" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3290" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3294" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3298" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3302" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3306" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3310" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3314" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3318" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3322" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3326" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-28.422"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3334" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3338" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3342" clipPathUnits="userSpaceOnUse">
          <rect
            width="484.873"
            height="233.85"
            x="-36.871"
            y="221.888"
            fill={mainColor}
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.571"
            opacity="1"
            paintOrder="markers fill stroke"
            ry="11.869"
          ></rect>
        </clipPath>
        <clipPath id="clipPath3362" clipPathUnits="userSpaceOnUse">
          <circle
            cx="77.02"
            cy="317.604"
            r="51.429"
            fill="#000"
            fillOpacity="0.54"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.544"
            opacity="1"
            paintOrder="markers fill stroke"
          ></circle>
        </clipPath>
        <linearGradient
          id="linearGradient3372"
          x1="-172.857"
          x2="271.429"
          y1="125.461"
          y2="125.461"
          gradientTransform="translate(157.966 183.16)"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3370"
        ></linearGradient>
      </defs>
      <g transform="translate(34.86 -196.476)">
        <image
          width="460.400"
          height="308.134"
          x="-28.737"
          y="175.15"
          fill="#000"
          fillOpacity="0.956"
          clipPath="url(#clipPath3286)"
          preserveAspectRatio="none"
          transform="matrix(1.03705 0 0 1.04887 -4.02 -36.256)"
          xlinkHref={bg}
        ></image>
        <rect
          width="479.221"
          height="245.226"
          x="-34.681"
          y="196.476"
          fill="url(#linearGradient3372)"
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.597"
          opacity={gradientOpacity}
          paintOrder="markers fill stroke"
          ry="0"
        ></rect>
        <rect
          width="430.325"
          height="185.363"
          x="-10.102"
          y="228.454"
          fill="#000"
          fillOpacity="0.73"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.571"
          clipPath="url(#clipPath3342)"
          opacity="0.828"
          paintOrder="markers fill stroke"
          ry="42.584"
          transform="matrix(.97338 0 0 1 4.115 0)"
        ></rect>
        <text
          x="182.485"
          y="289.9"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3338)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="0.544"
          filter="url(#filter3085)"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            x="182.485"
            y="289.9"
            fill="#000"
            fillOpacity="0.544"
            fontSize="42.667"
          >
            #{rank}
          </tspan>
        </text>
        <circle
          cx="72.321"
          cy="321.711"
          r="48.38"
          fill="#010101"
          fillOpacity="0.496"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.597"
          clipPath="url(#clipPath3334)"
          filter="url(#filter3256)"
          opacity="1"
          paintOrder="markers fill stroke"
        ></circle>
        <image
          width="104.982"
          height="104.982"
          x="24.028"
          y="264.099"
          clipPath="url(#clipPath3362)"
          preserveAspectRatio="none"
          transform="translate(-9.163 -1.429)"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAACMVBMVEXwR0f+8fH+9vb//f3++fn7 y8vwSkr0e3v2jIzzamryYWH/+fnwTU3+9/fyX1/70tLzbW396enxVVX+9fX1f3/1hYX97OzxVFT6 vb383Nz2kZH6wMD6x8f5tbXxU1P0d3fyYGD4qKj81dX96+v1gYH83t70eHj96ur2k5P5u7v81tb7 1NT94uLwTEzxV1f6xcX+8vL4o6P84OD3mpr94+P5sLD7ysr0dHT7z8//+vr+9PT94eH4rq74rKzz aGj5srL82Nj5tLTyXl7zcXH2i4v2kJD1iIj0cnL70NDza2vxUVH6v7/++Pj7yMj0fn70dnb2kpLz bm7709P5trb2jY31h4f95eX6w8PyXFz4paX3nZ34qan82tr1gID3oqL1goL7zs7zaWn1ior6vLz5 s7P5ubn3o6P7ycn0eXnzbGz////+7+/yZGTyZWX4r6/4pKT/+/v5uLj0c3P2lZX6vr70fX3xT0/0 fHz70dH+7u7zb2/zcHD839/5urr4p6f3oKD2lpb//v7+8/PwS0vwSEj819f3nJz3mZn829v7zMzz ZmbxTk71hobyXV3xWVn1hIT3n5/1iYn//Pz82dn2jo74ra395+fxTU383d36xMT4qqr4pqbxUFDy Wlr5sbH6xsbwSUn95ub3np76wsL7zc395OT0dXX0enr2j4/+8PD3mJj+7e3xWFjzcnLyY2P5t7fx Vlb6wcHzZ2f3oaH3m5vyW1vxUlL4q6v1g4P96OjyYmK3D7xGAAAI2UlEQVR4AezBgQAAAACAoP2p F6kCAAAAAAAAAAAAAAAAAGBq7rqhkSztAviJ4O7Q7u7uPu7u9q4frNLe6TB0RaYJOjhMI2mlXWjb N59uF03CJkVV5pbk938Cqbq35DzPvWq1NF/oPNPohlaXG890XmhuQQprOX3FFajmJG8NtKnxctKl gOvK6X6knPPn6rq7GHHpBjR52scoXd29584jdbRdvSgxyu0/LvuhzcvnHsaSLt5vQyoY/q2J0a7/ Wouk1Pw+wDmafmuHtflagzKj3Btx+5G88dcPGEsOtvpgWe311Ywi3+rw4U8Kjd2UGKu6vh2WVHtW YpTqa22I71X40b97rtbXPWl4NjphsMFV9+uLux13Hg8hjoe//z9jSWdrYTlZW2VGqcrcjLmKszoa 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"
        ></image>
        <rect
          width="226.274"
          height="23.739"
          x="136.156"
          y="347.818"
          fill="#000"
          fillOpacity="0.564"
          fillRule="nonzero"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.571"
          clipPath="url(#clipPath3326)"
          filter="url(#filter2625)"
          opacity="1"
          paintOrder="markers fill stroke"
          ry="11.869"
        ></rect>
        <rect
          width="226.274"
          height="23.739"
          x="133.717"
          y="344.849"
          fill="#fff"
          fillOpacity="1"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.571"
          clipPath="url(#clipPath3322)"
          opacity="1"
          paintOrder="markers fill stroke"
          ry="11.869"
        ></rect>
        <rect
          width="140.531"
          height="23.858"
          x="133.717"
          y="344.729"
          fill={mainColor}
          fillOpacity="0.77"
          fillRule="nonzero"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.451"
          clipPath="url(#clipPath3318)"
          opacity="1"
          paintOrder="markers fill stroke"
          ry="11.929"
        ></rect>
        <text
          x="274.025"
          y="336.898"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3314)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            style={{ InkscapeFontSpecification: "Montserrat" }}
            x="274.025"
            y="336.898"
            fill="#fff"
            fillOpacity="1"
            fontFamily="Montserrat"
            fontSize="14"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
            {xp} XP
          </tspan>
        </text>
        <text
          x="136.185"
          y="336.689"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3310)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            style={{ InkscapeFontSpecification: "Montserrat" }}
            x="136.185"
            y="336.689"
            fill="#fff"
            fillOpacity="1"
            fontFamily="Montserrat"
            fontSize="14"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
            {username}
          </tspan>
        </text>
        <text
          x="179.286"
          y="286.89"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3306)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            x="179.286"
            y="286.89"
            fill="#fff"
            fillOpacity="1"
            fontSize="42.667"
          >
            #{rank}
          </tspan>
        </text>
        <text
          x="342.828"
          y="289.413"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3302)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="0.504"
          filter="url(#filter3203)"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            x="342.828"
            y="289.413"
            fill="#000"
            fillOpacity="0.504"
            fontSize="42.667"
          >
            {level}
          </tspan>
        </text>
        <text
          x="339.628"
          y="287.043"
          fill={mainColor}
          stroke="none"
          clipPath="url(#clipPath3298)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="bold"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            x="339.628"
            y="287.043"
            fill={mainColor}
            fillOpacity="1"
            fontSize="42.667"
          >
            {level}
          </tspan>
        </text>
        <text
          x="136.714"
          y="284.25"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3294)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            style={{ InkscapeFontSpecification: "Montserrat" }}
            x="136.714"
            y="284.25"
            fill="#fff"
            fillOpacity="1"
            fontFamily="Montserrat"
            fontSize="12"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
            RANK
          </tspan>
        </text>
        <text
          x="294.572"
          y="284.25"
          fill="#000"
          stroke="none"
          clipPath="url(#clipPath3290)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'leaspartan'",
          }}
          fillOpacity="1"
          fontFamily="'leaspartan'"
          fontSize="74.667"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan
            style={{ InkscapeFontSpecification: "Montserrat" }}
            x="294.572"
            y="284.25"
            fill="#fff"
            fillOpacity="1"
            fontFamily="Montserrat"
            fontSize="12"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
            LEVEL
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default UserCard;
