import React from 'react';
import bookStudent from '../../../../assets/book-student.svg';
import announcementPoster from '../../../../assets/announcement-poster.svg';
import financeMoney from '../../../../assets/real-finance-money.svg';
import { motion } from 'framer-motion';

const InfoAllCard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            {/* Student Card */}
            <motion.div
                className='md:col-span-4'
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
            >
                <div className="relative w-full max-w-md h-80 rounded-4xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] p-8 border-3 border-[#FFFFFF38]">
                    <div className="relative inline-block mb-6">
                        {/* INNER GLOW UNDER S */}
                        <div className="absolute -left-2 top-1 w-5 h-5 rounded-full backdrop-blur-md
                        shadow-[5px_12px_22px_rgba(0,0,0,0.25)] [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]"
                        />
                        {/* STUDENT TEXT */}
                        <span className="relative z-10 text-[#FFFFFF80] text-lg font-extrabold">
                            Student
                        </span>
                    </div>
                    {/* FEATURES */}
                    <p className="text-[#FFFFFF80] text-lg font-medium">
                        Smart Practice <br />
                        Instant feedback <br />
                        Reduced exam anxiety
                    </p>
                    {/* IMAGE */}
                    <img
                        src={bookStudent}
                        alt="Student"
                        className="absolute bottom-6 right-6 w-32 opacity-70 pointer-events-none"
                    />
                </div>
            </motion.div>

            {/* Teacher Card */}
            <motion.div
                className='md:col-span-4'
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
            >
                <div className="relative w-full max-w-md h-80 rounded-4xl
                             backdrop-blur-md
                            border-3 border-[#FFFFFF38]
                            shadow-[0_20px_40px_rgba(0,0,0,0.35)]
                            overflow-hidden p-8">
                    <img
                        src={announcementPoster}
                        alt="Teacher"
                        className="w-28 opacity-70 mb-2"
                    />
                    <p className="text-[#FFFFFF80] text-lg font-medium text-right">
                        Auto grading <br />
                        Performance dashboards <br />
                        Student-wise progress tracking
                    </p>
                    {/* TEACHER LABEL (BOTTOM RIGHT) */}
                    <div className="absolute bottom-6 right-8">

                        {/* INNER GLOW UNDER 'T' */}
                        <div
                            className="absolute -right-1 top-1 w-5 h-5 rounded-full backdrop-blur-md
                                        shadow-[5px_12px_22px_rgba(0,0,0,0.25)]
                                        [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]
                                            "
                        />
                        <span className="relative z-10 text-[#FFFFFF80] text-lg font-extrabold">
                            Teacher
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Institution Card */}
            <motion.div
                className='md:col-span-4 items-end text-right'
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-50px" }}
            >
                <div className="relative w-full max-w-md h-80 rounded-4xl  backdrop-blur-md border-3 border-[#FFFFFF38] shadow-[0_20px_40px_rgba(0,0,0,0.35)] p-8">
                    <div className="absolute top-6 right-8">
                        <div className="absolute -right-1 top-1 w-5 h-5 rounded-full backdrop-blur-md shadow-[5px_12px_22px_rgba(0,0,0,0.25)] [box-shadow:5px_12px_22px_rgba(0,0,0,0.25),inset_4px_4px_4px_rgba(255,255,255,0.25)]" />

                        <span className="relative z-10 text-[#FFFFFF80] text-lg font-extrabold">
                            Institution
                        </span>
                    </div>

                    {/* FEATURES (CENTER) */}
                    <p className="mt-10 text-[#FFFFFF80] text-lg font-medium">
                        Centralized reporting <br />
                        Data-driven decisions <br />
                        Large-scale exam automation
                    </p>

                    {/* IMAGE (BOTTOM LEFT) */}
                    <img
                        src={financeMoney}
                        alt="Institution"
                        className="absolute bottom-6 left-6 w-28 opacity-70"
                    />
                </div>
            </motion.div>
        </>
    );
};

export default InfoAllCard;
