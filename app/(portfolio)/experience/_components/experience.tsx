import { Briefcase } from "lucide-react";
import { mockUserData } from "@/lib/mock-data";

export default function ExperiencePage() {
  const { experience } = mockUserData;

  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="w-8 h-8" />
        Work History
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {mockUserData.personalInfo.bio}
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-green-600">
                    {job.company}
                  </h2>
                  <p className="text-lg font-medium">{job.position}</p>
                  <p className="text-sm text-gray-500">{job.description}</p>
                </div>
                <p className="text-sm text-gray-500">{job.period}</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-gray-700">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
