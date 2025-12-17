import React from "react";
import Header from "../../../common/layout/Header";
import GreetingSection from "./ui/GreetingSection";
import UpcomingClasses from "./ui/UpcomingClasses";
import WeeklyClassAverage from "./ui/WeeklyClassAverage";
import StrengthsWeaknesses from "./ui/StrengthsWeaknesses";
import UpcomingTest from "./ui/UpcomingTest";
import StudentPerformance from "./ui/StudentPerformance";
import AssessmentsOverview from "./ui/AssessmentsOverview";
import ClassPerformance from "./ui/ClassPerformance";
import CalendarSection from "./ui/CalendarSection";
import AnnouncementSection from "./ui/AnnouncementSection";

function TeacherDashboard() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header logic is handled by parent or here if needed, keeping simple */}
      <div className="flex-1 overflow-y-auto pl-14 pr-8">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-2">
          <GreetingSection />

          {/* Main Grid Layout */}
          <div className="flex flex-col gap-6">
            {/* Top Row Stats (three large panels + one small panel) */}
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <div className="flex-1 max-h-64 overflow-y-auto">
                <UpcomingClasses />
              </div>
              <div className="flex-1">
                <WeeklyClassAverage />
              </div>
              <div className="flex-1">
                <StrengthsWeaknesses />
              </div>
              <div className="w-full lg:w-44 xl:w-48">
                <UpcomingTest />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column (Sidebar-ish) */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <StudentPerformance />
                <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 flex-1">
                  <CalendarSection />
                </div>
              </div>

              {/* Right Main Column */}
              <div className="lg:col-span-9 flex flex-col gap-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2 flex">
                    <AssessmentsOverview />
                  </div>
                  <div className="xl:col-span-1">
                    <ClassPerformance />
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                  <AnnouncementSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
