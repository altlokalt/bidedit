import React from "react";

import {
  Img,
  Input,
  Button,
  Text,
  CheckBox,
  Line,
  List,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const MarketplaceMenuPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-sora items-start justify-end mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[41px] w-[100%]">
        <div className="sm:h-[1524px] md:h-[351px] h-[503px] sm:hidden relative md:w-[100%] w-[94%]">
          <div className="absolute bottom-[0] flex sm:flex-col flex-row gap-[40px] sm:hidden inset-x-[0] items-center justify-start mx-[auto] w-[auto]">
            <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
            <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
            <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
            <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
          </div>
          <div className="absolute bg-gray_900 flex flex-row inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <header className="flex items-center justify-center mx-[auto] w-[100%]">
              <div className="bg-gray_900 flex flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <div className="header-row my-[4px]">
                  <Img
                    src="images/img_logo.svg"
                    className="h-[32px]"
                    alt="logo"
                  />
                  <div className="mobile-menu">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div className="flex sm:flex-1 sm:hidden items-start justify-start ml-[571px] sm:w-[100%] w-[356px]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_500 text-bluegray_500 text-left w-[100%]"
                    wrapClassName="bg-gray_901 flex gap-[8px] px-[16px] py-[8px] rounded-[12px] w-[100%]"
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
                          color="#637592"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                </div>
                <ul className="flex sm:flex-col flex-row gap-[16px] sm:hidden items-start justify-start ml-[24px] w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[21%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start">
                      <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px] w-[40px]">
                        <Img
                          src="images/img_minimize_40x40.svg"
                          className=""
                          alt="minimize"
                        />
                      </Button>
                      <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px] w-[40px]">
                        <Img
                          src="images/img_bellnotification.svg"
                          className=""
                          alt="bellnotification"
                        />
                      </Button>
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button
                      className="bg-gray_901 flex items-center justify-center min-w-[137px] px-[16px] py-[8px] rounded-[12px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="text-center"
                          alt="close"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                        BNB Chain
                      </div>
                    </Button>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] text-center">
                    <Button className="bg-indigo_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[12px] text-[14px] text-center text-white_A700">
                      Connect Wallet
                    </Button>
                  </li>
                </ul>
              </div>
            </header>
            <div className="sm:h-[164px] md:h-[172px] h-[228px] ml-[270px] mt-[-64px] w-[255px] z-[1]">
              <div className="absolute flex flex-col md:flex-row gap-[4px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-semibold text-indigo_A400 text-left w-[auto]"
                      variant="body6"
                    >
                      Marketplace
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[20px] w-[20px]"
                    alt="arrowup"
                  />
                </div>
                <div className="bg-gray_901 flex md:flex-col flex-row gap-[12px] items-start justify-start pb-[8px] pt-[4px] rounded-[12px] w-[220px]">
                  <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] pr-[16px] py-[8px] w-[220px]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] pr-[16px] py-[8px] w-[220px]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Discover
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] pr-[16px] py-[8px] w-[220px]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Activities
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start sm:pl-[20px] pl-[24px] pr-[16px] py-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body6"
                      >
                        Collection Verification
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-row gap-[8px] items-center justify-between p-[8px] right-[0] top-[0] w-[auto]">
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
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex font-poppins items-center max-w-[1795px] mt-[18px] mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[45px] w-[100%]">
          <div className="flex flex-row md:h-[501px] h-[607px] sm:hidden relative w-[100%]">
            <div className="absolute flex flex-col gap-[16px] items-start justify-end left-[0] top-[0] w-[160px]">
              <Text
                className="font-bold font-sansita text-gray_802 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Discover
              </Text>
              <Text
                className="font-normal font-poppins not-italic text-green_600 text-left w-[auto]"
                variant="body6"
              >
                151,146 items listed
              </Text>
            </div>
            <div className="absolute bottom-[0] sm:flex-row md:h-[501px] h-[549px] sm:hidden inset-x-[0] mx-[auto] w-[100%]">
              <div className="absolute bottom-[0] flex flex-row gap-[40px] h-[501px] md:h-[auto] items-start justify-between left-[0] max-w-[1382px] w-[100%]">
                <div className="bg-gray_802 flex flex-1 flex-col items-start justify-start w-[100%]">
                  <div className="bg-gray_305 h-[315px] w-[315px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-green_200 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters"
                        ></CheckBox>
                        <Img
                          src="images/img_close_amber_a427.svg"
                          className="h-[24px] w-[24px]"
                          alt="close"
                        />
                      </div>
                      <div className="flex font-sansita items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Neo Unigiraffe
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-green_600 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal font-poppins not-italic text-green_200 text-left w-[auto]"
                        variant="body7"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-bold font-sansita text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.5 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_cursor.svg"
                  className="h-[24px] w-[24px]"
                  alt="cursor"
                />
                <List
                  className="flex flex-row gap-[40px] grid-cols-3 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_802 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_305 h-[315px] w-[315px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-green_200 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Crypto Fight"
                            name="PolychainMonsters One"
                          ></CheckBox>
                          <Img
                            src="images/img_close_amber_a427.svg"
                            className="h-[24px] w-[24px]"
                            alt="close One"
                          />
                        </div>
                        <div className="flex flex-row font-sansita items-center justify-between w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Extension
                          </Text>
                          <div className="flex flex-row font-sora gap-[4px] items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-green_500 text-left w-[auto]"
                              variant="body6"
                            >
                              6
                            </Text>
                            <Img
                              src="images/img_grid_green_500.svg"
                              className="h-[16px] w-[16px]"
                              alt="grid"
                            />
                          </div>
                        </div>
                      </div>
                      <Line className="bg-green_600 h-[1px] w-[100%]" />
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-poppins not-italic text-green_200 text-left w-[auto]"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold font-sansita text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          0.07 BUSD
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_802 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_305 h-[315px] w-[315px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-green_200 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Polychain Monsters"
                            name="PolychainMonsters Two"
                          ></CheckBox>
                          <Img
                            src="images/img_close_amber_a427.svg"
                            className="h-[24px] w-[24px]"
                            alt="close Two"
                          />
                        </div>
                        <div className="flex font-sansita items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Neo Unigiraffe
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-green_600 h-[1px] w-[100%]" />
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-poppins not-italic text-green_200 text-left w-[auto]"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold font-sansita text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          0.83 BUSD
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_802 flex flex-col items-start justify-start w-[100%]">
                    <div className="bg-gray_305 h-[315px] w-[315px]"></div>
                    <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                          <CheckBox
                            className="font-normal not-italic text-[14px] text-green_200 text-left"
                            inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                            label="Polychain Monsters"
                            name="PolychainMonsters Three"
                          ></CheckBox>
                          <Img
                            src="images/img_close_amber_a427.svg"
                            className="h-[24px] w-[24px]"
                            alt="close Three"
                          />
                        </div>
                        <div className="flex font-sansita items-center justify-start w-[100%]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            Neo Unigiraffe
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-green_600 h-[1px] w-[100%]" />
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal font-poppins not-italic text-green_200 text-left w-[auto]"
                          variant="body7"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-bold font-sansita text-left text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          0.15 BUSD
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute flex flex-row font-sansita md:gap-[40px] items-start justify-between max-w-[1524px] right-[0] top-[0] w-[100%]">
                <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                  <div className="flex flex-col gap-[8px] items-center justify-start py-[10px] w-[auto]">
                    <Text
                      className="font-bold text-gray_802 text-left w-[auto]"
                      variant="body3"
                    >
                      Items
                    </Text>
                    <Line className="bg-orange_200 h-[6px] w-[100%]" />
                  </div>
                  <div className="flex items-center justify-start py-[10px] w-[auto]">
                    <Text
                      className="font-bold text-green_600 text-left w-[auto]"
                      variant="body3"
                    >
                      Activities
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-[24px] items-start justify-start w-[auto]">
                  <div className="flex flex-col sm:flex-row gap-[8px] items-start justify-start w-[270px]">
                    <div className="flex items-start justify-start w-[100%]">
                      <SelectBox
                        className="bg-yellow_100 border-[1px] border-gray_802 border-solid font-medium px-[16px] py-[12px] text-[14px] text-gray_802 text-left w-[100%]"
                        placeholderClassName="text-gray_802"
                        name="dropdown"
                        placeholder="Newest"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_802.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <div className="border-[1px] border-gray_802 border-solid flex flex-col items-start justify-start w-[270px]">
                      <div className="bg-yellow_50 flex flex-row items-center justify-between p-[12px] w-[100%]">
                        <div className="flex items-start justify-start ml-[4px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-lime_800 w-[auto]"
                            variant="body6"
                          >
                            Newest
                          </Text>
                        </div>
                        <Img
                          src="images/img_checkmark_lime_800.svg"
                          className="h-[24px] mr-[4px] w-[24px]"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-yellow_50 flex h-[48px] md:h-[auto] items-start justify-start pl-[16px] pr-[206px] sm:pr-[20px] md:pr-[40px] py-[12px] w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_802 text-left w-[auto]"
                            variant="body6"
                          >
                            Price: Low to High
                          </Text>
                        </div>
                      </div>
                      <div className="bg-yellow_50 flex h-[48px] md:h-[auto] items-start justify-start pl-[16px] pr-[206px] sm:pr-[20px] md:pr-[40px] py-[12px] w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_802 text-left w-[auto]"
                            variant="body6"
                          >
                            Price: High to Low
                          </Text>
                        </div>
                      </div>
                      <div className="bg-yellow_50 flex h-[48px] md:h-[auto] items-start justify-start pl-[16px] pr-[206px] sm:pr-[20px] md:pr-[40px] py-[12px] w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_802 text-left w-[auto]"
                            variant="body6"
                          >
                            Ending Soon
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="border-b-[3px] border-gray_802 border-solid border-t-[1px] border-x-[1px] flex items-center justify-center min-w-[128px] px-[24px] py-[12px] sm:px-[20px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_filter_gray_802.svg"
                        className="mr-[8px] text-center"
                        alt="filter"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[16px] text-gray_802 text-left uppercase">
                      Filter
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-fractul gap-[40px] items-start justify-start max-w-[1520px] md:ml-[0] ml-[80px] mt-[21px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Hot Auction
            </Text>
            <div className="flex font-sora items-center justify-start py-[8px] rounded-[12px] w-[auto]">
              <Text
                className="font-bold text-indigo_A400 text-left w-[auto]"
                variant="body6"
              >
                View All
              </Text>
            </div>
          </div>
          <List
            className="flex flex-row font-sora gap-[40px] grid-cols-4 justify-start w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
              <div className="bg-bluegray_900 h-[350px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[350px]"></div>
              <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Polychain Monsters"
                      name="PolychainMonsters Four"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Four"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Red car
                    </Text>
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body6"
                      >
                        6
                      </Text>
                      <Img
                        src="images/img_computer.svg"
                        className="h-[16px] w-[16px]"
                        alt="computer"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body7"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
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
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
            <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
              <div className="bg-bluegray_900 h-[350px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[350px]"></div>
              <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Polychain Monsters"
                      name="PolychainMonsters Five"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Five"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Azuki
                    </Text>
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body6"
                      >
                        6
                      </Text>
                      <Img
                        src="images/img_computer.svg"
                        className="h-[16px] w-[16px]"
                        alt="computer One"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body7"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
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
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
            <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
              <div className="bg-bluegray_900 h-[350px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[350px]"></div>
              <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Polychain Monsters"
                      name="PolychainMonsters Six"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Six"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Maxido
                    </Text>
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body6"
                      >
                        6
                      </Text>
                      <Img
                        src="images/img_computer.svg"
                        className="h-[16px] w-[16px]"
                        alt="computer Two"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body7"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.4 BUSD
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
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
            <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
              <div className="bg-bluegray_900 h-[350px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[350px]"></div>
              <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Polychain Monsters"
                      name="PolychainMonsters Seven"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Seven"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      KaijuKingz
                    </Text>
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body6"
                      >
                        6
                      </Text>
                      <Img
                        src="images/img_computer.svg"
                        className="h-[16px] w-[16px]"
                        alt="computer Three"
                      />
                    </div>
                  </div>
                </div>
                <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                <div className="flex flex-row gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body7"
                    >
                      Current bid
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
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
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
        </div>
        <div className="flex flex-col font-sora gap-[40px] items-start justify-start max-w-[1520px] md:ml-[0] ml-[80px] mt-[72px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
              <Text
                className="font-bold font-fractul text-left text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Discover
              </Text>
              <Text
                className="font-normal font-sora not-italic text-bluegray_500 text-left w-[auto]"
                variant="body6"
              >
                151146 items listed
              </Text>
            </div>
            <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
              <div className="flex items-start justify-start sm:w-[100%] w-[270px]">
                <SelectBox
                  className="bg-gray_901 font-semibold px-[16px] py-[12px] rounded-[12px] text-[14px] text-left text-white_A700 w-[100%]"
                  placeholderClassName="text-white_A700"
                  name="dropdown One"
                  placeholder="Newest"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <Button
                className="bg-gray_901 flex items-center justify-center min-w-[123px] px-[24px] py-[12px] rounded-[12px] sm:px-[20px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_filter_indigo_a400.svg"
                    className="mr-[8px] text-center"
                    alt="filter"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold text-[16px] text-indigo_A400 text-left">
                  Filter
                </div>
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
            <div className="flex items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[40px] grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Eight"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eight"
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
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body7"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.5 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Crypto Fight"
                          name="PolychainMonsters Nine"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Nine"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Extension
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_computer.svg"
                            className="h-[16px] w-[16px]"
                            alt="computer Four"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body7"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.07 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Ten"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Ten"
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
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body7"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body4"
                      >
                        0.83 BUSD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Eleven"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eleven"
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
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Twelve"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Twelve"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Impostors Genesis
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Thirteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Thirteen"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Puple flower
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Fourteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Fourteen"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Fix witch
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Magic Beasties"
                          name="PolychainMonsters Fifteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Fifteen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Extension
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_computer.svg"
                            className="h-[16px] w-[16px]"
                            alt="computer Five"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Sixteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Sixteen"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Dance boy
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Seventeen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Seventeen"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Titicinizen
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Crypto Fight"
                          name="PolychainMonsters Eighteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eighteen"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Extension
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_computer.svg"
                            className="h-[16px] w-[16px]"
                            alt="computer Six"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Nineteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Nineteen"
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
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters Twenty"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Twenty"
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
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters TwentyOne"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close TwentyOne"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Puple flower
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-start justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Polychain Monsters"
                          name="PolychainMonsters TwentyTwo"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close TwentyTwo"
                        />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Fix witch
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                  <div className="bg-bluegray_900 h-[350px] w-[350px]"></div>
                  <div className="flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                        <CheckBox
                          className="font-normal not-italic text-[14px] text-bluegray_500 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Tales of Ragnarok"
                          name="PolychainMonsters TwentyThree"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close TwentyThree"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body3"
                        >
                          Maxido
                        </Text>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body6"
                          >
                            6
                          </Text>
                          <Img
                            src="images/img_computer.svg"
                            className="h-[16px] w-[16px]"
                            alt="computer Seven"
                          />
                        </div>
                      </div>
                    </div>
                    <Line className="bg-bluegray_900 h-[1px] w-[100%]" />
                    <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
              </div>
            </div>
            <Button className="border-[1px] border-indigo_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[12px] text-[16px] text-center text-indigo_A400 w-[220px]">
              Load more
            </Button>
          </div>
        </div>
        <div className="bg-gray_900 flex flex-col font-fractul gap-[40px] items-center justify-center max-w-[1680px] mt-[108px] md:px-[20px] py-[180px] w-[100%]">
          <Text
            className="font-bold text-center text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Get the latest Blocvault updates
          </Text>
          <div className="flex font-sora items-start justify-start sm:w-[100%] w-[530px]">
            <div className="bg-gray_901 flex sm:flex-col flex-row gap-[8px] items-start justify-start px-[16px] py-[20px] rounded-[12px] w-[100%]">
              <Text
                className="flex-1 font-normal leading-[24.00px] md:max-w-[100%] max-w-[466px] not-italic text-bluegray_500 text-left"
                variant="body6"
              >
                Your Email
              </Text>
              <Img
                src="images/img_arrowright_white_a700_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="bg-black_900 flex font-sora sm:hidden items-center justify-end p-[40px] md:px-[20px] md:w-[100%] w-[94%]">
          <div className="flex flex-col items-start justify-start mt-[140px] md:w-[100%] w-[95%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[96%]">
              <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start md:w-[100%] w-[17%]">
                <Img
                  src="images/img_logo.svg"
                  className="h-[58px] w-[auto]"
                  alt="logo One"
                />
                <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-center text-white_A700 w-[auto]"
                    variant="body3"
                  >
                    Join Blocvault community
                  </Text>
                  <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_twitter.svg"
                      className="h-[40px] w-[40px]"
                      alt="twitter"
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
              <div className="flex flex-col font-fractul gap-[40px] items-start justify-start md:ml-[0] ml-[275px] w-[auto]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Marketplace
                </Text>
                <div className="flex flex-col font-sora gap-[40px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body3"
                  >
                    Home
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body3"
                  >
                    Explore
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body3"
                  >
                    Activities
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-fractul gap-[280px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:ml-[0] ml-[270px] md:w-[100%] w-[38%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[40px] items-start justify-start w-[auto]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Resources
                  </Text>
                  <div className="flex flex-col font-sora gap-[40px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body3"
                    >
                      Help Center
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
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
                  <div className="flex flex-col font-sora gap-[40px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body3"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body3"
                    >
                      Terms of Service
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-bluegray_800 h-[1px] mt-[160px] w-[100%]" />
            <Text
              className="font-normal md:ml-[0] ml-[3px] mt-[23px] not-italic text-bluegray_500 text-left w-[auto]"
              variant="body3"
            >
              © NFT-Bloc, Inc. All rights reserved.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplaceMenuPage;
