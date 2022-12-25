import { useRouter } from "next/router"
import books from "@/api/books"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Tab } from '@headlessui/react'
import cn from 'classnames'
import ReactStars from 'react-stars'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { useDocSearchKeyboardEvents } from "@docsearch/react"
import { createPortal } from 'react-dom'

const Book = () => {
  const router = useRouter()
  const { slug } = router.query

  const book = books.find((book) => book.isbn == slug)

  const agents = [
    {id: 1, name: 'Agent 1', location: 'Shahbagh Rd, Dhaka 1205', locationImage: 'location-1.png'},
    {id: 2, name: 'Agent 2', location: '278/3 (1st Floor, New Elephant Rd, Dhaka 1205', locationImage: 'location-2.png'},
    {id: 3, name: 'Agent 3', location: '1205 Nilkhet Rd, Dhaka 1205', locationImage: 'location-3.png'},
  ]

  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    //  get number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setNum(randomNumberInRange(100, 5000));
  }, []);

  // agent selection
  const [selectedAgent, setSelectedAgent] = useState(agents[1])

  const changeAgent = (e) => {
    setSelectedAgent(
      agents.find((agent) => agent.id == e.target.value)
    );
  }

  // agent location view on popup
  let [isAgentLocationOpen, setIsAgentLocationOpen] = useState(false)
  // let [modifierKey, setModifierKey] = useState()

  const onAgentLocationOpen = useCallback(() => {
    setIsAgentLocationOpen(true)
  }, [setIsAgentLocationOpen])

  const onAgentLocationClose = useCallback(() => {
    setIsAgentLocationOpen(false)
  }, [setIsAgentLocationOpen])

  useDocSearchKeyboardEvents({ isAgentLocationOpen, onAgentLocationOpen, onAgentLocationClose })

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    )
  }, [])

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

  return (
    <div className="grid">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
        <div className="p-3 rounded bg-white dark:bg-gray-800">
          <Image alt={book.title} src={book.thumbnailUrl} layout="responsive" width={200} height={200} className="m-0 p-0" />
        </div>
        <div className="sm:col-span-2 p-3 rounded bg-white dark:bg-gray-800">
          <h1 className="m-0">{book.title}</h1>
          <small className="font-semibold"><span>ISBN: </span>{book.isbn}</small>

          {
            book.shortDescription ?
              <p>
                <span className="font-semibold">Story: </span>
                {/* {book.shortDescription} */}
                {book.shortDescription?.length > 200 ?
                  `${book.shortDescription.substring(0, 200)}...` : book.shortDescription
                }
              </p>
              :''
          }
          

          {
            book.authors.length ?
              <div className="grid md:flex items-center md:space-x-3">
                <div>Authors:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {
                  book.authors.map((author, index) => {
                    return (
                      <div key={index} className="w-full p-2 rounded border cursor-pointer hover:text-red-500 hover:border-red-500 duration-300" style={{ textDecoration: 'none' }}>{author}</div>
                    )
                  })
                }
                </div>
              </div>
              :''
          }

          

          {
            book.categories.length
              ?
              <div className="grid md:flex items-center md:space-x-3 mt-5">
                <div>Categories:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                  {
                  book.categories.map((category, index) => {
                    return (
                      <div key={index} className="p-2 rounded border cursor-pointer hover:text-red-500 hover:border-red-500 duration-300" style={{ textDecoration: 'none' }}>{category}</div>
                    )
                  })
                }
                </div>
              </div>
              :''
          }
          
          
          <div className="mt-5 space-y-3">
            <div className="font-semibold">Select an agent</div>

            <div className="grid md:flex gap-3">
              <select
                name="agents"
                id="agents"
                className="w-full md:w-60 h-11 rounded border ring-0 outline-none active:border-cyan-500"
                      onChange={changeAgent}
              >
                {
                  agents.map((agent, index) => (
                    <option
                      value={agent.id}
                      key={index}
                      selected={agent.id == selectedAgent.id}
                    >
                      {agent.name}
                    </option>
                  ))
                }
              </select>

              <button
                onClick={onOpen}
                className="w-full sm:w-auto h-11 px-3 text-lg text-white border rounded space-x-2 bg-slate-500 hover:bg-slate-600 active:bg-slate-700"
              >
                <i className="fa fa-map"></i>
                <span
                  className="">View Map</span>
              </button>
              {isOpen &&
                createPortal(
                // <DocSearchModal
                //   {...docSearchConfig}
                //   initialScrollY={window.scrollY}
                //   onClose={onClose}
                //   hitComponent={Hit}
                //   navigator={{
                //     navigate({ itemUrl }) {
                //       Router.push(itemUrl)
                //     },
                //   }}
                // />,

                <>
                <div className='Search Search-Container' onClick={onClose}>
                </div>

                  <div className='fixed inset-0 w-[90%] md:w-[80%] h-96 md:h-[80%] rounded p-3 bg-white z-50 mx-auto my-auto overflow-hidden'>
                    <div className='my-1 md:text-center md:my-3'>{selectedAgent.name +' - Location: '+ selectedAgent.location}</div>
                    <button
                      className='absolute right-0 top-0 md:right-5 md:top-3 border h-7 w-7 rounded-full hover:text-red-500 hover:border-red-500 focus:border-red-500 focus:text-red-500'
                      onClick={onClose}
                    >
                      <i className='fa fa-close'></i>
                    </button>
                    <img src={`/locations/${selectedAgent.locationImage}`} alt="" className="w-full h-full" />
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
            </div>
          </div>

          <div className="text-lg font-bold mt-5">
            Price: ৳{num}
          </div>

          <div className="mt-5">
            <button className="w-full sm:w-auto h-11 px-3 text-lg text-white border rounded bg-slate-500 hover:bg-slate-600 active:bg-slate-700"><i className="fas fa-shopping-basket"></i> Add to cart</button>
          </div>
        </div>
      </div>
      <div className="grid mt-5 p-3 rounded bg-white dark:bg-gray-800">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab className={({ selected }) =>
                cn(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800 dark:text-gray-300',
                  selected
                    ? 'bg-white dark:bg-gray-700 shadow'
                    : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
                )
              }>Rating</Tab>
            <Tab className={({ selected }) =>
                cn(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800 dark:text-gray-300',
                  selected
                    ? 'bg-white dark:bg-gray-700 shadow'
                    : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
                )
              }>Description</Tab>
            <Tab className={({ selected }) =>
                cn(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800 dark:text-gray-300',
                  selected
                    ? 'bg-white dark:bg-gray-700 shadow'
                    : 'text-blue-500 hover:bg-white/[0.12] hover:text-blue-600'
                )
              }>FAQ</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 lg:grid-cols-12 items-center gap-3 mt-3 border-b">
                <div className="col-span-1">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="w-20 mx-auto">
                    <ReactStars
                      count={5}
                      size={14}
                      value={5}
                      edit={false}
                      color1={'gray'}
                      color2={'#FF6A00'}
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:coll-span-5 md:col-span-9 lg:col-span-11">
                  <h3 className="m-0">Some user</h3>
                  <p>The book was greate and so was the service of this shop!</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3 border-b">
                <div className="col-span-1">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="w-20 mx-auto">
                    <ReactStars
                      count={5}
                      size={14}
                      value={4.5}
                      edit={false}
                      color1={'gray'}
                      color2={'#FF6A00'}
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:coll-span-5 md:col-span-9 lg:col-span-11">
                  <h3 className="m-0">Some user</h3>
                  <p>It was quite interesting to read.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3 border-b">
                <div className="col-span-1">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="w-20 mx-auto">
                    <ReactStars
                      count={5}
                      size={14}
                      value={5}
                      edit={false}
                      color1={'gray'}
                      color2={'#FF6A00'}
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:coll-span-5 md:col-span-9 lg:col-span-11">
                  <h3 className="m-0">Some user</h3>
                  <p>Loved it</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3 border-b">
                <div className="col-span-1">
                  <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto"></div>
                  <div className="w-20 mx-auto">
                    <ReactStars
                      count={5}
                      size={14}
                      value={3.5}
                      edit={false}
                      color1={'gray'}
                      color2={'#FF6A00'}
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:coll-span-5 md:col-span-9 lg:col-span-11">
                  <h3 className="m-0">Some user</h3>
                  <p>Avarage service...</p>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <p>{book.longDescription}</p>
            </Tab.Panel>
            <Tab.Panel>
              <div>
                <Disclosure as="div" className="mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason, email us
                        within 90 days and we'll refund you in full, no questions asked.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Is there any pickup option or pickup point besides home delivery?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Yes, you may choose your preffered option deliver/pickup when you checkout.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Do you update your collection regullarly?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Yes, we update our collection on a regullar basis.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>What are your book collection amount?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        We have a wide range of collection and hopefully consists of what ever you can emagine...
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="mt-5">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>Do you offer after sales support?</span>
                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        Yes, it depends on customer requirements and purchases.
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>        
      </div>
    </div>
  )
}

export default Book