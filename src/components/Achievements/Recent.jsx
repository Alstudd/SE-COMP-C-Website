import React from 'react'
import "../../css/achievements.css"

export default function Recent() {
    return (
        <div className="overflow-x-hidden">
            <div className="container">
                <section className="md:max-w-[1200px] md:w-[90%] mx-auto">
                    <h2 className="text-[25px] md:text-[35px] text-[#26235C] mt-2 font-bold max-w-[1200px] mx-auto ">
                        Recent Achievements
                    </h2>
                    <div className="recent-achi mt-4 lg:w-[95%]  w-[100%] lg:h-[30rem] md:h-[20rem] h-[15rem] mx-auto bg-[url(/logo.jpeg)] bg-cover lg:p-5 text-white rounded-lg border-l-[25px] border-yellow-300 
                        hover:scale-[1.05] transition-all duration-500 hover:text-yellow-300 flex justify-between items-center gap-3">
                        <div>
                            <h3 className="lg:text-3xl p-2 sm:text-2xl text-xl">
                                Title
                            </h3>
                            <p className="p-2 lg:text-[20px] text-[10px]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo porro incidunt maxime assumenda dolor, quae velit illum quis nulla reprehenderit totam dolore molestiae id expedita rerum vel rem esse sint.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consectetur at error cumque dignissimos deserunt voluptatem in totam neque placeat dolores architecto vero magni, velit repellendus voluptatibus quaerat quod ab.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum ratione ea voluptate, porro vitae voluptates. Itaque excepturi similique odit fuga fugit optio id harum ad, minima rerum quaerat consequatur.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pt-[180px]">
                    <h2 className="text-[25px] md:text-[35px] text-[#26235C] mt-2 font-bold max-w-[1200px] mx-auto">
                        Club core members achievements
                    </h2>
                    <div className="recent-achi mt-4 container max-w-[1200px] mx-auto bg-[#26235C] p-5 text-[#D5C6FF] rounded-lg border-l-[25px] border-yellow-300 
                            flex flex-col lg:flex-row justify-between items-center gap-3">
                        <img src="/logo.jpeg"
                            className="w-[100%] md:h-[20rem] h-[15rem] bg-cover object-cover rounded-3xl" />
                            <div>
                                <h3 className="md:text-3xl p-2 sm:text-2xl text-xl">
                                    Title
                                </h3>
                                <p className="p-2 lg:text-[20px] text-[10px]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo porro incidunt maxime assumenda dolor, quae velit illum quis nulla reprehenderit totam dolore molestiae id expedita rerum vel rem esse sint.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consectetur at error cumque dignissimos deserunt voluptatem in totam neque placeat dolores architecto vero magni, velit repellendus voluptatibus quaerat quod ab.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum ratione ea voluptate, porro vitae voluptates. Itaque excepturi similique odit fuga fugit optio id harum ad, minima rerum quaerat consequatur.
                                </p>
                            </div>
                    </div>
                </section>

                <section className="py-[180px]">
                    <h2 className="text-[25px] md:text-[35px] text-[#26235C] mt-2 font-bold max-w-[1200px] mx-auto">
                        Cr's of the year
                    </h2>
                    <div className="before:md: card md:w-[500px] md:h-[500px] w-[300px] h-[300px] mx-auto relative rounded-xl">
                        <img src="/vishal.png" className="w-[100%] h-[100%] object-center object-contain rounded-xl z-[-5]" />
                            <div className="detail absolute bottom-0 text-center w-[100%] p-6 duration-500">
                                <h2 className="md:text-[2rem] text-[1rem] font-[400]">Name</h2>
                                <p className="md:text-[1.5rem] text-[0.75rem] font-[100] text-[#333]">Type of CR</p>
                            </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
