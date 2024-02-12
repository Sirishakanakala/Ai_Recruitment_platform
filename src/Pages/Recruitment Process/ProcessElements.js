import { FaPlayCircle, FaSearch, FaClipboardCheck, FaFilter, FaRobot } from 'react-icons/fa';

const ProcessElements = [
    {
        id: 1,
        title: "AR Start",
        description: "This step initiates the recruitment process by capturing initial candidate data and requirements.",
        buttonText: "Updates",
        icon: <FaPlayCircle />
    },
    {
        id: 2,
        title: "Sourcing",
        description: "In this step, recruiters actively search for potential candidates through various channels like job boards, social media, or professional networks.",
        buttonText: "Updates",
        icon: <FaSearch />
    },
    {
        id: 3,
        title: "Basic Matching",
        description: "Here, recruiters conduct a preliminary assessment to match candidate qualifications with job requirements.",
        buttonText: "Updates",
        icon: <FaClipboardCheck />
    },
    {
        id: 4,
        title: "Exact Matching Filtering",
        description: "This step involves a more detailed evaluation to filter candidates who closely match the specific job requirements.",
        buttonText: "Updates",
        icon: <FaFilter />
    },
    {
        id: 5,
        title: "Value Addition by AI",
        description: "AI tools are utilized in this stage to enhance the recruitment process, such as automated resume screening or predictive analytics.",
        buttonText: "Updates",
        icon: <FaRobot />
    }
];

export default ProcessElements;
