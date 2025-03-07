import ProjectCard from '../UI/ProjectCard';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Falcon Rocket Series',
      description: 'Our first model rocket series achieving altitudes of over 800 feet.',
      imageUrl: '../../assets/images/project-thumbnails/falcon.jpg',
      videoUrl: 'https://example.com/videos/falcon-launch.mp4',
      date: 'Spring 2023'
    },
    {
      id: 2,
      title: 'Stratosphere Balloon Mission',
      description: 'High-altitude balloon launch with atmospheric data collection.',
      imageUrl: '../../assets/images/project-thumbnails/balloon.jpg',
      videoUrl: 'https://example.com/videos/balloon-mission.mp4',
      date: 'Fall 2023'
    },
    {
      id: 3,
      title: 'Mars Rover Prototype',
      description: 'Remote controlled rover designed for rough terrain navigation.',
      imageUrl: '../../assets/images/project-thumbnails/rover.jpg',
      videoUrl: 'https://example.com/videos/rover-demo.mp4',
      date: 'Spring 2024'
    }
  ];

  return (
    <div>
      <div className="bg-slate-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="max-w-xl mx-auto">Explore our past missions and ongoing aerospace projects</p>
      </div>
      
      <div className="container mx-auto max-w-6xl py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;