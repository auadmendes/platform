import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

// to install tailwind you will need
// npm i tailwindcss postcss autoprefixer -D
// npx tailwindcss init -p
// install @apollo/client
// install graphql



  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSON_QUERY,
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])

//   return (
//     <ul>
//       {data.lessons.map((lesson: Lesson) => {
//         return <li>{lesson.title}</li>
//       })}
//     </ul>
//   )
// }

// import { gql, useQuery } from "@apollo/client"
// import { useEffect } from "react"
// import { client } from "./lib/apollo"

// const GET_LESSON_QUERY = gql`
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

// function App() {
//   // query to Graphql using apollo => useQuery
//   const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY)

//   return (
//     <ul>
//       {data?.lessons.map(lesson => {
//         return <li key={lesson.id}>{lesson.title}</li>
//       })}
//     </ul>
//   )
// }

// export default App