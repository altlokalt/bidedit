import React from "react";

import {
  Img,
  Text,
  Input,
  Button,
  List,
  CheckBox,
  Line,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const HoverAccountPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_900 flex flex-col font-sora items-center justify-end mx-[auto] w-[100%]">
        <div className="md:h-[479px] sm:h-[503px] h-[528px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex flex-col md:gap-[40px] gap-[64px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="flex h-[88px] justify-end relative w-[100%]">
              <Img
                src="images/img_cursor.svg"
                className="h-[24px] mb-[25px] ml-[auto] mr-[76px] mt-[auto] w-[24px]"
                alt="cursor"
              />
              <div className="absolute bg-gray_900 flex flex-row h-[100%] inset-[0] items-center justify-center m-[auto] p-[16px] w-[100%]">
                <div className="flex sm:flex-col flex-row md:gap-[20px] items-start justify-start ml-[64px] mt-[8px] w-[93%]">
                  <Img
                    src="images/img_logo.svg"
                    className="h-[32px] sm:mt-[0] mt-[4px] w-[auto]"
                    alt="logo"
                  />
                  <div className="flex flex-row items-start justify-start sm:ml-[0] ml-[56px] w-[auto]">
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
                  <div className="flex items-start justify-start sm:ml-[0] ml-[220px] sm:w-[100%] w-[356px]">
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
                  <div className="sm:h-[240px] md:h-[40px] h-[48px] sm:ml-[0] ml-[24px] relative sm:w-[100%] w-[32%]">
                    <div className="absolute flex sm:flex-col flex-row gap-[16px] inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Button className="flex h-[40px] items-center justify-center p-[8px] rounded-[12px] w-[40px]">
                          <Img
                            src="images/img_minimize_7.svg"
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
                        <Button
                          className="bg-gray_901 flex items-center justify-center min-w-[137px] px-[16px] py-[8px] rounded-[12px] text-center w-[auto]"
                          leftIcon={
                            <Img
                              src="images/img_close.svg"
                              className="mr-[4px] text-center"
                              alt="close"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-left text-white_A700">
                            BNB Chain
                          </div>
                        </Button>
                        <Button className="bg-indigo_A400 cursor-pointer font-bold px-[16px] py-[8px] rounded-[12px] text-[14px] text-center text-white_A700 w-[178px]">
                          Create NFT
                        </Button>
                      </div>
                      <Img
                        src="images/img_file_bluegray_900.svg"
                        className="h-[40px] rounded-[8px] w-[40px]"
                        alt="file"
                      />
                    </div>
                    <Img
                      src="images/img_cursor.svg"
                      className="absolute bottom-[0] h-[24px] right-[0] w-[24px]"
                      alt="cursor One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[40px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
            </div>
          </div>
          <div className="absolute bg-gray_901 bottom-[0] flex flex-col gap-[16px] md:hidden items-start justify-start p-[16px] right-[5%] rounded-[12px] w-[auto]">
            <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
              <Img
                src="images/img_avatar.svg"
                className="h-[40px] rounded-[8px] w-[40px]"
                alt="volume"
              />
              <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body7"
                >
                  0x6c4F...Dd12
                </Text>
                <Text
                  className="font-semibold text-indigo_A400 text-left w-[auto]"
                  variant="body6"
                >
                  View Profile
                </Text>
              </div>
            </div>
            <div className="bg-bluegray_900 flex flex-col gap-[8px] items-center justify-start pb-[12px] pt-[16px] px-[16px] rounded-[12px] w-[253px]">
              <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_ticket.svg"
                    className="h-[24px] w-[24px]"
                    alt="ticket"
                  />
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    BUSD
                  </Text>
                </div>
                <Text
                  className="font-semibold text-right text-white_A700 w-[auto]"
                  variant="body6"
                >
                  10,2 BUSD
                </Text>
              </div>
              <div className="flex items-center justify-center py-[8px] rounded-[12px] w-[100%]">
                <Text
                  className="font-bold text-indigo_A400 text-left w-[auto]"
                  variant="body6"
                >
                  Add funds with card
                </Text>
              </div>
            </div>
            <List
              className="bg-gray_901 flex-col gap-[12px] grid items-start rounded-[12px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 items-center justify-start my-[0] pr-[16px] py-[8px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_camera_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="camera"
                  />
                  <Text
                    className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    My NFTs
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start my-[0] pr-[16px] py-[8px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_menu_white_a700_20x20.svg"
                    className="h-[20px] w-[20px]"
                    alt="menu"
                  />
                  <Text
                    className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    My Collection
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start my-[0] pr-[16px] py-[8px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_car.svg"
                    className="h-[20px] w-[20px]"
                    alt="car"
                  />
                  <Text
                    className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    My Coupon
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start my-[0] pr-[16px] py-[8px] w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_settings_white_a700.svg"
                    className="h-[20px] w-[20px]"
                    alt="settings"
                  />
                  <Text
                    className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body6"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex items-center justify-center py-[8px] rounded-[12px] w-[100%]">
              <Text
                className="font-bold text-indigo_A400 text-left w-[auto]"
                variant="body6"
              >
                Logout
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-fractul gap-[40px] sm:hidden items-start justify-start max-w-[1520px] mt-[37px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Hot Collections
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
            className="sm:flex-col flex-row font-sora gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  1
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Impostors Genesis
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gray_900 flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  2
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark One"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Azuki
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  3
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_avatar.svg"
                    className="h-[64px] w-[64px]"
                    alt="volume One"
                  />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      KaijuKingz
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  4
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_avatar.svg"
                    className="h-[64px] w-[64px]"
                    alt="volume Two"
                  />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Kiwami
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  5
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark One"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Gold VIP Access Pass
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  6
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark One One"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Jenny Wilson
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  7
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark Two"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Impostors Genesis
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  8
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark One Two"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Annette Black
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  9
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_avatar.svg"
                    className="h-[64px] w-[64px]"
                    alt="volume Three"
                  />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Gold VIP Access Pass
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  10
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Impostors Genesis
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  11
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_avatar.svg"
                    className="h-[64px] w-[64px]"
                    alt="volume Four"
                  />
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Marvin McKinney
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body3"
                >
                  12
                </Text>
                <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex h-[64px] items-end justify-end p-[2px] w-[64px]"
                    style={{ backgroundImage: "url('images/img_avatar.svg')" }}
                  >
                    <Img
                      src="images/img_checkmark_teal_a401.svg"
                      className="h-[24px] mt-[36px] w-[24px]"
                      alt="checkmark One Three"
                    />
                  </div>
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      Gold VIP Access Pass
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                      variant="body6"
                    >
                      $26,750.07
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex flex-col font-fractul gap-[40px] items-start justify-start max-w-[1520px] mt-[164px] mx-[auto] md:px-[20px] w-[100%]">
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
            className="flex sm:flex-col flex-row font-sora gap-[40px] grid-cols-4 justify-start w-[100%]"
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
                      name="PolychainMonsters"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close"
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
                      name="PolychainMonsters One"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close One"
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
                      name="PolychainMonsters Two"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Two"
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
                      name="PolychainMonsters Three"
                    ></CheckBox>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close Three"
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
        <div className="flex flex-col font-sora gap-[40px] items-start justify-start max-w-[1520px] mt-[72px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
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
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[24px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex items-start justify-start sm:w-[100%] w-[270px]">
                <SelectBox
                  className="bg-gray_901 font-semibold px-[16px] py-[12px] rounded-[12px] text-[14px] text-left text-white_A700 w-[100%]"
                  placeholderClassName="text-white_A700"
                  name="dropdown"
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
          <div className="flex flex-col md:gap-[40px] gap-[80px] items-center justify-start w-[100%]">
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
                          name="PolychainMonsters Four"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Four"
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
                          name="PolychainMonsters Six"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Six"
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
                          name="PolychainMonsters Seven"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Seven"
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
                          name="PolychainMonsters Nine"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Nine"
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
                          name="PolychainMonsters Eleven"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eleven"
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
                          name="PolychainMonsters Fourteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Fourteen"
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
                          name="PolychainMonsters Fifteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Fifteen"
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
                          name="PolychainMonsters Eighteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Eighteen"
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
                          name="PolychainMonsters Nineteen"
                        ></CheckBox>
                        <Img
                          src="images/img_close.svg"
                          className="h-[24px] w-[24px]"
                          alt="close Nineteen"
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
        <div className="bg-gray_900 flex flex-col font-fractul gap-[40px] items-center justify-center max-w-[1680px] mt-[108px] py-[180px] w-[100%]">
          <Text
            className="font-bold text-center text-white_A700 w-[auto]"
            as="h2"
            variant="h2"
          >
            Get the latest Blocvault updates
          </Text>
          <div className="flex font-sora items-start justify-start md:px-[20px] sm:w-[100%] w-[530px]">
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
        <div className="bg-black_900 flex font-sora sm:hidden items-center justify-end p-[40px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col items-start justify-start max-w-[1520px] mt-[140px] mx-[auto] md:px-[20px] w-[100%]">
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

export default HoverAccountPage;
