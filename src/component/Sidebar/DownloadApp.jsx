import React from 'react'
import {MdOutlineDownloadForOffline} from "react-icons/md"

export default function DownloadApp() {
  return (
    <a href='#' className='h-10 px-6 flex  text-sm font-semibold text-link hover:text-white flex-shrink-0 items-center gap-x-4'>
        <MdOutlineDownloadForOffline size={20}/>
        Uygulamayı Yükle</a>
  )
}
