import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Career from '../assets/carrer.jpg'
 const careerResources= [
    {
      "id": 1,
      "category": "STEM",
      "title": "Introduction to Computer Science",
      "description": "A beginner-friendly guide to understanding the basics of computer science and programming.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1l-c7pL6T9-EiqJXe1ab4Cc09tryFUfIe/view?usp=sharing  "
    },
    {
      "id": 2,
      "category": "STEM",
      "title": "Data Science for Beginners",
      "description": "Learn the fundamentals of data science, including data analysis, visualization, and machine learning.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1JahiOAbL9jBsyqScnNc1Qo03Rb0IuwdT/view?usp=sharing "

    
    },
    {
      "id": 3,
      "category": "STEM",
      "title": "Engineering Career Paths",
      "description": "Explore various engineering fields and the skills required for each career path.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1Aqh-Mala0ilMQ6qtVXl41EF8AzpsOH4D/view?usp=sharing  "

    },
    {
      "id": 4,
      "category": "Arts",
      "title": "Creative Writing 101",
      "description": "An introductory course on creative writing techniques, story development, and character building.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1mn9IQBy3WkDz0JBPd1St5QHCvq1JBn1i/view?usp=sharing  "

    },
    {
      "id": 5,
      "category": "Arts",
      "title": "Understanding Art History",
      "description": "Dive into the history of art, exploring significant movements and renowned artists.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1EzHySNfBAL1k_sNaR7pEww3ncK7MnjXi/view?usp=sharing  "

    },
    {
      "id": 6,
      "category": "Arts",
      "title": "Design Thinking Workshop",
      "description": "Participate in a workshop that teaches design thinking principles for solving creative problems.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1jfWrjIYnuGxV1l6Bs0-D_-ZspddOJxlc/view?usp=sharing  "

    },
    {
      "id": 7,
      "category": "Business",
      "title": "Introduction to Marketing",
      "description": "Understand the basics of marketing strategies and techniques used in the business world.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1uxrb1vTXmD5R6gW7dY1_-_PnxRTHPA37/view?usp=sharing "

    },
    {
      "id": 8,
      "category": "Business",
      "title": "Financial Literacy Basics",
      "description": "A guide to understanding personal finance, budgeting, and investment basics.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1l6NPX6DOQDDGYxVhvpaMFKFx3oMXt3Bv/view?usp=sharing  "

    },
    {
      "id": 9,
      "category": "Business",
      "title": "Entrepreneurship Essentials",
      "description": "Learn about starting and managing a business, including funding, marketing, and operations.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1fdHaVwE2isI17yY5JTaAeQTb_d5XeQB4/view?usp=sharing  "

    },
    {
      "id": 10,
      "category": "Schools",
      "title": "Choosing the Right High School",
      "description": "Guidance on selecting a high school based on personal interests, programs offered, and academic performance.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1wBMPIMt9_k4_WSV7zYU_80L_CK7H3DJx/view?usp=sharing  "

    },
    {
      "id": 11,
      "category": "Schools",
      "title": "Preparing for College Admissions",
      "description": "A comprehensive guide on the college admissions process, including application tips and deadlines.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1HA7GFd2PUfXmFtD4T6kelP2XuwiRYwFW/view?usp=sharing "

    },
    {
      "id": 12,
      "category": "Schools",
      "title": "Scholarships and Financial Aid",
      "description": "Information on available scholarships, financial aid options, and how to apply for them.",
      "url": "https://media.licdn.com/dms/image/D4E12AQH91-TzHiYMeA/article-cover_image-shrink_600_2000/0/1692796924005?e=2147483647&v=beta&t=fyoTRJGLxUWsbjrLtz7gXDpwnA1pcQUcaXlSh1L4VOs",
      "download":"https://drive.google.com/file/d/1NpkT47bQkwEkov_9yoOEeVKlWHHypOUy/view?usp=sharing  "

    }
  ]

const Carrer = () => {
  return (
    <div><Navbar/>
    <div className='flex gap-2 flex-wrap m-5 '>
      <div className='flex'>
        <div><img src={Career} alt='career'/></div>
        <div className='flex items-start justify-center flex-col'>  
          <h1 className=' font-bold p-5 text-5xl'>Carrer Resources</h1>
          <p className='text-xl text-gray-700 font-normal p-3 '>Choose your carrer path by our resourse those can help you in future </p>
    </div>

      </div>
    {
        careerResources.map((data)=>
        <div className='relative h-[390px] w-72 border-2 border-cyan-600 rounded-xl p-1 bg-cyan-500' key={data.id} >
          <div>
            <img src={data.url} alt="" className='h-40 w-72 rounded-t-xl' />
          </div>
            <h1 className='text-xl font-bold p-1'>{data.title}</h1>
            <p className='text-md font-normal p-1'>{data.description}</p>
            <a href={data.download} target={data.download} className='absolute bottom-0 h-12 w-auto m-1 p-2 bg-cyan-600 text-gray-200  text-lg font-semibold rounded-ss-lg rounded-ee-lg'>Download Ur Carrer </a>
        </div>
        )
    }
    </div>
    <Link className='flex gap-2 flex-wrap m-5 h-12 w-24 items-center justify-center  p-2 bg-red-600 text-gray-200  text-lg font-semibold rounded-ss-lg rounded-ee-lg ' to="/">Logout</Link>
    </div>
  )
}

export default Carrer