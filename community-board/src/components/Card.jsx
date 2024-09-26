import React from "react";
import './Card.css';
import Categories from "./Categories";

const Card = () => {
    return (
        <div className="card-container">
            <Categories 
                category='computer-science' 
                title='Computer Science' 
                desc='Explore the vast world of computer science.'
                img='https://cdn-icons-png.flaticon.com/512/4109/4109591.png'
                link='https://www.computerscience.org/'
            />
            <Categories 
                category='cyber-security' 
                title='CyberSecurity' 
                desc='Learn about protecting systems and networks from digital attacks.'
                img='https://img.freepik.com/free-vector/cyber-security-concept_53876-90448.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid' 
                link='https://us.norton.com/blog/how-to/cybersecurity-basics'
            />
            <Categories 
                category='computer-architecture' 
                title='Computer Architecture' 
                desc='Understand the structure and design of computers.'
                img='https://st3.depositphotos.com/1000532/35715/i/450/depositphotos_357151044-stock-photo-electronic-circuit-board-electronic-components.jpg' 
                link='https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/'
            />
            <Categories 
                category='artificial-intelligence' 
                title='Artificial Intelligence' 
                desc='Dive into the world of machine learning and neural networks.'
                img='https://cdn.sanity.io/images/tlr8oxjg/production/ada7e002d4675941802c42448a489b0b1b5c6854-1456x816.png?w=3840&q=100&fit=clip&auto=format' 
                link='https://www.ibm.com/topics/artificial-intelligence'
            />
            <Categories 
                category='super-computing' 
                title='Super Computing' 
                desc='Learn about powerful systems solving complex problems.'
                img='https://media.istockphoto.com/id/1294886766/video/server-room-4k-resolution.jpg?s=640x640&k=20&c=e5P2LSXxJQFJVuvKPoZ3R_yGbzQYq_a8iNoatFqPzKQ=' 
                link='https://www.ibm.com/topics/supercomputing'
            />
            <Categories 
                category='quantum-computing' 
                title='Quantum Computing' 
                desc='Explore the future of computation beyond classical systems.'
                img='https://cdn-icons-png.flaticon.com/512/9423/9423138.png' 
                link='https://www.ibm.com/topics/quantum-computing'
            />
            <Categories 
                category='career' 
                title='Career Development' 
                desc='Get resources for building a successful career in tech.'
                img='https://img.freepik.com/free-vector/goal-achievement-teamwork-business-concept-career-growth-cooperation-development-project_107791-29.jpg' 
                link='https://www.mindtools.com/'
            />
            <Categories 
                category='software-engineering' 
                title='Software Engineering' 
                desc='Delve into large-scale software development and best practices.'
                img='https://img.freepik.com/free-photo/caucasian-network-developer-pointing-out-high-usage-processing-power-mainframe-grid-african-american-programmer-helping-coworker-solve-overloaded-system-storage-space_482257-40526.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid' 
                link='https://www.tutorialspoint.com/software_engineering/software_engineering_overview.htm'
            />
            <Categories 
                category='data-science' 
                title='Data Science' 
                desc='Extract insights from large data sets using statistics and AI.'
                img='https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D' 
                link='https://ischoolonline.berkeley.edu/data-science/what-is-data-science/'
            />
            <Categories 
                category='blockchain' 
                title='Blockchain Technology' 
                desc='Learn how decentralized ledgers are transforming digital security.'
                img='https://static.vecteezy.com/system/resources/thumbnails/022/865/183/small/ai-generative-technology-block-chain-concept-background-photo.jpg' 
                link='https://aws.amazon.com/what-is/blockchain/?aws-products-all.sort-by=item.additionalFields.productNameLowercase&aws-products-all.sort-order=asc'
            />
        </div>
    );
}

export default Card;
