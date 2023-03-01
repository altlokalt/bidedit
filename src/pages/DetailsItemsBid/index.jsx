import React from "react";

import { Img, Text, Input, Button, List, CheckBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DetailsItemsBidPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_904 flex font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
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
                        src="images/img_minimize_4.svg"
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
          <div className="flex md:flex-col flex-row gap-[40px] sm:hidden items-center justify-start max-w-[1520px] mt-[40px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex h-[560px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[560px]">
                <div className="bg-gray_908 h-[560px] w-[560px]"></div>
              </div>
              <div className="bg-gray_905 flex flex-col gap-[24px] items-start justify-start max-w-[740px] p-[40px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body4"
                    >
                      Price
                    </Text>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1.12 BUSD
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body6"
                      >
                        $ 366.86
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body4"
                    >
                      Auction ends in
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[24px] grid grid-cols-3 justify-start w-[265px]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          00
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          hrs
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          24
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          mins
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                        <Text
                          className="font-bold h-[30px] text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          26
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_601 text-left w-[auto]"
                          variant="body6"
                        >
                          secs
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <Button className="bg-lime_A400 cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-black_904 text-center w-[100%]">
                  Bid
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[24px] items-start justify-start max-w-[740px] w-[100%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Car-Free City
                </Text>
                <div className="flex sm:flex-col flex-row gap-[140px] sm:gap-[40px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[168px]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[56px] w-[56px]"
                      alt="arrowleft One"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body7"
                      >
                        Collection
                      </Text>
                      <CheckBox
                        className="font-semibold text-[16px] text-left text-white_A700"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        label="Abstract"
                        name="Abstract"
                      ></CheckBox>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="h-[56px] w-[56px]"
                      alt="arrowleft Two"
                    />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_601 text-left w-[auto]"
                        variant="body7"
                      >
                        Owner
                      </Text>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          0xhg34...nGj2
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[740px] not-italic text-gray_601 text-left"
                  variant="body6"
                >
                  Breathing Space joyfully brings the unique blend of DeFi,
                  Collect-to-Earn and Play-to-Earn Abstract is known for to the
                  Neo N3 ecosystem: the most feature-complete blockchain
                  platform for building decentralized applications for the smart
                  economy of tomorrow.
                </Text>
              </div>
              <div className="flex flex-col gap-[24px] h-[594px] md:h-[auto] sm:hidden items-start justify-start max-w-[740px] w-[100%]">
                <div className="bg-gray_905 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[4px] md:w-[100%] w-[610px]">
                  <List
                    className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[50%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Attributes
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
                  </List>
                  <Button className="bg-white_A700 cursor-pointer font-semibold px-[16px] py-[8px] text-[16px] text-center text-gray_906 w-[100%]">
                    Bids
                  </Button>
                  <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body4"
                    >
                      Info
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_905 flex flex-col gap-[24px] h-[100%] items-start justify-between p-[24px] sm:px-[20px] w-[100%]">
                  <List
                    className="flex-col gap-[24px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                        <Img
                          src="images/img_volume_gray_908.svg"
                          className="h-[40px] w-[40px]"
                          alt="volume"
                        />
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            Cimmy
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.83 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body6"
                            >
                              ($ 366.86)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                          <Text
                            className="font-semibold text-left text-light_blue_A400 w-[auto]"
                            variant="body4"
                          >
                            Lead
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            5 minutes ago
                          </Text>
                        </div>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                        <Img
                          src="images/img_volume_gray_908.svg"
                          className="h-[40px] w-[40px]"
                          alt="volume One"
                        />
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            TheElerKing
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.935 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body6"
                            >
                              ($ 349.18)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                          <Text
                            className="font-semibold text-deep_orange_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Outbidded
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            1 hours ago
                          </Text>
                        </div>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                        <Img
                          src="images/img_volume_gray_908.svg"
                          className="h-[40px] w-[40px]"
                          alt="volume Two"
                        />
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            0xgj32...el21
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.85 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body6"
                            >
                              ($ 331.52)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                          <Text
                            className="font-semibold text-deep_orange_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Outbidded
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            4 hours ago
                          </Text>
                        </div>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                        <Img
                          src="images/img_volume_gray_908.svg"
                          className="h-[40px] w-[40px]"
                          alt="volume Three"
                        />
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            TheElerKing
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.77 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body6"
                            >
                              ($ 318.24)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                          <Text
                            className="font-semibold text-deep_orange_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Outbidded
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            5 hours ago
                          </Text>
                        </div>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row sm:gap-[40px] items-start justify-between my-[0] w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-start py-[2px] w-[auto]">
                        <Img
                          src="images/img_volume_gray_908.svg"
                          className="h-[40px] w-[40px]"
                          alt="volume Four"
                        />
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            0xgj32...el21
                          </Text>
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body4"
                            >
                              0.7 BUSD
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_601 text-left w-[auto]"
                              variant="body6"
                            >
                              ($ 309.44)
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                        <div className="flex flex-col gap-[8px] items-end justify-start w-[auto]">
                          <Text
                            className="font-semibold text-deep_orange_300 text-left w-[auto]"
                            variant="body4"
                          >
                            Outbidded
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body6"
                          >
                            7 hours ago
                          </Text>
                        </div>
                        <Img
                          src="images/img_sharedirect.svg"
                          className="h-[24px] w-[24px]"
                          alt="sharedirect Four"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-row gap-[12px] items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body6"
                    >
                      You can
                    </Text>
                    <div className="flex items-center justify-start py-[16px] rounded-[12px] w-[auto]">
                      <Text
                        className="font-bold text-left text-lime_A400 w-[auto]"
                        variant="body4"
                      >
                        Report any problem
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body6"
                    >
                      you find.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-urbanist items-center justify-start max-w-[1520px] mt-[204px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[46px] sm:hidden items-start justify-start w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                variant="body2"
              >
                Utførske de lokale selskaper
              </Text>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[96%]">
                  <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] md:w-[100%] w-[16%]">
                    <div className="flex flex-row gap-[10px] items-start justify-start mb-[14px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
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
                  <div className="flex items-start justify-start md:ml-[0] ml-[39px] outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] md:w-[100%] w-[16%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start mb-[14px] md:ml-[0] ml-[2px] md:w-[100%] w-[54%]">
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
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[434px] grid md:grid-cols-1 grid-cols-2 md:ml-[0] ml-[39px] md:w-[100%] w-[65%]"
                    orientation="horizontal"
                  >
                    <div className="flex items-start justify-start outline outline-[0.5px] outline-gray_100 p-[14px] rounded-[14px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[14px] md:ml-[0] ml-[2px] md:w-[100%] w-[82%]">
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
                      <div className="flex flex-row gap-[10px] items-center justify-start mb-[14px] md:ml-[0] ml-[2px] md:w-[100%] w-[55%]">
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
                  className="flex-col font-roboto gap-[28px] grid items-center md:ml-[0] ml-[3px] mt-[38px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[64px] sm:pr-[20px] md:pr-[40px] pr-[64px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start mb-[2px] pb-[12px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                              alt="plus"
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start mb-[2px] md:ml-[0] ml-[64px] pb-[8px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start mb-[2px] md:ml-[0] ml-[64px] pb-[8px] rounded-[15px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start mb-[2px] md:ml-[0] ml-[64px] pb-[18px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[127px] md:ml-[0] ml-[30px] md:mt-[0] mt-[123px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[52px] sm:pr-[20px] md:pr-[40px] pr-[52px] w-[100%]">
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start pb-[10px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start md:ml-[0] ml-[64px] pb-[8px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-center justify-start md:ml-[0] ml-[64px] pb-[8px] rounded-[15px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start md:ml-[0] ml-[64px] pb-[11px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[143px] md:ml-[0] ml-[22px] md:mt-[0] mt-[105px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[18px] pr-[18px] md:w-[100%] w-[98%]">
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[60px] pb-[12px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[60px] md:ml-[0] ml-[64px] pb-[10px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start mb-[60px] md:ml-[0] ml-[64px] pb-[12px] rounded-[15px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-start mb-[60px] md:ml-[0] ml-[64px] pb-[15px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[193px] md:ml-[0] ml-[42px] md:mt-[0] mt-[114px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </List>
                <Input
                  className="font-normal not-italic pb-[18px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[8px] text-[14px] text-center placeholder:text-gray_903 text-gray_903 tracking-[0.14px] w-[100%]"
                  wrapClassName="md:ml-[0] ml-[783px] mt-[40px] outline outline-[0.5px] outline-gray_903 rounded-[8px] sm:ml-[0] sm:w-[100%] w-[12%]"
                  name="Button"
                  placeholder="Load More"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[194px] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from Doodle Apes{" "}
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
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
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[84px] mx-[auto] md:px-[20px] w-[100%]">
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
          <footer className="bg-black_904 flex font-montserrat items-center justify-center mt-[126px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
              <div className="flex flex-col items-center justify-center w-[100%]">
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
      </div>
    </>
  );
};

export default DetailsItemsBidPage;
