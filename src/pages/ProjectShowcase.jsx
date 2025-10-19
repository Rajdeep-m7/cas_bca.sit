import React, { useState } from 'react'
import PostCard from './PostCard'

const ProjectShowcase = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 2,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 3,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 4,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 5,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 6,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 7,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
        {
            id: 8,
            image: "https://wallpapers.com/images/hd/nobita-and-doraemon-4k-g4x1lrllxyxr5ssd.jpg",
            title: "Doraemon",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ullam blanditiis quidem expedita quibusdam nisi minima earum natus unde praesentium autem sapiente suscipit ex, architecto corrupti non tempora officiis, repudiandae magni quam vitae commodi ipsam. Impedit, laudantium facere nihil perspiciatis autem nemo omnis ipsum aspernatur eveniet magnam? Expedita suscipit accusantium ipsum quasi tenetur ea veritatis debitis numquam consequuntur. Placeat, alias.",
            author:"Nobita",
            liveLink: "#",
            github: "#",
            likes: 0,
            saves: 0,
            shares: 0,
            comments: [],
        },
    ])

    const handleLike = (id) =>{
        setProjects(
            projects.map((el)=>{
                el.id === id
                ? {... el, likes: el.likes+1 }
                : el
            })
        )
    }

    const handleShare = (id) => {
        setProjects(
            projects.map((el)=>{
                el.id === id
                ? { ...el, shares: el.shares+1 }
                : el
            })
        )
    }

  return (
    <div className='pt-10 sm:pt-20 lg:pt-22'>
        <header className='h-[100px] flex items-center px-10 md:px-15px lg:px-20'>
            <h1 className='text-[18px] sm:text-[22px] lg:text-[30px] uppercase font-montserrat font-[800] tracking-[3px]'>Project Showcase</h1>
        </header>

        <article className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        px-10 md:px-15px lg:px-20 pb-10 gap-6 '>
            {projects.map((p)=>(
                <PostCard
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    title={p.title}
                    author={p.author}
                    liveLink={p.liveLink}
                    github={p.github}
                    likes = {p.likes}
                    saves = {p.saves}
                    shares = {p.shares}
                    comments = {p.comments}
                    onLike = {handleLike}
                    onShare = {handleShare}
                />
            ))}
        </article>
    </div>
  )
}

export default ProjectShowcase
