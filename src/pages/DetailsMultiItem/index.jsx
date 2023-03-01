import React from "react";

import { Img, Text, Input, Button, List, Line, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";

const DetailsMultiItemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="bg-black_904 flex font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1680px] mx-[auto] md:px-[20px] w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="bg-gray_905 border-b-[1px] border-gray_906 border-solid flex flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
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
              <div className="flex flex-row sm:hidden items-start justify-start ml-[55px] w-[auto]">
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
              <div className="flex sm:flex-1 sm:hidden items-start justify-start ml-[222px] sm:w-[100%] w-[356px]">
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
              <div className="flex flex-row gap-[16px] sm:hidden items-start justify-start ml-[21px] w-[auto]">
                <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[10%]">
                    <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px]">
                      <Img
                        src="images/img_minimize_red_a700.svg"
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
          <div className="flex md:flex-col flex-row font-plusjakartasans md:gap-[40px] items-center justify-between mt-[47px] md:w-[100%] w-[95%]">
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[64%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[97%]">
                <div className="flex flex-col gap-[10px] items-start justify-start md:mt-[0] mt-[32px] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 tracking-[-0.78px] w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Hello, Andri
                  </Text>
                  <Text
                    className="font-light text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    39.506M+ items in NFT market Place!
                  </Text>
                </div>
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_401 text-gray_401 text-left tracking-[-0.42px] w-[100%]"
                  wrapClassName="bg-gray_102 flex mb-[36px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[127px] mt-[9px] pb-[13px] pl-[25px] pr-[35px] pt-[18px] rounded-[12px] sm:px-[20px] sm:w-[100%] w-[33%]"
                  name="Group427320321"
                  placeholder="Search something..."
                  prefix={
                    <Img
                      src="images/img_search_gray_401.svg"
                      className="cursor-pointer mr-[15px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#aeaeae"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Button className="border-[1px] border-bluegray_50 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[104px] p-[13px] rounded-[50%] w-[50px]">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[24px]"
                    alt="settings"
                  />
                </Button>
                <div className="border-[1px] border-bluegray_50 border-solid flex h-[50px] items-center justify-start md:ml-[0] ml-[66px] md:mt-[0] mt-[6px] p-[13px] rounded-[50%] w-[50px]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[24px] items-end justify-start p-[2px] w-[24px]"
                    style={{ backgroundImage: "url('images/img_group48.svg')" }}
                  >
                    <div className="bg-indigo_A702 h-[6px] mb-[14px] mr-[2px] outline outline-[2px] outline-bluegray_50 rounded-[50%] w-[6px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[30px] h-[391px] md:h-[auto] items-center justify-center max-w-[980px] mt-[79px] w-[100%]">
                <div className="bg-blue_100 flex md:flex-1 items-center justify-end p-[20px] rounded-[8px] md:w-[100%] w-[43%]">
                  <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700_99 cursor-pointer font-bold leading-[normal] sm:min-w-[100%] min-w-[380px] mt-[239px] py-[20px] rounded-[4px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                    5h : 40m : 30s
                  </Button>
                </div>
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[46%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 tracking-[-0.52px] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Purple Mannequin 3d Art Design
                    </Text>
                    <div className="bg-gray_51 flex flex-row items-center justify-between mt-[21px] p-[10px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start ml-[10px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Current Bid
                        </Text>
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.36px] w-[auto]"
                          variant="body3"
                        >
                          0.986 ETH
                        </Text>
                      </div>
                      <Button className="bg-blue_A400 cursor-pointer font-semibold leading-[normal] min-w-[141px] py-[19px] rounded-[4px] text-[18px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[20px] items-center justify-start mt-[25px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                        <div className="bg-cyan_300 h-[12px] rounded-[50%] w-[12px]"></div>
                        <Text
                          className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Date
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          02 - 03 - 2022
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                        <div className="bg-blue_A201 h-[12px] rounded-[50%] w-[12px]"></div>
                        <Text
                          className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Metadata
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Frozen
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                        <div className="bg-red_200 h-[12px] rounded-[50%] w-[12px]"></div>
                        <Text
                          className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Blockchain
                        </Text>
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                          variant="body6"
                        >
                          Ethereum
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[40%]">
                        <div className="bg-bluegray_102 h-[48px] rounded-[50%] w-[48px]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            Nadim Amanda
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            Creator
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[34%]">
                        <Button className="bg-blue_A400 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                          <Img
                            src="images/img_mail.svg"
                            className="h-[24px]"
                            alt="mail"
                          />
                        </Button>
                        <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            2.5 ETH
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                            variant="body4"
                          >
                            Instant Price
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start mt-[57px] md:w-[100%] w-[93%]">
                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[15px] h-[29px] md:h-[auto] items-center justify-start max-w-[935px] w-[100%]">
                    <Text
                      className="flex-1 font-bold text-left text-white_A700 tracking-[-0.66px] w-[auto]"
                      variant="body1"
                    >
                      Top Collection
                    </Text>
                    <Text
                      className="font-normal not-italic text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                      variant="body4"
                    >
                      View All
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                    <div className="flex relative md:w-[100%] w-[66%]">
                      <div className="h-[421px] my-[auto] w-[54%]">
                        <div className="h-[421px] m-[auto] w-[100%]">
                          <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[20px] rounded-[8px] shadow-bs6 w-[92%]">
                            <div className="flex items-center justify-start mb-[2px] mt-[281px] w-[100%]">
                              <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                                <Input
                                  className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[17px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                                  wrapClassName="w-[100%]"
                                  name="Group273"
                                  placeholder="Yellow Tree Human Art"
                                ></Input>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                      variant="body7"
                                    >
                                      Ending in
                                    </Text>
                                    <Text
                                      className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                      variant="body4"
                                    >
                                      5h 12m 6s
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                    <Text
                                      className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                      variant="body7"
                                    >
                                      Highest bid
                                    </Text>
                                    <Text
                                      className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                      variant="body4"
                                    >
                                      5.54 ETH
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-row items-start justify-between right-[0] top-[4%] w-[94%]">
                            <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                              <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                                  variant="body6"
                                >
                                  Wi Seung Hyun
                                </Text>
                                <Text
                                  className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                  variant="body7"
                                >
                                  Owner
                                </Text>
                              </div>
                            </div>
                            <Img
                              src="images/img_group427320296.svg"
                              className="h-[114px] mt-[3px] w-[auto]"
                              alt="Group427320296"
                            />
                          </div>
                        </div>
                        <div className="absolute bg-black_900_26 flex items-center justify-start left-[5%] p-[59px] sm:px-[20px] md:px-[40px] rounded-[4px] top-[17%] w-[82%]">
                          <Button className="bg-white_A700_7f border-[1px] border-solid border-white_A700_66 cursor-pointer font-medium leading-[normal] min-w-[147px] my-[25px] py-[10px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.16px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-center justify-start ml-[-9.78px] my-[auto] p-[15px] rounded-[8px] shadow-bs7 w-[49%] z-[1]">
                        <div className="flex flex-col items-center justify-start mb-[7px] w-[100%]">
                          <div className="flex flex-row gap-[119px] items-center justify-center w-[auto]">
                            <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                              <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                                  variant="body6"
                                >
                                  Kim Tak
                                </Text>
                                <Text
                                  className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                  variant="body7"
                                >
                                  Owner
                                </Text>
                              </div>
                            </div>
                            <Button className="bg-gray_102 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                              <Img
                                src="images/img_location_white_a700.svg"
                                className="h-[19px]"
                                alt="location"
                              />
                            </Button>
                          </div>
                          <div className="bg-bluegray_51 h-[212px] mt-[18px] rounded-[4px] w-[100%]"></div>
                          <div className="flex flex-col gap-[15px] items-center justify-start mt-[16px] md:w-[100%] w-[97%]">
                            <Input
                              className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[17px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                              wrapClassName="w-[100%]"
                              name="Group275"
                              placeholder="Green Tree Human Art"
                            ></Input>
                            <div className="flex flex-row items-center justify-between w-[100%]">
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                  variant="body7"
                                >
                                  Ending in
                                </Text>
                                <Text
                                  className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                  variant="body4"
                                >
                                  6h 12m 6s
                                </Text>
                              </div>
                              <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                  variant="body7"
                                >
                                  Highest bid
                                </Text>
                                <Text
                                  className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                  variant="body4"
                                >
                                  3.54 ETH
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[15px] rounded-[8px] shadow-bs7 md:w-[100%] w-[32%]">
                      <div className="flex flex-col items-center justify-start mb-[7px] w-[100%]">
                        <div className="flex flex-row gap-[92px] items-center justify-center w-[auto]">
                          <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                            <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                                variant="body6"
                              >
                                Kim Tae-Mu
                              </Text>
                              <Text
                                className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                variant="body7"
                              >
                                Owner
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_102 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                            <Img
                              src="images/img_location_white_a700.svg"
                              className="h-[19px]"
                              alt="location One"
                            />
                          </Button>
                        </div>
                        <div className="bg-bluegray_51 h-[212px] mt-[18px] rounded-[4px] w-[100%]"></div>
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-[16px] md:w-[100%] w-[97%]">
                          <Input
                            className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[17px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                            wrapClassName="w-[100%]"
                            name="Group277"
                            placeholder="White Tree Human Art"
                          ></Input>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                variant="body7"
                              >
                                Ending in
                              </Text>
                              <Text
                                className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                variant="body4"
                              >
                                7h 12m 6s
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                                variant="body7"
                              >
                                Highest bid
                              </Text>
                              <Text
                                className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                                variant="body4"
                              >
                                4.54 ETH
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-[40px] gap-[95px] sm:hidden justify-start md:w-[100%] w-[24%]">
              <div className="flex flex-col sm:hidden items-start justify-start md:ml-[0] ml-[12px] md:w-[100%] w-[97%]">
                <div className="md:h-[180px] h-[240px] md:ml-[0] ml-[4px] relative w-[82%]">
                  <div className="absolute bg-bluegray_102 bottom-[0] h-[80px] left-[12%] rounded-[50%] w-[80px]"></div>
                  <Img
                    src="images/img_subtract.png"
                    className="absolute h-[180px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                    alt="Subtract"
                  />
                </div>
                <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[145px] w-[auto]">
                  <Text
                    className="font-semibold text-gray_800 text-left tracking-[-0.60px] w-[auto]"
                    variant="body2"
                  >
                    Andri Young
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_401 text-left tracking-[-0.42px] w-[auto]"
                    variant="body6"
                  >
                    Collector
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-[23px] w-[auto]">
                  <Text
                    className="font-semibold text-gray_800 text-left tracking-[-0.54px] w-[auto]"
                    variant="body3"
                  >
                    Biography
                  </Text>
                  <Text
                    className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[290px] not-italic text-gray_401 text-left tracking-[-0.42px]"
                    variant="body6"
                  >
                    The Collector was effectively the most important
                    administrative figure in an Indian district.{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-start justify-between mt-[23px] w-[100%]">
                  <Button className="bg-gray_304 cursor-pointer font-semibold min-w-[96px] mt-[127px] sm:px-[20px] px-[25px] py-[10px] rounded-[4px] text-[12px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                    Follow +
                  </Button>
                  <Button className="border-[1px] border-gray_304 border-solid flex h-[42px] items-center justify-center mt-[127px] p-[12px] rounded-[50%] w-[42px]">
                    <Img
                      src="images/img_upload_gray_304.svg"
                      className="h-[18px]"
                      alt="upload"
                    />
                  </Button>
                  <Img
                    src="images/img_group427320312.svg"
                    className="h-[169px] w-[168px]"
                    alt="Group427320312"
                  />
                </div>
              </div>
              <List
                className="flex-col gap-[20px] grid items-start w-[auto]"
                orientation="vertical"
              >
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-between hover:my-[0] my-[0] p-[15px] rounded-[4px] hover:shadow-bs8 shadow-bs8 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    1
                  </Text>
                  <div className="bg-bluegray_102 h-[50px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body4"
                    >
                      Stella Amanda
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail One"
                      />
                      <Text
                        className="not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body5"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_102 flex h-[33px] items-center justify-center my-[8px] p-[11px] rounded-[2px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[14px] rounded-[4px] hover:shadow-bs8 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    2
                  </Text>
                  <div className="bg-bluegray_102 h-[50px] ml-[14px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col font-inter gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.16px] w-[auto]"
                      variant="body4"
                    >
                      Angelina Young
                    </Text>
                    <div className="flex flex-row font-plusjakartasans gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Two"
                      />
                      <Text
                        className="not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body5"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_103 flex h-[33px] items-center justify-center ml-[20px] my-[9px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus One"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[13px] rounded-[4px] hover:shadow-bs8 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    3
                  </Text>
                  <div className="bg-bluegray_102 h-[50px] ml-[15px] my-[2px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body4"
                    >
                      Michael Ching
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Three"
                      />
                      <Text
                        className="not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body5"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_103 flex h-[33px] items-center justify-center ml-[36px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus Two"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start hover:my-[0] my-[0] p-[13px] rounded-[4px] hover:shadow-bs8 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body4"
                  >
                    4
                  </Text>
                  <div className="bg-bluegray_102 h-[50px] ml-[14px] my-[2px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body4"
                    >
                      Daniel Ching
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Four"
                      />
                      <Text
                        className="not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body5"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_103 flex h-[33px] items-center justify-center ml-[47px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus Three"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <div className="flex font-urbanist items-center justify-start mt-[104px] md:w-[100%] w-[92%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                as="h2"
                variant="h2"
              >
                Søk etter en lokale leverandør
              </Text>
              <div className="flex flex-row sm:gap-[20px] items-center justify-start mt-[21px] md:w-[100%] w-[70%]">
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
                  className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
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
                  className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
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
                <Button
                  className="flex items-center justify-center ml-[447px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
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
              <div className="flex items-center justify-start mt-[30px] w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start md:w-[100%] w-[74%]">
                    <List
                      className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[95%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Ended
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
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_193x240.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 One"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
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
                        <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Dayco Serpentine Belt
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                            variant="body7"
                          >
                            By Marvin McKinney
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_1.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Two"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Ended
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite.svg"
                                className=""
                                alt="favorite Two"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                      </div>
                      <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_2.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Three"
                          />
                          <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                            <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                              Ended
                            </Button>
                            <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                              <Img
                                src="images/img_favorite.svg"
                                className=""
                                alt="favorite Three"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                      </div>
                    </List>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center md:mt-[0] my-[119px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start pb-[22px] sm:pr-[20px] pr-[22px] w-[100%]">
                    <div className="md:h-[289px] h-[299px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[17%]">
                      <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[6px] rounded-[25px] shadow-bs2 w-[100%]">
                        <Text
                          className="font-medium md:ml-[0] ml-[3px] mt-[177px] text-black_902 text-left sm:w-[100%] w-[39%]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="md:h-[65px] h-[67px] mb-[5px] md:ml-[0] ml-[3px] relative w-[98%]">
                          <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black my-[6px] text-left text-white_A700 w-[auto]"
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
                      <div className="absolute h-[164px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                        <Img
                          src="images/img_breakingbadwa.png"
                          className="h-[164px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                          alt="breakingbadwa"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[7%] w-[91%]">
                          <div className="md:h-[43px] h-[47px] relative w-[30%]">
                            <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                            <Text
                              className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                              variant="body3"
                            >
                              Horten
                            </Text>
                          </div>
                          <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[14%]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[32px] w-[auto]"
                              alt="plus Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[30px] md:mt-[0] mt-[8px] md:w-[100%] w-[35%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[25px] shadow-bs2 w-[100%]">
                        <div className="h-[158px] relative w-[100%]">
                          <Img
                            src="images/img_661614eminemw.png"
                            className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            alt="661614eminemw"
                          />
                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                            <div className="md:h-[42px] h-[46px] relative w-[30%]">
                              <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                              <Text
                                className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                variant="body3"
                              >
                                Horten
                              </Text>
                            </div>
                            <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                              <Img
                                src="images/img_plus.svg"
                                className="h-[31px] w-[auto]"
                                alt="plus Five"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                          <Text
                            className="font-medium text-black_902 text-left sm:w-[100%] w-[40%]"
                            variant="body3"
                          >
                            Breaking Bad
                          </Text>
                          <div className="md:h-[58px] h-[68px] relative w-[100%]">
                            <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                              <Text
                                className="font-black my-[5px] text-left text-white_A700 w-[auto]"
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
                      <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[15px] shadow-bs2 w-[100%]">
                        <div className="h-[158px] relative w-[100%]">
                          <Img
                            src="images/img_jfs0h41.png"
                            className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            alt="jfS0hFortyOne"
                          />
                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                            <div className="md:h-[42px] h-[46px] relative w-[30%]">
                              <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                              <Text
                                className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                variant="body3"
                              >
                                Horten
                              </Text>
                            </div>
                            <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[13%]">
                              <Img
                                src="images/img_plus.svg"
                                className="h-[31px] w-[auto]"
                                alt="plus Six"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                          <Text
                            className="font-medium text-black_902 text-left sm:w-[100%] w-[40%]"
                            variant="body3"
                          >
                            Breaking Bad
                          </Text>
                          <div className="md:h-[58px] h-[68px] relative w-[100%]">
                            <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[4px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                              <Text
                                className="font-black my-[4px] text-left text-white_A700 w-[auto]"
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
                    </List>
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start mb-[3px] md:ml-[0] ml-[15px] pb-[18px] rounded-[25px] shadow-bs2 md:w-[100%] w-[16%]">
                      <div className="h-[160px] relative w-[100%]">
                        <Img
                          src="images/img_wp3891762aveng.png"
                          className="h-[160px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                          alt="wp3891762aveng"
                        />
                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                          <div className="md:h-[43px] h-[47px] relative w-[30%]">
                            <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                            <Text
                              className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                              variant="body3"
                            >
                              Horten
                            </Text>
                          </div>
                          <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[32px] w-[auto]"
                              alt="plus Seven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                        <Text
                          className="font-medium text-black_902 text-left sm:w-[100%] w-[39%]"
                          variant="body3"
                        >
                          Breaking Bad
                        </Text>
                        <div className="h-[60px] relative w-[100%]">
                          <div className="absolute bg-red_500 bottom-[3%] flex items-end justify-start p-[2px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                            <Text
                              className="font-black my-[7px] text-left text-white_A700 w-[auto]"
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
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[15px] md:mt-[0] mt-[121px] rounded-[19px] w-[47px]">
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
          </div>
          <div className="flex flex-col font-montserrat gap-[32px] items-start justify-start max-w-[1520px] mt-[128px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from Doodle Apes{" "}
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
                <div className="bg-gray_905 flex flex-1 flex-col items-center justify-start w-[100%]">
                  <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
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
                          alt="close"
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
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body7"
                        >
                          Current bid
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            0.75 BUSD
                          </Text>
                          <Img
                            src="images/img_lightbulb.svg"
                            className="h-[24px] w-[24px]"
                            alt="lightbulb"
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
                <List
                  className="flex sm:flex-col flex-row gap-[40px] grid-cols-3 w-[75%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
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
                            alt="close One"
                          />
                        </div>
                        <div className="flex items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            White car
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
                  <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
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
                            alt="close Two"
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
                  <div className="bg-gray_905 flex flex-col items-start justify-start w-[100%]">
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
                            alt="close Three"
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
              </div>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="font-montserrat h-[2061px] md:h-[2140px] mt-[79px] relative w-[100%]">
            <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[651px] items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[40px] items-start justify-start max-w-[1520px] w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    More from the seller
                  </Text>
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
                      <List
                        className="flex sm:flex-col flex-row gap-[40px] grid-cols-2 w-[49%]"
                        orientation="horizontal"
                      >
                        <div className="bg-gray_905 flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                <CheckBox
                                  className="font-normal not-italic text-[14px] text-gray_601 text-left"
                                  inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                                  label="Plato"
                                  name="PolychainMonsters"
                                ></CheckBox>
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
                                  Puppangy
                                </Text>
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
                                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body4"
                                  >
                                    0.75 BUSD
                                  </Text>
                                  <Img
                                    src="images/img_lightbulb.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="lightbulb One"
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
                        <div className="bg-gray_905 flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_908 flex flex-row h-[350px] w-[350px]"></div>
                          <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                                <CheckBox
                                  className="font-normal not-italic text-[14px] text-gray_601 text-left"
                                  inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                                  label="Plato"
                                  name="PolychainMonsters One"
                                ></CheckBox>
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
                                  Giraffe
                                </Text>
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
                                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body4"
                                  >
                                    0.75 BUSD
                                  </Text>
                                  <Img
                                    src="images/img_lightbulb.svg"
                                    className="h-[24px] w-[24px]"
                                    alt="lightbulb Two"
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
                        <div className="bg-gray_908 flex flex-row h-[350px] w-[350px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                              <CheckBox
                                className="font-normal not-italic text-[14px] text-gray_601 text-left"
                                inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                                label="Plato"
                                name="PolychainMonsters Two"
                              ></CheckBox>
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
                                Neo
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
                      <div className="bg-gray_905 flex flex-1 flex-col items-center justify-start w-[100%]">
                        <div className="bg-gray_908 h-[350px] w-[350px]"></div>
                        <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                              <CheckBox
                                className="font-normal not-italic text-[14px] text-gray_601 text-left"
                                inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                                label="Plato"
                                name="PolychainMonsters Three"
                              ></CheckBox>
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
                                Latiphi
                              </Text>
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
                              <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body4"
                                >
                                  0.75 BUSD
                                </Text>
                                <Img
                                  src="images/img_lightbulb.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="lightbulb Three"
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
                    </div>
                    <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                      View More
                    </Button>
                  </div>
                </div>
                <div className="bg-black_904 flex sm:hidden items-center justify-end p-[41px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mt-[138px] md:w-[100%] w-[96%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                        <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                          <Img
                            src="images/img_grid.svg"
                            className="h-[58px] rounded-[50%] w-[58px]"
                            alt="grid One"
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
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body3"
                          >
                            Home
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body3"
                          >
                            Explore
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body3"
                          >
                            Activities
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-[281px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[259px] md:w-[100%] w-[38%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
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
                        <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
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
                      </List>
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
              </div>
            </div>
            <div className="absolute flex font-urbanist h-[max-content] inset-[0] items-center justify-center m-[auto] w-[92%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Søk etter en lokale leverandør
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[21px] md:w-[100%] w-[70%]">
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
                    className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
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
                    className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
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
                  <Button
                    className="flex items-center justify-center ml-[447px] outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
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
                <div className="flex items-center justify-start mt-[30px] w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start md:w-[100%] w-[74%]">
                      <List
                        className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[95%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[193px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044.png"
                              className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Four"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Ended
                              </Button>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className=""
                                  alt="favorite Four"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[193px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_193x240.png"
                              className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Five"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                2h 4m 32s
                              </Button>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className=""
                                  alt="favorite Five"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Dayco Serpentine Belt
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
                              variant="body7"
                            >
                              By Marvin McKinney
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[193px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_1.png"
                              className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Six"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Ended
                              </Button>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className=""
                                  alt="favorite Six"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[8px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[193px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_2.png"
                              className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Seven"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[4%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Ended
                              </Button>
                              <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                <Img
                                  src="images/img_favorite.svg"
                                  className=""
                                  alt="favorite Seven"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[6px] items-start justify-start mb-[11px] md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                        </div>
                      </List>
                      <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center md:mt-[0] my-[119px] rounded-[19px] w-[47px]">
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[13px] w-[auto]"
                          alt="arrowright Two"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start pb-[22px] sm:pr-[20px] pr-[22px] w-[100%]">
                      <div className="md:h-[289px] h-[299px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[17%]">
                        <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[6px] rounded-[25px] shadow-bs2 w-[100%]">
                          <Text
                            className="font-medium md:ml-[0] ml-[3px] mt-[177px] text-black_902 text-left sm:w-[100%] w-[39%]"
                            variant="body3"
                          >
                            Breaking Bad
                          </Text>
                          <div className="md:h-[65px] h-[67px] mb-[5px] md:ml-[0] ml-[3px] relative w-[98%]">
                            <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                              <Text
                                className="font-black my-[6px] text-left text-white_A700 w-[auto]"
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
                        <div className="absolute h-[164px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <Img
                            src="images/img_breakingbadwa.png"
                            className="h-[164px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                            alt="breakingbadwa One"
                          />
                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[7%] w-[91%]">
                            <div className="md:h-[43px] h-[47px] relative w-[30%]">
                              <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                              <Text
                                className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                variant="body3"
                              >
                                Horten
                              </Text>
                            </div>
                            <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[14%]">
                              <Img
                                src="images/img_plus.svg"
                                className="h-[32px] w-[auto]"
                                alt="plus Eight"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[30px] md:mt-[0] mt-[8px] md:w-[100%] w-[35%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[25px] shadow-bs2 w-[100%]">
                          <div className="h-[158px] relative w-[100%]">
                            <Img
                              src="images/img_661614eminemw.png"
                              className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                              alt="661614eminemw One"
                            />
                            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                              <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                <Text
                                  className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                  variant="body3"
                                >
                                  Horten
                                </Text>
                              </div>
                              <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                <Img
                                  src="images/img_plus.svg"
                                  className="h-[31px] w-[auto]"
                                  alt="plus Nine"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                            <Text
                              className="font-medium text-black_902 text-left sm:w-[100%] w-[40%]"
                              variant="body3"
                            >
                              Breaking Bad
                            </Text>
                            <div className="md:h-[58px] h-[68px] relative w-[100%]">
                              <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[3px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                                <Text
                                  className="font-black my-[5px] text-left text-white_A700 w-[auto]"
                                  variant="body3"
                                >
                                  Nettsted
                                </Text>
                              </div>
                              <Text
                                className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                                variant="body6"
                              >
                                In publishing and graphic design, Lorem ipsum is
                                a placeholder text ....
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[15px] shadow-bs2 w-[100%]">
                          <div className="h-[158px] relative w-[100%]">
                            <Img
                              src="images/img_jfs0h41.png"
                              className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                              alt="jfS0hFortyOne One"
                            />
                            <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                              <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                <Text
                                  className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                  variant="body3"
                                >
                                  Horten
                                </Text>
                              </div>
                              <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[13%]">
                                <Img
                                  src="images/img_plus.svg"
                                  className="h-[31px] w-[auto]"
                                  alt="plus Ten"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                            <Text
                              className="font-medium text-black_902 text-left sm:w-[100%] w-[40%]"
                              variant="body3"
                            >
                              Breaking Bad
                            </Text>
                            <div className="md:h-[58px] h-[68px] relative w-[100%]">
                              <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[4px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                                <Text
                                  className="font-black my-[4px] text-left text-white_A700 w-[auto]"
                                  variant="body3"
                                >
                                  Nettsted
                                </Text>
                              </div>
                              <Text
                                className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                                variant="body6"
                              >
                                In publishing and graphic design, Lorem ipsum is
                                a placeholder text ....
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start mb-[3px] md:ml-[0] ml-[15px] pb-[18px] rounded-[25px] shadow-bs2 md:w-[100%] w-[16%]">
                        <div className="h-[160px] relative w-[100%]">
                          <Img
                            src="images/img_wp3891762aveng.png"
                            className="h-[160px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                            alt="wp3891762aveng One"
                          />
                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                            <div className="md:h-[43px] h-[47px] relative w-[30%]">
                              <div className="absolute bg-gray_400_90 h-[29px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                              <Text
                                className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
                                variant="body3"
                              >
                                Horten
                              </Text>
                            </div>
                            <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                              <Img
                                src="images/img_plus.svg"
                                className="h-[32px] w-[auto]"
                                alt="plus Eleven"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[93%]">
                          <Text
                            className="font-medium text-black_902 text-left sm:w-[100%] w-[39%]"
                            variant="body3"
                          >
                            Breaking Bad
                          </Text>
                          <div className="h-[60px] relative w-[100%]">
                            <div className="absolute bg-red_500 bottom-[3%] flex items-end justify-start p-[2px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                              <Text
                                className="font-black my-[7px] text-left text-white_A700 w-[auto]"
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
                      <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[15px] md:mt-[0] mt-[121px] rounded-[19px] w-[47px]">
                        <Img
                          src="images/img_arrowright.svg"
                          className="h-[13px] w-[auto]"
                          alt="arrowright Three"
                        />
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

export default DetailsMultiItemPage;
