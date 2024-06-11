import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term of Use | VE3.Plus",
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
                  Term of Use
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus is a video editing automation. Its use for illegal purposes is prohibited. The user is solely responsible for any damages that may arise in such cases. 
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus only works on <u>Windows</u> operating systems.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      The license period is 30 days
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       VE3.Plus has a gradual mode system. Therefore, <b>"not"</b> all features may work in harmony with each other. 
                       Problems may arise when you try to use different features at the same time(<Link href="/faq" target="_blank"><span style={{ color: 'orange' }}>learn more</span></Link>).
                       

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Problems that may arise due to features not included in the system are the responsibility of the user. The system is only responsible for the features it promises.
                    </li>

                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus's video production speed may vary depending on the computer performance and available processing power you have.
                    </li>
                 
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                     Like any software, VE3.Plus may encounter technical problems. If a solution cannot be provided in cases that are not caused by VE3.Plus' own infrastructure, the relevant features may be removed from the system.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      VE3.Plus is <u>temporarily</u> priced at <span style={{ color: 'LightSkyBlue' }}>$100 + platform commissions</span>.  After that, the price will be <span style={{ color: 'MediumSpringGreen' }}>300 dollars per month + platform commissions</span> and this price will <u>not change</u>.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Our response time to support requests is 3 business days. During this period, we get feedback on the problems you are experiencing and work is initiated to resolve them.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       Support is carried out in the <Link href="https://forum.ve3.plus/d/16-premium-and-advantages" target="_blank"><span style={{ color: 'yellow' }}>Premium Support</span></Link> area on the Forum. Only our licensed customers can use this area.

                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    
                    The <Link href="https://ve3.plus/guide" target="_blank"><span style={{ color: 'cyan' }}>VE3.Plus/guide</span></Link> address contains information on the use of VE3.Plus, which may be changed or removed without prior notice.
                   
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Our Forum(<Link href="https://forum.ve3.plus/" target="_blank"><span style={{ color: 'red' }}>forum.ve3.plus</span></Link>) platform should be used with respectful language and tone.
                    </li>
                                       
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
