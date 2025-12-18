import youngWoman from "../../../../assets/young woman.svg";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import StarIcon from "@mui/icons-material/Star";
import SchoolIcon from "@mui/icons-material/School";
import BarChartIcon from "@mui/icons-material/BarChart";
import Waves from "../../../../assets/Group 21.png";
import {
  AlarmAddRounded,
  CalculateRounded,
  VideoCameraBack,
  Edit,
  Translate,
} from "@mui/icons-material";

const RankUpAICard = () => {
  return (
    <div className="relative w-full min-h-[300px] h-full rounded-[30px] overflow-hidden shadow-2xl border-3 border-app-primary-4">
      {/* Background Gradient */}
      <div className="absolute inset-0"></div>

      {/* Abstract Waves */}
      <div className="absolute inset-0 opacity-40">
        {/* Simple CSS circles/shapes to mimic the wave background in the card */}
        <div className="absolute -top-20 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-20 w-48 h-48 bg-app-purple-glow rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 flex h-full p-4">
        {/* Left Side Info */}
        <div className="flex flex-col w-1/2 text-app-primary-140">
          {/* <Typography variant='h5' fontWeight='bold' sx={{color: '#A1AEF2' }}>
                        RankUp AI
                    </Typography> */}
          <h1 className="text-app-primary-140 font-extrabold text-xl items-start justify-start flex">
            RankUp AI
          </h1>
          {/* Right Side Character */}
          <img
            src={Waves}
            alt="wave"
            className="absolute -top-75 -right-13 w-[95%]"
          />

          <div className="flex items-start gap-18 mt-10 pl-4">
            {/* Icons Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-[140px]">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                <CenterFocusStrongIcon />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                <StarIcon className="" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                <SchoolIcon className="" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                <BarChartIcon className="" />
              </div>
            </div>

            {/* Stats Text */}
            <div className="space-y-4 text-base">
              <div className="flex items-center">
                <span className="font-bold text-xl">
                  2<span className="text-sm font-extrabold">hrs</span>
                </span>
                <span className="font-bold">/</span>
                <span className="text-sm">daily</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">30</span>

                <span className="text-sm">Questions</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">
                  11<sup>th</sup>
                </span>
                <span className="text-sm">Rank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Character */}
        <div className="w-1/2 relative">
          <img
            src={youngWoman}
            alt="AI Assistant"
            className="absolute -bottom-10 h-[220px]"
          />
        </div>
      </div>

      {/* Bottom Toolbar Mockup */}
      <div className="absolute bottom-0 left-2/6 -translate-x-1/2 bg-app-primary-4 backdrop-blur-lg rounded-tr-4xl rounded-tl-4xl px-6 py-1 flex gap-6 text-[#A1AEF2]">
        <CalculateRounded sx={{ fontSize: 20 }} />
        <Translate sx={{ fontSize: 20 }} />
        <AlarmAddRounded sx={{ fontSize: 20 }} />
        <VideoCameraBack sx={{ fontSize: 20 }} />
        <Edit sx={{ fontSize: 20 }} />
      </div>
    </div>
  );
};

export default RankUpAICard;
