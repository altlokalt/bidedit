import React from "react";

import { Text, Img, Button, List, Input } from "components";

const OnlywebsitePage = () => {
  return (
    <>
      <div className="bg-black_902 flex font-urbanist items-center justify-end mx-[auto] pl-[17px] pt-[17px] w-[100%]">
        <div className="flex flex-col gap-[34px] items-center justify-end max-w-[1548px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[27px] items-start justify-start md:w-[100%] w-[98%]">
            <div className="bg-gray_50 flex-row hidden items-start justify-start md:ml-[0] ml-[2px] p-[6px] rounded-[8px] md:w-[100%] w-[15%]">
              <Text
                className="font-normal ml-[10px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                variant="body6"
              >
                leverandor
              </Text>
              <Text
                className="font-normal ml-[20px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
                variant="body6"
              >
                &gt;
              </Text>
              <Text
                className="font-normal ml-[8px] mt-[2px] not-italic text-gray_903 text-left tracking-[0.14px] w-[auto]"
                variant="body6"
              >
                websiteonly
              </Text>
            </div>
            <div className="flex md:flex-col flex-row font-roboto gap-[34px] items-start justify-between w-[100%]">
              <div className="h-[342px] md:h-[361px] relative md:w-[100%] w-[74%]">
                <Img
                  src="images/img_wp4315395marve.png"
                  className="h-[342px] m-[auto] object-cover rounded-[40px] w-[100%]"
                  alt="wp4315395marve"
                />
                <div className="absolute flex flex-col gap-[106px] md:gap-[40px] h-[max-content] inset-[0] justify-center m-[auto] w-[93%]">
                  <div className="flex flex-row gap-[28px] md:hidden items-center justify-start md:w-[100%] w-[30%]">
                    <Text
                      className="bg-pink_900_7f font-medium h-[34px] pb-[2px] pl-[14px] sm:pr-[20px] pr-[33px] pt-[6px] rounded-[17px] text-left text-white_A700 w-[141px]"
                      variant="body1"
                    >
                      12 ansatt
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[45%]">
                      <div className="h-[34px] relative w-[68%]">
                        <div className="absolute h-[34px] inset-y-[0] my-[auto] right-[0] w-[72%]">
                          <Img
                            src="images/img_1515450500w.png"
                            className="absolute h-[34px] inset-y-[0] my-[auto] right-[0] rounded-[50%] w-[61%]"
                            alt="1515450500w"
                          />
                          <Img
                            src="images/img_tumblr14402da0.png"
                            className="absolute h-[34px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[61%]"
                            alt="tumblr14402daZero"
                          />
                        </div>
                        <Img
                          src="images/img_398fab3b4bff4dd.png"
                          className="absolute h-[34px] inset-y-[0] left-[0] my-[auto] rounded-[50%] w-[44%]"
                          alt="398fab3b4bff4dd"
                        />
                      </div>
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body2"
                      >
                        +50{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start md:ml-[0] ml-[5px] w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[14px] items-center justify-start md:w-[100%] w-[22%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                          <Text
                            className="text-left text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            SIMP AS
                          </Text>
                          <div className="flex flex-row gap-[50px] items-center justify-start md:w-[100%] w-[79%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              ENERGI
                            </Text>
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body2"
                            >
                              Gratis
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-red_500 cursor-pointer font-black leading-[normal] min-w-[221px] py-[7px] rounded-[15px] shadow-bs10 sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]">
                        Følg firma
                      </Button>
                    </div>
                    <Img
                      src="images/img_plus_gray_600.svg"
                      className="h-[39px] md:ml-[0] ml-[23px] md:mt-[0] mt-[111px] w-[auto]"
                      alt="plus"
                    />
                    <div className="flex md:flex-1 flex-row gap-[10px] items-center justify-between md:ml-[0] ml-[404px] md:mt-[0] mt-[90px] md:w-[100%] w-[32%]">
                      <Img
                        src="images/img_daredevil.png"
                        className="h-[59px] md:h-[auto] object-cover rounded-[15px] w-[auto]"
                        alt="daredevil"
                      />
                      <Img
                        src="images/img_daredevilfangir.png"
                        className="h-[59px] md:h-[auto] object-cover rounded-[15px] w-[auto]"
                        alt="daredevilfangir"
                      />
                      <Img
                        src="images/img_daredevilfangir_59x102.png"
                        className="h-[59px] md:h-[auto] object-cover rounded-[15px] w-[auto]"
                        alt="daredevilfangir One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_904 flex flex-col font-quicksand gap-[21px] h-[358px] md:hidden items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                <Text
                  className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Nylig lagt til
                </Text>
                <List
                  className="flex-col gap-[16px] grid items-center mb-[8px] pt-[66px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex relative w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-between my-[auto] w-[auto]">
                      <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_301 text-left w-[auto]"
                          variant="body6"
                        >
                          Mat planlegging innen ditt budsjett
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                          variant="body7"
                        >
                          matplan AS
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] ml-[-5px] my-[auto] w-[24px] z-[1]"
                      alt="overflowmenu"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_301 text-left w-[auto]"
                          variant="body6"
                        >
                          Finn billig drivstfoff nær deg
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                          variant="body7"
                        >
                          minfuel AS
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu One"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_301 text-left w-[auto]"
                          variant="body6"
                        >
                          Nett samling av bilde & malerie
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                          variant="body7"
                        >
                          Vestfold kunst
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[310px]">
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_301 text-left w-[auto]"
                          variant="body6"
                        >
                          Kjøp og salg av nft{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                          variant="body7"
                        >
                          Valiantlynx.com
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_overflowmenu.svg"
                      className="h-[24px] w-[24px]"
                      alt="overflowmenu Three"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[39px] items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                variant="body2"
              >
                Utførske de lokale selskaper
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[39px] sm:hidden items-center md:items-end justify-start md:w-[100%] w-[96%]">
                  <List
                    className="sm:flex-col flex-row gap-[39px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[34%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[53%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body4"
                        >
                          Category
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
                        <Img
                          src="images/img_note2.svg"
                          className="h-[24px] w-[24px]"
                          alt="noteTwo"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body4"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[440px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[65%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[80%]">
                        <Img
                          src="images/img_clock_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body4"
                        >
                          Location parameter
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[9px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
                        <Img
                          src="images/img_menu.svg"
                          className="h-[24px] w-[24px]"
                          alt="menu"
                        />
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body4"
                        >
                          Filter & Sort
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <List
                  className="flex-col font-roboto gap-[25px] grid items-center md:ml-[0] ml-[3px] mt-[35px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row md:gap-[20px] items-start justify-start pb-[37px] sm:pr-[20px] pr-[37px] w-[100%]">
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start pb-[12px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_breakingbadwa.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                          alt="breakingbadwa"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:ml-[0] ml-[64px] pb-[8px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_661614eminemw.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="661614eminemw"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[1%] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:ml-[0] ml-[64px] pb-[8px] rounded-[15px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_jfs0h41.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="jfS0hFortyOne"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[1%] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[24px] items-center justify-start sm:ml-[0] ml-[64px] pb-[18px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[154px] relative w-[100%]">
                        <Img
                          src="images/img_wp3891762aveng.png"
                          className="h-[154px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="wp3891762aveng"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="h-[66px] md:h-[69px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[3%] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-gray_600 text-left sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center sm:ml-[0] ml-[30px] sm:mt-[0] my-[124px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row md:gap-[20px] items-start justify-start pb-[24px] sm:pr-[20px] pr-[24px] w-[100%]">
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start pb-[10px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_breakingbadwa.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                          alt="breakingbadwa One"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[74px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:ml-[0] ml-[64px] pb-[8px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_661614eminemw.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="661614eminemw One"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus One One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              watch
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[20px] items-center justify-start sm:ml-[0] ml-[64px] pb-[8px] rounded-[15px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_jfs0h41.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="jfS0hFortyOne One"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Two One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[76px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              watch
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[24px] items-center justify-start sm:ml-[0] ml-[64px] pb-[11px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[20%]">
                      <div className="h-[154px] relative w-[100%]">
                        <Img
                          src="images/img_wp3891762aveng.png"
                          className="h-[154px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="wp3891762aveng One"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Three One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[73px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] sm:ml-[0] ml-[22px] sm:mt-[0] mt-[105px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 sm:flex-col flex-row md:gap-[20px] items-start justify-start pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[98%]">
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[9px] pb-[12px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[21%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_breakingbadwa.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                          alt="breakingbadwa Two"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[9px] sm:ml-[0] ml-[64px] pb-[10px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[21%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_661614eminemw.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="661614eminemw Two"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus One Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[74px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[9px] sm:ml-[0] ml-[64px] pb-[12px] rounded-[15px] shadow-bs2 sm:w-[100%] w-[21%]">
                      <div className="h-[158px] relative w-[100%]">
                        <Img
                          src="images/img_jfs0h41.png"
                          className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="jfS0hFortyOne Two"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Two Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[69px] h-[72px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-start mb-[9px] sm:ml-[0] ml-[64px] pb-[15px] rounded-[25px] shadow-bs2 sm:w-[100%] w-[21%]">
                      <div className="h-[154px] relative w-[100%]">
                        <Img
                          src="images/img_wp3891762aveng.png"
                          className="h-[154px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="wp3891762aveng Two"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <Text
                            className="bg-gray_400_90 font-medium h-[28px] mb-[7px] pl-[16px] pr-[8px] py-[2px] rounded-[14px] text-left text-white_A700 w-[80px]"
                            variant="body3"
                          >
                            Horten
                          </Text>
                          <Button className="bg-gray_600 flex h-[35px] items-center justify-center rounded-[10px] w-[35px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[31px]"
                              alt="plus Three Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left w-[auto]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="h-[69px] mt-[3px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-center justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                          <Text
                            className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                            variant="body6"
                          >
                            In publishing and graphic design, Lorem ipsum is a
                            placeholder text ....
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] sm:ml-[0] ml-[42px] sm:mt-[0] mt-[114px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </List>
                <Input
                  className="font-normal not-italic pb-[13px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[8px] text-[14px] text-center placeholder:text-gray_903 text-gray_903 tracking-[0.14px] w-[100%]"
                  wrapClassName="md:ml-[0] md:w-[100%] ml-[794px] mt-[37px] outline outline-[0.5px] outline-gray_903 rounded-[8px] sm:ml-[0] sm:w-[100%] w-[12%]"
                  name="Button"
                  placeholder="Load More"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlywebsitePage;
