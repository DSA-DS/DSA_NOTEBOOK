import { Button } from "flowbite-react";
import Head from "next/head";
import { useState } from "react";

const NewArticle = () => {
  const [data, setData] = useState({
    segment:"",
    subSegment:"",
    title:"",
    description:"",
    link:""
  })

  const handleChange = (e:(React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>)) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:any) =>{
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className="mx-auto container">
      <Head>
        <title>Create new article</title>
        <meta name="description" content="DSA DS Authentication" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <label htmlFor="segment" className="ml-2">
          Segment*
        </label>
        <select className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4" name="segment" required onChange={handleChange}>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>

        <label htmlFor="subSegment" className="ml-2">
          Sub-Segment*
        </label>
        <select className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4" name="subSegment" required onChange={handleChange}>
          <option value="algorithm">Algorithm</option>
          <option value="datastructure">Data Structure</option>
        </select>

        <label htmlFor="title" className="ml-2">
          Title*
        </label>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4"
          placeholder="Title of Article"
          type="text"
          name="title"
          required
          onChange={handleChange}
        />

        <label htmlFor="description" className="ml-2">
          Description*
        </label>
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4"
          placeholder="Description of Article"
          name="description"
          required
          onChange={handleChange}
        />

        <label htmlFor="link" className="ml-2">
          Link
        </label>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2  pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mb-4"
          placeholder="Link of Video (if any)"
          type="text"
          name="link"
          onChange={handleChange}
        />
        <Button gradientDuoTone="purpleToBlue" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewArticle;
