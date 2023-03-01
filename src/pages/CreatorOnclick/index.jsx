import React from "react";

import { Text, Img, Button, Line, Input, List } from "components";
import { CloseSVG } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const CreatorOnclickPage = () => {
  const navigate = useNavigate();

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_902 flex font-urbanist items-center justify-start mx-[auto] p-[10px] w-[100%]">
        <div className="flex flex-col gap-[17px] items-start justify-start max-w-[1524px] mb-[89px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-gray_50 flex-row hidden items-center justify-start p-[4px] rounded-[8px] md:w-[100%] w-[13%]">
            <Text
              className="font-normal ml-[11px] my-[2px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
              variant="body6"
            >
              Creator
            </Text>
            <Text
              className="font-normal ml-[39px] my-[2px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
              variant="body6"
            >
              &gt;
            </Text>
            <Text
              className="font-normal ml-[8px] mt-[5px] not-italic text-gray_903 text-left tracking-[0.14px] w-[auto]"
              variant="body6"
            >
              open
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[10px] items-start justify-between w-[100%]">
            <div className="flex flex-col relative md:w-[100%] w-[74%]">
              <Img
                src="images/img_rectangle2057.png"
                className="h-[257px] mx-[auto] object-cover w-[100%]"
                alt="Rectangle2057"
              />
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between mt-[-83.29px] mx-[auto] w-[96%] z-[1]">
                <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[267px] p-[18px] rounded-[15px] shadow-bs md:w-[100%] w-[23%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[87%]">
                    <Img
                      src="images/img_ellipse1022.png"
                      className="h-[100px] md:h-[auto] rounded-[50%] w-[100px]"
                      alt="Ellipse1022"
                    />
                    <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-black_901 text-left tracking-[0.20px] w-[auto]"
                        variant="body2"
                      >
                        Eleanor Pena
                      </Text>
                      <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                          variant="body7"
                        >
                          0x864784f44ajf84bskw4w...
                        </Text>
                        <Img
                          src="images/img_copy.svg"
                          className="h-[18px] w-[18px]"
                          alt="copy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[8px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_500 tracking-[0.14px] w-[100%]"
                      variant="body6"
                    >
                      Dedicated to create amazing for art exhibition information
                      please check link below:
                    </Text>
                    <div className="flex flex-row gap-[6px] items-center justify-center mt-[21px] py-[2px] md:w-[100%] w-[45%]">
                      <Img
                        src="images/img_globe_black_901.svg"
                        className="h-[18px] w-[18px]"
                        alt="globe"
                      />
                      <Text
                        className="font-normal not-italic text-black_901 text-left tracking-[0.12px] w-[auto]"
                        variant="body7"
                      >
                        artistictea.io
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-between mt-[22px] md:w-[100%] w-[87%]">
                      <Button className="bg-gray_903 cursor-pointer font-normal min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Follow
                      </Button>
                      <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_100 p-[7px] rounded-[8px] w-[32px]">
                        <Img
                          src="images/img_arrowup_black_901.svg"
                          className="h-[18px]"
                          alt="arrowup"
                        />
                      </Button>
                      <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_100 p-[7px] rounded-[8px] w-[32px]">
                        <Img
                          src="images/img_camera.svg"
                          className="h-[18px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <Line className="bg-gray_100 h-[1px] mt-[24px] w-[100%]" />
                    <Text
                      className="font-normal mt-[29px] not-italic text-center text-gray_500 tracking-[0.14px] w-[auto]"
                      variant="body6"
                    >
                      Joined April 2021
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[33px] items-center justify-start md:mt-[0] mt-[117px] md:w-[100%] w-[75%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                    <div className="flex flex-row items-center justify-between w-[45%]">
                      <Button
                        className="bg-black_901 flex items-center justify-center pl-[12px] pr-[13px] py-[9px] rounded-[18px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_grid_white_a700.svg"
                            className="mr-[10px] text-center"
                            alt="grid"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700 tracking-[0.14px]">
                          Created
                        </div>
                      </Button>
                      <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] w-[auto]">
                        <Img
                          src="images/img_folder.svg"
                          className="h-[20px] ml-[4px] w-[20px]"
                          alt="folder"
                        />
                        <Text
                          className="font-normal mr-[4px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                          variant="body6"
                        >
                          Collection
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center p-[7px] w-[auto]">
                        <Img
                          src="images/img_clock_gray_500.svg"
                          className="h-[20px] ml-[4px] w-[20px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal mr-[5px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                          variant="body6"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] text-[12px] placeholder:text-gray_500 text-gray_500 text-left tracking-[0.12px] w-[100%]"
                      wrapClassName="border-[1px] border-gray_303 border-solid flex pl-[14px] pr-[35px] py-[10px] rounded-[8px] sm:pr-[20px] sm:w-[100%] w-[26%]"
                      name="SearchInput"
                      placeholder="Search by name"
                      prefix={
                        <Img
                          src="images/img_search_gray_500.svg"
                          className="cursor-pointer mr-[14px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#93989a"
                            className="cursor-pointer ml-[10px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                    ></Input>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="gap-[19px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_6.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite.svg"
                                className=""
                                alt="favorite"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                          <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Person Melirik Kesamping
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Current Bid
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  2,42 ETH
                                </Text>
                              </div>
                            </div>
                            <Button
                              className="common-pointer bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                              onClick={() => navigate("/home1")}
                            >
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_7.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 One"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_clock.svg"
                                className=""
                                alt="clock One"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Building Reflection Xd
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Current Bid
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort One"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  52,12 ETH
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_8.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Two"
                          />
                          <div className="absolute flex flex-row gap-[7px] items-center justify-center right-[3%] top-[6%] w-[48%]">
                            <Text
                              className="bg-gray_900_26 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                              variant="body7"
                            >
                              Ended
                            </Text>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_clock.svg"
                                className=""
                                alt="clock Two"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Natural Atomic Circle
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Fixed Price
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Two"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  22,52 ETH
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_13.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Three"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Text
                              className="bg-gray_900_26 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                              variant="body7"
                            >
                              Ended
                            </Text>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_clock.svg"
                                className=""
                                alt="clock Three"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Uowaw Your Face is Good
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Fixed Price
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Three"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  1,32 ETH
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_14.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Four"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_clock.svg"
                                className=""
                                alt="clock Four"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              One Blooded Hand
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Current Bid
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Four"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  5,52 ETH
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_9.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Five"
                          />
                          <div className="absolute flex flex-row gap-[7px] items-center justify-center right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite.svg"
                                className=""
                                alt="favorite One"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                          <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Oldtown Artistic Alley
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Eleanor Pena
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Current Bid
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Five"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  1,224 ETH
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Place a Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[1190px] h-[1551px] md:hidden relative md:w-[100%] w-[26%]">
              <div className="absolute bg-white_A700 flex md:hidden inset-x-[0] items-center justify-start mx-[auto] outline outline-[0.5px] outline-gray_100 p-[19px] top-[0] w-[100%]">
                <div className="flex flex-col gap-[25px] justify-start mb-[789px] mt-[24px] md:w-[100%] w-[99%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-semibold text-black_901 text-left w-[auto]"
                      variant="body3"
                    >
                      Utvalgt Bedrift/Selskap
                    </Text>
                    <Text
                      className="font-semibold text-gray_903 text-right tracking-[0.14px] w-[auto]"
                      variant="body6"
                    >
                      Se Alt
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start md:ml-[0] ml-[6px] mr-[21px] pb-[14px] px-[14px] rounded-[15px] shadow-bs4 md:w-[100%] w-[93%]">
                    <div className="md:h-[120px] h-[204px] md:ml-[0] ml-[2px] relative w-[99%]">
                      <div className="absolute flex flex-col left-[2%] top-[0] w-[91%]">
                        <Img
                          src="images/img_rectangle2043.png"
                          className="h-[120px] mx-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2043"
                        />
                        <Img
                          src="images/img_ellipse1019.png"
                          className="h-[52px] ml-[92px] mt-[-20px] rounded-[50%] w-[52px] z-[1]"
                          alt="Ellipse1019"
                        />
                      </div>
                      <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                        <div className="flex flex-row items-end justify-evenly w-[100%]">
                          <div className="flex flex-col justify-start mt-[28px] pb-[7px] pr-[7px] w-[60%]">
                            <div className="h-[18px] mr-[10px] relative w-[95%]">
                              <Text
                                className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-black_901 text-center tracking-[0.14px] w-[max-content]"
                                variant="body6"
                              >
                                Minfuel - Alt innen Energi
                              </Text>
                              <Img
                                src="images/img_checkmark.svg"
                                className="absolute h-[18px] right-[0] top-[0] w-[18px]"
                                alt="checkmark"
                              />
                            </div>
                            <Text
                              className="font-normal md:ml-[0] ml-[27px] mt-[3px] not-italic text-center text-gray_500 tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              @minfuel
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[6px] items-center justify-start mb-[4px] w-[39%]">
                            <div className="font-roboto md:h-[28px] h-[29px] relative w-[100%]">
                              <div className="absolute bg-red_500 h-[28px] inset-[0] justify-center m-[auto] rounded-[14px] shadow-bs3 w-[100%]"></div>
                              <Text
                                className="absolute font-black inset-x-[0] mx-[auto] text-left text-white_A700 top-[0] w-[max-content]"
                                variant="body3"
                              >
                                Nettsted
                              </Text>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-outfit min-w-[81px] not-italic py-[8px] rounded-[16px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Følg dem
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_100 h-[1px] mt-[10px] w-[85%]" />
                    <Text
                      className="font-normal leading-[21.60px] mt-[11px] not-italic text-gray_500 text-left tracking-[0.12px] sm:w-[100%] w-[85%]"
                      variant="body7"
                    >
                      Hvor mye Koster det å kjøre fra A til B? i henhold til din
                      biltype! f.eks oslo til halden....
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col gap-[18px] md:hidden inset-x-[0] items-center justify-start mx-[auto] w-[93%]">
                <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
                  <Text
                    className="font-semibold text-black_901 text-left w-[auto]"
                    variant="body3"
                  >
                    Nylig lagt til AS/ENK
                  </Text>
                  <Text
                    className="font-semibold text-gray_903 text-right tracking-[0.14px] w-[auto]"
                    variant="body6"
                  >
                    Se Alt
                  </Text>
                </div>
                <div className="flex flex-col gap-[19px] sm:hidden items-center justify-start w-[100%]">
                  <List
                    className="flex-col gap-[14.5px] grid items-center pb-[10px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[53%]">
                        <Img
                          src="images/img_ellipse1018.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Veihjelp AS #4390
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            From Ragnarok
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                        Nettsted
                      </Button>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                    <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[59%]">
                        <Img
                          src="images/img_ellipse1018_42x42.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018 One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Vestfold Kunst #3486
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            From Doodles
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                        Nettsted
                      </Button>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                    <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[52%]">
                        <Img
                          src="images/img_ellipse1018_1.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018 Two"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Minfuel.no #2766
                          </Text>
                          <Text
                            className="font-normal mt-[5px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            From Minfuel23
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                        Nettsted
                      </Button>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                    <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[51%]">
                        <Img
                          src="images/img_ellipse1018_2.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018 Three"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Valiantlynx #2761
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            From valiantlynx
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                        Nettsted
                      </Button>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                    <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[56%]">
                        <Img
                          src="images/img_ellipse1018_3.png"
                          className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                          alt="Ellipse1018 Four"
                        />
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Sammadag AS #22
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            From altlokaltstudio
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                        Nettsted
                      </Button>
                    </div>
                  </List>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[373px] md:gap-[40px] sm:hidden justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[7px] md:w-[100%] w-[99%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[55%]">
                          <Img
                            src="images/img_ellipse1018_4.png"
                            className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                            alt="Ellipse1018 Five"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Husvask ENK #3723
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              From vestfoldvask
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <div className="md:h-[243px] h-[258px] relative w-[65%]">
                        <div className="absolute bg-gray_903 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                          <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs5 w-[50px]">
                            <Img
                              src="images/img_question.svg"
                              className="h-[24px]"
                              alt="question"
                            />
                          </Button>
                          <Text
                            className="font-normal mt-[14px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                            variant="body3"
                          >
                            Kundesenter
                          </Text>
                          <div className="flex flex-col gap-[54px] items-center justify-start mt-[12px] w-[100%]">
                            <Text
                              className="font-normal leading-[25.20px] not-italic text-center text-gray_400 tracking-[0.14px]"
                              variant="body6"
                            >
                              Har du støtt på problemer?
                              <br />
                              Værsåsnill kontakt oss
                            </Text>
                            <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_903 tracking-[0.14px] w-[auto]">
                              Gå til hjelpesenteret
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatorOnclickPage;
