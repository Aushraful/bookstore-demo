import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Router from 'next/router'
import { DocSearch, DocSearchModal, useDocSearchKeyboardEvents } from '@docsearch/react'
import books from "@/api/books"
import Image from 'next/image'

const docSearchConfig = {
  appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
  indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
}

function Hit({ hit, children }) {
  return <Link href={hit.url}>{children}</Link>
}

function SearchIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  )
}

export function Search() {
  let [isOpen, setIsOpen] = useState(false)
  let [modifierKey, setModifierKey] = useState()

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    )
  }, [])

  // for search
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = event => {
    setSearchTerm(event.target.value)
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
      .sort((a, b) => {
        const titleA = a.title.toLowerCase()
        const titleB = b.title.toLowerCase()
        const searchTermLower = searchTerm.toLowerCase()
        const numMatchesA = titleA.split(searchTermLower).length - 1
        const numMatchesB = titleB.split(searchTermLower).length - 1
        if (numMatchesA > numMatchesB) {
          return -1
        } else if (numMatchesA < numMatchesB) {
          return 1
        } else {
          return 0
        }
      })
    setSearchResults(results)
  }

  // console.log(!searchTerm)

  return (
    <>
      <button
        type="button"
        className="group flex md:hidden h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96"
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400" />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
          Search Books
        </span>
        {modifierKey && (
          <kbd className="ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>
      
      <div class="hidden md:block relative mt-1 rounded-md shadow-sm">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <i className="fa fa-search"></i>
        </div>
        <input
          type="text"
          className='block w-[350px] lg:w-[500px] h-11 pl-10 pr-10 rounded border border-r-0 focus:border-cyan-500 focus:ring-0 focus:outline-none'
          autoFocus
          placeholder='Search Books'
          value={searchTerm}
          onChange={handleSearch}
        />
        <div
          onClick={()=>setSearchTerm('')}
          class="absolute inset-y-0 right-0 flex items-center px-3 border hover:text-red-500 cursor-pointer"
        >
          <i className="fa fa-times"></i>
        </div>
      </div>      
      {
        !searchTerm ?
          '' :
        searchTerm && searchResults.length < 1 ?
          <div className="hidden md:block w-[350px] lg:w-[500px] absolute z-50 mt-0 border bg-white">
            <div className='flex flex-wrap items-center content-center justify-center py-10'>
              <p className=''>No items found!</p>
            </div>
          </div>
          :
          <div className="hidden md:block w-[350px] lg:w-[500px] absolute z-50 mt-0 border bg-white">
            <div className='relative h-[calc(100vh-130px)] md:h-[500px] overflow-hidden overflow-y-auto'>
              {searchResults.map(book => (
                <div key={book.id} className="flex gap-3 px-3 py-1 m-3 border">
                  <div className='w-20 h-20'>
                    <Image 
                      src={book.thumbnailUrl} 
                      alt={book.title}
                      height={100}
                      width={100}
                      className='w-full'
                    />
                  </div>
                  <div>
                    <Link href={`/book/${book.isbn}`} className="w-auto hover:text-cyan-500" onClick={onClose}>
                    <span>{book.title}</span>
                    </Link>
                    <br />
                    <small>ISBN: {book.isbn}</small>
                    <br />
                    <div className=''> Authors:
                      {
                          book.authors.map((author, index) => {
                          return (
                            <small key={index} className="" style={{ textDecoration: 'none' }}>{author}, </small>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      }

      {isOpen &&
        createPortal(
          <>
            <div className='md:hidden'>
              <div className='Search Search-Container' onClick={onClose}></div>

              <div className='fixed inset-0 w-screen md:w-96 h-screen md:h-96 rounded p-3 bg-white z-50 mx-auto my-auto overflow-hidden'>
                <div className='my-1 md:text-center md:my-3'>Search books here</div>
                <button
                  className='absolute right-5 top-3 border h-7 w-7 rounded-full hover:text-red-500 hover:border-red-500 focus:border-red-500 focus:text-red-500'
                  onClick={onClose}
                >
                  <i className='fa fa-close'></i>
                </button>
                <div className='relative rounded-md shadow-sm mt-5 md:mt-0 justify-center'>
                  {/* <input
                    type="text"
                    className='h-11 rounded w-full px-3 border focus:border-cyan-500 focus:ring-0 focus:outline-none'
                    autoFocus
                    placeholder='Search Books'
                    value={searchTerm}
                    onChange={handleSearch}
                  /> */}
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="fa fa-search"></i>
                  </div>
                  <input
                    type="text"
                    className='h-11 rounded w-full px-10 border focus:border-cyan-500 focus:ring-0 focus:outline-none'
                    autoFocus
                    placeholder='Search Books'
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                  <div
                    onClick={()=>setSearchTerm('')}
                    class="absolute inset-y-0 right-0 flex items-center px-3 border hover:text-red-500 cursor-pointer"
                  >
                    <i className="fa fa-times"></i>
                  </div>
                </div>
                {
                  !searchTerm || searchResults.length < 1 ?
                    <div className='flex flex-wrap items-center content-center justify-center mt-10'>
                      <p className='my-auto'>No items found!</p>
                    </div>
                    :
                    <div className='mt-3 h-[calc(100vh-130px)] md:h-64 overflow-hidden overflow-y-auto'>
                      {searchResults.map(book => (
                        <div key={book.id} className="flex gap-3 px-3 py-1 mb-3 border">
                          <div className='w-20 h-20'>
                            <Image 
                              src={book.thumbnailUrl} 
                              alt={book.title}
                              height={100}
                              width={100}
                              className='w-full'
                            />
                          </div>
                          <div>
                            <Link href={`/book/${book.isbn}`} className="w-auto" onClick={onClose}>
                            <span>{book.title}</span>
                            </Link>
                            <br />
                            <small>ISBN: {book.isbn}</small>
                            <br />
                            <div className=''> Authors:
                              {
                                  book.authors.map((author, index) => {
                                  return (
                                    <small key={index} className="" style={{ textDecoration: 'none' }}>{author}, </small>
                                  )
                                })
                              }
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                }
              </div>
            </div>
          </>,
            
          // <div className='absolute inset-0 w-full z-50 h-screen bg-black bg-opacity-50' onClose={onClose}>
          //   <div className='flex flex-wrap w-full max-w-sm m-3'>
          //     <div className='w-full bg-white justify-center'>
          //       <input type="text" className='h-11 rounded w-full' />
          //     </div>
          //   </div>
          // </div>,

          // <div className='DocSearch DocSearch-Container' onClick={onClose}>
          //   <div className='DocSearch-Modal'>
          //     <div className='w-full bg-white justify-center'>
          //       <input type="text" className='h-11 rounded w-full' />
          //     </div>
          //   </div>
          // </div>,
          document.body
        )}
    </>
  )
}
