import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[9/16] max-w-[5000px] max-h-[700px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <video
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                autoPlay muted loop>
                <source src="https://forum.ve3.plus/assets/files/2024-04-28/main/main-4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                autoPlay muted loop>
                <source src="https://forum.ve3.plus/assets/files/2024-04-28/main/main-22.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 🔡 Auto Subtitles
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  With our unique Hit Gun mode, you can add subtitles to your content in any language you wish. 
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 🛑 Youtube at Your Command
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Using the URL and URL List feature, you can directly edit videos on YouTube without having to download them to your computer. Moreover, the duration of the video is irrelevant. Even from a 5-hour video, you can get the content you want in minutes.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                 🚀 Go Viral!
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Using the Viral feature, witness the unique harmony of video and audio and create unique contents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
