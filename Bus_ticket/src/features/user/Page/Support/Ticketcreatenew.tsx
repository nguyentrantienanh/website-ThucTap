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

  return (
    <>
      <div
        className=' w-full h-50 flex items-center justify-center  '
        style={{ backgroundImage: `url(${backgruond})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full flex items-center justify-center bg-[#00000041]  '>
          <h1 className='text-4xl font-bold mb-4 text-[#fff]  '> Open Ticket</h1>
        </div>
      </div>
      <div className=' m-15  mx-[10%]  shadow-[0_5px_25px_rgba(0,0,0,0.25)]  p-4  border-1  rounded-[10px] border-gray-200 '>
        <form action='' className='m-2'>
          <div className='grid gap-20 grid-cols-2  '>
            <div className='flex flex-col'>
              <label className=' text-[18px] block text-sm font-medium text-gray-700' htmlFor=''>
                Subject<sup className='text-red-600'>*</sup>
              </label>
              <input
                className='p-2 border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500'
                type='text'
              />
            </div>
            <div className=' flex flex-col'>
              <label className='text-[18px] block text-sm font-medium text-gray-700' htmlFor=''>
                Priority<sup className='text-red-600'>*</sup>
              </label>
              <input
                className='p-2 border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500 '
                type='text'
              />
            </div>
          </div>
          <div>
            <label className=' text-[18px] block text-sm font-medium text-gray-700' htmlFor='message'>
              Message<sup className='text-red-600'>*</sup>
            </label>
            <textarea
              className='px-2 py-1 w-full border-1 rounded-[10px] border-gray-200  shadow-sm focus:outline-none focus:ring-green-500 focus:shadow-green-300 focus:border-green-500'
              name='message'
              id='message'
              rows={8}
              cols={1}
            ></textarea>
          </div>
          <div>
            <div className='flex justify-between'>
              <p
                onClick={handlvisible}
                className={`  text-[#fff]  font-medium rounded-[5px] p-2 ${fileCount < 5 ? ' cursor-pointer bg-gray-600 ' : '  bg-gray-400    cursor-no-drop'}`}
              >
                + Add Attachment
              </p>
              <button className='  px-20 py-2 rounded-[5px] font-medium text-[#fff] bg-green-600'>
                <i className='px-2'>
                  <Icon name='send' />
                </i>
                Submit
              </button>
            </div>
            <p className='text-blue-500 text-[18px] '>
              Max 5 files can be uploaded | Maximum upload size is 128MB | Allowed File Extensions: .jpg, .jpeg, .png,
              .pdf, .doc, .docx
            </p>
            {fileCount ? (
              <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-4'>
                  {Array.from({ length: fileCount }, (_, index) => (
                    <div key={index} className='flex items-center h-10  w-75 justify-between rounded-[5px]'>
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
                        className='cursor-pointer bg-[#00c00d] text-[#fff] h-full text-nowrap px-1 rounded-l-[5px]  flex items-center justify-center '
                      >
                        Choose File
                      </label>
                      <span className='text-gray-700 border-y-1 px-2 border-gray-400  flex items-center justify-center h-full w-full line-clamp-1 overflow-hidden text-ellipsis'>
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
