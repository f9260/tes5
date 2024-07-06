import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | VE3.Plus",
  description: "",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                 Frequently Asked Questions
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Are all features of VE3.Plus active?
                    </li>
                    VE3.Plus has modes, sub-modes and common features.

                    The sub-modes are internally stable, but development is ongoing to make them compatible with common features(<Link href="https://forum.ve3.plus/p/1-test" target="_blank"><span style={{ color: 'red' }}>View list</span></Link>). For this reason, for the time being, it is recommended to make use of submods only internally.

                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    What is sub-mode?
                    </li>

                     Single, Multi, Boost and Hit Gun refer to the main modes. 

                      Hit Gun has sub-modes called Factory, Viral, Wide, Render and Subtitles. 

                      These features can also have different sub-modes within themselves. For example Factory {'>'} Sync.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                      Are There Usage Limitations?
                    </li>

                    Yes. There are limits on some features.
                    The main reason for these limits is technical development processes.
                    Limits will be reduced as improvements continue.
                    A few examples of limitations are, "The URL List feature cannot be used in Regular mod.",
                    "Only 1 video can be processed in Regular mod.",
                    "If the number of "Sounds" and "How Many" is more than 1, a maximum of 2 URLs can be entered for now." etc.
                    You may encounter warnings about such limitations while using the system.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    What should I do if I get an error?
                    </li>

                    First, you should make sure that <b>the data you have entered is correct.</b>
                    For example, you should check the <b>duration settings, parameters used, incorrect comma usage, etc.</b>
                
                    If there is no problem with the data you entered,

                    If you are a license owner, you can write to <Link href="https://forum.ve3.plus/d/16-premium-and-advantages" target="_blank"><span style={{ color: 'yellow' }}> <b>Premium Support</b></span></Link>. A private conversation will be initiated as soon as possible, 
                    where detailed checks will be provided. If you are not a licensed user, you can share which operations you are getting an error while performing in the topic related to the mod you are processing in the <Link href="https://forum.ve3.plus/" target="_blank"><span style={{ color: 'red' }}><b>Forum</b></span></Link>. 

                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    How many computers is 1 license used on?
                    </li>
                    Unless otherwise stated, 1 license can be used on 1 computer.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                      How long is the license period?
                      
                    </li>
                    The license period is 30 days. After 30 days, you need to renew your license to continue use.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    Can I run multiple applications on one computer?
                    </li>
                    No. More than one .exe cannot be run at the same time.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                    What is the real price of the product?
                    </li>
                    300 dollars + platform commission. Prices below 300 dollars are for a temporary period.
                    <li className="mb-2 text-base font-medium text-[#9ca3af] sm:text-lg lg:text-base xl:text-lg">
                      What are the system features of the computer on which the tutorial videos are created?
                    </li>


                    Recordings were created with <span style={{ color: 'lime' }}><b>DELL G3-3579 Laptop</b></span>.

                    <span style={{ color: 'red' }}><b> Processor:</b></span> <span style={{ color: 'cyan' }}><b>Intel(R) Core( TM) i7-8750H CPU @ 2.20GHz</b></span>,
                    <span style={{ color: 'red' }}><b> Ram:</b></span> <span style={{ color: 'cyan' }}><b>16 GB</b></span>,
                    <span style={{ color: 'red' }}><b> GPU:</b></span><span style={{ color: 'cyan' }}><b> NVIDIA GeForce 1060 with Max- Q Design / Intel UHD Graphics 630</b></span> and <span style={{ color: 'cyan' }}><b>256 GB</b></span> <span style={{ color: 'red' }}><b>SSD.</b></span>
                                       
                  </ul>
                  
                     
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
