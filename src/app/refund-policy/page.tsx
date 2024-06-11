import Link from 'next/link'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | VE3.Plus",
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
                  Refund Policy
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                  
                  
                  </div>
                 
                </div>
                <div>
                  
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       There are no refunds. Please make your final decision after reviewing our <Link href="https://forum.ve3.plus/d/3-demo-request" target="_blank"><span style={{ color: '#43dd7e' }}>Demo</span></Link>.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       Any damages caused by service problems will be compensated by extending the licence term.
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