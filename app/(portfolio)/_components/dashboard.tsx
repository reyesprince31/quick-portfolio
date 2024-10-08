"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const skillsData = [
  { name: "Frontend", value: 40 },
  { name: "Backend", value: 30 },
  { name: "Database", value: 10 },
  { name: "Cloud", value: 10 },
  { name: "Tools", value: 10 },
];

const experienceData = [
  { name: "Freelance", years: 1.5 },
  { name: "BoxedFlows", years: 0.25 },
  { name: "Cyber Cafe", years: 7 },
  { name: "Education", years: 4 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }>
                  {skillsData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Experience Timeline</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={experienceData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="years" fill="#4BC0C0" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "NextJS",
                "ReactJS",
                "StorybookJS",
                "Typescript",
                "RestAPI",
                "NodeJS",
                "Express",
                "Cypress",
                "Vitest",
                "Tailwind",
                "AWS",
                "Vercel",
                "Supabase",
                "MySQL",
                "Postgres",
              ].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Product Information Management (PIM) web application</li>
              <li>
                GitHub probot, chatbot, and assistant using OpenAI and Langchain
              </li>
              <li>FinTech and eCommerce SaaS application</li>
              <li>Multi-tenant SaaS applications</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
