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
    <div className="flex flex-col h-full">
      {/* Header logic is handled by parent or here if needed, keeping simple */}
      <div className="flex-1 h-full overflow-y-auto pl-14 pr-8">
        <div className="w-full justify-center mx-auto flex flex-col gap-2">
          <GreetingSection />

          {/* Main Grid Layout */}
          <div className="flex flex-col justify-center gap-6">
            {/* Top Row Stats (4 columns) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              <div className="flex-1 max-h-64 overflow-y-auto col-span-1">
                <UpcomingClasses />
              </div>
              <div className="col-span-1">
                <WeeklyClassAverage />
              </div>
              <div className="col-span-1">
                <StrengthsWeaknesses />
              </div>
              <div className="col-span-1">
                <UpcomingTest />
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="col-span-1 flex flex-col gap-6">
                <StudentPerformance />
                <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 flex-1">
                  <CalendarSection />
                </div>
              </div>

              {/* Right Main Column - Spans remaining 3 columns */}
              <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
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
