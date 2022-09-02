import Head from 'next/head'
import React, { useRef, useState } from 'react';
import { pl, enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import styles from '../styles/DatePicker.module.scss'

export default function Home() {
  const [date, setDate] = useState();
  
  function minDate(){
    return new Date(2020,0,1,0,0,0,0)
  }

  function maxDate(){
    return new Date(2029,11,31,0,0,0,0);
  }
  return (
    <div className='min-h-screen px-1 flex flex-col justify-center align-center'>
      <Head>
        <title>Next JS App With Datepicker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} py-5 md:py-16 px-5`}>
        <h1 className={`${styles.title} text-blue-500 text-4xl md:text-5xl pt-4`}>
          Next.js Datepicker App
        </h1>

        <p className={`${styles.description} text-lg mt-5`}>
          Click on input or type date to select date from calendar
        </p>
        <p className='text-gray-500 text-center'>Date selectable range: From Year 2020 - 2030</p>
        
        <div className='mt-7 flex'>
        <div className="lg:w-1/3 md:w-1/2 sm:w-1/2 w-full px-4 mx-auto">
          <div className='relative'>
          <div className="flex absolute inset-y-5 right-0 items-center pr-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
          </div>
          </div>
        <DatePicker date={date} onDateChange={setDate} minimumDate={minDate()} maximumDate={maxDate()} locale={pl}>
        {({ inputProps, focused }) => (
          <input
            className={'input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input' + (focused ? ' -focused' : '')}
            {...inputProps}
            placeholder="From when available"
          />
        )}
      </DatePicker>
      </div>
      </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.optimumitapps.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Developed with {" "} ❤️ {" "} by{'  '}
          Optimumitapps
        </a>
      </footer>
    </div>
  )
}
