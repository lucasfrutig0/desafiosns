import { api } from "../api"
import type { Posts } from "types"
import { useQuery } from "react-query"

const getAllPosts = async function (page: number, title = ""): Promise<Posts[]> {
  try {
    const { data } = await api.get(`/posts?_page=${page}`)
    const postsDataTransformed = data.map((post) => {
      return {
        ...post,
        author: "John Doe",
        created_at: "22/12/2021 05:30:00 PM" 
      }
    })

    if (title) {
      const searched = postsDataTransformed.filter((post) => {
        return post.title.toLowerCase().search(title.toLowerCase()) != -1;
      })


      return searched
    }
    return postsDataTransformed
  } catch(err) {
    console.log(err)
  }
}


function usePosts(page: number, title: string) {
  return useQuery<Posts[], Error>(
    ["posts", page, title], 
    () => getAllPosts(page, title),
    { keepPreviousData : true }
  )
}

export { usePosts }