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
import { useNavigate } from "react-router-dom";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate1() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate2() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate3() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate4() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate5() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate6() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate7() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate8() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }
  function handleNavigate9() {
    window.location.href =
      "https://www.figma.com/file/Ju0p8MlF0wV4882At0QPvv/Untitled?node-id=0%3A1&t=yu0Qb6skIeLkTERi-0";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_900 flex font-sora items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
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
              <div className="flex flex-row sm:hidden items-start justify-start ml-[56px] w-[auto]">
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
              <div className="flex sm:flex-1 sm:hidden items-start justify-start ml-[260px] sm:w-[100%] w-[356px]">
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
                        src="images/img_minimize.svg"
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
          <div className="md:flex flex-row gap-[16px] inline sm:items-end items-start sm:justify-center justify-start max-w-[1583px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-row gap-[40px] items-start justify-start w-[auto]">
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[23%]"></div>
              <div className="bg-bluegray_900 h-[351px] rounded-[16px] w-[351px]"></div>
            </div>
            <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[167px] mt-[144px] rounded-[19px] w-[47px]">
              <Img
                src="images/img_arrowright.svg"
                className="h-[13px] w-[auto]"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-quicksand gap-[17px] items-start justify-end ml-[auto] mt-[86px] md:px-[20px] md:w-[100%] w-[95%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[76%]">
              <div className="flex flex-row gap-[4px] items-center sm:items-start justify-center sm:justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                  <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                    <Img src="images/img_music.svg" className="" alt="music" />
                  </Button>
                  <Text
                    className="font-semibold text-cyan_A700 text-left w-[auto]"
                    variant="body4"
                  >
                    AS/ENK
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
                    Sentrum/Hjørne butikker
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
                    Nisje/Hobbyist
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
                    Handle Lokale Torget
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[1px] gap-[33px] items-center sm:items-start justify-between sm:justify-start sm:m-[3px] mt-[64px] sm:p-[3px] md:w-[100100%] w-[96%] sm:w-[]">
                <List
                  className="md:flex sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 sm:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_902 flex items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                          alt="search"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[91%]">
                        <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              KONGSBERG
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              157
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left sm:w-[100%] w-[99%]"
                          variant="body4"
                        >
                          See Alt som skjer i din by, eller baare snakke med
                          nabo
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                            {" "}
                            BLI MED INNSIDEN
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="h-[346px] sm:ml-[0] relative w-[100%]">
                    <div className="absolute bg-gray_902 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] pb-[19px] right-[0] rounded-[12px] w-[96%]">
                      <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                        <div className="md:h-[145px] h-[162px] relative w-[100%]">
                          <Img
                            src="images/img_maskgroup.svg"
                            className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                            alt="Maskgroup One"
                          />
                          <Img
                            src="images/img_search_bluegray_700.svg"
                            className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                            alt="search One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                          <div className="flex flex-row gap-[28px] items-center justify-start md:w-[100%] w-[95%]">
                            <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                              <Img
                                src="images/img_send.svg"
                                className="h-[24px] w-[24px]"
                                alt="send One"
                              />
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                variant="body3"
                              >
                                HORTEN
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body6"
                              >
                                320
                              </Text>
                              <Img
                                src="images/img_profile.svg"
                                className="h-[28px] w-[60px]"
                                alt="profile One"
                              />
                            </div>
                          </div>
                          <Text
                            className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left w-[100%]"
                            variant="body4"
                          >
                            See Alt som skjer i din by, eller baare snakke med
                            nabo
                          </Text>
                          <Button
                            className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                            onClick={handleNavigate9}
                            rightIcon={
                              <Img
                                src="images/img_upload.svg"
                                className="ml-[10px] text-center"
                                alt="upload"
                              />
                            }
                          >
                            <div className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                              {" "}
                              BLI MED INNSIDEN
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_cursor.svg"
                      className="absolute h-[24px] left-[0] top-[34%] w-[24px]"
                      alt="cursor"
                    />
                  </div>
                  <div className="bg-gray_902 flex items-center justify-start sm:ml-[0] pb-[19px] rounded-[12px] w-[100%]">
                    <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                      <div className="md:h-[145px] h-[162px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                          alt="Maskgroup Two"
                        />
                        <Img
                          src="images/img_search_bluegray_700.svg"
                          className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                          alt="search Two"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                        <div className="flex flex-row gap-[53px] items-center justify-start md:w-[100%] w-[93%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send Two"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              OSLO
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              105
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile Two"
                            />
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          See Alt som skjer i din by, eller baare snakke med
                          nabo
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center mt-[18px] px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                          onClick={handleNavigate8}
                          rightIcon={
                            <Img
                              src="images/img_upload.svg"
                              className="ml-[10px] text-center"
                              alt="upload"
                            />
                          }
                        >
                          <div className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                            {" "}
                            BLI MED INNSIDEN
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray_902 flex flex-col gap-[12px] sm:gap-[] sm:gap-x-[] sm:gap-y-[] items-center sm:items-start justify-start pb-[19px] rounded-[12px] sm:w-[100px] w-[23%]">
                  <div className="h-[200px] relative w-[100%]">
                    <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                      <div className="flex flex-col gap-[27px] justify-start w-[100%]">
                        <Img
                          src="images/img_maskgroup.svg"
                          className="h-[145px] w-[auto]"
                          alt="Maskgroup Three"
                        />
                        <div className="flex flex-row gap-[7px] items-center justify-start md:ml-[0] ml-[13px] md:w-[100%] w-[83%]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_send.svg"
                              className="h-[24px] w-[24px]"
                              alt="send Three"
                            />
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body3"
                            >
                              TØNSBERG
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body6"
                            >
                              175
                            </Text>
                            <Img
                              src="images/img_profile.svg"
                              className="h-[28px] w-[60px]"
                              alt="profile Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-row items-start justify-between left-[5%] w-[57%]">
                      <Img
                        src="images/img_search_bluegray_700.svg"
                        className="h-[40px] w-[auto]"
                        alt="search Three"
                      />
                      <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[41px] md:h-[auto] items-center justify-center mt-[36px] rounded-[20px] w-[50px]">
                        <Img
                          src="images/img_arrowright_white_a700.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowright One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[90%]">
                    <Text
                      className="font-medium leading-[24.00px] text-bluegray_100 text-left w-[100%]"
                      variant="body4"
                    >
                      See Alt som skjer i din by, eller baare snakke med nabo
                    </Text>
                    <Button
                      className="border-[1px] border-blue_301 border-solid flex items-center justify-center px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
                      onClick={handleNavigate7}
                      rightIcon={
                        <Img
                          src="images/img_upload.svg"
                          className="ml-[10px] text-center"
                          alt="upload"
                        />
                      }
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-medium leading-[normal] text-[14px] text-blue_301 text-left">
                        {" "}
                        BLI MED INNSIDEN
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-fractul gap-[40px] items-start justify-start max-w-[1173px] mt-[91px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] items-center justify-between sm:m-[22px] w-[100%]">
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
                    <div className="bg-bluegray_900 h-[257px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[257px]"></div>
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
                    <div className="bg-bluegray_900 h-[257px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[257px]"></div>
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
                    <div className="bg-bluegray_900 h-[257px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[257px]"></div>
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
                    <div className="bg-bluegray_900 h-[257px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[257px]"></div>
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
              <div className="flex flex-col font-sora gap-[40px] h-[2003px] md:h-[auto] items-start justify-start max-w-[1196px] md:ml-[0] ml-[4px] mt-[91px] w-[100%]">
                <div className="flex flex-row md:gap-[40px] sm:items-center items-start justify-between sm:justify-start sm:m-[22px] w-[100%]">
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
                      151,146 items listed
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[auto]">
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
                          src="images/img_filter.svg"
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
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                    <List
                      className="flex flex-row gap-[40px] grid-cols-4 justify-start w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-gray_900 flex flex-1 flex-col items-start justify-start rounded-[12px] w-[100%]">
                        <div className="bg-bluegray_900 h-[269px] w-[269px]"></div>
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
                        <div className="bg-bluegray_900 h-[269px] w-[269px]"></div>
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
                        <div className="bg-bluegray_900 h-[269px] w-[269px]"></div>
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
                        <div className="bg-bluegray_900 h-[269px] w-[269px]"></div>
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
                    </List>
                    <div className="sm:flex sm:flex-col font-urbanist sm:h-[1166px] md:h-[278px] h-[331px] sm:items-start sm:justify-start relative md:w-[100%] w-[93%]">
                      <Text
                        className="sm:flex sm:flex-row font-semibold ml-[11px] mt-[13px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Lokale ledig
                      </Text>
                      <div className="absolute h-[331px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="flex flex-row font-quicksand md:gap-[4px] gap-[99px] sm:items-center items-start justify-start mb-[-3px] ml-[auto] mr-[39px] w-[auto] z-[1]">
                          <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                            <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_music.svg"
                                className=""
                                alt="music One"
                              />
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
                                alt="link One"
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
                                alt="location One"
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
                                alt="volume One"
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
                          className="flex sm:flex-col flex-row gap-[20px] grid-cols-4 justify-center mt-[auto] mx-[auto] sm:pr-[20px] pr-[35px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start sm:ml-[0] p-[6px] rounded-[15px] shadow-bs w-[100%]">
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
                      </div>
                    </div>
                    <div className="flex font-urbanist items-center justify-start shadow-bs1 md:w-[100%] w-[95%]">
                      <div className="flex flex-col gap-[14px] justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[40px] gap-[89px] items-start justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[89%]">
                          <Text
                            className="font-semibold md:mt-[0] mt-[32px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lokale forum
                          </Text>
                          <div className="flex flex-row font-quicksand gap-[4px] items-center justify-center sm:justify-start max-w-[767px] mb-[5px] w-[100%]">
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_music.svg"
                                  className=""
                                  alt="music Two"
                                />
                              </Button>
                              <Text
                                className="font-semibold text-cyan_A700 text-left w-[auto]"
                                variant="body4"
                              >
                                Naboforum
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[21px]"
                                  alt="link Two"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_300 text-left w-[auto]"
                                variant="body4"
                              >
                                Opplavstavler
                              </Text>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-[4px] grid grid-cols-2 w-[50%]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                  <Img
                                    src="images/img_location.svg"
                                    className=""
                                    alt="location Two"
                                  />
                                </Button>
                                <Text
                                  className="font-medium text-gray_300 text-left w-[auto]"
                                  variant="body4"
                                >
                                  Forebedring Idebank
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                  <Img
                                    src="images/img_volume.svg"
                                    className="h-[20px]"
                                    alt="volume Two"
                                  />
                                </Button>
                                <Text
                                  className="font-medium text-gray_300 text-left w-[auto]"
                                  variant="body4"
                                >
                                  Festival
                                </Text>
                              </div>
                            </List>
                          </div>
                        </div>
                        <List
                          className="flex sm:flex-col flex-row font-roboto gap-[28px] grid-cols-4 justify-center sm:justify-start pb-[31px] sm:pr-[20px] pr-[31px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[12px] rounded-[25px] shadow-bs2 w-[100%]">
                            <div className="h-[158px] relative w-[100%]">
                              <Img
                                src="images/img_breakingbadwa.png"
                                className="h-[158px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] w-[100%]"
                                alt="breakingbadwa"
                              />
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                                <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                  <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
                                  <Text
                                    className="absolute bottom-[0] font-medium right-[10%] text-left text-white_A700 sm:w-[100%] w-[71%]"
                                    variant="body3"
                                  >
                                    Horten
                                  </Text>
                                </div>
                                <div className="bg-gray_600 flex items-center justify-start mb-[11px] rounded-[10px] w-[13%]">
                                  <Img
                                    src="images/img_plus.svg"
                                    className="h-[31px] w-[auto]"
                                    alt="plus"
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
                              <div className="md:h-[58px] h-[64px] relative w-[100%]">
                                <div className="absolute bg-red_500 bottom-[0] flex items-end justify-end p-[8px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                                  <Text
                                    className="common-pointer font-black mr-[2px] text-left text-white_A700 w-[auto]"
                                    variant="body3"
                                    onClick={handleNavigate5}
                                  >
                                    Nettsted
                                  </Text>
                                </div>
                                <Text
                                  className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                                  variant="body6"
                                >
                                  In publishing and graphic design, Lorem ipsum
                                  is a placeholder text ....
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[25px] shadow-bs2 w-[100%]">
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
                                    className="absolute bottom-[0] font-medium right-[9%] text-left text-white_A700 sm:w-[100%] w-[70%]"
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
                                className="font-medium text-black_902 text-left sm:w-[100%] w-[41%]"
                                variant="body3"
                              >
                                Breaking Bad
                              </Text>
                              <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start p-[5px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                                  <Text
                                    className="common-pointer font-black my-[2px] text-left text-white_A700 w-[auto]"
                                    variant="body3"
                                    onClick={handleNavigate6}
                                  >
                                    Nettsted
                                  </Text>
                                </div>
                                <Text
                                  className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                                  variant="body6"
                                >
                                  In publishing and graphic design, Lorem ipsum
                                  is a placeholder text ....
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[19px] items-center justify-start pb-[8px] rounded-[15px] shadow-bs2 w-[100%]">
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
                                    className="absolute bottom-[0] font-medium right-[10%] text-left text-white_A700 sm:w-[100%] w-[70%]"
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
                                className="font-medium text-black_902 text-left sm:w-[100%] w-[41%]"
                                variant="body3"
                              >
                                Breaking Bad
                              </Text>
                              <div className="md:h-[58px] h-[68px] relative w-[100%]">
                                <div
                                  className="common-pointer absolute bg-red_500 bottom-[0] flex items-end justify-start right-[0] rounded-[15px] shadow-bs3 w-[auto]"
                                  onClick={handleNavigate4}
                                >
                                  <Text
                                    className="font-black my-[8px] text-left text-white_A700 w-[auto]"
                                    variant="body3"
                                  >
                                    Nettsted
                                  </Text>
                                </div>
                                <Text
                                  className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                                  variant="body6"
                                >
                                  In publishing and graphic design, Lorem ipsum
                                  is a placeholder text ....
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[23px] items-center justify-start pb-[18px] rounded-[25px] shadow-bs2 w-[100%]">
                            <div className="h-[154px] relative w-[100%]">
                              <Img
                                src="images/img_wp3891762aveng.png"
                                className="h-[154px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[15px] rounded-tr-[15px] w-[100%]"
                                alt="wp3891762aveng"
                              />
                              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[8%] w-[91%]">
                                <div className="md:h-[42px] h-[46px] relative w-[30%]">
                                  <div className="absolute bg-gray_400_90 h-[28px] inset-x-[0] mx-[auto] rounded-[14px] top-[0] w-[100%]"></div>
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
                                    className="h-[31px] w-[auto]"
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
                              <div className="h-[58px] relative w-[100%]">
                                <div className="absolute bg-red_500 bottom-[3%] flex items-end justify-start p-[5px] right-[0] rounded-[15px] shadow-bs3 w-[auto]">
                                  <Text
                                    className="font-black my-[3px] text-left text-white_A700 w-[auto]"
                                    variant="body3"
                                  >
                                    Nettsted
                                  </Text>
                                </div>
                                <Text
                                  className="absolute font-medium h-[100%] inset-[0] justify-center m-[auto] text-gray_600 text-left sm:w-[100%] w-[98%]"
                                  variant="body6"
                                >
                                  In publishing and graphic design, Lorem ipsum
                                  is a placeholder text ....
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="flex flex-col font-urbanist md:gap-[40px] gap-[83px] justify-start md:w-[100%] w-[95%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[6px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Slutter snart
                      </Text>
                      <List
                        className="sm:flex flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[13px] pr-[13px] w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_140x240.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Four"
                            />
                            <div className="absolute flex flex-row gap-[18px] items-center justify-between right-[3%] top-[6%] w-[52%]">
                              <div className="bg-gray_900_26 h-[28px] relative rounded-[14px] w-[61%]">
                                <div className="absolute bg-gray_900_26 h-[28px] inset-y-[0] my-[auto] right-[0] rounded-[14px] w-[87%]"></div>
                                <Text
                                  className="absolute bottom-[18%] font-normal inset-x-[0] mx-[auto] not-italic text-left text-white_A700 tracking-[0.12px] w-[max-content]"
                                  variant="body7"
                                >
                                  232 meldt seg
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                            <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
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
                                    alt="sort"
                                  />
                                  <Text
                                    className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                    variant="body6"
                                  >
                                    Horten
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="common-pointer bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                                onClick={handleNavigate2}
                              >
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_3.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Five"
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                            <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
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
                              <Button
                                className="common-pointer bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                                onClick={handleNavigate3}
                              >
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                          <div className="h-[140px] relative w-[100%]">
                            <Img
                              src="images/img_rectangle2044_4.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Six"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                Kun til juni
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                            <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
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
                              <Button
                                className="common-pointer bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                                onClick={handleNavigate1}
                              >
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[9px] shadow-bs w-[100%]">
                          <div className="h-[140px] relative w-[96%]">
                            <Img
                              src="images/img_rectangle2044_5.png"
                              className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Rectangle2044 Seven"
                            />
                            <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                              <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                hele året
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
                          <div className="flex flex-col gap-[18px] items-start justify-start mb-[12px] md:w-[100%] w-[90%]">
                            <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
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
                              <Button
                                className="common-pointer bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]"
                                onClick={handleNavigate}
                              >
                                Les mer
                              </Button>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Button
                    className="common-pointer border-[1px] border-indigo_A400 border-solid cursor-pointer font-bold p-[16px] rounded-[12px] text-[16px] text-center text-indigo_A400 w-[220px]"
                    onClick={() => navigate("/aktivitet")}
                  >
                    Load more
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-urbanist gap-[31px] justify-start md:mt-[0] mt-[20px] md:w-[100%] w-[24%]">
              <div className="flex flex-col gap-[44px] md:hidden items-center justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col sm:hidden outline outline-[0.5px] outline-gray_100 p-[4px] relative w-[97%]">
                  <div className="flex flex-col gap-[17px] h-[330px] items-center justify-start ml-[auto] mt-[31px] w-[330px]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] w-[97%]">
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
                    <div className="bg-white_A700 flex flex-col gap-[11px] items-start justify-start pb-[14px] px-[14px] rounded-[15px] shadow-bs4 md:w-[100%] w-[99%]">
                      <div className="md:h-[120px] h-[203px] md:ml-[0] ml-[2px] relative w-[99%]">
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
                      <Line className="bg-gray_100 h-[1px] w-[85%]" />
                      <Text
                        className="font-normal leading-[21.60px] not-italic text-gray_500 text-left tracking-[0.12px] sm:w-[100%] w-[85%]"
                        variant="body7"
                      >
                        Hvor mye Koster det å kjøre fra A til B? i henhold til
                        din biltype! f.eks oslo til halden....
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-center justify-start mb-[220px] mt-[-17.59px] mx-[auto] w-[91%] z-[1]">
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
                      className="flex-col gap-[12px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[36px] items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[59%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                      <div className="flex flex-1 flex-row gap-[16px] items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[65%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                      <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[57%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                      <div className="flex flex-1 flex-row items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[57%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                      <div className="flex flex-1 flex-row gap-[24px] items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[62%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_100 w-[78%]" />
                      <div className="flex flex-1 flex-row gap-[28px] items-end justify-between w-[100%]">
                        <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between w-[61%]">
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
                        <Button className="bg-red_500 cursor-pointer font-black font-roboto leading-[normal] min-w-[99px] mt-[10px] py-[5px] rounded-[15px] shadow-bs3 text-[18px] text-center text-white_A700 w-[auto]">
                          Nettsted
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-gray_904 flex sm:hidden items-center justify-center p-[44px] sm:px-[20px] md:px-[40px] rounded-[8px] md:w-[100%] w-[97%]">
                  <div className="flex flex-col justify-start my-[6px] md:w-[100%] w-[99%]">
                    <Img
                      src="images/img_eye.svg"
                      className="h-[61px] md:ml-[0] ml-[101px] w-[62px]"
                      alt="eye"
                    />
                    <Text
                      className="font-normal md:ml-[0] ml-[71px] mt-[19px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                      variant="body3"
                    >
                      Help Center
                    </Text>
                    <div className="flex flex-col gap-[36px] items-center justify-start mt-[18px] w-[100%]">
                      <Text
                        className="font-normal leading-[25.20px] not-italic text-center text-gray_400 tracking-[0.14px]"
                        variant="body6"
                      >
                        Having trouble in Enefti?
                        <br />
                        Please contact us for more question
                      </Text>
                      <Text
                        className="bg-white_A700 font-normal h-[49px] justify-center not-italic pb-[19px] pt-[13px] sm:px-[20px] px-[35px] rounded-[10px] text-center text-gray_903 tracking-[0.14px] w-[257px]"
                        variant="body6"
                      >
                        Go To Help Center
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-rubik md:hidden items-start justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[88%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Featured Creators
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[284px] mt-[4px] not-italic text-deep_purple_A200 text-left w-[auto]"
                  variant="body3"
                >
                  All
                </Text>
                <div className="bg-gray_101 flex flex-col items-center justify-end md:ml-[0] ml-[2px] mt-[48px] p-[20px] rounded-[40px] w-[100%]">
                  <Img
                    src="images/img_image.png"
                    className="h-[116px] md:h-[auto] mt-[20px] object-cover rounded-[58px] sm:w-[100%] w-[39%]"
                    alt="Image TwentyOne"
                  />
                  <div className="flex flex-col font-roboto gap-[7px] items-center justify-start mt-[23px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-bold text-black_902 text-center w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Join Our Community
                    </Text>
                    <Text
                      className="font-bold text-black_902 text-center"
                      variant="body6"
                    >
                      Lorem ipsum dolor sit amet, consectetur
                      <br />
                      adipiscingelit. Sed eget nulla urna
                      <br />
                      lobortis metus.
                    </Text>
                  </div>
                  <Button className="bg-deep_purple_A201 cursor-pointer font-normal leading-[normal] min-w-[235px] mt-[17px] not-italic py-[14px] rounded-[28px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[auto]">
                    Join Now
                  </Button>
                </div>
                <div className="bg-gray_101 flex sm:hidden items-center justify-start md:ml-[0] ml-[2px] mt-[27px] p-[17px] rounded-[40px] w-[100%]">
                  <div className="flex flex-col items-start justify-start mb-[10px] md:w-[100%] w-[98%]">
                    <div className="h-[127px] md:h-[91px] relative w-[100%]">
                      <Img
                        src="images/img_sharp1.png"
                        className="absolute h-[81px] inset-x-[0] mx-[auto] object-cover rounded-[10px] top-[0] w-[100%]"
                        alt="SharpOne"
                      />
                      <Img
                        src="images/img_image_91x75.png"
                        className="absolute bottom-[0] h-[91px] inset-x-[0] mx-[auto] object-cover rounded-[45px] w-[27%]"
                        alt="Image TwentyTwo"
                      />
                    </div>
                    <div className="flex flex-row font-rubik items-start justify-start mt-[11px] w-[100%]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Melody Layla
                      </Text>
                      <Img
                        src="images/img_tick.png"
                        className="h-[18px] md:h-[auto] mt-[6px] object-cover w-[6%]"
                        alt="Tick"
                      />
                      <Button className="bg-deep_purple_A200 cursor-pointer font-bold leading-[normal] min-w-[67px] ml-[69px] py-[4px] rounded-[15px] text-[20px] text-center text-white_A700 w-[auto]">
                        {" "}
                        Follow
                      </Button>
                    </div>
                    <Text
                      className="font-normal font-rubik mt-[5px] not-italic text-gray_501 text-left w-[auto]"
                      variant="body3"
                    >
                      @Melodylay
                    </Text>
                    <Text
                      className="font-normal font-roboto md:ml-[0] ml-[2px] mt-[18px] not-italic text-gray_501 text-left"
                      variant="body6"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      <br />
                      elit. Sed eget nulla urna lobortis metus.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex font-urbanist items-center justify-start max-w-[1537px] mt-[53px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[35px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
                  <Text
                    className="sm:flex sm:flex-row font-semibold sm:items-center sm:justify-start md:ml-[0] ml-[4px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Søk etter en lokale leverandør
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[40px] md:hidden sm:items-center items-end justify-between sm:justify-start w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start outline outline-[0.5px] outline-gray_100 p-[7px] rounded-[14px] md:w-[100%] w-[20%]">
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[24px] mt-[7px] md:w-[100%] w-[97%]">
                        <Img
                          src="images/img_clock_white_a700.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Four"
                        />
                        <Text
                          className="font-extrabold mt-[3px] text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body4"
                        >
                          Stedsparameter (Din eksakt by)
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between md:mt-[0] mt-[11px] md:w-[100%] w-[62%]">
                      <div className="flex items-end justify-start outline outline-[0.5px] outline-gray_100 rounded-[14px] md:w-[100%] w-[13%]">
                        <div className="flex flex-row gap-[10px] items-start justify-end mb-[19px] ml-[auto] mt-[12px] md:w-[100%] w-[86%]">
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
                      <div className="flex items-end justify-start outline outline-[0.5px] outline-gray_100 rounded-[14px] md:w-[100%] w-[13%]">
                        <div className="flex flex-row gap-[10px] items-center justify-end mb-[19px] ml-[auto] mt-[13px] md:w-[100%] w-[87%]">
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
                        className="sm:flex-col flex-row gap-[398px] md:gap-[40px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[71%]"
                        orientation="horizontal"
                      >
                        <div className="flex items-end justify-start sm:ml-[0] outline outline-[0.5px] outline-gray_100 pl-[14px] py-[14px] rounded-[14px] w-[100%]">
                          <div className="flex flex-row gap-[10px] items-start justify-end mb-[6px] ml-[auto] md:w-[100%] w-[99%]">
                            <Img
                              src="images/img_clock_white_a700.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock Five"
                            />
                            <Text
                              className="font-normal mt-[3px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                              variant="body4"
                            >
                              Price Range
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-end justify-start sm:ml-[0] outline outline-[0.5px] outline-gray_100 pl-[14px] py-[14px] rounded-[14px] w-[100%]">
                          <div className="flex flex-row gap-[10px] items-center justify-end mb-[6px] ml-[auto] md:w-[100%] w-[99%]">
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
                </div>
                <div className="flex flex-col gap-[19px] sm:h-[10px] sm:items-end items-start sm:justify-between justify-start sm:max-h-[10px] md:ml-[0] ml-[3px] md:w-[100%] w-[83%] sm:w-[]">
                  <List
                    className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 pb-[35px] w-[84%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Eight"
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
                    <div className="bg-white_A700 flex flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_193x240.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Nine"
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
                    <div className="bg-white_A700 flex flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_1.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Ten"
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
                    <div className="bg-white_A700 flex flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                      <div className="h-[193px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_2.png"
                          className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Eleven"
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
                  <div className="flex md:flex-col flex-row font-roboto md:gap-[20px] sm:inline items-start sm:items-start sm:justify-between justify-start sm:pb-[10px] pb-[63px] sm:pl-[0] sm:pr-[10px] md:pr-[40px] pr-[63px] sm:pt-[0] w-[100%]">
                    <div className="md:h-[289px] sm:h-[293px] h-[299px] md:mt-[0] mt-[4px] relative md:w-[100%] w-[21%]">
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
                              alt="plus Four"
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
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[24px] items-center justify-start mb-[3px] md:ml-[0] ml-[15px] pb-[18px] rounded-[25px] shadow-bs2 md:w-[100%] w-[20%]">
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
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-black_900 flex font-sora items-center justify-center mt-[333px] md:px-[20px] w-[100%]">
            <div className="flex items-center justify-center mb-[41px] mt-[180px] mx-[auto] w-[91%]">
              <div className="flex flex-col sm:hidden items-center justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] md:hidden items-start justify-start md:w-[100%] w-[96%]">
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
                          alt="send Four"
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
                    <ul className="flex flex-col font-sora gap-[40px] items-start justify-start md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-bluegray_500 text-left"
                          variant="body3"
                        >
                          Home
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-bluegray_500 text-left"
                          href="javascript:"
                        >
                          Explore
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[18px] text-bluegray_500 text-left"
                          href="javascript:"
                        >
                          Activities
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col font-fractul gap-[40px] items-start justify-start md:ml-[0] ml-[270px] w-[auto]">
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
                  <div className="flex flex-col font-fractul gap-[40px] items-start justify-start md:ml-[0] ml-[280px] w-[auto]">
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
                </div>
                <Line className="bg-bluegray_800 h-[1px] mt-[160px] w-[100%]" />
                <Text
                  className="font-normal md:ml-[0] ml-[3px] mt-[26px] not-italic text-bluegray_500 text-left w-[auto]"
                  variant="body3"
                >
                  © NFT-Bloc, Inc. All rights reserved.
                </Text>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
