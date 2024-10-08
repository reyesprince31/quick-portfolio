import { Briefcase } from "lucide-react";

const workHistory = [
  {
    period: "Mar 2024 - Present",
    company: "BoxedFlows",
    position: "Contract Software Engineer",
    description: "Building the future of SaaS applications",
    achievements: [
      "Developed a robust Product Information Management (PIM) web application",
      "Built a GitHub probot, chatbot, and assistant utilizing OpenAI and Langchain",
      "Contributed to project planning, analyzing requirements, and designing systems",
      "Developed a SaaS application for a FinTech and eCommerce project",
      "Deployed applications in AWS, Vercel, and Supabase",
    ],
  },
  {
    period: "Aug 2022 - Mar 2024",
    company: "Freelance",
    position: "Software Engineer",
    description: "Providing software solutions for various clients",
    achievements: [
      "Architected and developed a web app for clinic appointment and patient record management",
      "Built an E-commerce platform using Next.js and Supabase",
      "Developed a Learning Management System (LMS) using Thinkific",
      "Provided development assistance to a startup company",
    ],
  },
  {
    period: "Oct 2013 - 2020",
    company: "Krayzer Gaming Grounds",
    position: "Cyber Cafe Owner",
    description: "Managing and operating a cybercafe",
    achievements: [
      "Successfully managed diskless network setup and PC assembly",
      "Provided comprehensive technical assistance and customer service",
      "Offered additional services such as video editing and website creation",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
        <Briefcase className="w-8 h-8" />
        Work History
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        I&apos;m a full-stack developer that loves building products and web
        apps that can impact millions of lives
      </p>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12">
          {workHistory.map((job, index) => (
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
