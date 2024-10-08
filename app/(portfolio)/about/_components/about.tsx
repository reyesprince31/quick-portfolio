import { FocusCards } from "@/components/focus-cards";

const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
];
export default function AboutPage() {
  return (
    <div className="flex-1 p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <div className="flex justify-center w-full flex-wrap gap-4 mb-20">
        <FocusCards cards={cards} />
      </div>
      <div className="space-y-4 w-[80%] mx-auto">
        <p>
          Hey there, I&apos;m Prince Reyes - a passionate developer, avid
          problem-solver, and a connoisseur of elegant code. Welcome to my
          corner of the digital world!
        </p>
        <p>
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional digital experiences. As a software
          engineer, I thrive on turning lines of code into functional and
          elegant solutions. My goal is to not just create software, but to
          build digital marvels that seamlessly merge form and function.
        </p>
        <p>
          My journey doesn&apos;t stop at coding. With a heart full of curiosity
          and a mind brimming with ideas, I&apos;ve ventured into various realms
          of technology. From managing cybercafes to developing SaaS
          applications, I&apos;ve worn many hats in the tech world, each
          experience adding a unique flavor to my skill set.
        </p>
        <p>
          What sets me apart is my unwavering appreciation for both the
          technical and the aesthetic. I believe that great software should not
          only work flawlessly under the hood but also provide an intuitive and
          visually pleasing experience for the user.
        </p>
        <p>
          Through this website, I aim to share my insights, experiences, and
          creations with you. Whether you&apos;re a fellow developer seeking
          solutions, a business looking for technical expertise, or simply
          someone who appreciates the finer aspects of technology, there&apos;s
          something here for you.
        </p>
        <p>
          Join me on this journey of bytes and innovations, logic and
          creativity, code and design. Together, we can explore the boundless
          possibilities of technology, all while reveling in the sheer beauty of
          thoughtful engineering.
        </p>
        <p>
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </p>
      </div>
    </div>
  );
}
