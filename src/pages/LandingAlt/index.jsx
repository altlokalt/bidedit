import React from "react";

import { List, Text, Img, Button, Line } from "components";

const LandingAltPage = () => {
  return (
    <>
      <div className="bg-black_902 flex font-urbanist items-center justify-start mx-[auto] p-[20px] w-[100%]">
        <div className="flex items-center justify-start max-w-[1469px] mb-[450px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
              <List
                className="md:flex-1 flex-col gap-[15px] grid md:w-[100%] w-[73%]"
                orientation="vertical"
              >
                <div className="flex flex-col gap-[30px] justify-start w-[100%]">
                  <div className="bg-gray_50 flex-row gap-[8px] hidden items-start justify-start mr-[869px] p-[5px] rounded-[8px] md:w-[100%] w-[19%]">
                    <Text
                      className="font-normal ml-[10px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                      variant="body6"
                    >
                      dinbylanding
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                      variant="body6"
                    >
                      &gt;
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_903 text-left tracking-[0.14px] w-[auto]"
                      variant="body6"
                    >
                      Open
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[6px] w-[100%]">
                    <div className="flex flex-row md:gap-[40px] items-start justify-between pb-[45px] w-[100%]">
                      <div className="h-[250px] relative md:w-[100%] w-[71%]">
                        <Img
                          src="images/img_rectangle2040.png"
                          className="h-[250px] m-[auto] object-cover rounded-[15px] w-[100%]"
                          alt="Rectangle2040"
                        />
                        <div className="absolute bg-gradient1  flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[30px] sm:px-[20px] rounded-[15px] w-[100%]">
                          <div className="flex flex-col gap-[33px] items-start justify-start mb-[19px] mt-[23px] md:w-[100%] w-[86%]">
                            <div className="flex flex-col gap-[14px] items-start justify-start w-[100%]">
                              <Text
                                className="font-semibold text-left text-white_A700 tracking-[0.32px] w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Ekstraordinære lokale varer og tjenester
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700_a2 tracking-[0.14px] w-[auto]"
                                variant="body6"
                              >
                                Norsk første og største digitale markedsplass
                                for alt som er lokalt
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[52%]">
                              <Button className="bg-white_A700 cursor-pointer font-normal min-w-[120px] not-italic py-[13px] rounded-[8px] text-[14px] text-center text-gray_903 tracking-[0.14px] w-[auto]">
                                Utforsk mer
                              </Button>
                              <Button className="cursor-pointer font-normal min-w-[160px] not-italic outline outline-[0.5px] outline-white_A700 py-[13px] rounded-[8px] text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]">
                                Selg hva som helst
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[92px] mt-[118px] rounded-[19px] w-[47px]">
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[13px] w-[auto]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[876px] items-center justify-start md:w-[100%] w-[95%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Trender
                        </Text>
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[0.14px] w-[auto]"
                          variant="body6"
                        >
                          Se Alt
                        </Text>
                      </div>
                      <div className="flex flex-row md:gap-[40px] items-start justify-between pb-[50px] w-[100%]">
                        <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[23%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_140x222.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044"
                            />
                            <div className="absolute flex flex-row gap-[23px] items-center justify-between right-[4%] top-[6%] w-[58%]">
                              <div className="bg-gray_900_26 h-[28px] relative rounded-[14px] w-[59%]">
                                <div className="absolute bg-gray_900_26 h-[28px] inset-y-[0] my-[auto] right-[0] rounded-[14px] w-[80%]"></div>
                                <Text
                                  className="absolute font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-left text-white_A700 tracking-[0.12px] w-[auto]"
                                  variant="body7"
                                >
                                  Mat&Drikke
                                </Text>
                              </div>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_clock.svg"
                                  className=""
                                  alt="clock"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] w-[93%]">
                            <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                variant="body4"
                              >
                                The Unfortable Facer
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                                variant="body7"
                              >
                                By Bane Riccardo
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                              <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                  variant="body9"
                                >
                                  Skjer ved
                                </Text>
                                <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                  <Img
                                    src="images/img_sort.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="sort"
                                  />
                                  <Text
                                    className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                    variant="body6"
                                  >
                                    HORTEN
                                  </Text>
                                </div>
                              </div>
                              <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[23%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_10.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 One"
                            />
                            <div className="absolute flex flex-row gap-[20px] items-center justify-between right-[4%] top-[6%] w-[59%]">
                              <div className="bg-gray_900_26 h-[28px] relative rounded-[14px] w-[62%]">
                                <div className="absolute bg-gray_900_26 h-[28px] inset-y-[0] my-[auto] right-[0] rounded-[14px] w-[80%]"></div>
                                <Text
                                  className="absolute bottom-[18%] font-normal inset-x-[0] mx-[auto] not-italic text-left text-white_A700 tracking-[0.12px] w-[max-content]"
                                  variant="body7"
                                >
                                  Barn&Ungdom
                                </Text>
                              </div>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_clock.svg"
                                  className=""
                                  alt="clock One"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[11px] md:w-[100%] w-[93%]">
                            <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                variant="body4"
                              >
                                Mad Ballot Holder
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                                variant="body7"
                              >
                                By Angelina Cruzz
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                  variant="body9"
                                >
                                  Skjer ved
                                </Text>
                                <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                  <Img
                                    src="images/img_sort.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="sort One"
                                  />
                                  <Text
                                    className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                    variant="body6"
                                  >
                                    Horten
                                  </Text>
                                </div>
                              </div>
                              <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[80px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[23%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_11.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Two"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[4%] top-[6%] w-[51%]">
                              <Text
                                className="bg-gray_900_26 font-normal h-[28px] not-italic pr-[19px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                                variant="body7"
                              >
                                For familie
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[11px] md:w-[100%] w-[91%]">
                            <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                variant="body4"
                              >
                                Pile of Many Plates
                              </Text>
                              <Text
                                className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                                variant="body7"
                              >
                                By Ralphi Arness
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[36px] items-center justify-between w-[100%]">
                              <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                  variant="body9"
                                >
                                  Skjer ved
                                </Text>
                                <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                  <Img
                                    src="images/img_sort.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="sort Two"
                                  />
                                  <Text
                                    className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                    variant="body6"
                                  >
                                    Horten
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="bg-gray_903 font-normal font-urbanist h-[32px] justify-center not-italic sm:pl-[20px] pl-[23px] pr-[12px] py-[8px] rounded-[8px] text-center text-white_A700 tracking-[0.12px] w-[78px]"
                                variant="body7"
                              >
                                Les mer
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[23%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_11.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Three"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[4%] top-[6%] w-[51%]">
                              <Text
                                className="bg-gray_900_26 font-normal h-[28px] not-italic pr-[19px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                                variant="body7"
                              >
                                For familie
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[11px] md:w-[100%] w-[91%]">
                            <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                variant="body4"
                              >
                                Pile of Many Plates
                              </Text>
                              <Text
                                className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                                variant="body7"
                              >
                                By Ralphi Arness
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[36px] items-center justify-between w-[100%]">
                              <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                  variant="body9"
                                >
                                  Skjer ved
                                </Text>
                                <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                  <Img
                                    src="images/img_sort.svg"
                                    className="h-[16px] w-[16px]"
                                    alt="sort Three"
                                  />
                                  <Text
                                    className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                    variant="body6"
                                  >
                                    Horten
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="bg-gray_903 font-normal font-urbanist h-[32px] justify-center not-italic sm:pl-[20px] pl-[23px] pr-[12px] py-[8px] rounded-[8px] text-center text-white_A700 tracking-[0.12px] w-[78px]"
                                variant="body7"
                              >
                                Les mer
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[138px] mt-[100px] rounded-[19px] w-[47px]">
                          <Img
                            src="images/img_arrowright.svg"
                            className="h-[13px] w-[auto]"
                            alt="arrowright One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row md:gap-[40px] sm:hidden items-center justify-between w-[100%]">
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[24px] items-center justify-between sm:w-[100%] w-[45%]">
                        <Button
                          className="flex items-center justify-center outline outline-[0.5px] outline-gray_100 p-[16px] rounded-[14px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_user.svg"
                              className="mr-[10px] text-center"
                              alt="user"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                            Category
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_note2.svg"
                              className="mr-[10px] text-center"
                              alt="note-2"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                            Collection
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_clock_white_a700.svg"
                              className="mr-[10px] text-center"
                              alt="clock"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                            Price Range
                          </div>
                        </Button>
                      </div>
                      <Button
                        className="flex items-center justify-center outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_menu.svg"
                            className="mr-[10px] text-center"
                            alt="menu"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                          Filter & Sort
                        </div>
                      </Button>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[19px] grid-cols-4 items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_12.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 One"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite_red_626.svg"
                                className=""
                                alt="favorite"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_902 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Diehard BATTERY-SILVER
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Ralph Edwards
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Skjer ved
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort One"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  HORTEN
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Les mer
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_3.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 One One"
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
                                src="images/img_favorite_red_626.svg"
                                className=""
                                alt="favorite One"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                          <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_902 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Bosch Spark Plug
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Guy Hawkins
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Skjer ved
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort One One"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  HORTEN
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Les mer
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_4.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Two One"
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
                                src="images/img_favorite_red_626.svg"
                                className=""
                                alt="favorite Two"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                          <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_902 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Valvoline Engine Oil
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Albert Flores
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Skjer ved
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Two One"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  HORTEN
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Les mer
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[140px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_5.png"
                            className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Three One"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              2h 4m 32s
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite_red_626.svg"
                                className=""
                                alt="favorite Three"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                          <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_902 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Fram Oil Filter
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Jerome Bell
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                            <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_500 text-left tracking-[0.10px] w-[auto]"
                                variant="body9"
                              >
                                Skjer ved
                              </Text>
                              <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                                <Img
                                  src="images/img_sort.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="sort Three One"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                  variant="body6"
                                >
                                  HORTEN
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Les mer
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex md:flex-1 flex-col gap-[36px] md:hidden items-center justify-end outline outline-[0.5px] outline-gray_100 p-[12px] md:w-[100%] w-[27%]">
                <div className="flex flex-col gap-[25px] justify-start mt-[31px] md:w-[100%] w-[95%]">
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
                <div className="flex flex-col gap-[18px] items-center justify-start md:w-[100%] w-[98%]">
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
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                    <List
                      className="flex-col gap-[14.5px] grid items-center w-[99%]"
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
                      <div className="flex flex-row gap-[19px] items-start justify-between w-[100%]">
                        <div className="flex flex-col font-urbanist gap-[10px] items-start justify-start w-[auto]">
                          <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] ml-[5px] md:w-[100%] w-[84%]">
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
                          <div className="md:h-[243px] h-[258px] relative w-[100%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] mb-[257px] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
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
    </>
  );
};

export default LandingAltPage;
