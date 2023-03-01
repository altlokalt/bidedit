import React from "react";

import { Img, Text, Input, Button, List, CheckBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DetailsItemsBidOnePage = () => {
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
                        src="images/img_minimize_red_a700_40x40.svg"
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
          <div className="flex md:flex-col flex-row gap-[40px] items-center justify-start max-w-[1520px] mt-[38px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex h-[560px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[560px]">
                  <div className="bg-gray_908 h-[560px] w-[560px]"></div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[16px] h-[80px] md:h-[auto] items-start justify-start sm:w-[100%] w-[560px]">
                  <div className="bg-gray_908 h-[80px] w-[80px]"></div>
                  <div className="bg-gray_908 h-[80px] w-[80px]"></div>
                  <div className="bg-gray_908 h-[80px] w-[80px]"></div>
                  <div className="bg-gray_908 h-[80px] w-[80px]"></div>
                  <div className="bg-gray_908 h-[80px] w-[80px]"></div>
                </div>
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
                  Giraffe
                </Text>
                <div className="flex sm:flex-col flex-row gap-[140px] sm:gap-[40px] items-end justify-start w-[100%]">
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
                        label="Plato"
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
                  <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_grid_gray_601.svg"
                      className="h-[24px] w-[24px]"
                      alt="grid One"
                    />
                    <Text
                      className="font-normal not-italic text-gray_601 text-left w-[auto]"
                      variant="body6"
                    >
                      5 items
                    </Text>
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
              <div className="flex flex-col gap-[24px] h-[690px] md:h-[auto] items-start justify-start max-w-[740px] w-[100%]">
                <div className="bg-gray_905 flex md:flex-col flex-row md:gap-[20px] items-start justify-start p-[4px] md:w-[100%] w-[610px]">
                  <Button className="bg-white_A700 cursor-pointer font-semibold px-[16px] py-[8px] text-[16px] text-center text-gray_906 w-[100%]">
                    Items
                  </Button>
                  <List
                    className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[75%]"
                    orientation="horizontal"
                  >
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
                    <div className="flex items-center justify-center px-[16px] py-[8px] rounded-[8px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        Info
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="bg-gray_905 flex flex-col gap-[24px] h-[100%] items-start justify-between p-[24px] sm:px-[20px] w-[100%]">
                  <List
                    className="flex-col gap-[24px] grid items-start w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[64px]">
                          <div className="bg-gray_908 h-[64px] w-[64px]"></div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body7"
                          >
                            Plato
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Giraffe #100024768173
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_sharedirect.svg"
                        className="h-[24px] w-[24px]"
                        alt="sharedirect"
                      />
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[64px]">
                          <div className="bg-gray_908 h-[64px] w-[64px]"></div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body7"
                          >
                            Plato
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Oggo #100024768173
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_sharedirect.svg"
                        className="h-[24px] w-[24px]"
                        alt="sharedirect One"
                      />
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[64px]">
                          <div className="bg-gray_908 h-[64px] w-[64px]"></div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body7"
                          >
                            Plato
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Latiphi #100024768173
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_sharedirect.svg"
                        className="h-[24px] w-[24px]"
                        alt="sharedirect Two"
                      />
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[64px]">
                          <div className="bg-gray_908 h-[64px] w-[64px]"></div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body7"
                          >
                            Plato
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Platiphac #100024768173
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_sharedirect.svg"
                        className="h-[24px] w-[24px]"
                        alt="sharedirect Three"
                      />
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[64px]">
                          <div className="bg-gray_908 h-[64px] w-[64px]"></div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_601 text-left w-[auto]"
                            variant="body7"
                          >
                            Plato
                          </Text>
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body4"
                          >
                            Clayory #100024768173
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_sharedirect.svg"
                        className="h-[24px] w-[24px]"
                        alt="sharedirect Four"
                      />
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
          <div className="flex font-urbanist items-center justify-start max-w-[1589px] mt-[109px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[50px] justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Søk etter en lokale leverandør
                  </Text>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between md:mt-[0] mt-[24px] md:w-[100%] w-[62%]">
                    <div className="flex items-end justify-start outline outline-[0.5px] outline-gray_100 p-[5px] rounded-[14px] md:w-[100%] w-[13%]">
                      <div className="flex flex-row gap-[10px] items-start justify-end mb-[29px] ml-[auto] mt-[8px] md:w-[100%] w-[91%]">
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
                    <div className="flex items-end justify-start outline outline-[0.5px] outline-gray_100 p-[4px] rounded-[14px] md:w-[100%] w-[13%]">
                      <div className="flex flex-row gap-[10px] items-center justify-end mb-[30px] ml-[auto] mt-[9px] md:w-[100%] w-[90%]">
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
                      className="sm:flex-col flex-row md:gap-[40px] gap-[411px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[71%]"
                      orientation="horizontal"
                    >
                      <div className="flex items-end justify-start sm:ml-[0] outline outline-[0.5px] outline-gray_100 p-[3px] rounded-[14px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-start justify-end mb-[31px] ml-[auto] mt-[10px] md:w-[100%] w-[91%]">
                          <Img
                            src="images/img_clock_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="clock"
                          />
                          <Text
                            className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                            variant="body4"
                          >
                            Price Range
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-end justify-start sm:ml-[0] outline outline-[0.5px] outline-gray_100 p-[3px] rounded-[14px] w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-end mb-[31px] ml-[auto] mt-[10px] md:w-[100%] w-[91%]">
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
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[85%]">
                  <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start pb-[112px] md:w-[100%] w-[80%]">
                    <List
                      className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[75%]"
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
                    </List>
                    <div className="bg-white_A700 md:h-[254px] h-[278px] p-[6px] relative rounded-[15px] shadow-bs md:w-[100%] w-[24%]">
                      <div className="flex h-[100%] items-center justify-start mx-[auto] w-[96%]">
                        <div className="flex flex-col gap-[20px] justify-start w-[100%]">
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
                          <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[auto]">
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
                      </div>
                      <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700 bottom-[20%] flex h-[55px] md:h-[auto] items-center justify-center right-[30%] rounded-[21px] w-[42px]">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] items-start justify-start pb-[153px] pr-[153px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <div className="md:h-[164px] h-[299px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[21%]">
                      <div className="absolute bg-white_A700 flex md:h-[107px] h-[299px] inset-[0] justify-end m-[auto] p-[6px] rounded-[25px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col gap-[26px] h-[100%] justify-start mb-[5px] mt-[auto] mx-[auto] w-[94%]">
                          <Text
                            className="font-medium text-black_902 text-left sm:w-[100%] w-[40%]"
                            variant="body3"
                          >
                            Breaking Bad
                          </Text>
                          <div className="bg-red_500 flex items-end justify-start md:ml-[0] ml-[136px] p-[3px] rounded-[15px] shadow-bs3 md:w-[100%] w-[auto]">
                            <Text
                              className="font-black my-[6px] text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              Nettsted
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[6%] font-medium inset-x-[0] mx-[auto] text-gray_600 text-left sm:w-[100%] w-[91%]"
                          variant="body6"
                        >
                          In publishing and graphic design, Lorem ipsum is a
                          placeholder text ....
                        </Text>
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
                              alt="plus"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[30px] md:mt-[0] mt-[8px] md:w-[100%] w-[44%]"
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
                                alt="plus One"
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
                                alt="plus Two"
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start mb-[3px] md:ml-[0] ml-[15px] pb-[18px] rounded-[25px] shadow-bs2 md:w-[100%] w-[21%]">
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
                              alt="plus Three"
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
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[119px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from Plato
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[40px] items-start justify-start w-[100%]">
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[40px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[49%]"
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
                            alt="close"
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
                  <div className="bg-gray_905 flex flex-col items-center justify-start w-[100%]">
                    <div className="bg-gray_908 h-[350px] w-[350px]"></div>
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
                            alt="close One"
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
                </List>
                <div className="bg-gray_905 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_908 h-[350px] w-[350px]"></div>
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
                          alt="close Two"
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
                          alt="close Three"
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
              </div>
              <Button className="border-[1px] border-lime_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[28px] text-[16px] text-center text-lime_A400 w-[220px]">
                View More
              </Button>
            </div>
          </div>
          <div className="flex flex-col font-montserrat gap-[40px] items-start justify-start max-w-[1520px] mt-[80px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h6"
              variant="h6"
            >
              More from the seller
            </Text>
            <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-[100%]"
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
          <div className="font-urbanist sm:h-[1519px] h-[331px] md:h-[927px] mt-[355px] md:px-[20px] relative md:w-[100%] w-[64%]">
            <Text
              className="font-semibold ml-[11px] mt-[13px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
              as="h6"
              variant="h6"
            >
              Lokale ledig
            </Text>
            <div className="absolute h-[331px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center mb-[-3px] ml-[auto] mr-[4px] w-[auto] z-[1]">
                <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                  <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img src="images/img_music.svg" className="" alt="music" />
                  </Button>
                  <Text
                    className="font-semibold text-cyan_A700 text-left w-[auto]"
                    variant="body4"
                  >
                    Stillinger
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                  <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_link.svg"
                      className="h-[21px]"
                      alt="link"
                    />
                  </Button>
                  <Text
                    className="font-medium text-gray_300 text-left w-[auto]"
                    variant="body4"
                  >
                    Lokaler
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                  <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_location.svg"
                      className=""
                      alt="location"
                    />
                  </Button>
                  <Text
                    className="font-medium text-gray_300 text-left w-[auto]"
                    variant="body4"
                  >
                    Aktitiviter & Arransjemanter
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                  <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img
                      src="images/img_volume.svg"
                      className="h-[20px]"
                      alt="volume"
                    />
                  </Button>
                  <Text
                    className="font-medium text-gray_300 text-left w-[auto]"
                    variant="body4"
                  >
                    Søknader
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[auto] mx-[auto] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
            </div>
          </div>
          <footer className="bg-black_904 flex font-montserrat items-center justify-center md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
              <div className="flex flex-col items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
                  <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:w-[100%] w-[17%]">
                    <div className="flex flex-row gap-[9px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[49px] w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[58px] rounded-[50%] w-[58px]"
                        alt="grid Two"
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

export default DetailsItemsBidOnePage;
