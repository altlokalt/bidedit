import React from "react";

import { Text, Button, Img, List, Line, Input } from "components";
import { CloseSVG } from "../../assets/images";

const AktivitetPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-black_902 flex flex-col font-urbanist gap-[19px] items-start justify-start mx-[auto] p-[26px] sm:px-[20px] w-[100%]">
        <div className="bg-gray_50 flex flex-row items-center justify-start md:ml-[0] ml-[10px] p-[5px] md:px-[20px] rounded-[8px] md:w-[100%] w-[12%]">
          <Text
            className="font-normal ml-[10px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            variant="body6"
          >
            Aktivitet
          </Text>
          <Text
            className="font-normal ml-[36px] not-italic text-gray_500 text-left tracking-[0.14px] w-[auto]"
            variant="body6"
          >
            &gt;
          </Text>
          <Text
            className="font-normal ml-[8px] mt-[2px] not-italic text-gray_903 text-left tracking-[0.14px] w-[auto]"
            variant="body6"
          >
            homepage
          </Text>
        </div>
        <div className="flex font-anektamil items-center max-w-[1630px] mb-[64px] mx-[auto] pl-[4px] md:px-[20px] w-[100%]">
          <div className="md:h-[1659px] h-[2553px] relative w-[100%]">
            <div className="flex flex-col h-[100%] sm:hidden items-center justify-start ml-[6px] mt-[568px] w-[74%]">
              <div className="flex items-center justify-start md:w-[100%] w-[98%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[22px] items-center justify-start md:w-[100%] w-[92%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Lokale Selskaper
                    </Text>
                    <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_music.svg"
                            className=""
                            alt="music"
                          />
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
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[41px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 h-[313px] justify-center max-w-[1156px] shadow-bs1 w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <Img
                        src="images/img_rectangle32.png"
                        className="h-[294px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="RectangleThirtyTwo"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image2.png"
                        className="h-[294px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="imageTwo"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image3.png"
                        className="h-[294px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="imageThree"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image4.png"
                        className="h-[294px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="imageFour"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <Img
                        src="images/img_image5.png"
                        className="h-[294px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="imageFive"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex font-urbanist items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] gap-[68px] items-start justify-start md:w-[100%] w-[93%]">
                    <Text
                      className="font-semibold md:mt-[0] mt-[19px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Blanding av
                    </Text>
                    <div className="flex md:flex-col flex-row font-quicksand gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
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
                          Nærlingsform
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
                          Oppstartselskaper
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
                          Ekspertliste
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
                          Pris på produkter & tjenester
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row font-quicksand gap-[18px] sm:hidden items-start justify-between pb-[6px] w-[100%]">
                    <div className="bg-bluegray_901 flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[9px] pb-[23px] rounded-[55px] md:w-[100%] w-[22%]">
                      <div className="flex flex-col relative w-[100%]">
                        <Img
                          src="images/img_maskgroup_indigo_200.svg"
                          className="h-[111px] mx-[auto] w-[auto]"
                          alt="Maskgroup"
                        />
                        <div className="flex flex-row gap-[4px] h-[28px] md:h-[auto] items-center justify-center ml-[auto] mr-[15px] mt-[-NaNpx] w-[97px] z-[1]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body6"
                          >
                            320
                          </Text>
                          <Img
                            src="images/img_globe.svg"
                            className="h-[28px] w-[60px]"
                            alt="globe"
                          />
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center ml-[13px] mt-[-NaNpx] w-[auto] z-[1]">
                          <Img
                            src="images/img_send.svg"
                            className="h-[24px] w-[24px]"
                            alt="send"
                          />
                          <Text
                            className="font-semibold text-left text-white_A700 w-[auto]"
                            variant="body3"
                          >
                            HORTEN
                          </Text>
                        </div>
                        <Img
                          src="images/img_search_indigo_300.svg"
                          className="h-[35px] mb-[27px] ml-[13px] mt-[-17.84px] w-[auto] z-[1]"
                          alt="search"
                        />
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[4px] md:w-[100%] w-[90%]">
                        <Text
                          className="font-medium leading-[24.00px] text-bluegray_100 text-left w-[100%]"
                          variant="body4"
                        >
                          Din nabo sitter og venter på deg
                        </Text>
                        <Button
                          className="border-[1px] border-blue_301 border-solid flex items-center justify-center px-[32px] py-[16px] rounded-[8px] sm:px-[20px] text-center"
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
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[16%]">
                      <Img
                        src="images/img_image3.png"
                        className="h-[278px] md:h-[auto] object-cover rounded-[25px] w-[100%]"
                        alt="imageThree One"
                      />
                    </div>
                    <div className="font-urbanist h-[279px] md:h-[283px] mb-[6px] md:mt-[0] mt-[2px] pr-[8px] relative md:w-[100%] w-[22%]">
                      <div className="absolute bg-white_A700 flex flex-col gap-[18px] h-[max-content] inset-[0] items-start justify-center m-[auto] p-[14px] rounded-[15px] shadow-bs w-[97%]">
                        <div className="flex flex-col items-start justify-start mt-[152px] pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
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
                        <div className="flex flex-row items-center justify-between mb-[4px] w-[100%]">
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
                          <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Les mer
                          </Button>
                        </div>
                      </div>
                      <div className="absolute h-[140px] inset-x-[0] mx-[auto] top-[0] w-[93%]">
                        <Img
                          src="images/img_rectangle2044_4.png"
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
                    </div>
                    <div className="flex md:flex-1 font-quicksand items-center justify-start md:w-[100%] w-[31%]">
                      <div
                        className="bg-cover bg-gray_302 bg-no-repeat h-[264px] md:h-[572px] relative w-[100%]"
                        style={{
                          backgroundImage:
                            "url('images/img_maskgroup_264x363.png')",
                        }}
                      >
                        <Img
                          src="images/img_rectangle21.png"
                          className="h-[264px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="RectangleTwentyOne"
                        />
                        <div className="absolute bg-bluegray_200 flex inset-x-[0] items-start justify-end mx-[auto] p-[15px] rounded-[12px] top-[0] w-[100%]">
                          <div className="h-[122px] md:h-[541px] mb-[105px] mt-[314px] relative w-[86%]">
                            <div className="absolute bg-black_900_51 border-[1px] border-solid border-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[9px] rounded-[8px] w-[97%]">
                              <div className="flex flex-col gap-[30px] items-start justify-start mt-[20px] md:w-[100%] w-[89%]">
                                <div className="flex flex-row gap-[23px] items-start justify-between md:ml-[0] ml-[3px] md:w-[100%] w-[99%]">
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    17-03-2023 Kl: 14:29
                                  </Text>
                                  <Text
                                    className="font-semibold text-left text-white_A700 w-[auto]"
                                    variant="body2"
                                  >
                                    KONSERT
                                  </Text>
                                </div>
                                <Text
                                  className="font-semibold text-left text-white_A700 w-[auto]"
                                  variant="body4"
                                >
                                  GRATIS
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[0] font-semibold right-[0] text-left text-white_A700 sm:w-[100%] w-[44%]"
                              variant="body2"
                            >
                              Horten kommune
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[144px] md:mt-[0] mt-[103px] rounded-[19px] w-[47px]">
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[13px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute md:h-[1659px] h-[2553px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="absolute sm:flex font-quicksand md:h-[1659px] h-[2549px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bottom-[0] md:h-[1659px] h-[2382px] sm:hidden inset-x-[0] mx-[auto] w-[100%]">
                  <div className="absolute bottom-[3%] md:h-[1162px] h-[1180px] left-[0] md:w-[100%] w-[91%]">
                    <div className="absolute flex md:flex-col flex-row gap-[4px] items-center justify-center left-[15%] top-[0] w-[auto]">
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
                          Møteplass og Attraksjoner
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col md:flex-row font-urbanist gap-[22px] h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                      <Text
                        className="font-semibold md:ml-[0] ml-[18px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Lokale forum
                      </Text>
                      <div className="flex font-quicksand items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[383px] md:gap-[40px] justify-start w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[22px] items-start justify-start md:ml-[0] ml-[7px] md:w-[100%] w-[80%]">
                            <List
                              className="flex flex-row gap-[18px] grid-cols-4 w-[95%]"
                              orientation="horizontal"
                            >
                              <div className="bg-gray_902 flex items-center justify-start pb-[19px] rounded-[12px] w-[100%]">
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
                                          alt="profile"
                                        />
                                      </div>
                                    </div>
                                    <Text
                                      className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left w-[100%]"
                                      variant="body4"
                                    >
                                      See Alt som skjer i din by, eller baare
                                      snakke med nabo
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
                              <div className="bg-gray_902 flex items-center justify-start pb-[19px] rounded-[12px] w-[100%]">
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
                                    <div className="flex flex-row gap-[7px] items-center justify-start md:w-[100%] w-[93%]">
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
                                          alt="profile One"
                                        />
                                      </div>
                                    </div>
                                    <Text
                                      className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left w-[100%]"
                                      variant="body4"
                                    >
                                      See Alt som skjer i din by, eller baare
                                      snakke med nabo
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
                              <div className="bg-gray_902 flex items-center justify-start pb-[19px] rounded-[12px] w-[100%]">
                                <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                  <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                    <Img
                                      src="images/img_maskgroup.svg"
                                      className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                      alt="Maskgroup Three"
                                    />
                                    <Img
                                      src="images/img_search_bluegray_700.svg"
                                      className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                      alt="search Three"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                                    <div className="flex flex-row gap-[53px] items-center justify-start md:w-[100%] w-[93%]">
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
                                      See Alt som skjer i din by, eller baare
                                      snakke med nabo
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
                              <div className="bg-gray_902 flex items-center justify-start pb-[19px] rounded-[12px] w-[100%]">
                                <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                                  <div className="md:h-[145px] h-[162px] relative w-[100%]">
                                    <Img
                                      src="images/img_maskgroup.svg"
                                      className="absolute h-[145px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                                      alt="Maskgroup Four"
                                    />
                                    <Img
                                      src="images/img_search_bluegray_700.svg"
                                      className="absolute bottom-[0] h-[40px] left-[5%] w-[auto]"
                                      alt="search Four"
                                    />
                                  </div>
                                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[91%]">
                                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                                        <Img
                                          src="images/img_send.svg"
                                          className="h-[24px] w-[24px]"
                                          alt="send Four"
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
                                          alt="profile Three"
                                        />
                                      </div>
                                    </div>
                                    <Text
                                      className="font-medium leading-[24.00px] mt-[11px] text-bluegray_100 text-left sm:w-[100%] w-[99%]"
                                      variant="body4"
                                    >
                                      See Alt som skjer i din by, eller baare
                                      snakke med nabo
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
                            </List>
                            <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[190px] md:mt-[0] mt-[116px] rounded-[19px] w-[47px]">
                              <Img
                                src="images/img_arrowright.svg"
                                className="h-[13px] w-[auto]"
                                alt="arrowright One"
                              />
                            </div>
                          </div>
                          <div className="flex font-urbanist items-center justify-start w-[100%]">
                            <div className="flex flex-col justify-start w-[100%]">
                              <div className="flex flex-row md:gap-[40px] gap-[78px] items-center justify-start md:ml-[0] ml-[11px] md:w-[100%] w-[67%]">
                                <Text
                                  className="font-semibold text-left text-white_A700 tracking-[0.34px] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Lokale forum
                                </Text>
                                <div className="flex flex-row font-quicksand gap-[4px] items-center justify-center sm:justify-start w-[auto]">
                                  <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                                    <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                      <Img
                                        src="images/img_music.svg"
                                        className=""
                                        alt="music Three"
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
                                        alt="link Three"
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
                                          alt="location Three"
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
                                          alt="volume Three"
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
                              <div className="flex md:flex-col flex-row font-roboto gap-[41px] items-start justify-start pb-[31px] sm:pr-[20px] pr-[31px] w-[100%]">
                                <List
                                  className="flex flex-row gap-[28px] grid-cols-4 w-[76%]"
                                  orientation="horizontal"
                                >
                                  <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start mb-[7px] pb-[12px] rounded-[25px] shadow-bs2 w-[100%]">
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
                                            className="font-black mr-[2px] text-left text-white_A700 w-[auto]"
                                            variant="body3"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] sm:w-[100%] w-[98%]"
                                          variant="body6"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start mt-[7px] pb-[8px] rounded-[25px] shadow-bs2 w-[100%]">
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
                                            className="font-black my-[2px] text-left text-white_A700 w-[auto]"
                                            variant="body3"
                                          >
                                            Nettsted
                                          </Text>
                                        </div>
                                        <Text
                                          className="absolute font-medium inset-x-[0] mx-[auto] text-gray_600 text-left top-[0] w-[100%]"
                                          variant="body6"
                                        >
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex flex-col gap-[19px] items-center justify-start my-[3px] pb-[8px] rounded-[15px] shadow-bs2 w-[100%]">
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
                                        <div className="absolute bg-red_500 bottom-[0] flex items-end justify-start right-[0] rounded-[15px] shadow-bs3 w-[auto]">
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
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-white_A700 flex flex-col gap-[23px] items-center justify-start my-[3px] pb-[18px] rounded-[25px] shadow-bs2 w-[100%]">
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
                                          In publishing and graphic design,
                                          Lorem ipsum is a placeholder text ....
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                                <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[150px] md:mt-[0] mt-[105px] rounded-[19px] w-[47px]">
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
                    </div>
                  </div>
                  <div className="absolute bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center right-[25%] rounded-[19px] top-[25%] w-[47px]">
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[13px] w-[auto]"
                      alt="arrowright Three"
                    />
                  </div>
                  <div className="absolute flex flex-col gap-[17px] h-[100%] md:h-[auto] inset-y-[0] items-start justify-start my-[auto] right-[0] sm:w-[100%] w-[383px]">
                    <div className="flex h-[358px] items-center justify-start w-[358px]">
                      <div className="bg-gray_904 flex flex-col gap-[21px] h-[358px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[358px]">
                        <Text
                          className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Nylig lagt til
                        </Text>
                        <List
                          className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                          orientation="vertical"
                        >
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
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
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_301 text-left w-[auto]"
                                    variant="body6"
                                  >
                                    Sing Forever
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    650 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One"
                              />
                            </div>
                          </div>
                          <div className="flex relative w-[310px]">
                            <div className="flex flex-row gap-[8px] items-center justify-between ml-[undefinedpx] my-[auto] w-[auto] z-[1]">
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
                              alt="overflowmenu One"
                            />
                            <div className="flex flex-row items-center justify-between ml-[undefinedpx] mr-[auto] my-[auto] w-[310px] z-[1]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_301 text-left w-[auto]"
                                    variant="body6"
                                  >
                                    Entertaiment Hyperio
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    513 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One One"
                              />
                            </div>
                          </div>
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
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
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu Two"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_301 text-left w-[auto]"
                                    variant="body6"
                                  >
                                    Extender The Best Choice
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    427 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One Two"
                              />
                            </div>
                          </div>
                          <div className="h-[50px] relative w-[310px]">
                            <div className="absolute flex flex-row gap-[8px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
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
                              className="h-[24px] ml-[auto] my-[auto] w-[24px]"
                              alt="overflowmenu Three"
                            />
                            <div className="absolute flex flex-row h-[100%] inset-[0] items-center justify-between m-[auto] w-[310px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <div className="bg-bluegray_501 h-[50px] rounded-[50%] w-[50px]"></div>
                                <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_301 text-left w-[auto]"
                                    variant="body6"
                                  >
                                    Forever In Midnight{" "}
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                                    variant="body7"
                                  >
                                    391 assets
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_overflowmenu.svg"
                                className="h-[24px] w-[24px]"
                                alt="overflowmenu One Three"
                              />
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="bg-gray_904 flex flex-col gap-[23px] md:hidden items-start justify-end p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[94%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Our Videos
                      </Text>
                      <div className="h-[160px] relative w-[98%]">
                        <Img
                          src="images/img_image_160x302.png"
                          className="h-[160px] m-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="image Twelve"
                        />
                        <div className="absolute bg-bluegray_501 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                          <Button className="bg-white_A700_33 flex items-center justify-center outline outline-[1px] outline-white_A700 p-[10px] rounded-[15px] w-[31px]">
                            <Img
                              src="images/img_ic.svg"
                              className=""
                              alt="ic"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_904 flex md:hidden items-center justify-end p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[94%]">
                      <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Recent Viewed
                        </Text>
                        <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                            <div className="bg-bluegray_501 h-[186px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_501 h-[130px] rounded-[8px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-col gap-[16px] items-center justify-start w-[48%]">
                            <div className="bg-bluegray_501 h-[100px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_501 h-[100px] rounded-[8px] w-[100%]"></div>
                            <div className="bg-bluegray_501 h-[100px] rounded-[8px] w-[100%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="font-urbanist md:h-[262px] h-[263px] relative w-[97%]">
                      <div className="absolute bg-gray_904 h-[262px] md:hidden inset-[0] justify-center m-[auto] rounded-[8px] w-[98%]"></div>
                      <div className="absolute md:h-[243px] h-[263px] inset-y-[0] my-[auto] px-[3px] right-[0] w-[81%]">
                        <div className="absolute bg-gray_903 bottom-[0] h-[238px] left-[1%] rounded-[15px] w-[76%]"></div>
                        <div className="absolute flex flex-col items-center justify-start left-[4%] top-[0] w-[72%]">
                          <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs5 w-[50px]">
                            <Img
                              src="images/img_question.svg"
                              className="h-[24px]"
                              alt="question"
                            />
                          </Button>
                          <Text
                            className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                            variant="body3"
                          >
                            Help Center
                          </Text>
                          <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                            <Text
                              className="font-normal leading-[25.20px] not-italic text-center text-gray_400 tracking-[0.14px]"
                              variant="body6"
                            >
                              Having trouble in Enefti?
                              <br />
                              Please contact us for more question
                            </Text>
                            <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_903 tracking-[0.14px] w-[auto]">
                              Go To Help Center
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col font-urbanist md:hidden outline outline-[0.5px] outline-gray_100 p-[4px] relative w-[94%]">
                      <div className="flex flex-col gap-[17px] h-[330px] items-center justify-start ml-[auto] mt-[30px] w-[330px]">
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
                        <div className="bg-white_A700 flex flex-col items-start justify-start pb-[14px] px-[14px] rounded-[15px] shadow-bs4 md:w-[100%] w-[99%]">
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
                            Hvor mye Koster det å kjøre fra A til B? i henhold
                            til din biltype! f.eks oslo til halden....
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-center justify-start mb-[217px] mt-[-21.41px] mx-[auto] w-[91%] z-[1]">
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
                                  className="font-normal mt-[4px] not-italic text-gray_500 text-left tracking-[0.12px] w-[auto]"
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
                  </div>
                </div>
                <div className="absolute bottom-[20%] font-urbanist md:h-[278px] h-[331px] sm:hidden left-[0] md:w-[100%] w-[66%]">
                  <Text
                    className="md:flex md:flex-col font-semibold ml-[11px] mt-[13px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Lokale ledig
                  </Text>
                  <div className="absolute h-[331px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="flex flex-row font-quicksand gap-[4px] items-center justify-center mb-[-3px] ml-[auto] mr-[4px] w-[auto] z-[1]">
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_music.svg"
                            className=""
                            alt="music Four"
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
                            alt="link Four"
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
                            alt="location Four"
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
                            alt="volume Four"
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
                      className="flex flex-row gap-[20px] grid-cols-4 justify-center mt-[auto] mx-[auto] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 One"
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
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_193x240.png"
                            className="h-[193px] m-[auto] object-cover rounded-[12px] w-[100%]"
                            alt="Rectangle2044 Two"
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
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_1.png"
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
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                        <div className="h-[193px] relative w-[100%]">
                          <Img
                            src="images/img_rectangle2044_2.png"
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
                <div className="absolute font-urbanist h-[561px] inset-x-[0] mx-[auto] top-[0] md:w-[100%] w-[99%]">
                  <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                    <div className="flex flex-col md:gap-[40px] gap-[77px] items-center justify-start w-[100%]">
                      <div className="flex md:h-[125px] h-[132px] sm:h-[85px] justify-end p-[3px] relative md:w-[100%] w-[53%]">
                        <div className="bg-white_A700 h-[79px] mb-[6px] mt-[auto] mx-[auto] outline outline-[0.5px] outline-gray_100 w-[99%]"></div>
                        <div className="absolute bottom-[11%] flex md:flex-col flex-row gap-[11px] inset-x-[0] items-center justify-start mx-[auto] w-[94%]">
                          <List
                            className="sm:flex-col flex-row gap-[11px] grid grid-cols-3 md:w-[100%] w-[43%]"
                            orientation="horizontal"
                          >
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_100 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_100 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_reply.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="reply"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                  variant="body4"
                                >
                                  On Going
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_100 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_100 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_user_black_901.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                  variant="body4"
                                >
                                  Category
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] sm:ml-[0] outline outline-[0.5px] outline-gray_100 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_100 rounded-[14px] w-[95%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-center justify-start right-[0] top-[25%] w-[85%]">
                                <Img
                                  src="images/img_signal.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="signal"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                  variant="body4"
                                >
                                  Collection
                                </Text>
                              </div>
                            </div>
                          </List>
                          <List
                            className="sm:flex-col flex-row gap-[198px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[56%]"
                            orientation="horizontal"
                          >
                            <div className="h-[57px] outline outline-[0.5px] outline-gray_100 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_100 rounded-[14px] w-[92%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-start justify-start right-[0] top-[25%] w-[87%]">
                                <Img
                                  src="images/img_clock_black_901.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock One"
                                />
                                <Text
                                  className="font-normal mt-[3px] not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                  variant="body4"
                                >
                                  Price Range
                                </Text>
                              </div>
                            </div>
                            <div className="h-[57px] outline outline-[0.5px] outline-gray_100 relative rounded-[14px] w-[100%]">
                              <div className="absolute h-[57px] inset-y-[0] left-[0] my-[auto] outline outline-[0.5px] outline-gray_100 rounded-[14px] w-[92%]"></div>
                              <div className="absolute flex flex-row gap-[10px] items-center justify-start right-[0] top-[25%] w-[87%]">
                                <Img
                                  src="images/img_menu_black_901.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="menu"
                                />
                                <Text
                                  className="font-normal not-italic text-black_901 text-left tracking-[0.16px] w-[auto]"
                                  variant="body4"
                                >
                                  Filter & Sort
                                </Text>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[5px] text-left text-white_A700 tracking-[0.34px] w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Slutter snart
                        </Text>
                        <div className="flex md:flex-col flex-row gap-[9px] items-start justify-start pb-[21px] sm:pr-[20px] pr-[21px] w-[100%]">
                          <List
                            className="flex flex-row gap-[19px] grid-cols-4 w-[69%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                              <div className="h-[140px] relative w-[100%]">
                                <Img
                                  src="images/img_rectangle2044_140x240.png"
                                  className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                                  alt="Rectangle2044 Five"
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
                                  <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                              <div className="h-[140px] relative w-[100%]">
                                <Img
                                  src="images/img_rectangle2044_3.png"
                                  className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                                  alt="Rectangle2044 Six"
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
                                  <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs w-[100%]">
                              <div className="h-[140px] relative w-[100%]">
                                <Img
                                  src="images/img_rectangle2044_4.png"
                                  className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                                  alt="Rectangle2044 Seven"
                                />
                                <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                                  <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Kun til juni
                                  </Button>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock.svg"
                                      className=""
                                      alt="clock Four"
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
                                  <Button className="bg-gray_903 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    Les mer
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 flex flex-col gap-[20px] items-center justify-start p-[6px] rounded-[9px] shadow-bs w-[100%]">
                              <div className="h-[140px] relative w-[96%]">
                                <Img
                                  src="images/img_rectangle2044_5.png"
                                  className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                                  alt="Rectangle2044 Eight"
                                />
                                <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                                  <Button className="bg-gray_900_26 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                                    hele året
                                  </Button>
                                  <Button className="bg-gray_900_26 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                                    <Img
                                      src="images/img_clock.svg"
                                      className=""
                                      alt="clock Five"
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
                                        alt="sort Four"
                                      />
                                      <Text
                                        className="font-normal not-italic text-black_901 text-left tracking-[0.14px] w-[auto]"
                                        variant="body6"
                                      >
                                        Horten
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
                          <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[131px] md:mt-[0] mt-[107px] rounded-[19px] w-[47px]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[13px] w-[auto]"
                              alt="arrowright Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-start justify-between mx-[auto] top-[7%] w-[100%]">
                    <div className="flex md:flex-1 font-quicksand items-center justify-start md:w-[100%] w-[69%]">
                      <div className="flex flex-col md:gap-[40px] gap-[78px] justify-start w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Velbekomme, Ainar
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_200 text-left w-[auto]"
                            variant="body4"
                          >
                            Gled deg . Su vil ikke tror det eksisterte der du
                            bor
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between ml-[auto] md:w-[100%] w-[83%]">
                          <div className="flex md:flex-col flex-row gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_music.svg"
                                  className=""
                                  alt="music Five"
                                />
                              </Button>
                              <Text
                                className="font-semibold text-cyan_A700 text-left w-[auto]"
                                variant="body4"
                              >
                                Music Concert
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_link.svg"
                                  className="h-[21px]"
                                  alt="link Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_300 text-left w-[auto]"
                                variant="body4"
                              >
                                Clubbing Party
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_location.svg"
                                  className=""
                                  alt="location Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_300 text-left w-[auto]"
                                variant="body4"
                              >
                                Games Live
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                              <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                                <Img
                                  src="images/img_volume.svg"
                                  className="h-[20px]"
                                  alt="volume Five"
                                />
                              </Button>
                              <Text
                                className="font-medium text-gray_300 text-left w-[auto]"
                                variant="body4"
                              >
                                Festival
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body7"
                            >
                              Show More
                            </Text>
                            <Img
                              src="images/img_arrowright_gray_300.svg"
                              className="h-[18px] w-[18px]"
                              alt="arrowright Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal font-outfit not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left tracking-[0.14px] w-[100%]"
                      wrapClassName="bg-white_A700 border-[1px] border-gray_303 border-solid flex mb-[115px] md:mt-[0] md:w-[100%] mt-[43px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[22%]"
                      name="SearchInput"
                      placeholder="Search items, collections, and users"
                      prefix={
                        <Img
                          src="images/img_search_gray_500.svg"
                          className="cursor-pointer mr-[16px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#93989a"
                            className="cursor-pointer ml-[10px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                    ></Input>
                  </div>
                </div>
              </div>
              <Button
                className="absolute flex items-center justify-center outline outline-[0.5px] outline-gray_100 pl-[16px] pr-[13px] py-[20px] right-[4%] rounded-[14px] text-center top-[0]"
                leftIcon={
                  <Img
                    src="images/img_clock_white_a700.svg"
                    className="mr-[10px] text-center right-[1%] absolute"
                    alt="clock"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-extrabold font-urbanist text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Stedsparameter (Din eksakt by)
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AktivitetPage;
