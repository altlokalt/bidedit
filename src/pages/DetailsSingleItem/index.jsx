import React from "react";

import {
  Img,
  Text,
  Input,
  Button,
  List,
  Switch,
  Line,
  CheckBox,
  PagerIndicator,
} from "components";
import { CloseSVG } from "../../assets/images";

const DetailsSingleItemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="bg-black_904 flex flex-col font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-gray_905 border-b-[1px] border-gray_906 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
            <div className="header-row my-[4px]">
              <div className="flex flex-row items-center justify-center sm:pr-[20px] pr-[27px]">
                <Img
                  src="images/img_grid.svg"
                  className="h-[32px] rounded-[50%] w-[32px]"
                  alt="grid"
                />
                <Img
                  src="images/img_file.svg"
                  className="h-[19px] ml-[5px] w-[auto]"
                  alt="file"
                />
              </div>
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-start md:ml-[0] ml-[55px] w-[auto]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Marketplace
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Resources
                  </Text>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowdown One"
                />
              </div>
            </div>
            <div className="flex sm:flex-1 sm:hidden items-start justify-start md:ml-[0] ml-[222px] sm:w-[100%] w-[356px]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_601 text-gray_601 text-left w-[100%]"
                wrapClassName="bg-gray_906 flex gap-[8px] px-[16px] py-[8px] w-[100%]"
                name="InputNoLabel"
                placeholder="Collection, item or User"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[8px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#7c876e"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
            </div>
            <div className="flex flex-row gap-[16px] sm:hidden items-start justify-start md:ml-[0] ml-[21px] w-[auto]">
              <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                  <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                    <Img
                      src="images/img_minimize_3.svg"
                      className=""
                      alt="minimize"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                  <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                    <Img
                      src="images/img_bellnotification.svg"
                      className=""
                      alt="bellnotification"
                    />
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="bg-gray_906 flex items-center justify-center min-w-[140px] px-[16px] py-[8px] rounded-[20px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="mr-[4px] text-center"
                        alt="close"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[14px] text-left text-white_A700">
                      BNB Chain
                    </div>
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] text-center">
                  <Button className="bg-lime_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[20px] text-[14px] text-black_904 text-center">
                    Create NFT
                  </Button>
                </li>
              </ul>
              <Img
                src="images/img_arrowleft.svg"
                className="h-[40px] w-[40px]"
                alt="arrowleft"
              />
            </div>
          </div>
        </header>
        <div className="bg-black_902 flex font-ubuntu items-center justify-end max-w-[1568px] mt-[54px] mx-[auto] p-[32px] md:px-[20px] rounded-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[53px] items-start justify-start mt-[19px] md:w-[100%] w-[94%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[54%]">
              <div className="flex md:flex-col flex-row gap-[49px] items-start justify-start md:w-[100%] w-[95%]">
                <Img
                  src="images/img_menu_indigo_901.svg"
                  className="h-[19px] md:mt-[0] mt-[22px] w-[auto]"
                  alt="menu"
                />
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-indigo_901 text-indigo_901 text-left w-[100%]"
                  wrapClassName="bg-blue_50 flex md:w-[100%] pb-[12px] pl-[20px] pr-[35px] pt-[18px] rounded-[20px] sm:pr-[20px] sm:w-[100%] w-[90%]"
                  name="GroupEighty"
                  placeholder="Hotels UK"
                  prefix={
                    <Img
                      src="images/img_search_blue_600.svg"
                      className="cursor-pointer mr-[2px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#25396f"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[37px] w-[100%]">
                <div className="flex font-dmsans h-[40px] justify-end relative md:w-[100%] w-[16%]">
                  <Text
                    className="font-medium mb-[9px] ml-[15px] mt-[auto] text-bluegray_202 text-left w-[auto]"
                    variant="body6"
                  >
                    Any Price
                  </Text>
                  <div className="absolute border-[1px] border-bluegray_202 border-solid flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[12px] rounded-[5px] w-[100%]">
                    <Img
                      src="images/img_polygon1.svg"
                      className="h-[5px] md:ml-[0] ml-[83px] mt-[2px] w-[auto]"
                      alt="PolygonOne"
                    />
                    <Img
                      src="images/img_polygon1.svg"
                      className="h-[5px] md:ml-[0] ml-[83px] my-[2px] w-[auto]"
                      alt="PolygonTwo"
                    />
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row font-dmsans gap-[7px] grid grid-cols-2 md:ml-[0] ml-[8px] md:w-[100%] w-[35%]"
                  orientation="horizontal"
                >
                  <div className="bg-blue_50 flex items-center justify-start p-[11px] rounded-[5px] w-[100%]">
                    <div className="flex flex-row gap-[27px] items-center justify-between md:w-[100%] w-[94%]">
                      <Text
                        className="font-medium text-indigo_901 text-left w-[auto]"
                        variant="body7"
                      >
                        2-4 Beds
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Img
                          src="images/img_polygon3.svg"
                          className="h-[5px] w-[auto]"
                          alt="PolygonThree"
                        />
                        <Img
                          src="images/img_polygon3.svg"
                          className="h-[5px] mt-[2px] w-[auto]"
                          alt="PolygonFour"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                      <Text
                        className="border-[1px] border-gray_404 border-solid font-medium pb-[9px] pl-[15px] sm:pr-[20px] pr-[35px] pt-[12px] rounded-[5px] text-gray_404 text-left w-[auto]"
                        variant="body6"
                      >
                        All Types
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Img
                          src="images/img_polygon1_gray_405.svg"
                          className="h-[5px] w-[auto]"
                          alt="PolygonOne One"
                        />
                        <Img
                          src="images/img_polygon1_gray_405.svg"
                          className="h-[5px] mt-[2px] w-[auto]"
                          alt="PolygonTwo One"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <Img
                  src="images/img_settings_blue_600.svg"
                  className="h-[11px] md:ml-[0] ml-[37px] w-[auto]"
                  alt="settings"
                />
                <Text
                  className="font-normal font-ubuntu md:ml-[0] ml-[11px] not-italic text-blue_600 text-left w-[auto]"
                  variant="body4"
                >
                  More
                </Text>
                <Switch
                  onColor="#afb5c3"
                  offColor="#afb5c3"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={false}
                  className="md:ml-[0] ml-[77px] w-[6%]"
                />
                <Text
                  className="font-dmsans font-medium md:ml-[0] ml-[19px] text-indigo_901 text-left w-[auto]"
                  variant="body6"
                >
                  Best Hotels
                </Text>
                <Text
                  className="border-[1px] border-gray_404 border-solid flex font-dmsans font-medium h-[15px] items-center justify-center md:ml-[0] ml-[45px] rounded-[7px] text-center text-gray_404 w-[15px]"
                  variant="body9"
                >
                  i
                </Text>
              </div>
              <div className="flex flex-row font-dmsans sm:gap-[40px] items-center justify-between md:ml-[0] ml-[9px] mt-[44px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold text-black_902 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="md:text-[22px] sm:text-[20px] text-indigo_901 text-[24px] font-dmsans">
                    131 Results
                  </span>
                  <span className="md:text-[22px] sm:text-[20px] text-black_902 text-[24px] font-dmsans">
                    {" "}
                  </span>
                  <span className="md:text-[22px] sm:text-[20px] text-indigo_301 text-[24px] font-dmsans">
                    in Manchester, UK
                  </span>
                </Text>
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_902 text-left w-[auto]"
                      variant="body6"
                    >
                      <span className="text-bluegray_202 text-[14px] font-dmsans">
                        Sort by:
                      </span>
                      <span className="text-black_902 text-[14px] font-dmsans">
                        {" "}
                      </span>
                      <span className="text-indigo_901 text-[14px] font-dmsans">
                        Price
                      </span>
                    </Text>
                    <div className="flex flex-col items-start justify-start ml-[13px] w-[24%]">
                      <div className="flex flex-row gap-[29px] items-center justify-between md:w-[100%] w-[96%]">
                        <Img
                          src="images/img_polygon3_bluegray_202.svg"
                          className="h-[5px] w-[auto]"
                          alt="PolygonThree One"
                        />
                        <div className="bg-bluegray_202 h-[1px] my-[2px] w-[23%]"></div>
                      </div>
                      <div className="flex flex-row gap-[27px] items-start justify-between mt-[2px] w-[100%]">
                        <Img
                          src="images/img_polygon3_bluegray_202.svg"
                          className="h-[5px] w-[auto]"
                          alt="PolygonFour One"
                        />
                        <div className="bg-bluegray_202 h-[1px] mb-[4px] w-[30%]"></div>
                      </div>
                      <div className="bg-bluegray_202 h-[1px] md:ml-[0] ml-[37px] w-[22%]"></div>
                    </div>
                    <div className="bg-blue_600 h-[11px] mb-[6px] ml-[50px] mt-[2px] rotate-[90deg] w-[1%]"></div>
                    <Line className="bg-blue_600 h-[15px] mb-[4px] ml-[4px] w-[1px]" />
                    <div className="bg-blue_600 h-[11px] mb-[6px] ml-[4px] mt-[2px] rotate-[90deg] w-[1%]"></div>
                  </div>
                </div>
              </div>
              <List
                className="flex-col font-dmsans gap-[44px] grid items-center md:ml-[0] ml-[3px] mt-[41px] w-[96%]"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex md:h-[287px] h-[290px] justify-end relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[35px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="imagehere"
                      />
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[16px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-indigo_901 text-left w-[auto]"
                          variant="body3"
                        >
                          311 Street City
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                          variant="body6"
                        >
                          Manchester, UK
                        </Text>
                        <Text
                          className="font-bold mt-[9px] text-blue_600 text-left w-[auto]"
                          variant="body3"
                        >
                          $49,44/Night
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] mt-[22px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[19px] relative w-[16%]">
                          <Text
                            className="absolute font-bold right-[0] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            1
                          </Text>
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] left-[0] w-[auto]"
                            alt="Vector"
                          />
                        </div>
                        <div className="md:h-[16px] h-[20px] ml-[24px] relative w-[14%]">
                          <Text
                            className="absolute font-bold right-[0] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            2
                          </Text>
                          <Img
                            src="images/img_settings_gray_404.svg"
                            className="absolute bottom-[0] h-[16px] left-[0] w-[17px]"
                            alt="settings One"
                          />
                        </div>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] ml-[31px] mt-[4px] w-[auto]"
                          alt="signal"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] ml-[25px] w-[auto]"
                          alt="user"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:h-[287px] h-[290px] justify-end md:ml-[0] ml-[21px] relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[35px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="MaskGroup"
                      />
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[16px] text-indigo_901 text-left w-[auto]"
                        variant="body3"
                      >
                        Last Drop Village
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body6"
                      >
                        Manchester, UK
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[9px] text-blue_600 text-left w-[auto]"
                        variant="body3"
                      >
                        $61,13/Night
                      </Text>
                      <div className="flex flex-row items-start justify-end ml-[auto] mt-[22px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[19px] relative w-[14%]">
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[auto]"
                            alt="Vector One"
                          />
                          <Text
                            className="absolute font-bold left-[9%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            3
                          </Text>
                        </div>
                        <Img
                          src="images/img_settings_gray_404.svg"
                          className="h-[16px] ml-[28px] mt-[4px] w-[17px]"
                          alt="settings One"
                        />
                        <Text
                          className="font-bold ml-[10px] text-gray_404 text-left w-[auto]"
                          variant="body7"
                        >
                          2
                        </Text>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] ml-[20px] mt-[4px] w-[auto]"
                          alt="signal One"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] ml-[25px] w-[auto]"
                          alt="user One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:h-[287px] h-[290px] justify-end md:ml-[0] ml-[53px] relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[35px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="MaskGroup One"
                      />
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[14px] text-indigo_901 text-left w-[auto]"
                        variant="body3"
                      >
                        Wetern House Hotel
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body6"
                      >
                        Manchester, UK
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[9px] text-blue_600 text-left w-[auto]"
                        variant="body3"
                      >
                        $25,64/Night
                      </Text>
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[15px] mt-[22px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[19px] relative w-[14%]">
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[auto]"
                            alt="Vector Two"
                          />
                          <Text
                            className="absolute font-bold right-[9%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            5
                          </Text>
                        </div>
                        <div className="md:h-[16px] h-[20px] relative w-[10%]">
                          <Img
                            src="images/img_settings_gray_404.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[17px]"
                            alt="settings Two"
                          />
                          <Text
                            className="absolute font-bold right-[12%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            3
                          </Text>
                        </div>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] mt-[4px] w-[auto]"
                          alt="signal Two"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] w-[auto]"
                          alt="user Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex md:h-[288px] h-[292px] justify-end relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[36px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="MaskGroup One"
                      />
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[16px] text-indigo_901 text-left w-[auto]"
                        variant="body3"
                      >
                        Luxury Hotel
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body6"
                      >
                        Manchester, UK
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[9px] text-blue_600 text-left w-[auto]"
                        variant="body3"
                      >
                        $79,44/Night
                      </Text>
                      <div className="flex flex-row items-start justify-start md:ml-[0] ml-[5px] mt-[21px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[21px] relative w-[18%]">
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] left-[0] w-[auto]"
                            alt="Vector One"
                          />
                          <Text
                            className="absolute font-bold right-[0] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            2
                          </Text>
                        </div>
                        <div className="md:h-[16px] h-[22px] ml-[22px] relative w-[23px]">
                          <Img
                            src="images/img_settings_gray_404.svg"
                            className="absolute bottom-[0] h-[16px] left-[0] w-[17px]"
                            alt="settings Two"
                          />
                          <Text
                            className="absolute font-bold right-[0] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            2
                          </Text>
                        </div>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] ml-[31px] mt-[6px] w-[auto]"
                          alt="signal One"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] ml-[25px] mt-[3px] w-[auto]"
                          alt="user One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:h-[288px] h-[292px] justify-end md:ml-[0] ml-[21px] relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[36px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="MaskGroup One One"
                      />
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[14px] text-indigo_901 text-left w-[auto]"
                        variant="body3"
                      >
                        Saunton Sands
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body6"
                      >
                        Manchester, UK
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[9px] text-blue_600 text-left w-[auto]"
                        variant="body3"
                      >
                        $62,91/Night
                      </Text>
                      <div className="flex flex-row items-start justify-end ml-[auto] mt-[21px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[21px] relative w-[14%]">
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[auto]"
                            alt="Vector One One"
                          />
                          <Text
                            className="absolute font-bold left-[9%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            1
                          </Text>
                        </div>
                        <Img
                          src="images/img_settings_gray_404.svg"
                          className="h-[16px] ml-[28px] mt-[6px] w-[17px]"
                          alt="settings One One"
                        />
                        <Text
                          className="font-bold ml-[10px] text-gray_404 text-left w-[auto]"
                          variant="body7"
                        >
                          1
                        </Text>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] ml-[23px] mt-[6px] w-[auto]"
                          alt="signal One One"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] ml-[25px] mt-[3px] w-[auto]"
                          alt="user One One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:h-[288px] h-[292px] justify-end md:ml-[0] ml-[53px] relative md:w-[100%] w-[30%]">
                    <Line className="bg-indigo_50 h-[1px] mb-[36px] mt-[auto] mx-[auto] w-[98%]" />
                    <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_imagehere.svg"
                        className="h-[155px] w-[auto]"
                        alt="MaskGroup Two"
                      />
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[16px] text-indigo_901 text-left w-[auto]"
                        variant="body3"
                      >
                        Talgarth Resort
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body6"
                      >
                        Manchester, UK
                      </Text>
                      <Text
                        className="font-bold md:ml-[0] ml-[3px] mt-[9px] text-blue_600 text-left w-[auto]"
                        variant="body3"
                      >
                        $42,99/Night
                      </Text>
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[15px] mt-[21px] md:w-[100%] w-[83%]">
                        <div className="md:h-[16px] h-[21px] relative w-[14%]">
                          <Img
                            src="images/img_vector.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[auto]"
                            alt="Vector Two One"
                          />
                          <Text
                            className="absolute font-bold right-[9%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            4
                          </Text>
                        </div>
                        <div className="md:h-[16px] h-[22px] relative w-[10%]">
                          <Img
                            src="images/img_settings_gray_404.svg"
                            className="absolute bottom-[0] h-[16px] inset-x-[0] mx-[auto] w-[17px]"
                            alt="settings Two One"
                          />
                          <Text
                            className="absolute font-bold right-[18%] text-gray_404 text-left top-[0] w-[auto]"
                            variant="body7"
                          >
                            2
                          </Text>
                        </div>
                        <Img
                          src="images/img_signal_gray_404.svg"
                          className="h-[16px] mt-[6px] w-[auto]"
                          alt="signal Two One"
                        />
                        <Img
                          src="images/img_user_gray_404.svg"
                          className="h-[18px] mt-[3px] w-[auto]"
                          alt="user Two One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="font-dmsans h-[927px] md:mt-[0] mt-[21px] relative md:w-[100%] w-[43%]">
              <div className="absolute h-[927px] sm:hidden inset-[0] justify-center m-[auto] sm:w-[100%] w-[99%]">
                <Img
                  src="images/img_snazzyimage3.png"
                  className="h-[927px] sm:hidden m-[auto] object-cover rounded-[20px] w-[100%]"
                  alt="snazzyimageThree"
                />
                <div className="absolute flex flex-col gap-[34px] items-center justify-start right-[1%] top-[3%] w-[89%]">
                  <div className="sm:gap-[20px] gap-[340px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[98%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_600 flex items-center justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            $35,41
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_600.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_600 flex items-start justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[8px] text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            $31,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_600.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb One"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_600 flex items-start justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[8px] text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            $51,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_600.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb Two"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_600 flex items-center justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            $14,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_600.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb Three"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[99%]">
                    <div className="flex flex-col items-center justify-start sm:mt-[0] mt-[233px] sm:w-[100%] w-[17%]">
                      <div className="flex flex-col relative w-[100%]">
                        <div className="bg-blue_600 flex items-center justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            $131,62
                          </Text>
                        </div>
                        <Img
                          src="images/img_lightbulb_blue_600.svg"
                          className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                          alt="lightbulb Four"
                        />
                      </div>
                      <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                        <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[160px] md:gap-[40px] justify-start sm:w-[100%] w-[71%]">
                      <div className="flex flex-col justify-start mr-[67px] md:w-[100%] w-[82%]">
                        <div className="md:h-[117px] h-[127px] relative w-[100%]">
                          <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-start mx-[auto] p-[7px] rounded-[10px] shadow-bs9 top-[0] w-[99%]">
                            <div className="flex flex-row items-start justify-between md:w-[100%] w-[97%]">
                              <Img
                                src="images/img_imagehere.svg"
                                className="h-[102px] w-[102px]"
                                alt="MaskGroup Two"
                              />
                              <div className="flex flex-col gap-[6px] items-start justify-start mt-[14px] w-[auto]">
                                <Text
                                  className="font-normal not-italic text-indigo_301 text-left w-[auto]"
                                  variant="body6"
                                >
                                  311 Street City
                                </Text>
                                <Text
                                  className="font-bold text-blue_600 text-left w-[auto]"
                                  variant="body3"
                                >
                                  $49,44/Night
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_favorite_white_a700.svg"
                            className="absolute bottom-[0] h-[22px] right-[35%] rounded-[3px] w-[22px]"
                            alt="favorite"
                          />
                          <div className="absolute bottom-[24%] flex flex-row items-start justify-between right-[0] w-[45%]">
                            <div className="md:h-[14px] h-[15px] relative w-[16%]">
                              <Text
                                className="absolute right-[0] text-gray_404 text-left top-[0] w-[auto]"
                                variant="body8"
                              >
                                3
                              </Text>
                              <Img
                                src="images/img_vector.svg"
                                className="absolute bottom-[0] h-[11px] left-[0] w-[auto]"
                                alt="Vector Two"
                              />
                            </div>
                            <div className="md:h-[14px] h-[16px] relative w-[15px]">
                              <Text
                                className="absolute right-[0] text-gray_404 text-left top-[0] w-[auto]"
                                variant="body8"
                              >
                                2
                              </Text>
                              <Img
                                src="images/img_settings_gray_404.svg"
                                className="absolute bottom-[0] h-[11px] left-[0] w-[12px]"
                                alt="settings Three"
                              />
                            </div>
                            <Img
                              src="images/img_signal_gray_404.svg"
                              className="h-[11px] mt-[4px] w-[auto]"
                              alt="signal Two"
                            />
                            <Img
                              src="images/img_user_gray_404.svg"
                              className="h-[13px] mt-[2px] w-[auto]"
                              alt="user Two"
                            />
                          </div>
                        </div>
                        <div className="bg-white_A700 flex h-[13px] items-center justify-start md:ml-[0] ml-[171px] mr-[108px] p-[2px] rounded-[6px] w-[13px]">
                          <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[71px] items-start justify-end ml-[auto] md:w-[100%] w-[55%]">
                        <div className="flex flex-col items-center justify-start w-[43%]">
                          <div className="flex flex-col relative w-[100%]">
                            <div className="bg-blue_600 flex items-center justify-end mx-[auto] p-[10px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                $11,62
                              </Text>
                            </div>
                            <Img
                              src="images/img_lightbulb_blue_600.svg"
                              className="h-[15px] mt-[-7px] mx-[auto] rounded-[2px] w-[15px] z-[1]"
                              alt="lightbulb Five"
                            />
                          </div>
                          <div className="bg-white_A700 flex h-[13px] items-center justify-start p-[2px] rounded-[6px] w-[13px]">
                            <div className="bg-blue_600 h-[9px] rounded-[4px] w-[9px]"></div>
                          </div>
                        </div>
                        <Img
                          src="images/img_cart.svg"
                          className="h-[80px] mt-[59px] w-[auto]"
                          alt="cart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_videocamera.svg"
                className="absolute bottom-[19%] h-[40px] sm:hidden right-[0] w-[auto]"
                alt="videocamera"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat h-[748px] md:h-[auto] items-start justify-start max-w-[1520px] mt-[107px] mx-[auto] md:px-[20px] w-[100%]">
          <Text
            className="font-bold text-left text-white_A700 w-[auto]"
            as="h6"
            variant="h6"
          >
            More from Abstract
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
              <List
                className="flex sm:flex-col flex-row gap-[40px] grid-cols-3 w-[75%]"
                orientation="horizontal"
              >
                <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Abstract"
                          name="PolychainMonsters"
                        ></CheckBox>
                        <Img
                          src="images/img_close_amber_a408.svg"
                          className="h-[24px] w-[24px]"
                          alt="close"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Giraffe
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_grid_gray_601.svg"
                            className="h-[16px] w-[16px]"
                            alt="grid One"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_908 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Current bid
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0.5 BUSD
                          </Text>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[24px] w-[24px]"
                            alt="lightbulb Six"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Ends in
                        </Text>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            01 : 29 : 35
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Abstract"
                          name="PolychainMonsters One"
                        ></CheckBox>
                        <Img
                          src="images/img_close_amber_a408.svg"
                          className="h-[24px] w-[24px]"
                          alt="close One"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Puppangy
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_grid_gray_601.svg"
                            className="h-[16px] w-[16px]"
                            alt="grid Two"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_908 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Current bid
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0.07 BUSD
                          </Text>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[24px] w-[24px]"
                            alt="lightbulb Seven"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Ends in
                        </Text>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            01 : 29 : 35
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-gray_601 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Abstract"
                          name="PolychainMonsters Two"
                        ></CheckBox>
                        <Img
                          src="images/img_close_amber_a408.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Two"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Platiphac
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_grid_gray_601.svg"
                            className="h-[16px] w-[16px]"
                            alt="grid Three"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-gray_908 h-[1px] w-[100%]" />
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Current bid
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0.83 BUSD
                          </Text>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[24px] w-[24px]"
                            alt="lightbulb Eight"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Ends in
                        </Text>
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            01 : 29 : 35
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                      <CheckBox
                        className="font-normal not-italic text-[14px] text-gray_601 text-left"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        label="Abstract"
                        name="PolychainMonsters Three"
                      ></CheckBox>
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Three"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Neo Unigiraffe
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_908 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      0.15 BUSD
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
              View More
            </Button>
          </div>
        </div>
        <div className="flex font-montserrat items-start mt-[176px] sm:px-[20px] md:px-[40px] px-[80px] w-[100%]">
          <div className="bg-black_902 flex items-center justify-start pb-[24px] md:px-[20px] md:w-[100%] w-[96%]">
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col justify-start md:w-[100%] w-[70%]">
                <div className="bg-gray_905 flex md:flex-col flex-row md:gap-[20px] sm:hidden items-start justify-start ml-[auto] p-[4px] md:w-[100%] w-[610px]">
                  <List
                    className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[75%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Items
                      </Text>
                    </div>
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-gray_801 text-left w-[auto]"
                        variant="body4"
                      >
                        Offers
                      </Text>
                    </div>
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Bids
                      </Text>
                    </div>
                  </List>
                  <Button className="bg-white_A700 cursor-pointer font-semibold px-[16px] py-[8px] text-[16px] text-center text-gray_906 w-[100%]">
                    Info
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row font-lato md:gap-[20px] items-start justify-start mr-[15px] mt-[58px] md:w-[100%] w-[99%]">
                  <Img
                    src="images/img_group526.svg"
                    className="h-[48px] md:mt-[0] mt-[13px] w-[auto]"
                    alt="Group526"
                  />
                  <div className="bg-gradient  flex items-center justify-start md:ml-[0] ml-[139px] p-[10px] rounded-[20px] md:w-[100%] w-[60%]">
                    <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                      <div className="bg-indigo_A703 flex flex-col md:gap-[40px] gap-[89px] items-center justify-end pt-[104px] rounded-[20px] sm:w-[100%] w-[40%]">
                        <Img
                          src="images/img_volume_white_a700.svg"
                          className="h-[32px] w-[32px]"
                          alt="volume"
                        />
                        <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[81%]">
                            <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                              <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                                <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                  <Img
                                    src="images/img_volume_white_a700.svg"
                                    className="h-[32px]"
                                    alt="volume One"
                                  />
                                </Button>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                                  variant="body7"
                                >
                                  Creator
                                </Text>
                                <Text
                                  className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                                  variant="body6"
                                >
                                  Alexander Lux
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[57%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Blue and Coral Abstract
                        </Text>
                        <div className="bg-bluegray_900_bf flex items-center justify-start mt-[19px] p-[14px] rounded-[20px] w-[100%]">
                          <div className="flex flex-row items-start justify-between mb-[3px] md:w-[100%] w-[97%]">
                            <div className="flex flex-col items-start justify-start mt-[5px] w-[auto]">
                              <Text
                                className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                                variant="body7"
                              >
                                Current Bid
                              </Text>
                              <Text
                                className="font-bold mt-[11px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                1.69 ETH
                              </Text>
                              <Text
                                className="font-normal mt-[11px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                $3900,67
                              </Text>
                            </div>
                            <Line className="bg-white_A700_19 h-[82px] w-[1px]" />
                            <div className="flex items-center justify-start mt-[6px] w-[auto]">
                              <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                                  variant="body7"
                                >
                                  Auction Ending In
                                </Text>
                                <div className="flex flex-row gap-[14px] items-start justify-between w-[100%]">
                                  <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                      variant="body3"
                                    >
                                      00
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                      variant="body6"
                                    >
                                      Hrs
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                    variant="body3"
                                  >
                                    :
                                  </Text>
                                  <div className="flex flex-col gap-[10px] items-center justify-start w-[auto]">
                                    <Text
                                      className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                      variant="body3"
                                    >
                                      56
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                      variant="body6"
                                    >
                                      Mins
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                    variant="body3"
                                  >
                                    :
                                  </Text>
                                  <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                                    <Text
                                      className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                      variant="body3"
                                    >
                                      08
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                      variant="body6"
                                    >
                                      Secs
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[20px] items-center justify-between mt-[20px] w-[100%]">
                          <Button className="border-[1px] border-solid border-white_A700 cursor-pointer font-bold leading-[normal] min-w-[147px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                            View Artwork
                          </Button>
                          <Button className="bg-indigo_A703 cursor-pointer font-bold leading-[normal] min-w-[147px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient  flex items-center justify-start md:ml-[0] ml-[20px] p-[10px] rounded-[20px] md:w-[100%] w-[25%]">
                    <div className="bg-indigo_A703 flex flex-col md:gap-[40px] gap-[89px] items-center justify-end pt-[104px] rounded-[20px] w-[100%]">
                      <Img
                        src="images/img_volume_white_a700.svg"
                        className="h-[32px] w-[32px]"
                        alt="volume Two"
                      />
                      <div className="bg-white_A700_3f flex items-start justify-start p-[10px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                        <div className="flex items-center justify-start md:w-[100%] w-[76%]">
                          <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                            <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                              <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                <Img
                                  src="images/img_volume_white_a700.svg"
                                  className="h-[32px]"
                                  alt="volume Three"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                                variant="body7"
                              >
                                Creator
                              </Text>
                              <Text
                                className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Robert Khan
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <PagerIndicator
                  className="flex h-[10px] md:ml-[0] ml-[540px] mt-[25px] w-[50px]"
                  count={3}
                  activeCss="inline-block cursor-pointer rounded-[50%] h-[10px] bg-indigo_A703 w-[10px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_33 w-[8px]"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[6.00px] sm:ml-[0]"
                />
                <div className="flex flex-col font-lato gap-[25px] items-center justify-start md:ml-[0] ml-[144px] mt-[25px] md:w-[100%] w-[85%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Hot Bids
                    </Text>
                    <div className="flex flex-row gap-[25px] items-center justify-between w-[27%]">
                      <div className="bg-gray_909 flex h-[50px] items-center justify-start p-[13px] rounded-[20px] w-[50px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_eye_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="eye"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[34%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          01/25
                        </Text>
                        <div className="h-[5px] mt-[4px] overflow-hidden relative w-[100%]">
                          <div className="w-full h-full absolute bg-indigo_A703 rounded-[2px]"></div>
                          <div
                            className="h-full absolute bg-indigo_A703  rounded-[2px]"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="bg-gray_909 flex h-[50px] items-center justify-start p-[13px] rounded-[20px] w-[50px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_menu_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="menu One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex flex-row gap-[20px] grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-gradient  flex flex-1 flex-col gap-[10px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                      <div className="bg-indigo_A703 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[23px] pr-[35px] pt-[18px] sm:px-[20px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[95px]"
                              variant="body6"
                            >
                              {" "}
                              Sport
                            </Text>
                            <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[10px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_star.svg"
                                className="h-[24px]"
                                alt="star"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_volume_white_a700.svg"
                            className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                            alt="volume Four"
                          />
                          <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              02h
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              25m
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              04s
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          Blue and White Abstract
                        </Text>
                        <div className="flex items-center justify-start mt-[9px] md:w-[100%] w-[63%]">
                          <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                            <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                              <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                <Img
                                  src="images/img_volume_white_a700.svg"
                                  className="h-[32px]"
                                  alt="volume One"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                                variant="body7"
                              >
                                Creator
                              </Text>
                              <Text
                                className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Josh Huang
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start mt-[15px] w-[100%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body7"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-bold text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                1.25 ETH
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                $2913.41
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient  flex flex-1 flex-col gap-[11px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                      <div className="bg-indigo_A703 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="bg-white_A700_3f font-bold h-[50px] pl-[20px] sm:pr-[20px] pr-[32px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[75px]"
                              variant="body6"
                            >
                              {" "}
                              Art
                            </Text>
                            <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[10px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_star_orange_201.svg"
                                className="h-[24px]"
                                alt="star One"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_volume_white_a700.svg"
                            className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                            alt="volume Five"
                          />
                          <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              03h
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              24m
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              03s
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          Blue and Orange Abstract
                        </Text>
                        <div className="flex items-center justify-start mt-[8px] md:w-[100%] w-[65%]">
                          <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                            <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                              <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                <Img
                                  src="images/img_volume_white_a700.svg"
                                  className="h-[32px]"
                                  alt="volume One One"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                                variant="body7"
                              >
                                Creator
                              </Text>
                              <Text
                                className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Charles Will
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start mt-[15px] w-[100%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body7"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-bold text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                2.49 ETH
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                $5803.52
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient  flex flex-1 flex-col gap-[10px] items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                      <div className="bg-indigo_A703 flex items-center justify-start p-[10px] rounded-[20px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mb-[2px] w-[100%]">
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Text
                              className="bg-white_A700_3f font-bold h-[50px] pb-[14px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[18px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[109px]"
                              variant="body6"
                            >
                              Gaming
                            </Text>
                            <Button className="bg-white_A700_3f flex h-[50px] items-center justify-center p-[9px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_star.svg"
                                className="h-[24px]"
                                alt="star Two"
                              />
                            </Button>
                          </div>
                          <Img
                            src="images/img_volume_white_a700.svg"
                            className="h-[32px] md:ml-[0] ml-[99px] mt-[18px] w-[32px]"
                            alt="volume Six"
                          />
                          <div className="flex flex-row items-start justify-start mt-[48px] md:w-[100%] w-[58%]">
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              01h
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              15m
                            </Button>
                            <Text
                              className="font-bold ml-[5px] mt-[4px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body9"
                            >
                              :
                            </Text>
                            <Button className="bg-white_A700_3f cursor-pointer font-bold min-w-[35px] ml-[5px] py-[4px] rounded-[10px] text-[10px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                              09s
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mb-[9px] md:w-[100%] w-[92%]">
                        <Text
                          className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          Blue Water Abstract
                        </Text>
                        <div className="flex items-center justify-start mt-[9px] md:w-[100%] w-[61%]">
                          <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                            <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                              <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                                <Img
                                  src="images/img_volume_white_a700.svg"
                                  className="h-[32px]"
                                  alt="volume One Two"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                                variant="body7"
                              >
                                Creator
                              </Text>
                              <Text
                                className="font-bold text-left text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Bright Win
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-start mt-[15px] w-[100%]">
                          <div className="flex flex-col gap-[11px] items-start justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body7"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row items-start justify-between w-[100%]">
                              <Text
                                className="font-bold text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                0.83 ETH
                              </Text>
                              <Text
                                className="font-normal mt-[3px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                $1934.51
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="bg-gray_910 flex md:flex-1 font-lato sm:hidden items-center justify-end outline outline-[1px] outline-gray_804 p-[31px] sm:px-[20px] md:w-[100%] w-[30%]">
                <div className="flex flex-col gap-[58px] justify-start mt-[28px] md:w-[100%] w-[94%]">
                  <Img
                    src="images/img_volume_white_a700.svg"
                    className="h-[32px] md:ml-[0] ml-[165px] w-[32px]"
                    alt="volume Seven"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gradient  flex flex-row gap-[25px] items-center justify-between p-[10px] rounded-[20px] w-[100%]">
                      <div className="bg-indigo_A703 flex flex-col md:gap-[40px] gap-[84px] items-center justify-start p-[10px] rounded-[20px] w-[auto]">
                        <Text
                          className="bg-white_A700_3f font-bold h-[50px] pl-[19px] sm:pr-[20px] pr-[35px] py-[16px] rounded-[20px] text-left text-white_A700 tracking-[0.50px] w-[79px]"
                          variant="body6"
                        >
                          Art
                        </Text>
                        <Img
                          src="images/img_volume_white_a700.svg"
                          className="h-[32px] mb-[119px] w-[32px]"
                          alt="volume Eight"
                        />
                      </div>
                      <Img
                        src="images/img_group476.svg"
                        className="h-[190px] mr-[14px] w-[auto]"
                        alt="Group476"
                      />
                    </div>
                    <Text
                      className="font-bold mt-[33px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Blue and Orange Abstract
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[36px] grid grid-cols-2 mt-[26px] w-[96%]"
                      orientation="horizontal"
                    >
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                          <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                            <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_volume_white_a700.svg"
                                className="h-[32px]"
                                alt="volume Nine"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body7"
                            >
                              Creator
                            </Text>
                            <Text
                              className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body6"
                            >
                              Charles Will
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                          <div className="bg-gray_803 flex h-[50px] items-center justify-start rounded-[20px] w-[50px]">
                            <Button className="bg-indigo_A703 flex h-[50px] items-center justify-center p-[8px] rounded-[20px] w-[50px]">
                              <Img
                                src="images/img_volume_white_a700.svg"
                                className="h-[32px]"
                                alt="volume Ten"
                              />
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_7f tracking-[0.50px] w-[auto]"
                              variant="body7"
                            >
                              Owner
                            </Text>
                            <Text
                              className="font-bold mt-[4px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body6"
                            >
                              Leonel Lee
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-row items-center justify-between mt-[35px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                          variant="body7"
                        >
                          Current Bid
                        </Text>
                        <Text
                          className="font-bold mt-[11px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                          variant="body3"
                        >
                          2.49 ETH
                        </Text>
                        <Text
                          className="font-normal mt-[11px] not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                          variant="body6"
                        >
                          $5803.52
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[46%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-justify text-white_A700_7f tracking-[0.50px] w-[auto]"
                            variant="body7"
                          >
                            Auction Ending In
                          </Text>
                          <div className="flex flex-row gap-[14px] items-start justify-between w-[100%]">
                            <div className="flex flex-col gap-[11px] items-start justify-start w-[auto]">
                              <Text
                                className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                03
                              </Text>
                              <Text
                                className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Hrs
                              </Text>
                            </div>
                            <Text
                              className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body3"
                            >
                              :
                            </Text>
                            <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                              <Text
                                className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                24
                              </Text>
                              <Text
                                className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Mins
                              </Text>
                            </div>
                            <Text
                              className="font-bold mt-[2px] text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body3"
                            >
                              :
                            </Text>
                            <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                              <Text
                                className="font-bold h-[22px] text-indigo_A703 text-justify tracking-[0.50px] w-[auto]"
                                variant="body3"
                              >
                                03
                              </Text>
                              <Text
                                className="font-normal not-italic text-justify text-white_A700 tracking-[0.50px] w-[auto]"
                                variant="body6"
                              >
                                Secs
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[26.00px] mt-[33px] not-italic text-justify text-white_A700_b2 tracking-[0.50px] w-[100%]"
                      variant="body6"
                    >
                      Blue and Pink Abstract is one of the abstract objects
                      created by Charles Will and owned by Lionel Lee. This
                      abstract belongs to the art category, and this abstract
                      was published on August 12, 2020.
                    </Text>
                    <div className="flex flex-row gap-[20px] items-center justify-between mt-[30px] w-[100%]">
                      <Button className="cursor-pointer font-bold leading-[normal] min-w-[157px] outline outline-[1px] outline-white_A700 py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        View Artwork
                      </Button>
                      <Button className="bg-indigo_A703 cursor-pointer font-bold leading-[normal] min-w-[157px] py-[16px] rounded-[20px] text-[14px] text-center text-white_A700 tracking-[0.50px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[137px] mx-[auto] md:px-[20px] w-[100%]">
          <Text
            className="font-bold text-left text-white_A700 w-[auto]"
            as="h6"
            variant="h6"
          >
            More from the seller
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
            <List
              className="flex sm:flex-col flex-row gap-[40px] grid-cols-4 justify-start w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Doodle Apes{" "}
                        </Text>
                      </div>
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Four"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Wheel
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_908 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      0.75 BUSD
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Doodle Apes{" "}
                        </Text>
                      </div>
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Five"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Green car
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_908 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      0.75 BUSD
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Doodle Apes{" "}
                        </Text>
                      </div>
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Six"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Car-Free City
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_908 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      0.75 BUSD
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          Doodle Apes{" "}
                        </Text>
                      </div>
                      <Img
                        src="images/img_close_amber_a408.svg"
                        className="h-[24px] w-[24px]"
                        alt="close Seven"
                      />
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        Gold car
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-gray_908 h-[1px] w-[100%]" />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body7"
                    >
                      Price
                    </Text>
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      0.75 BUSD
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
              View More
            </Button>
          </div>
        </div>
        <footer className="bg-black_904 flex font-montserrat sm:hidden items-center justify-center mt-[371px] md:px-[20px] w-[100%]">
          <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
            <div className="flex flex-col items-center justify-center w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                  <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                    <Img
                      src="images/img_grid.svg"
                      className="h-[58px] rounded-[50%] w-[58px]"
                      alt="grid Four"
                    />
                    <Img
                      src="images/img_labs.svg"
                      className="h-[35px] w-[auto]"
                      alt="LABS"
                    />
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-center text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Join LABS community
                    </Text>
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_twitter.svg"
                        className="h-[40px] w-[40px]"
                        alt="icontwitter"
                      />
                      <Img
                        src="images/img_send_white_a700.svg"
                        className="h-[40px] w-[40px]"
                        alt="send"
                      />
                      <Img
                        src="images/img_rewind.svg"
                        className="h-[40px] w-[40px]"
                        alt="rewind"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[275px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Marketplace
                  </Text>
                  <ul className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-gray_601 text-left"
                        variant="body3"
                      >
                        Home
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                        href="javascript:"
                      >
                        Explore
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[18px] text-gray_601 text-left"
                        href="javascript:"
                      >
                        Activities
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[259px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Resources
                  </Text>
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body3"
                    >
                      Help Center
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body3"
                    >
                      FAQ
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[281px] w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Links
                  </Text>
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body3"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body3"
                    >
                      Terms of Service
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-gray_801 h-[1px] mt-[160px] w-[100%]" />
              <Text
                className="font-normal md:ml-[0] ml-[3px] mt-[27px] not-italic text-gray_601 text-left w-[auto]"
                variant="body3"
              >
                © LABS, Inc. All rights reserved.
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DetailsSingleItemPage;
