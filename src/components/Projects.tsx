import { useState } from 'react';
import ProjectCard from './HomeCrad';
import { TransferAda } from './TransferAda';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number;
  amountRaised: string;
  daysLeft: number;
  supporters: number;
  successRate: number;
  walletAddress: string;
  author: string;
  translator: string;
  status: 'ongoing' | 'completed' | 'upcoming';
  totalChapters: number;
  completedChapters: number;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed' | 'upcoming'>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Chainsaw Man",
      description: "A story about Denji, a young man who partners with a demon to become Chainsaw Man.",
      image: "/images/best-chainsaw-man-characters.jpg",
      progress: 80,
      amountRaised: "500",
      daysLeft: 5,
      supporters: 1200,
      successRate: 150,
      walletAddress: "addr_test1qzr62yz87n6cd8arq38qhaw4sk2588z9vedlwup9gdhu73td6uznftkdmqqr4yvfe5cyeq9l5fssxvftecrg8dqhymasxcsk64",
      author: "Tatsuki Fujimoto",
      translator: "Team A",
      status: 'ongoing',
      totalChapters: 120,
      completedChapters: 97
    },
    {
      id: 2,
      title: "Jujutsu Kaisen",
      description: "The story of Yuji Itadori, a high school student fighting against curses.",
      image: "/images/jujutsu-kaisen.jpg",
      progress: 70,
      amountRaised: "50000",
      daysLeft: 10,
      supporters: 800,
      successRate: 130,
      walletAddress: "addr_test1qphhzz35u87zm2pnpn0mnukhqdpe75s544dkkhvetzudd58sqf37e8zeymgvla7nc8mv6l5q9yzeeukhy9g3p0hyc8hsze3xk2",
      author: "Gege Akutami",
      translator: "Team B",
      status: 'ongoing',
      totalChapters: 200,
      completedChapters: 140
    },
    {
      id: 3,
      title: "Spy x Family",
      description: "A spy must create a fake family to complete his mission.",
      image: "/images/spy_x_family.jpg",
      progress: 90,
      amountRaised: "500000",
      daysLeft: 2,
      supporters: 1500,
      successRate: 160,
      walletAddress: "addr_test1qzr62yz87n6cd8arq38qhaw4sk2588z9vedlwup9gdhu73td6uznftkdmqqr4yvfe5cyeq9l5fssxvftecrg8dqhymasxcsk64",
      author: "Tatsuya Endo",
      translator: "Team C",
      status: 'completed',
      totalChapters: 80,
      completedChapters: 80
    },
    {
      id: 4,
      title: "One Punch Man",
      description: "The story of Saitama, a superhero who can defeat any enemy with a single punch.",
      image: "/images/one-punch-man.png",
      progress: 0,
      amountRaised: "0",
      daysLeft: 30,
      supporters: 0,
      successRate: 0,
      walletAddress: "addr_test1qzr62yz87n6cd8arq38qhaw4sk2588z9vedlwup9gdhu73td6uznftkdmqqr4yvfe5cyeq9l5fssxvftecrg8dqhymasxcsk64",
      author: "ONE & Yusuke Murata",
      translator: "Team D",
      status: 'upcoming',
      totalChapters: 200,
      completedChapters: 0
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseTransfer = () => {
    setSelectedProject(null);
  };

  const handleSuccessfulTransfer = (projectId: number, amount: number) => {
    // TODO: Update project data after successful transfer
    console.log(`Transfer successful: ${amount} ADA to project ${projectId}`);
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Manga Projects</h1>
      
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'all' 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('ongoing')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'ongoing' 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'completed' 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'upcoming' 
              ? 'bg-pink-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Upcoming
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <ProjectCard {...project} />
            
            <div className="p-4 border-t">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Author:</span>
                  <span className="font-medium">{project.author}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Translator:</span>
                  <span className="font-medium">{project.translator}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Progress:</span>
                  <span className="font-medium">
                    {project.completedChapters}/{project.totalChapters} chapters
                  </span>
                </div>
              </div>

              <button 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                onClick={() => handleProjectClick(project)}
              >
                Support this project
              </button>
            </div>

            {selectedProject?.id === project.id && (
              <TransferAda 
                defaultAddress={project.walletAddress}
                projectTitle={project.title}
                onClose={handleCloseTransfer}
                onSuccess={(amount) => handleSuccessfulTransfer(project.id, amount)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 