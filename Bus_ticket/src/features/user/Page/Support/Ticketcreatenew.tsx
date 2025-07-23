import { useState } from 'react'
import backgruond from '../../../../assets/background.jpg'
import Icon from '../../../../icons/Icon'

export default function Createnew() {
  const [fileCount, setFileCount] = useState<number>(0)
  const [fileNames, setFileNames] = useState<Record<number, string>>({})
  const handlvisible = () => {
    if (fileCount < 5) {
      setFileCount(fileCount + 1)
    }
  }
  const handleRemove = (index: number) => {
    setFileCount((prev) => {
      const newVisible = prev - 1
      return newVisible < 0 ? 0 : newVisible
    })
    setFileNames((prev) => {
      const newFileNames = { ...prev }
      delete newFileNames[index]
      return newFileNames
    })
  }

  const handleFileChange = (e: any, index: number) => {
    const file = e.target.files[0]
    setFileNames((prev) => ({ ...prev, [index]: file ? file.name : 'Không có' }))
  }

  // hàm xử lý lưu localStorage chat gồm [ id, description ,lastMessge, , Last Reply,  messages[id, sender, text, timestamp],Status,Priority ]

  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Hight')
  const [chat, setChat] = useState('')
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chat || !description || !priority) {
      return alert('Vui lòng nhập đầy đủ thông tin')
    }
    // message
    const newMessage = {
      id: 2,
      sender: 'user',
      text: chat,
      timestamp: new Date().toLocaleString()
    }
    const newchats = {
      id: Date.now(),
      description,
      lastMessage: '',
      status: 2,
      priority,
      timestamp: new Date().toLocaleString(),
      messages: [newMessage]
    }
    const existingChats = JSON.parse(localStorage.getItem('chats') || '[]')
    existingChats.push(newchats)
    localStorage.setItem('chats', JSON.stringify(existingChats))
    alert('Ticket created successfully!')
    setDescription('')
    setPriority('Hight')
    setChat('')
  }

  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-[#fff]  '> Open Ticket</h1>
        </div>
      </div>
      <div className=' m-15  mx-[10%]  shadow-[0_5px_25px_rgba(0,0,0,0.25)]  p-4  border-1  rounded-[10px] border-gray-200 '>
        <form action='' className='m-2'>
          <div className='grid gap-3 sm:gap-20 grid-cols-1 sm:grid-cols-2  '>
            <div className='flex flex-col'>
              <label className=' text-[15px] sm:text-[18px] block text-sm font-medium text-gray-700' htmlFor=''>
                Description<sup className='text-red-600'>*</sup>
              </label>
              <input
                className='p-2 border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500'
                type='text'
                placeholder='Vé bị lỗi'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className=' flex flex-col'>
              <label className=' text-[15px] sm:text-[18px] block text-sm font-medium text-gray-700' htmlFor=''>
                Priority<sup className='text-red-600'>*</sup>
              </label>
              <input
                className='p-2 border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 '
                type='text'
                placeholder='Hight'
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className='  text-[15px] sm:text-[18px] block text-sm font-medium text-gray-700' htmlFor='message'>
              Message<sup className='text-red-600'>*</sup>
            </label>
            <textarea
              className='p-2 border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 w-full h-[150px]'
              name='message'
              id='message'
              placeholder='Nhập tin nhắn của bạn...'
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            ></textarea>
          </div>
          <div>
            <div className='flex max-sm:flex-col-reverse max-sm:gap-2    justify-between'>
              <p
                onClick={handlvisible}
                className={`  text-[#fff]  font-medium rounded-[5px] p-2 ${fileCount < 5 ? ' cursor-pointer bg-gray-600 ' : '  bg-gray-400    cursor-no-drop'}`}
              >
                + Add Attachment
              </p>
              <button
                onClick={handleSubmit}
                className='text-[14px] flex px-2 sm:px-20 py-2 rounded-[5px] font-medium text-[#fff] bg-green-600'
              >
                <i className='px-2'>
                  <Icon name='send' />
                </i>
                Submit
              </button>
            </div>
            <p className='text-blue-500 text-[13px] sm:text-[16px] lg:[18px] '>
              Max 5 files can be uploaded | Maximum upload size is 128MB | Allowed File Extensions: .jpg, .jpeg, .png,
              .pdf, .doc, .docx
            </p>
            {fileCount ? (
              <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                  {Array.from({ length: fileCount }, (_, index) => (
                    <div key={index} className='flex items-center h-10 sm:w-75 justify-between rounded-[5px]'>
                      <input
                        type='file'
                        className='border rounded-[10px] border-gray-200 hidden shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500  '
                        id={`file-input-${index}`}
                        name={`file-${index}`}
                        accept='.jpg,.jpeg,.png,.pdf,.doc,.docx'
                        onChange={(e) => handleFileChange(e, index)}
                      />
                      <label
                        htmlFor={`file-input-${index}`}
                        className=' text-[14px] sm:text-[16px] cursor-pointer bg-[#00c00d] text-[#fff] h-full text-nowrap px-1 rounded-l-[5px]  flex items-center justify-center '
                      >
                        Choose File
                      </label>
                      <span className=' text-[14px] sm:text-[16px] text-gray-700 border-y-1 p-2 border-gray-400  flex items-center justify-center h-full w-full line-clamp-1 overflow-hidden text-ellipsis'>
                        {fileNames[index] || 'No file selected'}
                      </span>
                      <button
                        type='button'
                        onClick={() => handleRemove(index)}
                        className='bg-red-500   text-[#fff] w-25  h-full rounded-r-[5px] hover:bg-red-600'
                      >
                        <Icon name='close' />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </form>
      </div>
    </>
  )
}
