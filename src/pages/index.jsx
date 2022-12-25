import Oxygen from "@/components/ui/cards/oxygen"
import books from "@/api/books"
import Link from "next/link"

export default function () {
  return (
    <div className="w-full max-w-8xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
      {books.map((content, index) => (
        <Oxygen key={index} content={content} />
      ))}
    </div>
  )
}
