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
                img='https://example.com/computer-science.jpg' 
                link='https://www.computerscience.org/'
            />
            <Categories 
                category='cyber-security' 
                title='CyberSecurity' 
                desc='Learn about protecting systems and networks from digital attacks.'
                img='https://example.com/cyber-security.jpg' 
                link='https://us.norton.com/blog/how-to/cybersecurity-basics'
            />
            <Categories 
                category='computer-architecture' 
                title='Computer Architecture' 
                desc='Understand the structure and design of computers.'
                img='https://example.com/computer-architecture.jpg' 
                link='https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/'
            />
            <Categories 
                category='artificial-intelligence' 
                title='Artificial Intelligence' 
                desc='Dive into the world of machine learning and neural networks.'
                img='https://example.com/artificial-intelligence.jpg' 
                link='https://www.ibm.com/topics/artificial-intelligence'
            />
            <Categories 
                category='super-computing' 
                title='Super Computing' 
                desc='Learn about powerful systems solving complex problems.'
                img='https://example.com/super-computing.jpg' 
                link='https://www.ibm.com/topics/supercomputing'
            />
            <Categories 
                category='quantum-computing' 
                title='Quantum Computing' 
                desc='Explore the future of computation beyond classical systems.'
                img='https://example.com/quantum-computing.jpg' 
                link='https://www.ibm.com/topics/quantum-computing'
            />
            <Categories 
                category='career' 
                title='Career Development' 
                desc='Get resources for building a successful career in tech.'
                img='https://example.com/career.jpg' 
                link='https://www.mindtools.com/'
            />
            <Categories 
                category='software-engineering' 
                title='Software Engineering' 
                desc='Delve into large-scale software development and best practices.'
                img='https://example.com/software-engineering.jpg' 
                link='https://www.tutorialspoint.com/software_engineering/software_engineering_overview.htm'
            />
            <Categories 
                category='data-science' 
                title='Data Science' 
                desc='Extract insights from large data sets using statistics and AI.'
                img='https://example.com/data-science.jpg' 
                link='https://ischoolonline.berkeley.edu/data-science/what-is-data-science/'
            />
            <Categories 
                category='blockchain' 
                title='Blockchain Technology' 
                desc='Learn how decentralized ledgers are transforming digital security.'
                img='https://example.com/blockchain.jpg' 
                link='https://aws.amazon.com/what-is/blockchain/?aws-products-all.sort-by=item.additionalFields.productNameLowercase&aws-products-all.sort-order=asc'
            />
        </div>
    );
}

export default Card;
