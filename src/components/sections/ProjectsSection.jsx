import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';

const projectsData = [
	{
		title: 'Inergio - Plataforma de Energía Renovable',
		description:
			'Desarrollo frontend completo para una web de servicios de refrigeración y mantenimiento. Líder del equipo de prototipado y diseño UX/UI.',
		tech: ['React', 'SCSS', 'Redux', 'Stripe API'],
		category: 'Business Website',
		link: 'https://inergio.com.ar', // ejemplo, reemplaza por el link real
	},
	{
		title: 'Dashboard Analítico Interactivo',
		description:
			'Diseño y desarrollo de un panel de control para visualización de datos empresariales, con gráficos dinámicos y filtros personalizables.',
		tech: ['React', 'JavaScript (ES6+)', 'Chart.js', 'API REST'],
		category: 'Data Visualization',
		link: 'https://dashboard-demo.com', // ejemplo, reemplaza por el link real
	},
	{
		title: 'Aplicación Web de Gestión de Tareas',
		description:
			'Creación de una PWA (Progressive Web App) para la gestión de proyectos y tareas, enfocada en la colaboración en tiempo real.',
		tech: ['React', 'Firebase', 'Tailwind CSS', 'Figma'],
		category: 'Productivity Tool',
		link: 'https://taskmanager-demo.com', // ejemplo, reemplaza por el link real
	},
	{
		title: 'Rediseño UX/UI Sitio Corporativo',
		description:
			'Investigación de usuarios, prototipado y diseño de interfaz para mejorar la usabilidad y estética de un sitio web institucional.',
		tech: ['Figma', 'Adobe XD', 'User Testing', 'HTML/SCSS'],
		category: 'UX/UI Design',
		link: 'https://corporateux-demo.com', // ejemplo, reemplaza por el link real
	},
];

const ProjectsSection = () => {
	return (
		<AnimatedSection className="section-padding px-4" id="projects">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					className="text-4xl md:text-5xl font-heading text-center mb-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<span className="text-gradient-primary">Proyectos Destacados</span>
				</motion.h2>
				<motion.p
					className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto font-body"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Una selección de proyectos donde he aplicado mis habilidades como
					desarrollador e implementador Frontend y UX/UI.
				</motion.p>

				<div className="grid md:grid-cols-2 gap-8">
					{projectsData.map((project, index) => (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							tech={project.tech}
							category={project.category}
							delay={0.3 + index * 0.1}
							link={project.link}
						/>
					))}
				</div>
			</div>
		</AnimatedSection>
	);
};

export default ProjectsSection;