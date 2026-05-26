import React from 'react'

export default function BreadCrumb() {
  return (
    <div className="breadcrumb-section container mx-auto my-5 px-2 sm:px-8">
    <ul className="flex flex-wrap items-center gap-1">
      <li className="transition-all duration-300 hover:text-primary-500">
        <a href="index.html">Home</a>
      </li>
      <li>
        <i className="bi bi-caret-right-fill flex text-primary-500"></i>
      </li>
      <li
        className="pointer-events-none text-slate-500 transition-all duration-300">
        <a href="product-details.html">Product Details</a>
      </li>
    </ul>
  </div>
  )
}
