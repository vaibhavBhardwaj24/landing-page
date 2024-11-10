import "./App.css";
import Navbar from "./component/navbar";
import { Building, ChevronRight, University } from "lucide-react";

function App() {
  return (
    <div className="h-full w-screen flex flex-col">
      <span className="w-screen bg-topBlue flex justify-center items-center text-lg font-semibold h-16">
        Learn coding at the nearby {"   "}
        <span className="inline text-specialBlue ">Coding Pro</span> Institute.
        {"   "}
        <span className="inline text-specialBlue underline">Enquire now</span>
      </span>
      <Navbar />
      <section className="w-screen h-screen flex flex-col">
        <div className="flex px-28 py-10">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6e7/2989/38506939c717340be898d2578dbd1a62?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pMJPtYkYoGxYw1-5OmSKZpJDsv6lA5Z0wWR3l6GDxcHpVUkhDSfyM5T93eTJBSdSocib8pBGEukob2xvm-0iShK-E18ZIIZoE8OMFpUc-suZRMS2z4AwVQODG-q3aST9fZ3-LPkfxamONc-KzpuBp3e8dgkUBLwBORHFpRf8mpU6rykoZqLe8OA22o0~q~WNPq4Yuj37qmuz-FwD38TVDhfKaVb0j6EWLkAZVOtfVLHUPnKGTm-29r-OpW8wdzlMzIwVwW4k4LHKqGLRbUxftrEp164s15CWqyTUEwcOpEH~z4PSPZj9xtuSeAR9i6Uby21zlja4ELv972NERRBxYg__"
            alt="mac"
            className="h-[484px] "
          />
          <span>
            <p className="text-7xl font-bold text-textColor">
              Where The World Learns To Code
            </p>
            <span className="w-full flex justify-evenly py-10">
              <div className="h-[263px] w-[289px] border-2 border-specialBlue rounded-xl flex justify-center items-center flex-col gap-2">
                <University className="text-specialBlue size-14" />
                <p className="text-specialBlue text-2xl">Campus Training</p>
                <p className="font-thin text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, perferendis vitae distinctio sint sequi repellat
                </p>
                <button className="w-[164px] h-[53px] px-14 py-4 text-white flex justify-center items-center bg-specialBlue rounded-2xl text-2xl">
                  Explore <ChevronRight className="text-white inline size-5" />
                </button>
              </div>
              <div className="h-[263px] w-[289px] border-2 border-specialBlue rounded-xl flex justify-center items-center flex-col gap-2">
                <Building className="text-specialBlue size-14" />
                <p className="text-specialBlue text-2xl">
                  Professional Training
                </p>
                <p className="font-thin text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, perferendis vitae distinctio sint sequi repellat
                </p>
                <button className="w-[164px] h-[53px] px-14 py-4 text-white flex justify-center items-center bg-specialBlue rounded-2xl text-2xl">
                  Explore <ChevronRight className="text-white inline size-5" />
                </button>
              </div>
            </span>
          </span>
        </div>
        <span className="w-screen flex justify-evenly">
          <div className="w-[280px] h-[122px] flex justify-center items-center border-2 border-specialBlue rounded-xl">
            <img
              src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/9ef8985dd5d404395c93d8a5b5759b3f527700cc"
              alt=""
              className="h-[109px]"
            />
            <p className="text-specialBlue text-3xl font-bold text-wrap">
              50+ Cities
            </p>
          </div>
          <div className="w-[280px] h-[122px] flex justify-center items-center border-2 border-specialBlue rounded-xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/2626/76a5/be7177d6615a51b866cfbce17d01a3e9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q41cpdwNEQVKYeXfGzNmWEJ2QgoMJ2B37E~NwIuPaeSPIAzZd~DH0PkBbts54It8Vhsiv5yhl~coO1uGyZLtyK2uAJ8F1wlUkkwGU23N-FDfo7YagT8sD3Pc4wuC4Ni~QzdVKxO2r3MB7qq-5SxlBLCbgPdwMQH~SpQZeCwwcJ~ZcsRkqlcdWgolU7DqProDaTin~asAKadRuuNh73vIejL5GvYNK0g99C1rZxSlCMUqt0TkiK~TjnMlH-jxhkWsqk7NqpMUwftcx-2wQbPC~kUk0Y87Rqqpyuq6kmxdU~WljRuOYuie4P6ClUbxOBppK-AU16GpBPsfCBPCiIIjSg__"
              alt=""
              className="h-[109px]"
            />
            <p className="text-specialBlue text-3xl font-bold text-wrap">
              80+ Modules
            </p>
          </div>
          <div className="w-[280px] h-[122px] flex justify-center items-center border-2 border-specialBlue rounded-xl">
            <img
              src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/ca7562dcf6ab2bda6396c038478bc7e8bac9ff4d"
              alt=""
              className="h-[109px]"
            />
            <p className="text-specialBlue text-3xl font-bold text-wrap">
              10K+ Students
            </p>
          </div>
          <div className="w-[280px] h-[122px] flex justify-center items-center border-2 border-specialBlue rounded-xl">
            <img
              src="https://s3-alpha-sig.figma.com/img/a450/7d8e/c681d13666c4cd13e403567a7e2adf4c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MX1ZQ4F6EXKmsAZNiP7Q7coBC9xWvM07oA2OdjDM52cni08-X86QGBk1pQUFc2BhgMzt9z70O9QUn7oOnr5yHsUDd1afQGD36ScHuY2mO9WXHKuOzvpwK6TG1JKikL3360X3MgyNY4RMW1GBOirdmaVwr8kWj2lY1k7bdDlas8R08p6B7qNqehiU0LAaq2LlVUzGPk1cJgmy2MxwipPtHV5xOfgTFuZi1Ux6NolXUC7Xe8Go0Z4fUl4Ihi17Vfx0Ho5t2XZ7LsDqTjaK-cR4xsip0Juz1gjaGMgInGH0bDRjK6~y1sKGauyhDVv4wh7jjyN3uQ6~SrbMterDxncHeg__"
              alt=""
              className="h-[109px]"
            />
            <p className="text-specialBlue text-3xl font-bold text-wrap">
              100+ Companies
            </p>
          </div>
        </span>
      </section>

      <section className="w-screen flex flex-col justify-evenly items-center p-12 bg-lightestBlue">
        <p>Recognised by</p>
        <div className="w-screen flex  justify-evenly items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/a234/52c8/cce5f0cb80a82f17d5604bc3db906bcc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecSzCWuKYoF6vGF-Jr1cqZ29BQxglmER0-~UJiFeI3XzW8vIzkG-N4~Pgc5pPHqCQtOKf~yoXyOzzRyxYVycc6RzJW~CiA6ntUEhxSRpZFRXddxUhe-LfEPcqXPI5JCscaaiAK147Ei7gIM9b8XiUBbFZXfc-qrg3ksUKv0muSnxZiJjBu19xB2Yn-zkRItUK-Jvee8-VWttc3oIcTmfB56JoZYFg4ofREoGVSKDp4YgeClYvHaryCBBoGjC3dSXM4Ew5vkWneld2AUuGI34NDwpUj71XDK40gDm5jm8rvQ8FP9iKZDs70vdaGQOf-fa-CSh6fpfhORkO-qPB69wlQ__"
            alt=""
            className="w-56"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/db8f/8eea/2f78e02fc175395eb8601bb264e73f89?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2O-eRqHoYNBDrGJCskL40hPQ1SUK2LQbTh8hDz~th2~i6FkSBJlOvxT3S-60X2oAjoh8TwLWl8qWwSYWj~xSs8MsW8GSIEhUp68cpm7aKQtYFSLz~~Kz2BIJczKWqHbsejK-~Ra9x5AlJXUaxtrbfkfXq08KkIE-Osi605x-90ntPUX4o-EMq34WGD6G2PwSut3LaVuhV9qpgDjhWPLkiTwRG-5c~kh-RNwbFbr3IQhn~E3kgxt9masVQDMPqjceckOeyz2oqbrK5rUWM8DUTWM1qIS4i5yn~JwKEMRHfZf6mOJEIXl-1ANtuWZbmtqUrMmV2NAkBFrsac2aZ-iQw__"
            alt=""
            className="w-56"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/04aa/cb84/7189343a85161128d28adebaeae502c0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YR~hHYwIP1umrJze9Kf0EYbsV5~P7u-5NK1LlbSOpfkizTRxN2CQQJPL62p8p-9b0C54DdgsW8b6lqb-qlNQpWp3CVYUAiKYMkc50F~bMRfKiMOSZonO52vLyHUbVj8mhJ8cnqcnBw2TEuoDtvhb1b4rx8e6ihaWWHldJulYaKq0TDyMfWRN6f2e4krOTLZE58IexNuTD0ArW7Y-mVtb7~MN67qZntm8GehPCepg-0E614ymDxk4lrKWm6YtPRGCuqqCZ9tTBbLKTUP38L2hO33rT15zcsL7ubvgAO2NjN~tMqMYLGgmALSxaggYbEJy9gJ0MkozjGfuRfEQdP0v1A__"
            alt=""
            className="w-56"
          />
        </div>
      </section>
      <section className="h-screen w-screen p-10 bg-specialBlue flex flex-col items-center">
        <p className="w-4/5 items-start flex pb-10 text-white text-5xl font-semibold p-2">
          What sets us apart?
        </p>
        <div className="w-4/5 flex justify-center items-center">
          <div className="grid grid-cols-3 w-full gap-10">
            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://s3-alpha-sig.figma.com/img/eea3/38e9/92fc48dd775a5e49c69d9df9585a1abb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtQ9HnAxY4jUkLS8y7fq1OySx35NTo7QO9NnaIkGnnCIN4GfGoXT9yEKFEo3jRa8-dbHH97qpMWT0tYP1pKi8ZTGAuY0tX1no~FsoNH~W1Zp6Z71dCai6Ad-fgESWe6zACjrhJzY3PIfXsSWGTZkFKbW83wIeyIre2vI~ulefzgQ7-KAczATSZKq~m6fNzUmGt~nApR9ULS~gnyCJCoHpJx9ntnkA15MNGCZ~ci6FFqz1JiYl~hw1CvFhNS90Ibqvx6MvFGva1bqTXCq3vHCue-mYq-ilg06ROb72~z4C3qQIE~e9cL2RRyA37bDFIMibuUUvAyrm6~KnNfXXI~F8A__"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>
            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/48703435fa2691a9b7e790bd627b69d28a6429f7"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>
            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/2b4fe0c039130d10b6cd8848224495f06e826e35"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>

            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/be98a4869b8c23dfc8f0e3101076c9ba4ddaf793"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>
            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://s3-alpha-sig.figma.com/img/3030/5f0d/8173eab36b43c71b03e4ac4e9b711ad3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T~crn-cdS-V0C1fxz2HOsBJVVHg7tdBsVV2kKykamErWdeIKgenfXHFZRrERRunYlJYmF8Nj~zi1ZWR85lnpDANkeMW7lF73UIx~QjN6RVfvlPMAXltrzmfuOP-tZpSPkmMl7L-FbwZLlJLO1zPeyni5CsvbddkuQjCmta4b3BjNWKO9HtDzqJWQJecYh9rd-BbGp1HJq1h2uNE1TV2TyUD07zAppoWgp~oSD7R06U6PA9t1oHmdkhsS9AvMhJS92wLjclynaFg0Fb1Xipt-CgGAHxpUvaux5bXVGdvtv7~IMePmvEp6IQePhR5Fhg0TbYXZeTFSX3STygGptF~Zyg__"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>
            <div className="h-[280px] w-[372px] rounded-2xl p-5 bg-white">
              <img
                src="https://www.figma.com/file/Q5rvp4olQH21yyeD0T3Liv/image/f95b9dad0e9d75812f5b35c3390b920b02b91f9a"
                alt=""
                className=" w-[138px]"
              />
              <p className="text-specialBlue text-2xl">
                Created by IIT-IIM Alumni
              </p>
              <span className="text-sm px-5 text-textColor">
                We’ve learnt from the best and strive to bring you the best.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
