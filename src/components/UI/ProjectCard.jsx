function ProjectCard({ project }) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <span className="text-sm text-gray-500">{project.date}</span>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <a 
            href={project.videoUrl} 
            className="text-blue-600 hover:underline font-medium flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Video
          </a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;