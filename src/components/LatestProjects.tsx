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
}

const latestProjects = [
  { 
    id: 1, 
    title: "Chainsaw Man", 
    description: "Một câu chuyện về Denji, một chàng trai trẻ hợp tác với một con quỷ để trở thành Chainsaw Man.", 
    image: "/images/best-chainsaw-man-characters.jpg", 
    progress: 80, 
    amountRaised: "500", 
    daysLeft: 5, 
    supporters: 1200, 
    successRate: 150,
    walletAddress: "addr_test1qzr62yz87n6cd8arq38qhaw4sk2588z9vedlwup9gdhu73td6uznftkdmqqr4yvfe5cyeq9l5fssxvftecrg8dqhymasxcsk64" 
  },
  { 
    id: 2, 
    title: "Jujutsu Kaisen", 
    description: "Câu chuyện về Yuji Itadori, một học sinh trung học chiến đấu chống lại những lời nguyền.", 
    image: "/images/jujutsu-kaisen.jpg", 
    progress: 70, 
    amountRaised: "50000", 
    daysLeft: 10, 
    supporters: 800, 
    successRate: 130,
    walletAddress: "addr_test1qphhzz35u87zm2pnpn0mnukhqdpe75s544dkkhvetzudd58sqf37e8zeymgvla7nc8mv6l5q9yzeeukhy9g3p0hyc8hsze3xk2"
  },
  { 
    id: 3, 
    title: "Spy x Family", 
    description: "Một điệp viên phải tạo ra một gia đình giả để hoàn thành nhiệm vụ của mình.", 
    image: "/images/spy_x_family.jpg", 
    progress: 90, 
    amountRaised: "500000", 
    daysLeft: 2, 
    supporters: 1500, 
    successRate: 160,
    walletAddress: "addr_test1qzr62yz87n6cd8arq38qhaw4sk2588z9vedlwup9gdhu73td6uznftkdmqqr4yvfe5cyeq9l5fssxvftecrg8dqhymasxcsk64"
  }
];

const LatestProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>(latestProjects);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseTransfer = () => {
    setSelectedProject(null);
  };

  const handleSuccessfulTransfer = (projectId: number, amount: number) => {
    setProjects(prevProjects => 
      prevProjects.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            amountRaised: (parseInt(project.amountRaised) + amount).toString(),
            supporters: project.supporters + 1
          };
        }
        return project;
      })
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Dự án mới nhất</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6">
              <ProjectCard {...project} />
              <div className="mt-4">
                <button 
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  Ủng hộ dự án này
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
    </section>
  );
};

export default LatestProjects;
