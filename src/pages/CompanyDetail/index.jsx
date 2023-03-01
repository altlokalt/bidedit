import React from "react";

import { Text, Img, List, Line, Button } from "components";

const CompanyDetailPage = () => {
  return (
    <>
      <div className="bg-black_902 flex font-urbanist items-center justify-start mx-[auto] p-[22px] sm:px-[20px] w-[100%]">
        <div className="flex flex-col gap-[45px] justify-start max-w-[1596px] mb-[101px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[68%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_50 flex flex-row sm:hidden items-start justify-start p-[5px] rounded-[8px] md:w-[100%] w-[19%]">
                  <Text
                    className="font-normal ml-[10px] mt-[2px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                    variant="body6"
                  >
                    Company
                  </Text>
                  <Text
                    className="font-normal ml-[26px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                    variant="body6"
                  >
                    &gt;
                  </Text>
                  <Text
                    className="font-normal ml-[8px] mt-[2px] not-italic text-gray_903 text-left tracking-[0.14px] w-[auto]"
                    variant="body6"
                  >
                    Open
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[34px] md:w-[100%] w-[99%]">
                  <Img
                    src="images/img_rectangle2054.png"
                    className="h-[432px] sm:h-[auto] object-cover rounded-[12px] md:w-[100%] w-[auto]"
                    alt="Rectangle2054"
                  />
                  <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.32px] w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          S.I.P AS - Minfuel.no
                        </Text>
                        <Text
                          className="font-normal leading-[28.80px] not-italic text-gray_500_ab text-left tracking-[0.16px] w-[100%]"
                          variant="body4"
                        >
                          Minfuel.no er en norsk nettplattform som gir en
                          oversikt over gjeldende priser på bensin, diesel,
                          bompenge og ved hvor som helst i Norge.
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[32px] grid grid-cols-2 mt-[20px] w-[70%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_ellipse1015.png"
                            className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                            alt="Ellipse1015"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                              variant="body6"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Minfuel team
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_ellipse1016.png"
                            className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                            alt="Ellipse1016"
                          />
                          <div className="flex flex-col items-start justify-end w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                              variant="body6"
                            >
                              Owner
                            </Text>
                            <Text
                              className="font-normal mt-[2px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              S.I.P AS
                            </Text>
                          </div>
                        </div>
                      </List>
                      <Line className="bg-gray_100 h-[1px] mt-[20px] w-[100%]" />
                      <div className="flex sm:flex-col flex-row gap-[40px] items-start justify-start mt-[22px] pb-[2px] md:w-[100%] w-[92%]">
                        <div className="flex flex-col sm:flex-row gap-[13px] items-start justify-start pt-[2px] sm:w-[100%] w-[37%]">
                          <Text
                            className="font-normal not-italic text-gray_500_ab text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            timer med tjenester
                          </Text>
                          <div className="flex flex-row items-center justify-end w-[100%]">
                            <Button className="bg-red_500 cursor-pointer font-normal h-[44px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                              09
                            </Button>
                            <Img
                              src="images/img_user_white_a700.svg"
                              className="h-[10px] ml-[4px] w-[10px]"
                              alt="user"
                            />
                            <Button className="bg-bluegray_501 cursor-pointer font-normal h-[44px] ml-[4px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                              til
                            </Button>
                            <Img
                              src="images/img_user_white_a700.svg"
                              className="h-[10px] ml-[4px] w-[10px]"
                              alt="user One"
                            />
                            <Button className="bg-red_500 cursor-pointer font-normal h-[44px] ml-[4px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                              18
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-[18px] items-start justify-start pt-[2px] sm:w-[100%] w-[55%]">
                          <Text
                            className="font-normal not-italic text-gray_500_ab text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Type tjeneste
                          </Text>
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_sort_white_a700.svg"
                              className="h-[32px] w-[32px]"
                              alt="sort"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 tracking-[0.20px] w-[auto]"
                              variant="body2"
                            >
                              Abonnenment. GRATIS
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row font-roboto sm:gap-[20px] items-start justify-start mt-[38px] md:w-[100%] w-[93%]">
                        <div className="flex flex-row gap-[13px] items-center justify-start w-[60%]">
                          <Button className="flex h-[50px] items-center justify-center outline outline-[0.5px] outline-gray_100 p-[13px] rounded-[8px] w-[50px]">
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[24px]"
                              alt="favorite"
                            />
                          </Button>
                          <div className="bg-bluegray_501 flex items-center justify-start rounded-[8px] w-[auto]">
                            <Text
                              className="bg-red_500 font-black h-[40px] mb-[9px] pb-[11px] pl-[15px] sm:pr-[20px] pr-[25px] pt-[6px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[137px]"
                              variant="body3"
                            >
                              Til Nettsted
                            </Text>
                          </div>
                        </div>
                        <div className="bg-bluegray_501 flex items-end justify-start mb-[4px] ml-[3px] pb-[5px] px-[5px] rounded-[8px] w-[auto]">
                          <Text
                            className="bg-red_500 font-black h-[40px] sm:pl-[20px] pl-[29px] pr-[6px] py-[8px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[156px]"
                            variant="body3"
                          >
                            Veibeskrivelse
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[20px] items-start justify-start mt-[54px] w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Bla gjennom flere lignende
                  </Text>
                  <List
                    className="flex flex-row gap-[19px] grid-cols-4 justify-center pb-[8px] pr-[8px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                              src="images/img_clock.svg"
                              className=""
                              alt="clock"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
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
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
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
                                alt="sort Two"
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
                          src="images/img_rectangle2044_8.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Two"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock.svg"
                              className=""
                              alt="clock Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
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
                                alt="sort Three"
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
                          src="images/img_rectangle2044_9.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Three"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock.svg"
                              className=""
                              alt="clock Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
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
                                alt="sort Four"
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
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[341px] md:mt-[0] mt-[711px] rounded-[19px] w-[47px]">
              <Img
                src="images/img_arrowright.svg"
                className="h-[13px] w-[auto]"
                alt="arrowright"
              />
            </div>
            <div className="bg-white_A700 flex md:flex-1 flex-col gap-[32px] md:hidden items-center justify-center md:mt-[0] mt-[23px] outline outline-[0.5px] outline-gray_100 p-[15px] md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[25px] justify-start mt-[27px] md:w-[100%] w-[95%]">
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
                <div className="h-[291px] md:ml-[0] ml-[7px] sm:pr-[20px] md:pr-[40px] pr-[48px] relative sm:w-[100%] w-[89%]">
                  <div className="h-[291px] my-[auto] w-[88%]">
                    <div className="bg-white_A700 h-[291px] m-[auto] rounded-[15px] shadow-bs4 w-[100%]"></div>
                    <div className="absolute flex flex-col left-[6%] top-[0] w-[82%]">
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
                  </div>
                  <div className="absolute bottom-[5%] flex flex-col items-start justify-start left-[4%] w-[80%]">
                    <div className="flex items-center justify-start md:ml-[0] ml-[2px] w-[100%]">
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
              <div className="flex flex-col gap-[15px] items-center justify-start mb-[167px] md:w-[100%] w-[97%]">
                <div className="flex flex-row items-start justify-between w-[100%]">
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
                <List
                  className="flex-col gap-[13.5px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-start mb-[7px] pr-[15px] w-[auto]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[7px] w-[49%]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-start mb-[7px] sm:pr-[20px] pr-[36px] w-[auto]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-start mb-[7px] pr-[14px] w-[auto]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-start mb-[7px] sm:pr-[20px] pr-[22px] w-[auto]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                  <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                    <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[7px] pr-[5px] w-[47%]">
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
                    <Text
                      className="bg-red_500 font-black font-roboto h-[37px] mt-[11px] pl-[24px] pr-[35px] sm:px-[20px] py-[7px] rounded-[15px] text-left text-shadow-ts text-white_A700 w-[131px]"
                      variant="body3"
                    >
                      Nettsted
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="md:h-[243px] h-[244px] md:ml-[0] ml-[1152px] relative w-[15%]">
            <div className="absolute bg-gray_903 h-[233px] sm:hidden inset-x-[0] mx-[auto] rounded-[15px] top-[0] w-[234px]"></div>
            <div className="absolute flex flex-col h-[100%] sm:hidden inset-y-[0] items-center justify-start my-[auto] right-[1%] w-[91%]">
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
                <Button className="bg-white_A700 cursor-pointer font-normal sm:hidden min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_903 tracking-[0.14px] w-[auto]">
                  Gå til hjelpesenteret
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailPage;
