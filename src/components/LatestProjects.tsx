import { useState } from 'react';
import ProjectCard from './HomeCrad';
import { TransferAda } from './TransferAda';

const latestProjects = [
  { 
    id: 1, 
    title: "Chainsaw Man", 
    description: "Một câu chuyện về Denji, một chàng trai trẻ hợp tác với một con quỷ để trở thành Chainsaw Man.", 
    image: "/images/best-chainsaw-man-characters.jpg", 
    progress: 80, 
    amountRaised: "50000000", 
    daysLeft: 5, 
    supporters: 1200, 
    successRate: 150,
    walletAddress: "addr_test1qzvju3vzce9zvz5a9sq5htcaq4gxwnzqxvfa97mue3ll7gl97xfhv85pktptlzle39zsjjadnpwwurru5h8nnsts2xtselsp8e" 
  },
  { 
    id: 2, 
    title: "Jujutsu Kaisen", 
    description: "Câu chuyện về Yuji Itadori, một học sinh trung học chiến đấu chống lại những lời nguyền.", 
    image: "/images/jujutsu-kaisen.jpg", 
    progress: 70, 
    amountRaised: "30000000", 
    daysLeft: 10, 
    supporters: 800, 
    successRate: 130,
    walletAddress: "addr1qy8daqz4xkqm5c7f769069q5jlnrmhxhe9wzyd6v98dvp6gx4l4d7w9vk8p6wcj5kadcxcg8nwd0xh6w0mdvhxkzjh8cq0n3u8"
  },
  { 
    id: 3, 
    title: "Spy x Family", 
    description: "Một điệp viên phải tạo ra một gia đình giả để hoàn thành nhiệm vụ của mình.", 
    image: "/images/spy_x_family.jpg", 
    progress: 90, 
    amountRaised: "60000000", 
    daysLeft: 2, 
    supporters: 1500, 
    successRate: 160,
    walletAddress: "addr1qyz2s5r8xm9cak4zqd9gcp8qkr5twjwgn4jxwqgj68f47cx4l4d7w9vk8p6wcj5kadcxcg8nwd0xh6w0mdvhxkzjh8cqrsxh4"
  }
];

const LatestProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Dự án mới nhất</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
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
