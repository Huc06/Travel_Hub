interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    progress: number;
    amountRaised: string;
    daysLeft: number;
    supporters: number;
    successRate: number;
  }
  
  const ProjectCard = ({ title, description, image, progress, amountRaised, daysLeft, supporters, successRate }: ProjectCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute top-0 right-0 bg-pink-500 text-white px-3 py-1 m-2 rounded-full text-sm">
                    {daysLeft} days left
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {description}
                </p>

                <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>{parseInt(amountRaised).toLocaleString()} ADA</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-pink-500 rounded-full h-2 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                    <div>
                        <span className="font-medium">{supporters}</span>
                        <span className="ml-1">supporters</span>
                    </div>
                    <div>
                        <span className="font-medium">{successRate}%</span>
                        <span className="ml-1">success</span>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default ProjectCard;